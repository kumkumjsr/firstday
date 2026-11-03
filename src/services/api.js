// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const refreshClient = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/",
// });

// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access_token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach((promise) => {
//     if (error) {
//       promise.reject(error);
//     } else {
//       promise.resolve(token);
//     }
//   });

//   failedQueue = [];
// };

// API.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response?.status !== 401 ||
//       !originalRequest ||
//       originalRequest._retry
//     ) {
//       return Promise.reject(error);
//     }

//     const refreshToken = localStorage.getItem("refresh_token");

//     if (!refreshToken) {
//       localStorage.removeItem("access_token");
//       localStorage.removeItem("refresh_token");
//       window.location.href = "/admin-login";

//       return Promise.reject(error);
//     }

//     if (isRefreshing) {
//       return new Promise((resolve, reject) => {
//         failedQueue.push({ resolve, reject });
//       }).then((token) => {
//         originalRequest.headers.Authorization = `Bearer ${token}`;
//         return API(originalRequest);
//       });
//     }

//     originalRequest._retry = true;
//     isRefreshing = true;

//     try {
//       const response = await refreshClient.post("token/refresh/", {
//         refresh: refreshToken,
//       });

//       const newAccessToken = response.data.access;

//       localStorage.setItem("access_token", newAccessToken);

//       processQueue(null, newAccessToken);

//       originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//       return API(originalRequest);
//     } catch (refreshError) {
//       processQueue(refreshError, null);

//       localStorage.removeItem("access_token");
//       localStorage.removeItem("refresh_token");

//       window.location.href = "/admin-login";

//       return Promise.reject(refreshError);
//     } finally {
//       isRefreshing = false;
//     }
//   }
// );

// export default API;






import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshClient = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    const isLoginRequest = config.url?.includes("token/");

    if (isLoginRequest) {
      delete config.headers.Authorization;
      return config;
    }

    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });

  failedQueue = [];
};

API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry ||
      originalRequest.url?.includes("token/")
    ) {
      return Promise.reject(error);
    }

    const refreshToken = localStorage.getItem("refresh_token");

    if (!refreshToken) {
      logoutAndRedirect();
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return API(originalRequest);
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const response = await refreshClient.post("token/refresh/", {
        refresh: refreshToken,
      });

      const newAccessToken = response.data.access;

      localStorage.setItem("access_token", newAccessToken);

      processQueue(null, newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return API(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      logoutAndRedirect();

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

function logoutAndRedirect() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");

  window.location.href = "/admin-login";
}

export default API;
