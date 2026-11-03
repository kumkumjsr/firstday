
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import Header from "./components/Header.jsx";
// import BreakingNews from "./components/BreakingNews.jsx";
// import CategoryNews from "./components/CategoryNews.jsx";
// import Footer from "./components/Footer.jsx";

// import AdminLogin from "./pages/AdminLogin.jsx";
// import Home from "./pages/Home.jsx";
// import ArticleDetails from "./pages/ArticleDetails.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import NotFound from "./pages/NotFound.jsx";

// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CreateArticle from "./pages/CreateArticle.jsx";
// import ManageArticles from "./pages/ManageArticles.jsx";
// import ManageCategories from "./pages/ManageCategories.jsx";
// import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
// import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
// import MediaLibrary from "./pages/MediaLibrary.jsx";
// import ManageUsers from "./pages/ManageUsers.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";

// function AppLayout() {
//   const location = useLocation();

//   // Hide public website layout on all admin routes
//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">

//       {/* Public Website Header */}
//       {!isAdminPage && <Header />}

//       {/* Public Breaking News */}
//       {!isAdminPage && <BreakingNews />}

//       <Routes>
//         {/* Public Website Routes */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Home />
//               <CategoryNews />
//             </>
//           }
//         />

//         <Route path="/article/:slug" element={<ArticleDetails />} />
//         <Route path="/category/:category" element={<CategoryPage />} />
//         <Route path="/search" element={<SearchPage />} />

//         {/* Admin Routes */}
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/admin/media" element={<MediaLibrary />} />
//         <Route path="/admin/users" element={<ManageUsers />} />

//         <Route
//           path="/admin/featured-news"
//           element={<ManageFeaturedNews />}
//         />

//         <Route path="/admin/settings" element={<AdminSettings />} />

//         <Route
//           path="/admin/breaking-news"
//           element={<BreakingNewsManagement />}
//         />

//         <Route path="/admin/categories" element={<ManageCategories />} />
//         <Route path="/admin/articles" element={<ManageArticles />} />
//         <Route path="/admin/articles/new" element={<CreateArticle />} />

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {/* Public Website Footer */}
//       {!isAdminPage && <Footer />}

//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import Header from "./components/Header.jsx";
// import BreakingNews from "./components/BreakingNews.jsx";
// import CategoryNews from "./components/CategoryNews.jsx";
// import Footer from "./components/Footer.jsx";
// import AdminLayout from "./components/AdminLayout.jsx";

// import AdminLogin from "./pages/AdminLogin.jsx";
// import Home from "./pages/Home.jsx";
// import ArticleDetails from "./pages/ArticleDetails.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import NotFound from "./pages/NotFound.jsx";

// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CreateArticle from "./pages/CreateArticle.jsx";
// import ManageArticles from "./pages/ManageArticles.jsx";
// import ManageCategories from "./pages/ManageCategories.jsx";
// import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
// import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
// import MediaLibrary from "./pages/MediaLibrary.jsx";
// import ManageUsers from "./pages/ManageUsers.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";

// function AppLayout() {
//   const location = useLocation();

//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">
//       {!isAdminPage && <Header />}
//       {!isAdminPage && <BreakingNews />}

//       <Routes>
//         {/* Public Website */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Home />
//               <CategoryNews />
//             </>
//           }
//         />

//         <Route path="/article/:slug" element={<ArticleDetails />} />
//         <Route path="/category/:category" element={<CategoryPage />} />
//         <Route path="/search" element={<SearchPage />} />

//         {/* Admin Login */}
//         <Route path="/admin-login" element={<AdminLogin />} />

//         {/* Admin Layout - Shared Sidebar and Topbar */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<AdminDashboard />} />
//           <Route path="articles" element={<ManageArticles />} />
//           <Route path="articles/new" element={<CreateArticle />} />
//           <Route path="categories" element={<ManageCategories />} />
//           <Route path="breaking-news" element={<BreakingNewsManagement />} />
//           <Route path="featured-news" element={<ManageFeaturedNews />} />
//           <Route path="media" element={<MediaLibrary />} />
//           <Route path="users" element={<ManageUsers />} />
//           <Route path="settings" element={<AdminSettings />} />
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {!isAdminPage && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }

// export default App;




// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // Public Components
// import Header from "./components/Header.jsx";
// import BreakingNews from "./components/BreakingNews.jsx";
// import CategoryNews from "./components/CategoryNews.jsx";
// import Footer from "./components/Footer.jsx";

// // Admin Components
// import AdminLayout from "./components/AdminLayout.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// // Public Pages
// import Home from "./pages/Home.jsx";
// import ArticleDetails from "./pages/ArticleDetails.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import NotFound from "./pages/NotFound.jsx";

// // Admin Pages
// import AdminLogin from "./pages/AdminLogin.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CreateArticle from "./pages/CreateArticle.jsx";
// import ManageArticles from "./pages/ManageArticles.jsx";
// import ManageCategories from "./pages/ManageCategories.jsx";
// import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
// import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
// import MediaLibrary from "./pages/MediaLibrary.jsx";
// import ManageUsers from "./pages/ManageUsers.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";

// function AppLayout() {
//   const location = useLocation();

//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">

//       {/* Public Website Header */}
//       {!isAdminPage && <Header />}

//       {/* Public Breaking News */}
//       {!isAdminPage && <BreakingNews />}

//       <Routes>

//         {/* ================= PUBLIC WEBSITE ================= */}

//         <Route
//           path="/"
//           element={
//             <>
//               <Home />
//               <CategoryNews />
//             </>
//           }
//         />

//         <Route
//           path="/article/:slug"
//           element={<ArticleDetails />}
//         />

//         <Route
//           path="/category/:category"
//           element={<CategoryPage />}
//         />

//         <Route
//           path="/search"
//           element={<SearchPage />}
//         />

//         {/* ================= ADMIN LOGIN ================= */}

//         <Route
//           path="/admin-login"
//           element={<AdminLogin />}
//         />

//         {/* ================= PROTECTED ADMIN ROUTES ================= */}

//         <Route element={<ProtectedRoute />}>
//           <Route path="/admin" element={<AdminLayout />}>

//             <Route
//               index
//               element={<AdminDashboard />}
//             />

//             <Route
//               path="articles"
//               element={<ManageArticles />}
//             />

//             <Route
//               path="articles/new"
//               element={<CreateArticle />}
//             />

//             <Route
//               path="categories"
//               element={<ManageCategories />}
//             />

//             <Route
//               path="breaking-news"
//               element={<BreakingNewsManagement />}
//             />

//             <Route
//               path="featured-news"
//               element={<ManageFeaturedNews />}
//             />

//             <Route
//               path="media"
//               element={<MediaLibrary />}
//             />

//             <Route
//               path="users"
//               element={<ManageUsers />}
//             />

//             <Route
//               path="settings"
//               element={<AdminSettings />}
//             />

//           </Route>
//         </Route>

//         {/* ================= 404 PAGE ================= */}

//         <Route
//           path="*"
//           element={<NotFound />}
//         />

//       </Routes>

//       {/* Public Website Footer */}
//       {!isAdminPage && <Footer />}

//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }

// export default App;




// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // Public Components
// import Header from "./components/Header.jsx";
// import BreakingNews from "./components/BreakingNews.jsx";
// import Footer from "./components/Footer.jsx";

// // Admin Components
// import AdminLayout from "./components/AdminLayout.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// // Public Pages
// import Home from "./pages/Home.jsx";
// import ArticleDetails from "./pages/ArticleDetails.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import NotFound from "./pages/NotFound.jsx";

// // Admin Pages
// import AdminLogin from "./pages/AdminLogin.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CreateArticle from "./pages/CreateArticle.jsx";
// import ManageArticles from "./pages/ManageArticles.jsx";
// import ManageCategories from "./pages/ManageCategories.jsx";
// import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
// import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
// import MediaLibrary from "./pages/MediaLibrary.jsx";
// import ManageUsers from "./pages/ManageUsers.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";

// function AppLayout() {
//   const location = useLocation();

//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">

//       {!isAdminPage && <Header />}

//       {!isAdminPage && <BreakingNews />}

//       <Routes>
//         {/* PUBLIC WEBSITE */}

//         <Route path="/" element={<Home />} />

//         <Route
//           path="/article/:slug"
//           element={<ArticleDetails />}
//         />

//         <Route
//           path="/category/:category"
//           element={<CategoryPage />}
//         />

//         <Route
//           path="/search"
//           element={<SearchPage />}
//         />

//         {/* ADMIN LOGIN */}

//         <Route
//           path="/admin-login"
//           element={<AdminLogin />}
//         />

//         {/* PROTECTED ADMIN ROUTES */}

//         <Route element={<ProtectedRoute />}>
//           <Route path="/admin" element={<AdminLayout />}>

//             <Route index element={<AdminDashboard />} />

//             <Route
//               path="articles"
//               element={<ManageArticles />}
//             />

//             <Route
//               path="articles/new"
//               element={<CreateArticle />}
//             />

//             <Route
//               path="categories"
//               element={<ManageCategories />}
//             />

//             <Route
//               path="breaking-news"
//               element={<BreakingNewsManagement />}
//             />

//             <Route
//               path="featured-news"
//               element={<ManageFeaturedNews />}
//             />

//             <Route
//               path="media"
//               element={<MediaLibrary />}
//             />

//             <Route
//               path="users"
//               element={<ManageUsers />}
//             />

//             <Route
//               path="settings"
//               element={<AdminSettings />}
//             />

//           </Route>
//         </Route>

//         {/* 404 PAGE */}

//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {!isAdminPage && <Footer />}

//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // Public Components
// import Header from "./components/Header.jsx";
// import BreakingNews from "./components/BreakingNews.jsx";
// import Footer from "./components/Footer.jsx";

// // Admin Components
// import AdminLayout from "./components/AdminLayout.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// // Public Pages
// import Home from "./pages/Home.jsx";
// import ArticleDetails from "./pages/ArticleDetails.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import VideoNews from "./pages/VideoNews.jsx";
// import NotFound from "./pages/NotFound.jsx";

// // Admin Pages
// import AdminLogin from "./pages/AdminLogin.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CreateArticle from "./pages/CreateArticle.jsx";
// import ManageArticles from "./pages/ManageArticles.jsx";
// import ManageCategories from "./pages/ManageCategories.jsx";
// import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
// import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
// import MediaLibrary from "./pages/MediaLibrary.jsx";
// import ManageUsers from "./pages/ManageUsers.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";

// function AppLayout() {
//   const location = useLocation();
//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">
//       {!isAdminPage && <Header />}
//       {!isAdminPage && <BreakingNews />}

//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/article/:slug" element={<ArticleDetails />} />
//         <Route path="/category/:category" element={<CategoryPage />} />
//         <Route path="/search" element={<SearchPage />} />
//         <Route path="/videos" element={<VideoNews />} />

//         {/* Admin Login */}
//         <Route path="/admin-login" element={<AdminLogin />} />

//         {/* Protected Admin Routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route index element={<AdminDashboard />} />
//             <Route path="articles" element={<ManageArticles />} />
//             <Route path="articles/new" element={<CreateArticle />} />
//             <Route path="categories" element={<ManageCategories />} />
//             <Route
//               path="breaking-news"
//               element={<BreakingNewsManagement />}
//             />
//             <Route
//               path="featured-news"
//               element={<ManageFeaturedNews />}
//             />
//             <Route path="media" element={<MediaLibrary />} />
//             <Route path="users" element={<ManageUsers />} />
//             <Route path="settings" element={<AdminSettings />} />
//           </Route>
//         </Route>

//         {/* 404 Route */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       {!isAdminPage && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }

// export default App;



// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // =========================================================
// // PUBLIC COMPONENTS
// // =========================================================
// import Header from "./components/Header.jsx";
// import BreakingNews from "./components/BreakingNews.jsx";
// import Footer from "./components/Footer.jsx";

// // =========================================================
// // ADMIN COMPONENTS
// // =========================================================
// import AdminLayout from "./components/AdminLayout.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// // =========================================================
// // PUBLIC PAGES
// // =========================================================
// import Home from "./pages/Home.jsx";
// import ArticleDetails from "./pages/ArticleDetails.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import VideoNews from "./pages/VideoNews.jsx";
// import NotFound from "./pages/NotFound.jsx";

// // =========================================================
// // ADMIN PAGES
// // =========================================================
// import AdminLogin from "./pages/AdminLogin.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CreateArticle from "./pages/CreateArticle.jsx";
// import ManageArticles from "./pages/ManageArticles.jsx";
// import ManageCategories from "./pages/ManageCategories.jsx";
// import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
// import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
// import MediaLibrary from "./pages/MediaLibrary.jsx";
// import ManageUsers from "./pages/ManageUsers.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";
// import ManageVideos from "./pages/admin/ManageVideos.jsx";

// // =========================================================
// // APP LAYOUT
// // =========================================================
// function AppLayout() {
//   const location = useLocation();

//   // Admin pages start with /admin
//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">

//       {/* =====================================================
//           PUBLIC HEADER
//       ===================================================== */}
//       {!isAdminPage && <Header />}

//       {/* =====================================================
//           BREAKING NEWS
//       ===================================================== */}
//       {!isAdminPage && <BreakingNews />}

//       {/* =====================================================
//           ROUTES
//       ===================================================== */}
//       <Routes>

//         {/* ===================================================
//             PUBLIC ROUTES
//         =================================================== */}

//         {/* Home */}
//         <Route
//           path="/"
//           element={<Home />}
//         />

//         {/* Article Details */}
//         <Route
//           path="/article/:slug"
//           element={<ArticleDetails />}
//         />

//         {/* Category */}
//         <Route
//           path="/category/:category"
//           element={<CategoryPage />}
//         />

//         {/* Search */}
//         <Route
//           path="/search"
//           element={<SearchPage />}
//         />

//         {/* Video News - PUBLIC */}
//         <Route
//           path="/videos"
//           element={<VideoNews />}
//         />

//         {/* ===================================================
//             ADMIN LOGIN
//         =================================================== */}

//         <Route
//           path="/admin-login"
//           element={<AdminLogin />}
//         />

//         {/* ===================================================
//             PROTECTED ADMIN ROUTES
//         =================================================== */}

//         <Route element={<ProtectedRoute />}>

//           <Route
//             path="/admin"
//             element={<AdminLayout />}
//           >

//             {/* Dashboard */}
//             <Route
//               index
//               element={<AdminDashboard />}
//             />

//             {/* Articles */}
//             <Route
//               path="articles"
//               element={<ManageArticles />}
//             />

//             {/* Create Article */}
//             <Route
//               path="articles/new"
//               element={<CreateArticle />}
//             />

//             {/* Categories */}
//             <Route
//               path="categories"
//               element={<ManageCategories />}
//             />

//             {/* Breaking News */}
//             <Route
//               path="breaking-news"
//               element={<BreakingNewsManagement />}
//             />

//             {/* Featured News */}
//             <Route
//               path="featured-news"
//               element={<ManageFeaturedNews />}
//             />

//             {/* Media Library */}
//             <Route
//               path="media"
//               element={<MediaLibrary />}
//             />

//             {/* Manage Videos */}
//             <Route
//               path="videos"
//               element={<ManageVideos />}
//             />

//             {/* Users */}
//             <Route
//               path="users"
//               element={<ManageUsers />}
//             />

//             {/* Settings */}
//             <Route
//               path="settings"
//               element={<AdminSettings />}
//             />

//           </Route>

//         </Route>

//         {/* ===================================================
//             404
//         =================================================== */}

//         <Route
//           path="*"
//           element={<NotFound />}
//         />

//       </Routes>

//       {/* =====================================================
//           PUBLIC FOOTER
//       ===================================================== */}
//       {!isAdminPage && <Footer />}

//     </div>
//   );
// }

// // =========================================================
// // MAIN APP
// // =========================================================
// function App() {
//   return (
//     <BrowserRouter>
//       <AppLayout />
//     </BrowserRouter>
//   );
// }

// // =========================================================
// // EXPORT
// // =========================================================
// export default App;



// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // =========================================================
// // LANGUAGE
// // =========================================================
// import { LanguageProvider } from "./context/LanguageContext.jsx";

// // =========================================================
// // PUBLIC COMPONENTS
// // =========================================================
// import Header from "./components/Header.jsx";
// import BreakingNews from "./components/BreakingNews.jsx";
// import Footer from "./components/Footer.jsx";

// // =========================================================
// // ADMIN COMPONENTS
// // =========================================================
// import AdminLayout from "./components/AdminLayout.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// // =========================================================
// // PUBLIC PAGES
// // =========================================================
// import Home from "./pages/Home.jsx";
// import ArticleDetails from "./pages/ArticleDetails.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import VideoNews from "./pages/VideoNews.jsx";
// import NotFound from "./pages/NotFound.jsx";

// // =========================================================
// // ADMIN PAGES
// // =========================================================
// import AdminLogin from "./pages/AdminLogin.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CreateArticle from "./pages/CreateArticle.jsx";
// import ManageArticles from "./pages/ManageArticles.jsx";
// import ManageCategories from "./pages/ManageCategories.jsx";
// import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
// import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
// import MediaLibrary from "./pages/MediaLibrary.jsx";
// import ManageUsers from "./pages/ManageUsers.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";
// import ManageVideos from "./pages/admin/ManageVideos.jsx";

// // =========================================================
// // APP LAYOUT
// // =========================================================
// function AppLayout() {
//   const location = useLocation();

//   // Admin pages start with /admin
//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">

//       {/* =====================================================
//           PUBLIC HEADER
//       ===================================================== */}
//       {!isAdminPage && <Header />}

//       {/* =====================================================
//           BREAKING NEWS
//       ===================================================== */}
//       {!isAdminPage && <BreakingNews />}

//       {/* =====================================================
//           ROUTES
//       ===================================================== */}
//       <Routes>

//         {/* ===================================================
//             PUBLIC ROUTES
//         =================================================== */}

//         {/* Home */}
//         <Route
//           path="/"
//           element={<Home />}
//         />

//         {/* Article Details */}
//         <Route
//           path="/article/:slug"
//           element={<ArticleDetails />}
//         />

//         {/* Category */}
//         <Route
//           path="/category/:category"
//           element={<CategoryPage />}
//         />

//         {/* Search */}
//         <Route
//           path="/search"
//           element={<SearchPage />}
//         />

//         {/* Video News */}
//         <Route
//           path="/videos"
//           element={<VideoNews />}
//         />

//         {/* ===================================================
//             ADMIN LOGIN
//         =================================================== */}

//         <Route
//           path="/admin-login"
//           element={<AdminLogin />}
//         />

//         {/* ===================================================
//             PROTECTED ADMIN ROUTES
//         =================================================== */}

//         <Route element={<ProtectedRoute />}>

//           <Route
//             path="/admin"
//             element={<AdminLayout />}
//           >

//             {/* Dashboard */}
//             <Route
//               index
//               element={<AdminDashboard />}
//             />

//             {/* Articles */}
//             <Route
//               path="articles"
//               element={<ManageArticles />}
//             />

//             {/* Create Article */}
//             <Route
//               path="articles/new"
//               element={<CreateArticle />}
//             />

//             {/* Categories */}
//             <Route
//               path="categories"
//               element={<ManageCategories />}
//             />

//             {/* Breaking News */}
//             <Route
//               path="breaking-news"
//               element={<BreakingNewsManagement />}
//             />

//             {/* Featured News */}
//             <Route
//               path="featured-news"
//               element={<ManageFeaturedNews />}
//             />

//             {/* Media Library */}
//             <Route
//               path="media"
//               element={<MediaLibrary />}
//             />

//             {/* Manage Videos */}
//             <Route
//               path="videos"
//               element={<ManageVideos />}
//             />

//             {/* Users */}
//             <Route
//               path="users"
//               element={<ManageUsers />}
//             />

//             {/* Settings */}
//             <Route
//               path="settings"
//               element={<AdminSettings />}
//             />

//           </Route>

//         </Route>

//         {/* ===================================================
//             404
//         =================================================== */}

//         <Route
//           path="*"
//           element={<NotFound />}
//         />

//       </Routes>

//       {/* =====================================================
//           PUBLIC FOOTER
//       ===================================================== */}
//       {!isAdminPage && <Footer />}

//     </div>
//   );
// }

// // =========================================================
// // MAIN APP
// // =========================================================
// function App() {
//   return (
//     <BrowserRouter>
//       <LanguageProvider>
//         <AppLayout />
//       </LanguageProvider>
//     </BrowserRouter>
//   );
// }

// // =========================================================
// // EXPORT
// // =========================================================
// export default App;



// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // =========================================================
// // LANGUAGE
// // =========================================================
// import { LanguageProvider } from "./context/LanguageContext.jsx";

// // =========================================================
// // PUBLIC COMPONENTS
// // =========================================================
// import Header from "./components/Header.jsx";
// import BreakingNews from "./components/BreakingNews.jsx";
// import Footer from "./components/Footer.jsx";

// // =========================================================
// // ADMIN COMPONENTS
// // =========================================================
// import AdminLayout from "./components/AdminLayout.jsx";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// // =========================================================
// // PUBLIC PAGES
// // =========================================================
// import Home from "./pages/Home.jsx";
// import ArticleDetails from "./pages/ArticleDetails.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import VideoNews from "./pages/VideoNews.jsx";
// import NotFound from "./pages/NotFound.jsx";

// // =========================================================
// // ADMIN PAGES
// // =========================================================
// import AdminLogin from "./pages/AdminLogin.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CreateArticle from "./pages/CreateArticle.jsx";
// import ManageArticles from "./pages/ManageArticles.jsx";
// import ManageCategories from "./pages/ManageCategories.jsx";
// import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
// import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
// import MediaLibrary from "./pages/MediaLibrary.jsx";
// import ManageUsers from "./pages/ManageUsers.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";
// import ManageVideos from "./pages/admin/ManageVideos.jsx";

// // =========================================================
// // APP LAYOUT
// // =========================================================
// function AppLayout() {
//   const location = useLocation();

//   const isAdminPage = location.pathname.startsWith("/admin");

//   return (
//     <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">

//       {/* PUBLIC HEADER */}
//       {!isAdminPage && <Header />}

//       {/* BREAKING NEWS */}
//       {!isAdminPage && <BreakingNews />}

//       {/* ROUTES */}
//       <Routes>

//         {/* PUBLIC */}

//         <Route
//           path="/"
//           element={<Home />}
//         />

//         <Route
//           path="/article/:slug"
//           element={<ArticleDetails />}
//         />

//         <Route
//           path="/category/:category"
//           element={<CategoryPage />}
//         />

//         <Route
//           path="/search"
//           element={<SearchPage />}
//         />

//         <Route
//           path="/videos"
//           element={<VideoNews />}
//         />

//         {/* ADMIN LOGIN */}

//         <Route
//           path="/admin-login"
//           element={<AdminLogin />}
//         />

//         {/* PROTECTED ADMIN */}

//         <Route element={<ProtectedRoute />}>

//           <Route
//             path="/admin"
//             element={<AdminLayout />}
//           >

//             <Route
//               index
//               element={<AdminDashboard />}
//             />

//             <Route
//               path="articles"
//               element={<ManageArticles />}
//             />

//             <Route
//               path="articles/new"
//               element={<CreateArticle />}
//             />

//             <Route
//               path="categories"
//               element={<ManageCategories />}
//             />

//             <Route
//               path="breaking-news"
//               element={<BreakingNewsManagement />}
//             />

//             <Route
//               path="featured-news"
//               element={<ManageFeaturedNews />}
//             />

//             <Route
//               path="media"
//               element={<MediaLibrary />}
//             />

//             <Route
//               path="videos"
//               element={<ManageVideos />}
//             />

//             <Route
//               path="users"
//               element={<ManageUsers />}
//             />

//             <Route
//               path="settings"
//               element={<AdminSettings />}
//             />

//           </Route>

//         </Route>

//         {/* 404 */}

//         <Route
//           path="*"
//           element={<NotFound />}
//         />

//       </Routes>

//       {/* PUBLIC FOOTER */}
//       {!isAdminPage && <Footer />}

//     </div>
//   );
// }

// // =========================================================
// // MAIN APP
// // =========================================================
// function App() {
//   return (
//     <BrowserRouter>
//       <LanguageProvider>
//         <AppLayout />
//       </LanguageProvider>
//     </BrowserRouter>
//   );
// }

// // =========================================================
// // EXPORT
// // =========================================================
// export default App;



import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import BreakingNews from "./components/BreakingNews";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import VideoNews from "./pages/VideoNews";
import NotFound from "./pages/NotFound";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageArticles from "./pages/ManageArticles";
import CreateArticle from "./pages/CreateArticle";
import ManageCategories from "./pages/ManageCategories";
import BreakingNewsManagement from "./pages/BreakingNewsManagement";
import ManageFeaturedNews from "./pages/ManageFeaturedNews";
import MediaLibrary from "./pages/MediaLibrary";
import ManageUsers from "./pages/ManageUsers";
import AdminSettings from "./pages/AdminSettings";
import ManageVideos from "./pages/admin/ManageVideos";

import AdminLayout from "./components/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import { LanguageProvider } from "./context/LanguageContext";

function AppLayout() {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <BreakingNews />}

      <Routes>

        {/* ================= PUBLIC ================= */}

        <Route path="/" element={<Home />} />

        <Route
          path="/article/:slug"
          element={<ArticleDetails />}
        />

        <Route
          path="/category/:category"
          element={<CategoryPage />}
        />

        <Route
          path="/search"
          element={<SearchPage />}
        />

        <Route
          path="/videos"
          element={<VideoNews />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* ================= ADMIN ================= */}

        <Route
          element={<ProtectedRoute />}
        >
          <Route
            path="/admin"
            element={<AdminLayout />}
          >
            <Route
              index
              element={<AdminDashboard />}
            />

            <Route
              path="articles"
              element={<ManageArticles />}
            />

            <Route
              path="articles/new"
              element={<CreateArticle />}
            />

            <Route
              path="categories"
              element={<ManageCategories />}
            />

            <Route
              path="breaking-news"
              element={<BreakingNewsManagement />}
            />

            <Route
              path="featured-news"
              element={<ManageFeaturedNews />}
            />

            <Route
              path="media"
              element={<MediaLibrary />}
            />

            <Route
              path="videos"
              element={<ManageVideos />}
            />

            <Route
              path="users"
              element={<ManageUsers />}
            />

            <Route
              path="settings"
              element={<AdminSettings />}
            />
          </Route>
        </Route>

        {/* ================= 404 ================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppLayout />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;