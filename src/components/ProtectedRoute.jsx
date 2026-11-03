
// import { Navigate, Outlet, useLocation } from "react-router-dom";

// function ProtectedRoute() {
//   const location = useLocation();
//   const token = localStorage.getItem("access_token");

//   if (!token) {
//     return (
//       <Navigate
//         to="/admin-login"
//         replace
//         state={{ from: location }}
//       />
//     );
//   }

//   return <Outlet />;
// }

// export default ProtectedRoute;


import { Navigate, Outlet, useLocation } from "react-router-dom";
import {
  getAccessToken,
  getUserRole,
  logoutUser,
} from "../services/auth";

function ProtectedRoute() {
  const location = useLocation();

  const token = getAccessToken();
  const role = getUserRole();

  /* =======================================================
     NO TOKEN
  ======================================================= */

  if (!token) {
    return (
      <Navigate
        to="/admin-login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  /* =======================================================
     ADMIN / EDITOR ONLY
  ======================================================= */

  const allowedRoles = ["ADMIN", "EDITOR"];

  if (!allowedRoles.includes(role)) {
    logoutUser();

    return (
      <Navigate
        to="/admin-login"
        replace
        state={{
          from: location,
          message:
            "Only ADMIN and EDITOR users can access the management portal.",
        }}
      />
    );
  }

  /* =======================================================
     ALLOWED
  ======================================================= */

  return <Outlet />;
}

export default ProtectedRoute;