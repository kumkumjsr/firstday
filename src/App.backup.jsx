
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

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import BreakingNews from "./components/BreakingNews.jsx";
import CategoryNews from "./components/CategoryNews.jsx";
import Footer from "./components/Footer.jsx";
import AdminLayout from "./components/AdminLayout.jsx";

import AdminLogin from "./pages/AdminLogin.jsx";
import Home from "./pages/Home.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import NotFound from "./pages/NotFound.jsx";

import AdminDashboard from "./pages/AdminDashboard.jsx";
import CreateArticle from "./pages/CreateArticle.jsx";
import ManageArticles from "./pages/ManageArticles.jsx";
import ManageCategories from "./pages/ManageCategories.jsx";
import BreakingNewsManagement from "./pages/BreakingNewsManagement.jsx";
import ManageFeaturedNews from "./pages/ManageFeaturedNews.jsx";
import MediaLibrary from "./pages/MediaLibrary.jsx";
import ManageUsers from "./pages/ManageUsers.jsx";
import AdminSettings from "./pages/AdminSettings.jsx";

function AppLayout() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-[#0b0c0f] dark:text-white">
      {!isAdminPage && <Header />}
      {!isAdminPage && <BreakingNews />}

      <Routes>
        {/* Public Website */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <CategoryNews />
            </>
          }
        />

        <Route path="/article/:slug" element={<ArticleDetails />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />

        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Admin Layout - Shared Sidebar and Topbar */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="articles" element={<ManageArticles />} />
          <Route path="articles/new" element={<CreateArticle />} />
          <Route path="categories" element={<ManageCategories />} />
          <Route path="breaking-news" element={<BreakingNewsManagement />} />
          <Route path="featured-news" element={<ManageFeaturedNews />} />
          <Route path="media" element={<MediaLibrary />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;