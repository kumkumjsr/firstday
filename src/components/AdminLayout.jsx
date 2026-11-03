// import { useState } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";

// import {
//   LayoutDashboard,
//   Newspaper,
//   PlusCircle,
//   FolderOpen,
//   Radio,
//   Star,
//   Image as ImageIcon,
//   Users,
//   Settings,
//   Globe,
//   ExternalLink,
//   Menu,
//   X,
// } from "lucide-react";

// const menuItems = [
//   {
//     title: "MAIN MENU",
//     items: [
//       { name: "Overview", icon: LayoutDashboard, path: "/admin" },
//       { name: "All Articles", icon: Newspaper, path: "/admin/articles" },
//       { name: "Add New Article", icon: PlusCircle, path: "/admin/articles/new" },
//     ],
//   },
//   {
//     title: "CONTENT MANAGEMENT",
//     items: [
//       { name: "Categories", icon: FolderOpen, path: "/admin/categories" },
//       { name: "Breaking News", icon: Radio, path: "/admin/breaking-news" },
//       { name: "Featured News", icon: Star, path: "/admin/featured-news" },
//       { name: "Media Library", icon: ImageIcon, path: "/admin/media" },
//     ],
//   },
//   {
//     title: "ADMINISTRATION",
//     items: [
//       { name: "Users & Authors", icon: Users, path: "/admin/users" },
//       { name: "Settings", icon: Settings, path: "/admin/settings" },
//     ],
//   },
// ];

// const pageDetails = {
//   "/admin": {
//     title: "Admin Dashboard",
//     description: "Manage your digital news platform.",
//   },
//   "/admin/articles": {
//     title: "All Articles",
//     description: "Manage, edit and organize your news articles.",
//   },
//   "/admin/articles/new": {
//     title: "Create New Article",
//     description: "Write and publish news articles.",
//   },
//   "/admin/categories": {
//     title: "Categories",
//     description: "Organize your news categories.",
//   },
//   "/admin/breaking-news": {
//     title: "Breaking News",
//     description: "Manage breaking news headlines.",
//   },
//   "/admin/featured-news": {
//     title: "Featured News",
//     description: "Manage featured stories on your website.",
//   },
//   "/admin/media": {
//     title: "Media Library",
//     description: "Manage images and media files.",
//   },
//   "/admin/users": {
//     title: "Users & Authors",
//     description: "Manage platform users and authors.",
//   },
//   "/admin/settings": {
//     title: "Settings",
//     description: "Manage your website settings.",
//   },
// };

// function SidebarContent({ location, onNavigate }) {
//   const isActive = (path) => {
//     if (path === "/admin") {
//       return location.pathname === "/admin";
//     }

//     if (path === "/admin/articles") {
//       return (
//         location.pathname === "/admin/articles" &&
//         location.pathname !== "/admin/articles/new"
//       );
//     }

//     return location.pathname === path;
//   };

//   return (
//     <div className="flex h-full flex-col">
//       {/* Logo */}
//       <div className="shrink-0 border-b border-gray-100 px-5 py-5 dark:border-white/10">
//         <Link
//           to="/"
//           onClick={onNavigate}
//           className="text-lg font-black tracking-tight"
//         >
//           HINDUSTAN<span className="text-[#C8102E]">.DIGITAL</span>
//         </Link>

//         <p className="mt-1.5 text-[10px] font-semibold tracking-[0.12em] text-gray-500 dark:text-gray-400">
//           ADMIN CONTROL PANEL
//         </p>
//       </div>

//       {/* Navigation */}
//       <nav className="min-h-0 flex-1 space-y-4 overflow-y-auto px-3 py-4">
//         {menuItems.map((section) => (
//           <div key={section.title}>
//             <p className="mb-2 px-3 text-[9px] font-extrabold tracking-[0.15em] text-gray-400">
//               {section.title}
//             </p>

//             <div className="space-y-0.5">
//               {section.items.map((item) => {
//                 const Icon = item.icon;
//                 const active = isActive(item.path);

//                 return (
//                   <Link
//                     key={item.path}
//                     to={item.path}
//                     onClick={onNavigate}
//                     className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[12px] font-semibold transition-all duration-200 ${
//                       active
//                         ? "bg-[#C8102E] text-white shadow-md shadow-red-900/20"
//                         : "text-gray-600 hover:bg-gray-100 hover:text-[#C8102E] dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
//                     }`}
//                   >
//                     <Icon size={16} strokeWidth={2} />
//                     <span>{item.name}</span>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </nav>

//       {/* Website Link */}
//       <div className="shrink-0 border-t border-gray-100 p-3 dark:border-white/10">
//         <Link
//           to="/"
//           onClick={onNavigate}
//           className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-500 transition hover:bg-gray-100 hover:text-[#C8102E] dark:hover:bg-white/5"
//         >
//           <Globe size={16} />
//           View Website
//           <ExternalLink size={13} className="ml-auto" />
//         </Link>
//       </div>
//     </div>
//   );
// }

// function AdminLayout() {
//   const location = useLocation();
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

//   const currentPage =
//     pageDetails[location.pathname] || {
//       title: "Admin Panel",
//       description: "Manage your digital news platform.",
//     };

//   const closeMobileSidebar = () => {
//     setMobileSidebarOpen(false);
//   };

//   return (
//     <div className="h-screen w-full overflow-hidden bg-gray-100 text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
//       <div className="flex h-full w-full overflow-hidden">
//         {/* Desktop Sidebar */}
//         <aside className="hidden h-full w-[245px] shrink-0 border-r border-gray-200 bg-white dark:border-white/10 dark:bg-[#111318] lg:flex lg:flex-col">
//           <SidebarContent location={location} />
//         </aside>

//         {/* Mobile Sidebar */}
//         {mobileSidebarOpen && (
//           <div className="fixed inset-0 z-50 lg:hidden">
//             <button
//               type="button"
//               aria-label="Close sidebar"
//               onClick={closeMobileSidebar}
//               className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
//             />

//             <aside className="absolute inset-y-0 left-0 flex w-[280px] max-w-[85vw] flex-col border-r border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#111318]">
//               <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 dark:border-white/10">
//                 <span className="text-xs font-bold tracking-wider text-gray-500 dark:text-gray-400">
//                   NAVIGATION
//                 </span>

//                 <button
//                   type="button"
//                   onClick={closeMobileSidebar}
//                   aria-label="Close menu"
//                   className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#C8102E] dark:hover:bg-white/10"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               <div className="min-h-0 flex-1">
//                 <SidebarContent
//                   location={location}
//                   onNavigate={closeMobileSidebar}
//                 />
//               </div>
//             </aside>
//           </div>
//         )}

//         {/* Main Content */}
//         <main className="h-full min-w-0 flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-[#0b0c0f]">
//           {/* Topbar */}
//           <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-gray-200 bg-white/95 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#111318]/95 sm:px-7 sm:py-4">
//             <div className="flex min-w-0 items-center gap-3">
//               {/* Mobile Menu */}
//               <button
//                 type="button"
//                 onClick={() => setMobileSidebarOpen(true)}
//                 aria-label="Open sidebar"
//                 className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
//               >
//                 <Menu size={20} />
//               </button>

//               <div className="min-w-0">
//                 <h1 className="truncate text-base font-black sm:text-xl">
//                   {currentPage.title}
//                 </h1>

//                 <p className="mt-0.5 hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
//                   {currentPage.description}
//                 </p>
//               </div>
//             </div>

//             <div className="flex shrink-0 items-center gap-3">
//               <Link
//                 to="/"
//                 className="hidden items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10 sm:flex"
//               >
//                 <Globe size={15} />
//                 Website
//               </Link>

//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-sm font-black text-[#C8102E]">
//                 A
//               </div>
//             </div>
//           </header>

//           {/* Page Content */}
//           <div className="mx-auto w-full max-w-[1500px] p-4 sm:p-7">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminLayout;




import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Newspaper,
  PlusCircle,
  FolderOpen,
  Radio,
  Star,
  Image as ImageIcon,
  Video,
  Users,
  Settings,
  Globe,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  {
    title: "MAIN MENU",
    items: [
      {
        name: "Overview",
        icon: LayoutDashboard,
        path: "/admin",
      },
      {
        name: "All Articles",
        icon: Newspaper,
        path: "/admin/articles",
      },
      {
        name: "Add New Article",
        icon: PlusCircle,
        path: "/admin/articles/new",
      },
    ],
  },

  {
    title: "CONTENT MANAGEMENT",
    items: [
      {
        name: "Categories",
        icon: FolderOpen,
        path: "/admin/categories",
      },
      {
        name: "Breaking News",
        icon: Radio,
        path: "/admin/breaking-news",
      },
      {
        name: "Featured News",
        icon: Star,
        path: "/admin/featured-news",
      },
      {
        name: "Media Library",
        icon: ImageIcon,
        path: "/admin/media",
      },
      {
        name: "Videos",
        icon: Video,
        path: "/admin/videos",
      },
    ],
  },

  {
    title: "ADMINISTRATION",
    items: [
      {
        name: "Users & Team",
        icon: Users,
        path: "/admin/users",
      },
      {
        name: "Settings",
        icon: Settings,
        path: "/admin/settings",
      },
    ],
  },
];

const pageDetails = {
  "/admin": {
    title: "Admin Dashboard",
    description: "Manage your digital news platform.",
  },

  "/admin/articles": {
    title: "All Articles",
    description: "Manage, edit and organize your news articles.",
  },

  "/admin/articles/new": {
    title: "Create New Article",
    description: "Write and publish news articles.",
  },

  "/admin/categories": {
    title: "Categories",
    description: "Organize your news categories.",
  },

  "/admin/breaking-news": {
    title: "Breaking News",
    description: "Manage breaking news headlines.",
  },

  "/admin/featured-news": {
    title: "Featured News",
    description: "Manage featured stories on your website.",
  },

  "/admin/media": {
    title: "Media Library",
    description: "Manage images and media files.",
  },

  "/admin/videos": {
    title: "Video Management",
    description: "Upload, edit and manage video news.",
  },

  "/admin/users": {
    title: "Users & Team",
    description: "Manage administrators and editors.",
  },

  "/admin/settings": {
    title: "Settings",
    description: "Manage your website settings.",
  },
};

function SidebarContent({ location, onNavigate }) {
  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }

    if (path === "/admin/articles") {
      return location.pathname === "/admin/articles";
    }

    return location.pathname === path;
  };

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="shrink-0 border-b border-gray-100 px-5 py-5 dark:border-white/10">
        <Link
          to="/"
          onClick={onNavigate}
          className="text-lg font-black tracking-tight"
        >
          HINDUSTAN
          <span className="text-[#C8102E]">.DIGITAL</span>
        </Link>

        <p className="mt-1.5 text-[10px] font-semibold tracking-[0.12em] text-gray-500 dark:text-gray-400">
          ADMIN CONTROL PANEL
        </p>
      </div>

      {/* Navigation */}
      <nav className="min-h-0 flex-1 space-y-4 overflow-y-auto px-3 py-4">
        {menuItems.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-3 text-[9px] font-extrabold tracking-[0.15em] text-gray-400">
              {section.title}
            </p>

            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onNavigate}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[12px] font-semibold transition-all duration-200 ${
                      active
                        ? "bg-[#C8102E] text-white shadow-md shadow-red-900/20"
                        : "text-gray-600 hover:bg-gray-100 hover:text-[#C8102E] dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    <Icon size={16} strokeWidth={2} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Website Link */}
      <div className="shrink-0 border-t border-gray-100 p-3 dark:border-white/10">
        <Link
          to="/"
          onClick={onNavigate}
          className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-500 transition hover:bg-gray-100 hover:text-[#C8102E] dark:hover:bg-white/5"
        >
          <Globe size={16} />

          View Website

          <ExternalLink
            size={13}
            className="ml-auto"
          />
        </Link>
      </div>
    </div>
  );
}

function AdminLayout() {
  const location = useLocation();

  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  const currentPage =
    pageDetails[location.pathname] || {
      title: "Admin Panel",
      description:
        "Manage your digital news platform.",
    };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-100 text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
      <div className="flex h-full w-full overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden h-full w-[245px] shrink-0 border-r border-gray-200 bg-white dark:border-white/10 dark:bg-[#111318] lg:flex lg:flex-col">
          <SidebarContent location={location} />
        </aside>

        {/* Mobile Sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Close sidebar"
              onClick={closeMobileSidebar}
              className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            />

            <aside className="absolute inset-y-0 left-0 flex w-[280px] max-w-[85vw] flex-col border-r border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#111318]">
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 dark:border-white/10">
                <span className="text-xs font-bold tracking-wider text-gray-500 dark:text-gray-400">
                  NAVIGATION
                </span>

                <button
                  type="button"
                  onClick={closeMobileSidebar}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#C8102E] dark:hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="min-h-0 flex-1">
                <SidebarContent
                  location={location}
                  onNavigate={closeMobileSidebar}
                />
              </div>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="h-full min-w-0 flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-[#0b0c0f]">
          {/* Topbar */}
          <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-gray-200 bg-white/95 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#111318]/95 sm:px-7 sm:py-4">
            <div className="flex min-w-0 items-center gap-3">
              {/* Mobile Menu */}
              <button
                type="button"
                onClick={() =>
                  setMobileSidebarOpen(true)
                }
                aria-label="Open sidebar"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden"
              >
                <Menu size={20} />
              </button>

              <div className="min-w-0">
                <h1 className="truncate text-base font-black sm:text-xl">
                  {currentPage.title}
                </h1>

                <p className="mt-0.5 hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
                  {currentPage.description}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <Link
                to="/"
                className="hidden items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10 sm:flex"
              >
                <Globe size={15} />
                Website
              </Link>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-sm font-black text-[#C8102E]">
                A
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="mx-auto w-full max-w-[1500px] p-4 sm:p-7">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;