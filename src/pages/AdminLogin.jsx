// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   LockKeyhole,
//   User,
//   Eye,
//   EyeOff,
//   ArrowLeft,
//   Newspaper,
//   ShieldCheck,
//   Loader2,
// } from "lucide-react";

// import { loginUser } from "../services/auth";

// function AdminLogin() {
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setError("");
//     setLoading(true);

//     const result = await loginUser(username.trim(), password);

//     setLoading(false);

//     if (result.success) {
//       navigate("/admin", { replace: true });
//     } else {
//       setError(result.message);
//     }
//   };

//   return (
//     <main className="flex min-h-[85vh] items-center justify-center bg-gray-50 px-4 py-12 dark:bg-[#0b0c0f]">
//       <div className="w-full max-w-[440px]">

//         <Link
//           to="/"
//           className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#C8102E]"
//         >
//           <ArrowLeft size={17} />
//           Back to Website
//         </Link>

//         <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#141519]">

//           <div className="bg-[#C8102E] px-7 py-9 text-center text-white">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
//               <Newspaper size={32} />
//             </div>

//             <h1 className="mt-5 text-2xl font-black tracking-tight">
//               HINDUSTAN.DIGITAL
//             </h1>

//             <p className="mt-2 text-sm text-white/80">
//               News Management Portal
//             </p>
//           </div>

//           <div className="p-7 sm:p-9">

//             <div className="mb-8">
//               <h2 className="text-2xl font-black">
//                 Admin Login
//               </h2>

//               <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                 Sign in to manage your news platform.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">

//               <div>
//                 <label className="mb-2 block text-sm font-bold">
//                   Username
//                 </label>

//                 <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f]">
//                   <User size={18} className="shrink-0 text-gray-400" />

//                   <input
//                     type="text"
//                     value={username}
//                     onChange={(event) => setUsername(event.target.value)}
//                     placeholder="Enter your username"
//                     autoComplete="username"
//                     required
//                     className="w-full bg-transparent py-3.5 text-sm outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-bold">
//                   Password
//                 </label>

//                 <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f]">
//                   <LockKeyhole size={18} className="shrink-0 text-gray-400" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     required
//                     className="w-full bg-transparent py-3.5 text-sm outline-none"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     aria-label="Toggle password visibility"
//                     className="text-gray-400 transition hover:text-[#C8102E]"
//                   >
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400"
//                 >
//                   {error}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:bg-[#a90d27] disabled:cursor-not-allowed disabled:opacity-70"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 size={18} className="animate-spin" />
//                     Signing In...
//                   </>
//                 ) : (
//                   <>
//                     <LockKeyhole size={17} />
//                     Sign In to Dashboard
//                   </>
//                 )}
//               </button>

//             </form>

//             <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-500">
//               <ShieldCheck size={16} className="text-green-600" />
//               Authorized administrators only
//             </div>

//           </div>
//         </div>

//         <p className="mt-6 text-center text-xs text-gray-400">
//           © {new Date().getFullYear()} HINDUSTAN.DIGITAL. All rights reserved.
//         </p>

//       </div>
//     </main>
//   );
// }

// export default AdminLogin;






// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   LockKeyhole,
//   User,
//   Eye,
//   EyeOff,
//   ArrowLeft,
//   Newspaper,
//   ShieldCheck,
//   Loader2,
// } from "lucide-react";

// import { loginUser } from "../services/auth";

// function AdminLogin() {
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setError("");
//     setLoading(true);

//     try {
//       const result = await loginUser(username.trim(), password);

//       if (result?.access && result?.refresh) {
//         navigate("/admin", { replace: true });
//       } else {
//         setError(
//           result?.detail ||
//           result?.message ||
//           "Login failed. Please check your credentials."
//         );
//       }
//     } catch (err) {
//       console.error("Admin login error:", err);

//       const responseData = err.response?.data;

//       const errorMessage =
//         responseData?.detail ||
//         responseData?.message ||
//         responseData?.non_field_errors?.[0] ||
//         responseData?.username?.[0] ||
//         responseData?.password?.[0] ||
//         (err.response?.status === 401
//           ? "Invalid username or password."
//           : err.response?.status === 404
//           ? "Login API endpoint not found."
//           : err.code === "ERR_NETWORK"
//           ? "Backend server is not running. Please start Django server."
//           : "Something went wrong. Please try again.");

//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="flex min-h-[85vh] items-center justify-center bg-gray-50 px-4 py-12 dark:bg-[#0b0c0f]">
//       <div className="w-full max-w-[440px]">

//         <Link
//           to="/"
//           className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#C8102E]"
//         >
//           <ArrowLeft size={17} />
//           Back to Website
//         </Link>

//         <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#141519]">

//           <div className="bg-[#C8102E] px-7 py-9 text-center text-white">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
//               <Newspaper size={32} />
//             </div>

//             <h1 className="mt-5 text-2xl font-black tracking-tight">
//               HINDUSTAN.DIGITAL
//             </h1>

//             <p className="mt-2 text-sm text-white/80">
//               News Management Portal
//             </p>
//           </div>

//           <div className="p-7 sm:p-9">

//             <div className="mb-8">
//               <h2 className="text-2xl font-black">
//                 Admin Login
//               </h2>

//               <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                 Sign in to manage your news platform.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">

//               <div>
//                 <label className="mb-2 block text-sm font-bold">
//                   Username
//                 </label>

//                 <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f]">
//                   <User size={18} className="shrink-0 text-gray-400" />

//                   <input
//                     type="text"
//                     value={username}
//                     onChange={(event) => setUsername(event.target.value)}
//                     placeholder="Enter your username"
//                     autoComplete="username"
//                     required
//                     className="w-full bg-transparent py-3.5 text-sm outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-bold">
//                   Password
//                 </label>

//                 <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f]">
//                   <LockKeyhole size={18} className="shrink-0 text-gray-400" />

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                     placeholder="Enter your password"
//                     autoComplete="current-password"
//                     required
//                     className="w-full bg-transparent py-3.5 text-sm outline-none"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     aria-label="Toggle password visibility"
//                     className="text-gray-400 transition hover:text-[#C8102E]"
//                   >
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>

//               {error && (
//                 <div
//                   role="alert"
//                   className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400"
//                 >
//                   {error}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:bg-[#a90d27] disabled:cursor-not-allowed disabled:opacity-70"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 size={18} className="animate-spin" />
//                     Signing In...
//                   </>
//                 ) : (
//                   <>
//                     <LockKeyhole size={17} />
//                     Sign In to Dashboard
//                   </>
//                 )}
//               </button>

//             </form>

//             <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-500">
//               <ShieldCheck size={16} className="text-green-600" />
//               Authorized administrators only
//             </div>

//           </div>
//         </div>

//         <p className="mt-6 text-center text-xs text-gray-400">
//           © {new Date().getFullYear()} HINDUSTAN.DIGITAL. All rights reserved.
//         </p>

//       </div>
//     </main>
//   );
// }

// export default AdminLogin;



import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LockKeyhole,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  Newspaper,
  ShieldCheck,
  Loader2,
} from "lucide-react";

import { loginUser } from "../services/auth";

function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await loginUser(
        username.trim(),
        password
      );

      if (result?.access && result?.refresh) {
        const from =
          location.state?.from?.pathname || "/admin";

        navigate(from, { replace: true });
      } else {
        setError(
          result?.detail ||
            result?.message ||
            "Login failed. Please check your credentials."
        );
      }
    } catch (err) {
      console.error("Admin login error:", err);

      const responseData = err.response?.data;

      let errorMessage =
        responseData?.detail ||
        responseData?.message ||
        responseData?.non_field_errors?.[0] ||
        responseData?.username?.[0] ||
        responseData?.password?.[0];

      if (!errorMessage) {
        if (err.code === "ROLE_NOT_ALLOWED") {
          errorMessage =
            "Access denied. Only ADMIN and EDITOR users can access the management portal.";
        } else if (err.code === "USER_INACTIVE") {
          errorMessage =
            "Your account is inactive. Please contact the administrator.";
        } else if (err.response?.status === 401) {
          errorMessage =
            "Invalid username or password.";
        } else if (err.response?.status === 403) {
          errorMessage =
            "You do not have permission to access the management portal.";
        } else if (err.response?.status === 404) {
          errorMessage =
            "Login API endpoint not found.";
        } else if (err.code === "ERR_NETWORK") {
          errorMessage =
            "Backend server is not running. Please start Django server.";
        } else {
          errorMessage =
            err.message ||
            "Something went wrong. Please try again.";
        }
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-[85vh] items-center justify-center bg-gray-50 px-4 py-12 dark:bg-[#0b0c0f]">
      <div className="w-full max-w-[440px]">

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#C8102E]"
        >
          <ArrowLeft size={17} />
          Back to Website
        </Link>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#141519]">

          <div className="bg-[#C8102E] px-7 py-9 text-center text-white">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Newspaper size={32} />
            </div>

            <h1 className="mt-5 text-2xl font-black tracking-tight">
              HINDUSTAN.DIGITAL
            </h1>

            <p className="mt-2 text-sm text-white/80">
              News Management Portal
            </p>
          </div>

          <div className="p-7 sm:p-9">

            <div className="mb-8">
              <h2 className="text-2xl font-black">
                Admin Login
              </h2>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Sign in to manage your news platform.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Username
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f]">
                  <User
                    size={18}
                    className="shrink-0 text-gray-400"
                  />

                  <input
                    type="text"
                    value={username}
                    onChange={(event) =>
                      setUsername(event.target.value)
                    }
                    placeholder="Enter your username"
                    autoComplete="username"
                    required
                    className="w-full bg-transparent py-3.5 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f]">

                  <LockKeyhole
                    size={18}
                    className="shrink-0 text-gray-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full bg-transparent py-3.5 text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label="Toggle password visibility"
                    className="text-gray-400 transition hover:text-[#C8102E]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:bg-[#a90d27] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Signing In...
                  </>
                ) : (
                  <>
                    <LockKeyhole size={17} />
                    Sign In to Dashboard
                  </>
                )}
              </button>

            </form>

            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck
                size={16}
                className="text-green-600"
              />
              Authorized ADMIN & EDITOR users only
            </div>

          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} HINDUSTAN.DIGITAL. All rights reserved.
        </p>

      </div>
    </main>
  );
}

export default AdminLogin;