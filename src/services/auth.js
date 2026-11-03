// import axios from "axios";


import API from "./api";

/* =========================================================
   ROLE NORMALIZER
========================================================= */

const normalizeRole = (role) => {
  if (!role) return "";

  return String(role).trim().toUpperCase();
};

/* =========================================================
   LOGIN USER
========================================================= */

export const loginUser = async (username, password) => {
  try {
    /* -------------------------------------------------------
       STEP 1: LOGIN
    ------------------------------------------------------- */

    const response = await API.post("token/", {
      username,
      password,
    });

    const { access, refresh } = response.data;

    if (!access || !refresh) {
      throw new Error("Invalid login response.");
    }

    /* -------------------------------------------------------
       STEP 2: SAVE TOKENS
    ------------------------------------------------------- */

    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);

    /* -------------------------------------------------------
       STEP 3: GET USERS
    ------------------------------------------------------- */

    const usersResponse = await API.get("accounts/users/");

    const users = Array.isArray(usersResponse.data)
      ? usersResponse.data
      : usersResponse.data?.results || [];

    /* -------------------------------------------------------
       STEP 4: FIND LOGGED-IN USER
    ------------------------------------------------------- */

    const currentUser = users.find(
      (user) =>
        user.username?.trim().toLowerCase() ===
        username.trim().toLowerCase()
    );

    if (!currentUser) {
      logoutUser();

      const error = new Error(
        "User account information could not be found."
      );

      error.code = "USER_NOT_FOUND";

      throw error;
    }

    /* -------------------------------------------------------
       STEP 5: NORMALIZE ROLE
    ------------------------------------------------------- */

    const normalizedRole = normalizeRole(currentUser.role);

    /*
      Store normalized role so the whole frontend
      consistently uses ADMIN / EDITOR.
    */

    currentUser.role = normalizedRole;

    /* -------------------------------------------------------
       STEP 6: CHECK ACTIVE STATUS
    ------------------------------------------------------- */

    if (currentUser.is_active === false) {
      logoutUser();

      const error = new Error(
        "Your account is inactive. Please contact the administrator."
      );

      error.code = "USER_INACTIVE";

      throw error;
    }

    /* -------------------------------------------------------
       STEP 7: CHECK ROLE
    ------------------------------------------------------- */

    const allowedRoles = ["ADMIN", "EDITOR"];

    if (!allowedRoles.includes(normalizedRole)) {
      logoutUser();

      const error = new Error(
        "Only ADMIN and EDITOR users can access the management portal."
      );

      error.code = "ROLE_NOT_ALLOWED";

      throw error;
    }

    /* -------------------------------------------------------
       STEP 8: SAVE USER DATA
    ------------------------------------------------------- */

    localStorage.setItem(
      "admin_user",
      JSON.stringify(currentUser)
    );

    localStorage.setItem(
      "user_role",
      normalizedRole
    );

    /* -------------------------------------------------------
       SUCCESS
    ------------------------------------------------------- */

    return {
      ...response.data,
      user: currentUser,
      role: normalizedRole,
    };
  } catch (error) {
    /*
      Keep meaningful role/account errors.
    */

    if (
      error.code === "ROLE_NOT_ALLOWED" ||
      error.code === "USER_INACTIVE" ||
      error.code === "USER_NOT_FOUND"
    ) {
      throw error;
    }

    logoutUser();

    throw error;
  }
};

/* =========================================================
   LOGOUT
========================================================= */

export const logoutUser = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("admin_user");
  localStorage.removeItem("user_role");
};

/* =========================================================
   ACCESS TOKEN
========================================================= */

export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

/* =========================================================
   REFRESH TOKEN
========================================================= */

export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

/* =========================================================
   CURRENT USER
========================================================= */

export const getCurrentUser = () => {
  const user = localStorage.getItem("admin_user");

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
};

/* =========================================================
   USER ROLE
========================================================= */

export const getUserRole = () => {
  const role = localStorage.getItem("user_role");

  return normalizeRole(role);
};

/* =========================================================
   ADMIN OR EDITOR CHECK
========================================================= */

export const isAdminOrEditor = () => {
  const role = getUserRole();

  return role === "ADMIN" || role === "EDITOR";
};

/* =========================================================
   ADMIN CHECK
========================================================= */

export const isAdmin = () => {
  return getUserRole() === "ADMIN";
};

/* =========================================================
   EDITOR CHECK
========================================================= */

export const isEditor = () => {
  return getUserRole() === "EDITOR";
};


// const AUTH_URL = "http://127.0.0.1:8000/api/token/";

// export const loginUser = async (username, password) => {
//   try {
//     const response = await axios.post(AUTH_URL, {
//       username,
//       password,
//     });

//     const { access, refresh } = response.data;

//     localStorage.setItem("access_token", access);
//     localStorage.setItem("refresh_token", refresh);

//     return {
//       success: true,
//       data: response.data,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message:
//         error.response?.data?.detail ||
//         "Login failed. Please check your credentials.",
//     };
//   }
// };

// export const logoutUser = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
// };

// export const getAccessToken = () => {
//   return localStorage.getItem("access_token");
// };

// export const getRefreshToken = () => {
//   return localStorage.getItem("refresh_token");
// };

// import API from "./api";

// export const loginUser = async (username, password) => {
//   const response = await API.post("token/", {
//     username,
//     password,
//   });

//   const { access, refresh } = response.data;

//   if (!access || !refresh) {
//     throw new Error("Invalid login response.");
//   }

//   // Save tokens first so authenticated API requests work
//   localStorage.setItem("access_token", access);
//   localStorage.setItem("refresh_token", refresh);

//   try {
//     // Get logged-in user's details
//     const usersResponse = await API.get("accounts/users/");

//     const users = Array.isArray(usersResponse.data)
//       ? usersResponse.data
//       : usersResponse.data?.results || [];

//     const currentUser = users.find(
//       (user) => user.username?.toLowerCase() === username.toLowerCase()
//     );

//     if (!currentUser) {
//       logoutUser();

//       throw new Error(
//         "User account information could not be found."
//       );
//     }

//     // Only ADMIN and EDITOR are allowed
//     const allowedRoles = ["ADMIN", "EDITOR"];

//     if (!allowedRoles.includes(currentUser.role)) {
//       logoutUser();

//       const error = new Error(
//         "Only ADMIN and EDITOR users can access the management portal."
//       );

//       error.code = "ROLE_NOT_ALLOWED";

//       throw error;
//     }

//     if (!currentUser.is_active) {
//       logoutUser();

//       const error = new Error(
//         "Your account is inactive. Please contact the administrator."
//       );

//       error.code = "USER_INACTIVE";

//       throw error;
//     }

//     // Store current user information
//     localStorage.setItem(
//       "admin_user",
//       JSON.stringify(currentUser)
//     );

//     localStorage.setItem(
//       "user_role",
//       currentUser.role
//     );

//     return {
//       ...response.data,
//       user: currentUser,
//     };
//   } catch (error) {
//     // If role/user validation fails, make sure tokens are removed
//     if (
//       error.code === "ROLE_NOT_ALLOWED" ||
//       error.code === "USER_INACTIVE"
//     ) {
//       throw error;
//     }

//     logoutUser();

//     throw error;
//   }
// };

// export const logoutUser = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
//   localStorage.removeItem("admin_user");
//   localStorage.removeItem("user_role");
// };

// export const getAccessToken = () => {
//   return localStorage.getItem("access_token");
// };

// export const getRefreshToken = () => {
//   return localStorage.getItem("refresh_token");
// };

// export const getCurrentUser = () => {
//   const user = localStorage.getItem("admin_user");

//   if (!user) {
//     return null;
//   }

//   try {
//     return JSON.parse(user);
//   } catch {
//     return null;
//   }
// };

// export const getUserRole = () => {
//   return localStorage.getItem("user_role");
// };

// export const isAdminOrEditor = () => {
//   const role = getUserRole();

//   return role === "ADMIN" || role === "EDITOR";
// };

// import API from "./api";

// export const loginUser = async (username, password) => {
//   const response = await API.post("token/", {
//     username,
//     password,
//   });

//   const { access, refresh } = response.data;

//   localStorage.setItem("access_token", access);
//   localStorage.setItem("refresh_token", refresh);

//   return response.data;
// };

// export const logoutUser = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
// };

// export const getAccessToken = () => {
//   return localStorage.getItem("access_token");
// };

// export const getRefreshToken = () => {
//   return localStorage.getItem("refresh_token");
// };
