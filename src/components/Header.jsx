
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Search,
//   Sun,
//   Moon,
// } from "lucide-react";

// const categories = [
//   "होम",
//   "देश",
//   "दुनिया",
//   "राजनीति",
//   "बिजनेस",
//   "खेल",
//   "मनोरंजन",
//   "टेक्नोलॉजी",
//   "शिक्षा",
//   "वीडियो",
// ];

// function Header() {
//   const [dark, setDark] = useState(
//     document.documentElement.classList.contains("dark")
//   );
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   const toggleTheme = () => {
//     const next = !dark;
//     setDark(next);
//     document.documentElement.classList.toggle("dark", next);
//   };

//   return (
//     <header className="border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-[#101114] dark:text-white">
//       <div className="mx-auto max-w-[1440px] px-4 sm:px-6">

//         <div className="flex min-h-[88px] items-center justify-between gap-4">

//           <button
//             className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={23} /> : <Menu size={23} />}
//           </button>

//           <Link to="/" className="min-w-0">
//             <div className="text-2xl font-black tracking-tight sm:text-3xl">
//               <span className="text-[#C8102E]">HINDUSTAN</span>
//               <span className="text-gray-900 dark:text-white">.DIGITAL</span>
//             </div>

//             <p className="mt-1 text-[10px] font-semibold tracking-[2px] text-gray-500 sm:text-xs">
//               देश की खबर, देश की आवाज़
//             </p>
//           </Link>

//           <div className="hidden items-center gap-3 lg:flex">

//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               देश की हर खबर, सबसे पहले
//             </span>

//             <div className="h-7 w-px bg-gray-200 dark:bg-gray-700" />

//             <button
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="rounded-full p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800"
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             <button
//               onClick={toggleTheme}
//               className="rounded-full border border-gray-200 p-2.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {dark ? <Sun size={19} /> : <Moon size={19} />}
//             </button>

//           </div>

//           <div className="flex items-center gap-1 lg:hidden">

//             <button
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             <button
//               onClick={toggleTheme}
//               className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {dark ? <Sun size={19} /> : <Moon size={19} />}
//             </button>

//           </div>
//         </div>

//         {searchOpen && (
//           <div className="border-t border-gray-200 py-3 dark:border-gray-800">
//             <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-700">
//               <Search size={19} className="text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="खबरें खोजें..."
//                 className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
//               />
//             </div>
//           </div>
//         )}

//         <nav className="hidden items-center justify-between border-t border-gray-200 lg:flex dark:border-gray-800">
//           {categories.map((item) => (
//             <Link
//               key={item}
//               to={
//                 item === "होम"
//                   ? "/"
//                   : `/category/${encodeURIComponent(item)}`
//               }
//               className="border-b-2 border-transparent px-2 py-4 text-sm font-semibold transition hover:border-[#C8102E] hover:text-[#C8102E]"
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>

//         {menuOpen && (
//           <nav className="grid grid-cols-2 gap-2 border-t border-gray-200 py-4 dark:border-gray-800 lg:hidden">

//             {categories.map((item) => (
//               <Link
//                 key={item}
//                 to={
//                   item === "होम"
//                     ? "/"
//                     : `/category/${encodeURIComponent(item)}`
//                 }
//                 onClick={() => setMenuOpen(false)}
//                 className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 {item}
//               </Link>
//             ))}

//           </nav>
//         )}

//       </div>
//     </header>
//   );
// }

// export default Header;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Search,
//   Sun,
//   Moon,
//   ArrowRight,
//   ShieldCheck,
// } from "lucide-react";

// const categories = [
//   "होम",
//   "देश",
//   "दुनिया",
//   "राजनीति",
//   "बिजनेस",
//   "खेल",
//   "मनोरंजन",
//   "टेक्नोलॉजी",
//   "शिक्षा",
//   "वीडियो",
// ];

// const getCategoryPath = (item) => {
//   if (item === "होम") return "/";
//   if (item === "वीडियो") return "/videos";

//   return `/category/${encodeURIComponent(item)}`;
// };

// function Header() {
//   const navigate = useNavigate();

//   const [dark, setDark] = useState(
//     document.documentElement.classList.contains("dark")
//   );

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleTheme = () => {
//     const next = !dark;
//     setDark(next);
//     document.documentElement.classList.toggle("dark", next);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const query = searchQuery.trim();

//     if (!query) return;

//     navigate(`/search?q=${encodeURIComponent(query)}`);
//     setSearchOpen(false);
//     setSearchQuery("");
//   };

//   const toggleSearch = () => {
//     setSearchOpen((previous) => !previous);
//   };

//   const openAdminLogin = () => {
//     setMenuOpen(false);
//     navigate("/admin-login");
//   };

//   return (
//     <header className="relative z-50 border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-[#101114] dark:text-white">
//       <div className="mx-auto max-w-[1440px] px-4 sm:px-6">

//         {/* TOP HEADER */}
//         <div className="flex min-h-[88px] items-center justify-between gap-4">

//           {/* MOBILE MENU */}
//           <button
//             className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={23} /> : <Menu size={23} />}
//           </button>

//           {/* LOGO */}
//           <Link to="/" className="min-w-0">
//             <div className="text-2xl font-black tracking-tight sm:text-3xl">
//               <span className="text-[#C8102E]">HINDUSTAN</span>
//               <span className="text-gray-900 dark:text-white">
//                 .DIGITAL
//               </span>
//             </div>

//             <p className="mt-1 text-[10px] font-semibold tracking-[2px] text-gray-500 sm:text-xs">
//               देश की खबर, देश की आवाज़
//             </p>
//           </Link>

//           {/* DESKTOP ACTIONS */}
//           <div className="hidden items-center gap-3 lg:flex">
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               देश की हर खबर, सबसे पहले
//             </span>

//             <div className="h-7 w-px bg-gray-200 dark:bg-gray-700" />

//             <button
//               onClick={toggleSearch}
//               className={`rounded-full p-2.5 transition ${
//                 searchOpen
//                   ? "bg-[#C8102E] text-white"
//                   : "hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             <button
//               onClick={toggleTheme}
//               className="rounded-full border border-gray-200 p-2.5 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {dark ? <Sun size={19} /> : <Moon size={19} />}
//             </button>

//             <button
//               onClick={openAdminLogin}
//               className="flex items-center gap-2 rounded-lg bg-[#C8102E] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#a90d27] hover:shadow-lg hover:shadow-red-900/20"
//             >
//               <ShieldCheck size={17} />
//               Admin Login
//             </button>
//           </div>

//           {/* MOBILE ACTIONS */}
//           <div className="flex items-center gap-1 lg:hidden">
//             <button
//               onClick={toggleSearch}
//               className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             <button
//               onClick={toggleTheme}
//               className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {dark ? <Sun size={19} /> : <Moon size={19} />}
//             </button>
//           </div>
//         </div>

//         {/* SEARCH BAR */}
//         {searchOpen && (
//           <div className="border-t border-gray-200 py-4 dark:border-gray-800">
//             <form
//               onSubmit={handleSearch}
//               className="mx-auto flex max-w-[750px] items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-2 dark:border-white/10 dark:bg-[#18191e]"
//             >
//               <Search size={19} className="ml-2 shrink-0 text-gray-400" />

//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(event) => setSearchQuery(event.target.value)}
//                 placeholder="खबरें खोजें..."
//                 autoFocus
//                 className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
//               />

//               {searchQuery && (
//                 <button
//                   type="button"
//                   onClick={() => setSearchQuery("")}
//                   className="rounded-full p-2 text-gray-400 hover:text-[#C8102E]"
//                   aria-label="Clear search"
//                 >
//                   <X size={17} />
//                 </button>
//               )}

//               <button
//                 type="submit"
//                 className="flex items-center gap-2 rounded-lg bg-[#C8102E] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#a90d27]"
//               >
//                 Search
//                 <ArrowRight size={16} />
//               </button>
//             </form>
//           </div>
//         )}

//         {/* DESKTOP NAVIGATION */}
//         <nav className="hidden items-center justify-between border-t border-gray-200 lg:flex dark:border-gray-800">
//           {categories.map((item) => (
//             <Link
//               key={item}
//               to={getCategoryPath(item)}
//               className="border-b-2 border-transparent px-2 py-4 text-sm font-semibold transition hover:border-[#C8102E] hover:text-[#C8102E]"
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>

//         {/* MOBILE NAVIGATION */}
//         {menuOpen && (
//           <nav className="grid grid-cols-2 gap-2 border-t border-gray-200 py-4 dark:border-gray-800 lg:hidden">
//             {categories.map((item) => (
//               <Link
//                 key={item}
//                 to={getCategoryPath(item)}
//                 onClick={() => setMenuOpen(false)}
//                 className="rounded-lg px-3 py-3 text-sm font-semibold transition hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 {item}
//               </Link>
//             ))}

//             <button
//               onClick={openAdminLogin}
//               className="col-span-2 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a90d27]"
//             >
//               <ShieldCheck size={18} />
//               Admin Login
//             </button>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;



// import { useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Search,
//   Sun,
//   Moon,
//   ArrowRight,
//   ShieldCheck,
//   Video,
// } from "lucide-react";

// const categories = [
//   "होम",
//   "देश",
//   "दुनिया",
//   "राजनीति",
//   "बिजनेस",
//   "खेल",
//   "मनोरंजन",
//   "टेक्नोलॉजी",
//   "शिक्षा",
//   "वीडियो",
// ];

// const getCategoryPath = (item) => {
//   if (item === "होम") return "/";
//   if (item === "वीडियो") return "/videos";

//   return `/category/${encodeURIComponent(item)}`;
// };

// function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [dark, setDark] = useState(
//     document.documentElement.classList.contains("dark")
//   );

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // =========================================================
//   // THEME TOGGLE
//   // =========================================================
//   const toggleTheme = () => {
//     const next = !dark;

//     setDark(next);

//     document.documentElement.classList.toggle("dark", next);
//   };

//   // =========================================================
//   // SEARCH
//   // =========================================================
//   const handleSearch = (event) => {
//     event.preventDefault();

//     const query = searchQuery.trim();

//     if (!query) return;

//     navigate(`/search?q=${encodeURIComponent(query)}`);

//     setSearchOpen(false);
//     setSearchQuery("");
//     setMenuOpen(false);
//   };

//   // =========================================================
//   // SEARCH TOGGLE
//   // =========================================================
//   const toggleSearch = () => {
//     setSearchOpen((previous) => !previous);
//   };

//   // =========================================================
//   // ADMIN LOGIN
//   // =========================================================
//   const openAdminLogin = () => {
//     setMenuOpen(false);
//     setSearchOpen(false);
//     navigate("/admin-login");
//   };

//   // =========================================================
//   // ACTIVE NAVIGATION
//   // =========================================================
//   const isActive = (item) => {
//     const path = getCategoryPath(item);

//     if (item === "होम") {
//       return location.pathname === "/";
//     }

//     if (item === "वीडियो") {
//       return location.pathname === "/videos";
//     }

//     return location.pathname === path;
//   };

//   return (
//     <header className="relative z-50 border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-[#101114] dark:text-white">

//       <div className="mx-auto max-w-[1440px] px-4 sm:px-6">

//         {/* =====================================================
//             TOP HEADER
//         ===================================================== */}
//         <div className="flex min-h-[88px] items-center justify-between gap-4">

//           {/* ===================================================
//               MOBILE MENU BUTTON
//           =================================================== */}
//           <button
//             type="button"
//             className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
//             onClick={() => setMenuOpen((previous) => !previous)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={23} /> : <Menu size={23} />}
//           </button>

//           {/* ===================================================
//               LOGO
//           =================================================== */}
//           <Link
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className="min-w-0"
//           >
//             <div className="text-2xl font-black tracking-tight sm:text-3xl">
//               <span className="text-[#C8102E]">
//                 HINDUSTAN
//               </span>

//               <span className="text-gray-900 dark:text-white">
//                 .DIGITAL
//               </span>
//             </div>

//             <p className="mt-1 text-[10px] font-semibold tracking-[2px] text-gray-500 sm:text-xs">
//               देश की खबर, देश की आवाज़
//             </p>
//           </Link>

//           {/* ===================================================
//               DESKTOP ACTIONS
//           =================================================== */}
//           <div className="hidden items-center gap-3 lg:flex">

//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               देश की हर खबर, सबसे पहले
//             </span>

//             <div className="h-7 w-px bg-gray-200 dark:bg-gray-700" />

//             {/* SEARCH */}
//             <button
//               type="button"
//               onClick={toggleSearch}
//               className={`rounded-full p-2.5 transition ${
//                 searchOpen
//                   ? "bg-[#C8102E] text-white"
//                   : "hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             {/* THEME */}
//             <button
//               type="button"
//               onClick={toggleTheme}
//               className="rounded-full border border-gray-200 p-2.5 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {dark ? <Sun size={19} /> : <Moon size={19} />}
//             </button>

//             {/* ADMIN */}
//             <button
//               type="button"
//               onClick={openAdminLogin}
//               className="flex items-center gap-2 rounded-lg bg-[#C8102E] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#a90d27] hover:shadow-lg hover:shadow-red-900/20"
//             >
//               <ShieldCheck size={17} />
//               Admin Login
//             </button>
//           </div>

//           {/* ===================================================
//               MOBILE ACTIONS
//           =================================================== */}
//           <div className="flex items-center gap-1 lg:hidden">

//             {/* SEARCH */}
//             <button
//               type="button"
//               onClick={toggleSearch}
//               className={`rounded-full p-2 transition ${
//                 searchOpen
//                   ? "bg-[#C8102E] text-white"
//                   : "hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             {/* THEME */}
//             <button
//               type="button"
//               onClick={toggleTheme}
//               className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {dark ? <Sun size={19} /> : <Moon size={19} />}
//             </button>

//           </div>
//         </div>

//         {/* =====================================================
//             SEARCH BAR
//         ===================================================== */}
//         {searchOpen && (
//           <div className="border-t border-gray-200 py-4 dark:border-gray-800">

//             <form
//               onSubmit={handleSearch}
//               className="mx-auto flex max-w-[750px] items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-2 dark:border-white/10 dark:bg-[#18191e]"
//             >
//               <Search
//                 size={19}
//                 className="ml-2 shrink-0 text-gray-400"
//               />

//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(event) =>
//                   setSearchQuery(event.target.value)
//                 }
//                 placeholder="खबरें खोजें..."
//                 autoFocus
//                 className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
//               />

//               {searchQuery && (
//                 <button
//                   type="button"
//                   onClick={() => setSearchQuery("")}
//                   className="rounded-full p-2 text-gray-400 hover:text-[#C8102E]"
//                   aria-label="Clear search"
//                 >
//                   <X size={17} />
//                 </button>
//               )}

//               <button
//                 type="submit"
//                 className="flex items-center gap-2 rounded-lg bg-[#C8102E] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#a90d27]"
//               >
//                 Search
//                 <ArrowRight size={16} />
//               </button>
//             </form>
//           </div>
//         )}

//         {/* =====================================================
//             DESKTOP NAVIGATION
//         ===================================================== */}
//         <nav className="hidden items-center justify-between border-t border-gray-200 dark:border-gray-800 lg:flex">

//           {categories.map((item) => {
//             const active = isActive(item);
//             const isVideo = item === "वीडियो";

//             return (
//               <Link
//                 key={item}
//                 to={getCategoryPath(item)}
//                 className={`flex items-center gap-1.5 border-b-2 px-2 py-4 text-sm font-semibold transition ${
//                   active
//                     ? "border-[#C8102E] text-[#C8102E]"
//                     : "border-transparent hover:border-[#C8102E] hover:text-[#C8102E]"
//                 }`}
//               >

//                 {/* Video Icon */}
//                 {isVideo && <Video size={15} />}

//                 {item}

//               </Link>
//             );
//           })}

//         </nav>

//         {/* =====================================================
//             MOBILE NAVIGATION
//         ===================================================== */}
//         {menuOpen && (
//           <nav className="grid grid-cols-2 gap-2 border-t border-gray-200 py-4 dark:border-gray-800 lg:hidden">

//             {categories.map((item) => {
//               const active = isActive(item);
//               const isVideo = item === "वीडियो";

//               return (
//                 <Link
//                   key={item}
//                   to={getCategoryPath(item)}
//                   onClick={() => setMenuOpen(false)}
//                   className={`flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition ${
//                     active
//                       ? "bg-[#C8102E] text-white"
//                       : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                   }`}
//                 >

//                   {isVideo && <Video size={16} />}

//                   {item}

//                 </Link>
//               );
//             })}

//             {/* ADMIN LOGIN */}
//             <button
//               type="button"
//               onClick={openAdminLogin}
//               className="col-span-2 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a90d27]"
//             >
//               <ShieldCheck size={18} />
//               Admin Login
//             </button>

//           </nav>
//         )}

//       </div>
//     </header>
//   );
// }

// export default Header;



// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Search,
//   Sun,
//   Moon,
//   ArrowRight,
//   ShieldCheck,
//   Video,
//   Globe,
//   ChevronDown,
//   Check,
// } from "lucide-react";

// import { useLanguage, languages } from "../context/LanguageContext";

// const categoryKeys = [
//   { key: "home", hindi: "होम" },
//   { key: "country", hindi: "देश" },
//   { key: "world", hindi: "दुनिया" },
//   { key: "politics", hindi: "राजनीति" },
//   { key: "business", hindi: "बिजनेस" },
//   { key: "sports", hindi: "खेल" },
//   { key: "entertainment", hindi: "मनोरंजन" },
//   { key: "technology", hindi: "टेक्नोलॉजी" },
//   { key: "education", hindi: "शिक्षा" },
//   { key: "video", hindi: "वीडियो" },
// ];

// const getCategoryPath = (item) => {
//   if (item === "होम") return "/";
//   if (item === "वीडियो") return "/videos";

//   return `/category/${encodeURIComponent(item)}`;
// };

// function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { language, changeLanguage, t } = useLanguage();

//   const [dark, setDark] = useState(
//     document.documentElement.classList.contains("dark")
//   );

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [languageOpen, setLanguageOpen] = useState(false);

//   const languageRef = useRef(null);

//   // =========================================================
//   // CLOSE LANGUAGE DROPDOWN OUTSIDE CLICK
//   // =========================================================

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         languageRef.current &&
//         !languageRef.current.contains(event.target)
//       ) {
//         setLanguageOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   // =========================================================
//   // THEME TOGGLE
//   // =========================================================

//   const toggleTheme = () => {
//     const next = !dark;

//     setDark(next);

//     document.documentElement.classList.toggle("dark", next);
//   };

//   // =========================================================
//   // LANGUAGE
//   // =========================================================

//   const handleLanguageChange = (code) => {
//     changeLanguage(code);
//     setLanguageOpen(false);
//   };

//   const selectedLanguage =
//     languages.find((item) => item.code === language) || languages[0];

//   // =========================================================
//   // SEARCH
//   // =========================================================

//   const handleSearch = (event) => {
//     event.preventDefault();

//     const query = searchQuery.trim();

//     if (!query) return;

//     navigate(`/search?q=${encodeURIComponent(query)}`);

//     setSearchOpen(false);
//     setSearchQuery("");
//     setMenuOpen(false);
//   };

//   // =========================================================
//   // SEARCH TOGGLE
//   // =========================================================

//   const toggleSearch = () => {
//     setSearchOpen((previous) => !previous);
//   };

//   // =========================================================
//   // ADMIN LOGIN
//   // =========================================================

//   const openAdminLogin = () => {
//     setMenuOpen(false);
//     setSearchOpen(false);
//     navigate("/admin-login");
//   };

//   // =========================================================
//   // ACTIVE NAVIGATION
//   // =========================================================

//   const isActive = (item) => {
//     const path = getCategoryPath(item);

//     if (item === "होम") {
//       return location.pathname === "/";
//     }

//     if (item === "वीडियो") {
//       return location.pathname === "/videos";
//     }

//     return location.pathname === path;
//   };

//   return (
//     <header className="relative z-50 border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-[#101114] dark:text-white">
//       <div className="mx-auto max-w-[1440px] px-4 sm:px-6">

//         {/* =====================================================
//             TOP HEADER
//         ===================================================== */}

//         <div className="flex min-h-[88px] items-center justify-between gap-4">

//           {/* MOBILE MENU */}

//           <button
//             type="button"
//             className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
//             onClick={() => setMenuOpen((previous) => !previous)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={23} /> : <Menu size={23} />}
//           </button>

//           {/* LOGO */}

//           <Link
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className="min-w-0"
//           >
//             <div className="text-2xl font-black tracking-tight sm:text-3xl">
//               <span className="text-[#C8102E]">
//                 HINDUSTAN
//               </span>

//               <span className="text-gray-900 dark:text-white">
//                 .DIGITAL
//               </span>
//             </div>

//             <p className="mt-1 text-[10px] font-semibold tracking-[2px] text-gray-500 sm:text-xs">
//               {t("tagline")}
//             </p>
//           </Link>

//           {/* ===================================================
//               DESKTOP ACTIONS
//           =================================================== */}

//           <div className="hidden items-center gap-3 lg:flex">

//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               {t("topText")}
//             </span>

//             <div className="h-7 w-px bg-gray-200 dark:bg-gray-700" />

//             {/* LANGUAGE */}

//             <div className="relative" ref={languageRef}>
//               <button
//                 type="button"
//                 onClick={() =>
//                   setLanguageOpen((previous) => !previous)
//                 }
//                 className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${
//                   languageOpen
//                     ? "border-[#C8102E] bg-[#C8102E] text-white"
//                     : "border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <Globe size={17} />

//                 <span>
//                   {selectedLanguage.flag}{" "}
//                   {selectedLanguage.name}
//                 </span>

//                 <ChevronDown
//                   size={15}
//                   className={`transition-transform ${
//                     languageOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {languageOpen && (
//                 <div className="absolute right-0 top-[calc(100%+10px)] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-2xl dark:border-gray-700 dark:bg-[#18191e]">

//                   <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
//                     {t("language")}
//                   </div>

//                   {languages.map((item) => {
//                     const active = language === item.code;

//                     return (
//                       <button
//                         key={item.code}
//                         type="button"
//                         onClick={() =>
//                           handleLanguageChange(item.code)
//                         }
//                         className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
//                           active
//                             ? "bg-[#C8102E]/10 text-[#C8102E]"
//                             : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                         }`}
//                       >
//                         <span className="flex items-center gap-2">
//                           <span>{item.flag}</span>
//                           <span>{item.name}</span>
//                         </span>

//                         {active && <Check size={16} />}
//                       </button>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>

//             {/* SEARCH */}

//             <button
//               type="button"
//               onClick={toggleSearch}
//               className={`rounded-full p-2.5 transition ${
//                 searchOpen
//                   ? "bg-[#C8102E] text-white"
//                   : "hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             {/* THEME */}

//             <button
//               type="button"
//               onClick={toggleTheme}
//               className="rounded-full border border-gray-200 p-2.5 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {dark ? <Sun size={19} /> : <Moon size={19} />}
//             </button>

//             {/* ADMIN */}

//             <button
//               type="button"
//               onClick={openAdminLogin}
//               className="flex items-center gap-2 rounded-lg bg-[#C8102E] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#a90d27] hover:shadow-lg hover:shadow-red-900/20"
//             >
//               <ShieldCheck size={17} />
//               {t("adminLogin")}
//             </button>
//           </div>

//           {/* ===================================================
//               MOBILE ACTIONS
//           =================================================== */}

//           <div className="flex items-center gap-1 lg:hidden">

//             {/* LANGUAGE */}

//             <div className="relative" ref={languageRef}>
//               <button
//                 type="button"
//                 onClick={() =>
//                   setLanguageOpen((previous) => !previous)
//                 }
//                 className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
//                 aria-label={t("language")}
//               >
//                 <Globe size={20} />
//               </button>

//               {languageOpen && (
//                 <div className="absolute right-0 top-[calc(100%+8px)] z-50 max-h-[420px] w-52 overflow-y-auto rounded-xl border border-gray-200 bg-white p-1.5 shadow-2xl dark:border-gray-700 dark:bg-[#18191e]">

//                   <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
//                     {t("language")}
//                   </div>

//                   {languages.map((item) => {
//                     const active = language === item.code;

//                     return (
//                       <button
//                         key={item.code}
//                         type="button"
//                         onClick={() =>
//                           handleLanguageChange(item.code)
//                         }
//                         className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
//                           active
//                             ? "bg-[#C8102E]/10 text-[#C8102E]"
//                             : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                         }`}
//                       >
//                         <span className="flex items-center gap-2">
//                           <span>{item.flag}</span>
//                           <span>{item.name}</span>
//                         </span>

//                         {active && <Check size={16} />}
//                       </button>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>

//             {/* SEARCH */}

//             <button
//               type="button"
//               onClick={toggleSearch}
//               className={`rounded-full p-2 transition ${
//                 searchOpen
//                   ? "bg-[#C8102E] text-white"
//                   : "hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//               aria-label="Search"
//             >
//               <Search size={20} />
//             </button>

//             {/* THEME */}

//             <button
//               type="button"
//               onClick={toggleTheme}
//               className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
//               aria-label="Toggle theme"
//             >
//               {dark ? <Sun size={19} /> : <Moon size={19} />}
//             </button>
//           </div>
//         </div>

//         {/* =====================================================
//             SEARCH BAR
//         ===================================================== */}

//         {searchOpen && (
//           <div className="border-t border-gray-200 py-4 dark:border-gray-800">
//             <form
//               onSubmit={handleSearch}
//               className="mx-auto flex max-w-[750px] items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-2 dark:border-white/10 dark:bg-[#18191e]"
//             >
//               <Search
//                 size={19}
//                 className="ml-2 shrink-0 text-gray-400"
//               />

//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(event) =>
//                   setSearchQuery(event.target.value)
//                 }
//                 placeholder={t("searchNews")}
//                 autoFocus
//                 className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
//               />

//               {searchQuery && (
//                 <button
//                   type="button"
//                   onClick={() => setSearchQuery("")}
//                   className="rounded-full p-2 text-gray-400 hover:text-[#C8102E]"
//                   aria-label="Clear search"
//                 >
//                   <X size={17} />
//                 </button>
//               )}

//               <button
//                 type="submit"
//                 className="flex items-center gap-2 rounded-lg bg-[#C8102E] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#a90d27]"
//               >
//                 {t("search")}
//                 <ArrowRight size={16} />
//               </button>
//             </form>
//           </div>
//         )}

//         {/* =====================================================
//             DESKTOP NAVIGATION
//         ===================================================== */}

//         <nav className="hidden items-center justify-between border-t border-gray-200 dark:border-gray-800 lg:flex">
//           {categoryKeys.map((item) => {
//             const label = t(item.key);
//             const active = isActive(item.hindi);
//             const isVideo = item.key === "video";

//             return (
//               <Link
//                 key={item.key}
//                 to={getCategoryPath(item.hindi)}
//                 className={`flex items-center gap-1.5 border-b-2 px-2 py-4 text-sm font-semibold transition ${
//                   active
//                     ? "border-[#C8102E] text-[#C8102E]"
//                     : "border-transparent hover:border-[#C8102E] hover:text-[#C8102E]"
//                 }`}
//               >
//                 {isVideo && <Video size={15} />}

//                 {label}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* =====================================================
//             MOBILE NAVIGATION
//         ===================================================== */}

//         {menuOpen && (
//           <nav className="grid grid-cols-2 gap-2 border-t border-gray-200 py-4 dark:border-gray-800 lg:hidden">

//             {categoryKeys.map((item) => {
//               const label = t(item.key);
//               const active = isActive(item.hindi);
//               const isVideo = item.key === "video";

//               return (
//                 <Link
//                   key={item.key}
//                   to={getCategoryPath(item.hindi)}
//                   onClick={() => setMenuOpen(false)}
//                   className={`flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition ${
//                     active
//                       ? "bg-[#C8102E] text-white"
//                       : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                   }`}
//                 >
//                   {isVideo && <Video size={16} />}

//                   {label}
//                 </Link>
//               );
//             })}

//             {/* ADMIN LOGIN */}

//             <button
//               type="button"
//               onClick={openAdminLogin}
//               className="col-span-2 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a90d27]"
//             >
//               <ShieldCheck size={18} />
//               {t("adminLogin")}
//             </button>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;


// import { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Video,
//   Globe,
//   ChevronDown,
//   Check,
// } from "lucide-react";

// import {
//   useLanguage,
//   languages,
// } from "../context/LanguageContext";

// const categoryKeys = [
//   { key: "home", hindi: "होम" },
//   { key: "country", hindi: "देश" },
//   { key: "world", hindi: "दुनिया" },
//   { key: "politics", hindi: "राजनीति" },
//   { key: "business", hindi: "बिजनेस" },
//   { key: "sports", hindi: "खेल" },
//   { key: "entertainment", hindi: "मनोरंजन" },
//   { key: "technology", hindi: "टेक्नोलॉजी" },
//   { key: "education", hindi: "शिक्षा" },
//   { key: "video", hindi: "वीडियो" },
// ];

// const getCategoryPath = (item) => {
//   if (item === "होम") return "/";
//   if (item === "वीडियो") return "/videos";

//   return `/category/${encodeURIComponent(item)}`;
// };

// function Header() {
//   const location = useLocation();

//   const {
//     language,
//     changeLanguage,
//     t,
//   } = useLanguage();

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [languageOpen, setLanguageOpen] = useState(false);

//   const languageRef = useRef(null);

//   // =========================================================
//   // CLOSE LANGUAGE DROPDOWN
//   // =========================================================

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         languageRef.current &&
//         !languageRef.current.contains(event.target)
//       ) {
//         setLanguageOpen(false);
//       }
//     };

//     document.addEventListener(
//       "mousedown",
//       handleOutsideClick
//     );

//     return () => {
//       document.removeEventListener(
//         "mousedown",
//         handleOutsideClick
//       );
//     };
//   }, []);

//   // =========================================================
//   // LANGUAGE
//   // =========================================================

//   const handleLanguageChange = (code) => {
//     changeLanguage(code);
//     setLanguageOpen(false);
//   };

//   const selectedLanguage =
//     languages.find(
//       (item) => item.code === language
//     ) || languages[0];

//   // =========================================================
//   // ACTIVE CATEGORY
//   // =========================================================

//   const isActive = (item) => {
//     const path = getCategoryPath(item);

//     if (item === "होम") {
//       return location.pathname === "/";
//     }

//     if (item === "वीडियो") {
//       return location.pathname === "/videos";
//     }

//     return location.pathname === path;
//   };

//   return (
//     <header className="relative z-50 border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-[#101114] dark:text-white">

//       <div className="mx-auto max-w-[1440px] px-4 sm:px-6">

//         {/* =====================================================
//             TOP HEADER
//         ===================================================== */}

//         <div className="flex min-h-[88px] items-center justify-between gap-4">

//           {/* MOBILE MENU */}

//           <button
//             type="button"
//             className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
//             onClick={() =>
//               setMenuOpen(
//                 (previous) => !previous
//               )
//             }
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <X size={23} />
//             ) : (
//               <Menu size={23} />
//             )}
//           </button>

//           {/* LOGO */}

//           <Link
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className="min-w-0"
//           >
//             <div className="text-2xl font-black tracking-tight sm:text-3xl">
//               <span className="text-[#C8102E]">
//                 HINDUSTAN
//               </span>

//               <span className="text-gray-900 dark:text-white">
//                 .DIGITAL
//               </span>
//             </div>

//             <p className="mt-1 text-[10px] font-semibold tracking-[2px] text-gray-500 sm:text-xs">
//               {t("tagline")}
//             </p>
//           </Link>

//           {/* ===================================================
//               DESKTOP ACTIONS
//           =================================================== */}

//           <div className="hidden items-center gap-3 lg:flex">

//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               {t("topText")}
//             </span>

//             <div className="h-7 w-px bg-gray-200 dark:bg-gray-700" />

//             {/* LANGUAGE */}

//             <div
//               className="relative"
//               ref={languageRef}
//             >
//               <button
//                 type="button"
//                 onClick={() =>
//                   setLanguageOpen(
//                     (previous) => !previous
//                   )
//                 }
//                 className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${
//                   languageOpen
//                     ? "border-[#C8102E] bg-[#C8102E] text-white"
//                     : "border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <Globe size={17} />

//                 <span>
//                   {selectedLanguage.flag}{" "}
//                   {selectedLanguage.name}
//                 </span>

//                 <ChevronDown
//                   size={15}
//                   className={`transition-transform ${
//                     languageOpen
//                       ? "rotate-180"
//                       : ""
//                   }`}
//                 />
//               </button>

//               {languageOpen && (
//                 <div className="absolute right-0 top-[calc(100%+10px)] z-[100] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-2xl dark:border-gray-700 dark:bg-[#18191e]">

//                   <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
//                     {t("language")}
//                   </div>

//                   {languages.map((item) => (
//                     <button
//                       key={item.code}
//                       type="button"
//                       onClick={() =>
//                         handleLanguageChange(
//                           item.code
//                         )
//                       }
//                       className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
//                         language === item.code
//                           ? "bg-[#C8102E]/10 text-[#C8102E]"
//                           : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                       }`}
//                     >
//                       <span className="flex items-center gap-2">
//                         <span>
//                           {item.flag}
//                         </span>

//                         <span>
//                           {item.name}
//                         </span>
//                       </span>

//                       {language === item.code && (
//                         <Check size={16} />
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//           </div>

//           {/* ===================================================
//               MOBILE ACTIONS
//           =================================================== */}

//           <div className="flex items-center lg:hidden">

//             <button
//               type="button"
//               onClick={() =>
//                 setLanguageOpen(
//                   (previous) => !previous
//                 )
//               }
//               className={`rounded-full p-2 transition ${
//                 languageOpen
//                   ? "bg-[#C8102E] text-white"
//                   : "hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//               aria-label={t("language")}
//             >
//               <Globe size={20} />
//             </button>

//           </div>

//         </div>

//         {/* =====================================================
//             MOBILE LANGUAGE DROPDOWN
//         ===================================================== */}

//         {languageOpen && (
//           <div className="absolute right-4 top-[75px] z-[100] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-2xl dark:border-gray-700 dark:bg-[#18191e] lg:hidden">

//             <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
//               {t("language")}
//             </div>

//             {languages.map((item) => (
//               <button
//                 key={item.code}
//                 type="button"
//                 onClick={() =>
//                   handleLanguageChange(
//                     item.code
//                   )
//                 }
//                 className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
//                   language === item.code
//                     ? "bg-[#C8102E]/10 text-[#C8102E]"
//                     : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <span className="flex items-center gap-2">
//                   <span>{item.flag}</span>

//                   <span>{item.name}</span>
//                 </span>

//                 {language === item.code && (
//                   <Check size={16} />
//                 )}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* =====================================================
//             DESKTOP NAVIGATION
//         ===================================================== */}

//         <nav className="hidden items-center justify-between border-t border-gray-200 dark:border-gray-800 lg:flex">

//           {categoryKeys.map((item) => {
//             const label = t(item.key);

//             const active = isActive(
//               item.hindi
//             );

//             const isVideo =
//               item.key === "video";

//             return (
//               <Link
//                 key={item.key}
//                 to={getCategoryPath(
//                   item.hindi
//                 )}
//                 className={`flex items-center gap-1.5 border-b-2 px-2 py-4 text-sm font-semibold transition ${
//                   active
//                     ? "border-[#C8102E] text-[#C8102E]"
//                     : "border-transparent hover:border-[#C8102E] hover:text-[#C8102E]"
//                 }`}
//               >
//                 {isVideo && (
//                   <Video size={15} />
//                 )}

//                 {label}
//               </Link>
//             );
//           })}

//         </nav>

//         {/* =====================================================
//             MOBILE NAVIGATION
//         ===================================================== */}

//         {menuOpen && (
//           <nav className="grid grid-cols-2 gap-2 border-t border-gray-200 py-4 dark:border-gray-800 lg:hidden">

//             {categoryKeys.map((item) => {
//               const label = t(item.key);

//               const active = isActive(
//                 item.hindi
//               );

//               const isVideo =
//                 item.key === "video";

//               return (
//                 <Link
//                   key={item.key}
//                   to={getCategoryPath(
//                     item.hindi
//                   )}
//                   onClick={() =>
//                     setMenuOpen(false)
//                   }
//                   className={`flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition ${
//                     active
//                       ? "bg-[#C8102E] text-white"
//                       : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                   }`}
//                 >
//                   {isVideo && (
//                     <Video size={16} />
//                   )}

//                   {label}
//                 </Link>
//               );
//             })}

//           </nav>
//         )}

//       </div>
//     </header>
//   );
// }

// export default Header;




import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Video,
  Globe,
  ChevronDown,
  Check,
} from "lucide-react";

import {
  useLanguage,
  languages,
} from "../context/LanguageContext";

import API from "../services/api";

/* =========================================================
   DEFAULT CATEGORY CONFIG
   Backend category names ke saath mapping
========================================================= */

const categoryKeys = [
  {
    key: "home",
    hindi: "होम",
    backendNames: ["India", "देश", "India"],
  },
  {
    key: "country",
    hindi: "देश",
    backendNames: ["India", "देश"],
  },
  {
    key: "world",
    hindi: "दुनिया",
    backendNames: ["World", "दुनिया"],
  },
  {
    key: "politics",
    hindi: "राजनीति",
    backendNames: ["Politics", "राजनीति"],
  },
  {
    key: "business",
    hindi: "बिजनेस",
    backendNames: ["Business", "बिजनेस"],
  },
  {
    key: "sports",
    hindi: "खेल",
    backendNames: ["Sports", "खेल"],
  },
  {
    key: "entertainment",
    hindi: "मनोरंजन",
    backendNames: ["Entertainment", "मनोरंजन"],
  },
  {
    key: "technology",
    hindi: "टेक्नोलॉजी",
    backendNames: ["Technology", "टेक्नोलॉजी"],
  },
  {
    key: "education",
    hindi: "शिक्षा",
    backendNames: ["Education", "शिक्षा"],
  },
  {
    key: "video",
    hindi: "वीडियो",
    backendNames: [],
  },
];

/* =========================================================
   HELPERS
========================================================= */

const normalize = (value) => {
  try {
    return decodeURIComponent(String(value || ""))
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/_/g, "-");
  } catch {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/_/g, "-");
  }
};

const getList = (data) => {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.results)) {
    return data.results;
  }

  return [];
};

/* =========================================================
   HEADER
========================================================= */

function Header() {
  const location = useLocation();

  const {
    language,
    changeLanguage,
    t,
  } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  /* Backend categories */

  const [categories, setCategories] = useState([]);

  const languageRef = useRef(null);

  /* =======================================================
     FETCH CATEGORIES FROM BACKEND
  ======================================================= */

  useEffect(() => {
    let mounted = true;

    const fetchCategories = async () => {
      try {
        const response = await API.get("categories/");

        const list = getList(response.data);

        if (mounted) {
          setCategories(list);
        }
      } catch (error) {
        console.error(
          "Header categories error:",
          error
        );
      }
    };

    fetchCategories();

    return () => {
      mounted = false;
    };
  }, []);

  /* =======================================================
     CLOSE LANGUAGE DROPDOWN
  ======================================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =======================================================
     LANGUAGE
  ======================================================= */

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setLanguageOpen(false);
  };

  const selectedLanguage =
    languages.find(
      (item) => item.code === language
    ) || languages[0];

  /* =======================================================
     FIND BACKEND CATEGORY
  ======================================================= */

  const findBackendCategory = (item) => {
    if (!item) {
      return null;
    }

    /* Home and Video don't use category API */

    if (item.key === "home" || item.key === "video") {
      return null;
    }

    /* -----------------------------------------------------
       First try exact backend names
    ----------------------------------------------------- */

    const found = categories.find((category) => {
      const categoryName = normalize(
        category?.name
      );

      const categorySlug = normalize(
        category?.slug
      );

      return item.backendNames.some(
        (name) => {
          const normalizedName =
            normalize(name);

          return (
            categoryName ===
              normalizedName ||
            categorySlug ===
              normalizedName
          );
        }
      );
    });

    if (found) {
      return found;
    }

    /* -----------------------------------------------------
       Try Hindi label
    ----------------------------------------------------- */

    const hindiMatch = categories.find(
      (category) => {
        return (
          normalize(category?.name) ===
          normalize(item.hindi)
        );
      }
    );

    return hindiMatch || null;
  };

  /* =======================================================
     GET CATEGORY PATH
  ======================================================= */

  const getCategoryPath = (item) => {
    if (item.key === "home") {
      return "/";
    }

    if (item.key === "video") {
      return "/videos";
    }

    const backendCategory =
      findBackendCategory(item);

    /* -----------------------------------------------------
       Backend category mil gaya
    ----------------------------------------------------- */

    if (backendCategory) {
      /*
        Priority:

        slug
        ↓
        name
        ↓
        id
      */

      const categoryValue =
        backendCategory.slug ||
        backendCategory.name ||
        backendCategory.id;

      return `/category/${encodeURIComponent(
        categoryValue
      )}`;
    }

    /* -----------------------------------------------------
       Fallback
    ----------------------------------------------------- */

    return `/category/${encodeURIComponent(
      item.hindi
    )}`;
  };

  /* =======================================================
     ACTIVE CATEGORY
  ======================================================= */

  const isActive = (item) => {
    const currentPath =
      decodeURIComponent(
        location.pathname
      ).toLowerCase();

    /* Home */

    if (item.key === "home") {
      return currentPath === "/";
    }

    /* Video */

    if (item.key === "video") {
      return currentPath === "/videos";
    }

    const backendCategory =
      findBackendCategory(item);

    if (!backendCategory) {
      return false;
    }

    const possibleValues = [
      backendCategory.slug,
      backendCategory.name,
      backendCategory.id,
      item.hindi,
    ]
      .filter(
        (value) =>
          value !== undefined &&
          value !== null
      )
      .map((value) =>
        normalize(value)
      );

    const currentCategory =
      normalize(
        location.pathname.replace(
          "/category/",
          ""
        )
      );

    return possibleValues.includes(
      currentCategory
    );
  };

  /* =======================================================
     CATEGORY LINK
  ======================================================= */

  const renderCategoryLink = (
    item,
    mobile = false
  ) => {
    const label = t(item.key);

    const active = isActive(item);

    const isVideo =
      item.key === "video";

    return (
      <Link
        key={item.key}
        to={getCategoryPath(item)}
        onClick={() => {
          if (mobile) {
            setMenuOpen(false);
          }
        }}
        className={
          mobile
            ? `flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-[#C8102E] text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            : `flex items-center gap-1.5 border-b-2 px-2 py-4 text-sm font-semibold transition ${
                active
                  ? "border-[#C8102E] text-[#C8102E]"
                  : "border-transparent hover:border-[#C8102E] hover:text-[#C8102E]"
              }`
        }
      >
        {isVideo && (
          <Video
            size={mobile ? 16 : 15}
          />
        )}

        {label}
      </Link>
    );
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <header className="relative z-50 border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-[#101114] dark:text-white">

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">

        {/* =================================================
            TOP HEADER
        ================================================= */}

        <div className="flex min-h-[88px] items-center justify-between gap-4">

          {/* MOBILE MENU */}

          <button
            type="button"
            className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
            onClick={() =>
              setMenuOpen(
                (previous) => !previous
              )
            }
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>

          {/* LOGO */}

          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
            }}
            className="min-w-0"
          >
            <div className="text-2xl font-black tracking-tight sm:text-3xl">
              <span className="text-[#C8102E]">
                HINDUSTAN
              </span>

              <span className="text-gray-900 dark:text-white">
                .DIGITAL
              </span>
            </div>

            <p className="mt-1 text-[10px] font-semibold tracking-[2px] text-gray-500 sm:text-xs">
              {t("tagline")}
            </p>
          </Link>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}

          <div className="hidden items-center gap-3 lg:flex">

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t("topText")}
            </span>

            <div className="h-7 w-px bg-gray-200 dark:bg-gray-700" />

            {/* LANGUAGE */}

            <div
              className="relative"
              ref={languageRef}
            >
              <button
                type="button"
                onClick={() =>
                  setLanguageOpen(
                    (previous) =>
                      !previous
                  )
                }
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${
                  languageOpen
                    ? "border-[#C8102E] bg-[#C8102E] text-white"
                    : "border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                }`}
              >
                <Globe size={17} />

                <span>
                  {selectedLanguage.flag}{" "}
                  {selectedLanguage.name}
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    languageOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-[calc(100%+10px)] z-[100] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-2xl dark:border-gray-700 dark:bg-[#18191e]">

                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    {t("language")}
                  </div>

                  {languages.map(
                    (item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() =>
                          handleLanguageChange(
                            item.code
                          )
                        }
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          language ===
                          item.code
                            ? "bg-[#C8102E]/10 text-[#C8102E]"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>
                            {item.flag}
                          </span>

                          <span>
                            {item.name}
                          </span>
                        </span>

                        {language ===
                          item.code && (
                          <Check
                            size={16}
                          />
                        )}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div className="flex items-center lg:hidden">

            <button
              type="button"
              onClick={() =>
                setLanguageOpen(
                  (previous) =>
                    !previous
                )
              }
              className={`rounded-full p-2 transition ${
                languageOpen
                  ? "bg-[#C8102E] text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              aria-label={t("language")}
            >
              <Globe size={20} />
            </button>

          </div>

        </div>

        {/* =================================================
            MOBILE LANGUAGE DROPDOWN
        ================================================= */}

        {languageOpen && (
          <div className="absolute right-4 top-[75px] z-[100] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-2xl dark:border-gray-700 dark:bg-[#18191e] lg:hidden">

            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              {t("language")}
            </div>

            {languages.map(
              (item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() =>
                    handleLanguageChange(
                      item.code
                    )
                  }
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    language === item.code
                      ? "bg-[#C8102E]/10 text-[#C8102E]"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>
                      {item.flag}
                    </span>

                    <span>
                      {item.name}
                    </span>
                  </span>

                  {language === item.code && (
                    <Check size={16} />
                  )}
                </button>
              )
            )}
          </div>
        )}

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="hidden items-center justify-between border-t border-gray-200 dark:border-gray-800 lg:flex">

          {categoryKeys.map(
            (item) =>
              renderCategoryLink(
                item,
                false
              )
          )}

        </nav>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        {menuOpen && (
          <nav className="grid grid-cols-2 gap-2 border-t border-gray-200 py-4 dark:border-gray-800 lg:hidden">

            {categoryKeys.map(
              (item) =>
                renderCategoryLink(
                  item,
                  true
                )
            )}

          </nav>
        )}

      </div>
    </header>
  );
}

export default Header;