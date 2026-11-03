
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { ArrowUpRight, Clock3, Newspaper, RefreshCw } from "lucide-react";
// import API from "../services/api";

// function getList(data) {
//   if (Array.isArray(data)) return data;
//   if (Array.isArray(data?.results)) return data.results;
//   return [];
// }

// function getImage(image) {
//   if (!image) return null;

//   try {
//     return new URL(image, API.defaults.baseURL).href;
//   } catch {
//     return image;
//   }
// }

// function formatDate(date) {
//   if (!date) return "हाल ही में";

//   const parsedDate = new Date(date);

//   if (Number.isNaN(parsedDate.getTime())) return "हाल ही में";

//   return parsedDate.toLocaleDateString("hi-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }

// function CategoryPage() {
//   const { category } = useParams();

//   const [categories, setCategories] = useState([]);
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let isMounted = true;

//     const fetchCategoryNews = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const [categoryResponse, articleResponse] =
//           await Promise.all([
//             API.get("categories/"),
//             API.get("articles/"),
//           ]);

//         if (!isMounted) return;

//         const categoryList = getList(categoryResponse.data);
//         const articleList = getList(articleResponse.data);

//         setCategories(categoryList);

//         // Find current category using URL slug
//         const currentCategory = categoryList.find(
//           (item) =>
//             item.slug?.toLowerCase() === category?.toLowerCase()
//         );

//         if (!currentCategory) {
//           setArticles([]);
//           setLoading(false);
//           return;
//         }

//         // Filter published articles belonging to this category
//         const filteredArticles = articleList.filter((article) => {
//           const categoryId =
//             typeof article.category === "object"
//               ? article.category?.id
//               : article.category;

//           return (
//             String(categoryId) === String(currentCategory.id) ||
//             article.category_name?.toLowerCase() ===
//               currentCategory.name?.toLowerCase()
//           );
//         });

//         setArticles(filteredArticles);
//       } catch (err) {
//         console.error("Category news error:", err);

//         if (isMounted) {
//           setError(
//             "खबरें लोड नहीं हो सकीं। कृपया दोबारा कोशिश करें।"
//           );
//         }
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     };

//     fetchCategoryNews();

//     return () => {
//       isMounted = false;
//     };
//   }, [category]);

//   const currentCategory = categories.find(
//     (item) => item.slug?.toLowerCase() === category?.toLowerCase()
//   );

//   if (!loading && !currentCategory) {
//     return (
//       <main className="min-h-[60vh] px-4 py-20 text-center">
//         <Newspaper
//           size={48}
//           className="mx-auto mb-5 text-[#C8102E]"
//         />

//         <h1 className="text-3xl font-black">
//           Category Not Found
//         </h1>

//         <p className="mt-3 text-gray-500 dark:text-gray-400">
//           यह कैटेगरी उपलब्ध नहीं है।
//         </p>

//         <Link
//           to="/"
//           className="mt-6 inline-block rounded-xl bg-[#C8102E] px-6 py-3 font-bold text-white transition hover:bg-red-700"
//         >
//           वापस होम पर जाएं
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="mx-auto min-h-screen max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">

//       {/* CATEGORY HEADER */}
//       <div className="mb-10 border-b border-gray-200 pb-6 dark:border-white/10">

//         <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
//           HINDUSTAN.DIGITAL / NEWS
//         </p>

//         <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
//           {currentCategory?.name || "खबरें"}
//         </h1>

//         <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
//           {currentCategory?.description ||
//             "ताजा खबरें और महत्वपूर्ण अपडेट"}
//         </p>

//         {currentCategory?.image && (
//           <img
//             src={getImage(currentCategory.image)}
//             alt={currentCategory.name}
//             className="mt-6 h-48 w-full rounded-2xl object-cover sm:h-64"
//           />
//         )}
//       </div>

//       {/* ARTICLE COUNT */}
//       {!loading && !error && (
//         <div className="mb-7 flex items-center justify-between">
//           <h2 className="text-xl font-black sm:text-2xl">
//             Latest News
//           </h2>

//           <span className="rounded-full border border-gray-200 px-4 py-2 text-xs font-bold text-gray-600 dark:border-white/10 dark:text-gray-300">
//             {articles.length} Articles
//           </span>
//         </div>
//       )}

//       {/* LOADING */}
//       {loading && (
//         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {[1, 2, 3].map((item) => (
//             <div
//               key={item}
//               className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10"
//             >
//               <div className="h-56 bg-gray-200 dark:bg-white/10" />
//               <div className="space-y-4 p-5">
//                 <div className="h-3 w-24 rounded bg-gray-200 dark:bg-white/10" />
//                 <div className="h-5 w-full rounded bg-gray-200 dark:bg-white/10" />
//                 <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-white/10" />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ERROR */}
//       {!loading && error && (
//         <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-500/20 dark:bg-red-500/5">
//           <p className="font-semibold text-red-600 dark:text-red-400">
//             {error}
//           </p>

//           <button
//             onClick={() => window.location.reload()}
//             className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white"
//           >
//             <RefreshCw size={16} />
//             Retry
//           </button>
//         </div>
//       )}

//       {/* NEWS GRID */}
//       {!loading && !error && articles.length > 0 && (
//         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {articles.map((news) => (
//             <Link
//               to={`/article/${news.slug}`}
//               key={news.id}
//               className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#141519]"
//             >
//               {/* IMAGE */}
//               <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-[#202127]">
//                 {news.featured_image ? (
//                   <img
//                     src={getImage(news.featured_image)}
//                     alt={news.title}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="flex h-full items-center justify-center">
//                     <Newspaper
//                       size={48}
//                       className="text-gray-400"
//                     />
//                   </div>
//                 )}

//                 {news.is_featured && (
//                   <span className="absolute left-4 top-4 rounded-md bg-[#C8102E] px-3 py-1 text-xs font-bold text-white">
//                     Featured
//                   </span>
//                 )}
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">

//                 <span className="text-xs font-bold text-[#C8102E]">
//                   {news.category_name || currentCategory?.name}
//                 </span>

//                 <h2 className="mt-3 line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-[#C8102E]">
//                   {news.title}
//                 </h2>

//                 {news.excerpt && (
//                   <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
//                     {news.excerpt}
//                   </p>
//                 )}

//                 <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">

//                   <span className="flex items-center gap-2">
//                     <Clock3 size={14} />
//                     {formatDate(
//                       news.published_at || news.created_at
//                     )}
//                   </span>

//                   <span className="flex items-center gap-1 font-bold text-[#C8102E]">
//                     Read More
//                     <ArrowUpRight
//                       size={17}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* EMPTY STATE */}
//       {!loading && !error && currentCategory && articles.length === 0 && (
//         <div className="rounded-2xl border border-dashed border-gray-300 px-5 py-16 text-center dark:border-white/15">
//           <Newspaper
//             size={48}
//             className="mx-auto mb-5 text-gray-400"
//           />

//           <h2 className="text-2xl font-black">
//             अभी कोई खबर उपलब्ध नहीं है
//           </h2>

//           <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
//             इस कैटेगरी में नई खबरें प्रकाशित होने पर यहां दिखाई देंगी।
//           </p>

//           <Link
//             to="/"
//             className="mt-6 inline-block font-bold text-[#C8102E] hover:underline"
//           >
//             होम पेज पर जाएं
//           </Link>
//         </div>
//       )}

//     </main>
//   );
// }

// export default CategoryPage;




// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Clock3,
//   Newspaper,
//   RefreshCw,
// } from "lucide-react";
// import API from "../services/api";

// function getList(data) {
//   if (Array.isArray(data)) return data;
//   if (Array.isArray(data?.results)) return data.results;
//   return [];
// }

// function getImage(image) {
//   if (!image) return null;

//   try {
//     return new URL(image, API.defaults.baseURL).href;
//   } catch {
//     return image;
//   }
// }

// function formatDate(date) {
//   if (!date) return "हाल ही में";

//   const parsedDate = new Date(date);

//   if (Number.isNaN(parsedDate.getTime())) return "हाल ही में";

//   return parsedDate.toLocaleDateString("hi-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }

// function CategoryPage() {
//   const { category } = useParams();

//   const [categories, setCategories] = useState([]);
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchCategoryNews = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const [categoryResponse, articleResponse] = await Promise.all([
//         API.get("categories/"),
//         API.get("articles/"),
//       ]);

//       const categoryList = getList(categoryResponse.data);
//       const articleList = getList(articleResponse.data);

//       setCategories(categoryList);

//       const currentCategory = categoryList.find(
//         (item) =>
//           String(item.slug || "").toLowerCase() ===
//             String(category || "").toLowerCase() ||
//           String(item.name || "").toLowerCase() ===
//             String(category || "").toLowerCase()
//       );

//       if (!currentCategory) {
//         setArticles([]);
//         return;
//       }

//       const filteredArticles = articleList.filter((article) => {
//         const status = String(article.status || "").toUpperCase();

//         if (status !== "PUBLISHED") return false;

//         const articleCategoryId =
//           typeof article.category === "object"
//             ? article.category?.id
//             : article.category;

//         const sameCategoryId =
//           String(articleCategoryId) === String(currentCategory.id);

//         const sameCategoryName =
//           String(article.category_name || "").toLowerCase() ===
//           String(currentCategory.name || "").toLowerCase();

//         return sameCategoryId || sameCategoryName;
//       });

//       filteredArticles.sort(
//         (a, b) =>
//           new Date(b.published_at || b.created_at || 0) -
//           new Date(a.published_at || a.created_at || 0)
//       );

//       setArticles(filteredArticles);
//     } catch (err) {
//       console.error("Category news error:", err);

//       setError("खबरें लोड नहीं हो सकीं। कृपया दोबारा कोशिश करें।");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     let isMounted = true;

//     const loadNews = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const [categoryResponse, articleResponse] = await Promise.all([
//           API.get("categories/"),
//           API.get("articles/"),
//         ]);

//         if (!isMounted) return;

//         const categoryList = getList(categoryResponse.data);
//         const articleList = getList(articleResponse.data);

//         setCategories(categoryList);

//         const currentCategory = categoryList.find(
//           (item) =>
//             String(item.slug || "").toLowerCase() ===
//               String(category || "").toLowerCase() ||
//             String(item.name || "").toLowerCase() ===
//               String(category || "").toLowerCase()
//         );

//         if (!currentCategory) {
//           setArticles([]);
//           return;
//         }

//         const filteredArticles = articleList.filter((article) => {
//           if (
//             String(article.status || "").toUpperCase() !== "PUBLISHED"
//           ) {
//             return false;
//           }

//           const articleCategoryId =
//             typeof article.category === "object"
//               ? article.category?.id
//               : article.category;

//           const sameCategoryId =
//             String(articleCategoryId) === String(currentCategory.id);

//           const sameCategoryName =
//             String(article.category_name || "").toLowerCase() ===
//             String(currentCategory.name || "").toLowerCase();

//           return sameCategoryId || sameCategoryName;
//         });

//         filteredArticles.sort(
//           (a, b) =>
//             new Date(b.published_at || b.created_at || 0) -
//             new Date(a.published_at || a.created_at || 0)
//         );

//         setArticles(filteredArticles);
//       } catch (err) {
//         console.error("Category news error:", err);

//         if (isMounted) {
//           setError(
//             "खबरें लोड नहीं हो सकीं। कृपया दोबारा कोशिश करें।"
//           );
//         }
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     };

//     loadNews();

//     return () => {
//       isMounted = false;
//     };
//   }, [category]);

//   const currentCategory = categories.find(
//     (item) =>
//       String(item.slug || "").toLowerCase() ===
//         String(category || "").toLowerCase() ||
//       String(item.name || "").toLowerCase() ===
//         String(category || "").toLowerCase()
//   );

//   if (!loading && !currentCategory) {
//     return (
//       <main className="min-h-[60vh] px-4 py-20 text-center">
//         <Newspaper
//           size={48}
//           className="mx-auto mb-5 text-[#C8102E]"
//         />

//         <h1 className="text-3xl font-black">
//           Category Not Found
//         </h1>

//         <p className="mt-3 text-gray-500 dark:text-gray-400">
//           यह कैटेगरी उपलब्ध नहीं है।
//         </p>

//         <Link
//           to="/"
//           className="mt-6 inline-block rounded-xl bg-[#C8102E] px-6 py-3 font-bold text-white transition hover:bg-red-700"
//         >
//           वापस होम पर जाएं
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="mx-auto min-h-screen max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">

//       {/* CATEGORY HEADER */}
//       <div className="mb-10 border-b border-gray-200 pb-6 dark:border-white/10">
//         <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
//           HINDUSTAN.DIGITAL / NEWS
//         </p>

//         <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
//           {currentCategory?.name || "खबरें"}
//         </h1>

//         <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
//           {currentCategory?.description ||
//             "ताजा खबरें और महत्वपूर्ण अपडेट"}
//         </p>

//         {currentCategory?.image && (
//           <img
//             src={getImage(currentCategory.image)}
//             alt={currentCategory.name}
//             className="mt-6 h-48 w-full rounded-2xl object-cover sm:h-64"
//           />
//         )}
//       </div>

//       {/* ARTICLE COUNT */}
//       {!loading && !error && currentCategory && (
//         <div className="mb-7 flex items-center justify-between">
//           <h2 className="text-xl font-black sm:text-2xl">
//             Latest News
//           </h2>

//           <span className="rounded-full border border-gray-200 px-4 py-2 text-xs font-bold text-gray-600 dark:border-white/10 dark:text-gray-300">
//             {articles.length} Articles
//           </span>
//         </div>
//       )}

//       {/* LOADING */}
//       {loading && (
//         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {[1, 2, 3].map((item) => (
//             <div
//               key={item}
//               className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10"
//             >
//               <div className="h-56 bg-gray-200 dark:bg-white/10" />

//               <div className="space-y-4 p-5">
//                 <div className="h-3 w-24 rounded bg-gray-200 dark:bg-white/10" />
//                 <div className="h-5 w-full rounded bg-gray-200 dark:bg-white/10" />
//                 <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-white/10" />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ERROR */}
//       {!loading && error && (
//         <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-500/20 dark:bg-red-500/5">
//           <p className="font-semibold text-red-600 dark:text-red-400">
//             {error}
//           </p>

//           <button
//             onClick={fetchCategoryNews}
//             className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white"
//           >
//             <RefreshCw size={16} />
//             Retry
//           </button>
//         </div>
//       )}

//       {/* NEWS GRID */}
//       {!loading && !error && articles.length > 0 && (
//         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {articles.map((news) => (
//             <Link
//               to={`/article/${encodeURIComponent(news.slug)}`}
//               key={news.id}
//               className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#141519]"
//             >
//               {/* IMAGE */}
//               <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-[#202127]">
//                 {news.featured_image ? (
//                   <img
//                     src={getImage(news.featured_image)}
//                     alt={news.title}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="flex h-full items-center justify-center">
//                     <Newspaper
//                       size={48}
//                       className="text-gray-400"
//                     />
//                   </div>
//                 )}

//                 {news.is_featured && (
//                   <span className="absolute left-4 top-4 rounded-md bg-[#C8102E] px-3 py-1 text-xs font-bold text-white">
//                     Featured
//                   </span>
//                 )}
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">
//                 <span className="text-xs font-bold text-[#C8102E]">
//                   {news.category_name || currentCategory?.name}
//                 </span>

//                 <h2 className="mt-3 line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-[#C8102E]">
//                   {news.title}
//                 </h2>

//                 {(news.excerpt || news.subtitle) && (
//                   <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
//                     {news.excerpt || news.subtitle}
//                   </p>
//                 )}

//                 <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
//                   <span className="flex items-center gap-2">
//                     <Clock3 size={14} />
//                     {formatDate(
//                       news.published_at || news.created_at
//                     )}
//                   </span>

//                   <span className="flex items-center gap-1 font-bold text-[#C8102E]">
//                     Read More
//                     <ArrowUpRight
//                       size={17}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* EMPTY STATE */}
//       {!loading && !error && currentCategory && articles.length === 0 && (
//         <div className="rounded-2xl border border-dashed border-gray-300 px-5 py-16 text-center dark:border-white/15">
//           <Newspaper
//             size={48}
//             className="mx-auto mb-5 text-gray-400"
//           />

//           <h2 className="text-2xl font-black">
//             अभी कोई खबर उपलब्ध नहीं है
//           </h2>

//           <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
//             इस कैटेगरी में नई खबरें प्रकाशित होने पर यहां दिखाई देंगी।
//           </p>

//           <Link
//             to="/"
//             className="mt-6 inline-block font-bold text-[#C8102E] hover:underline"
//           >
//             होम पेज पर जाएं
//           </Link>
//         </div>
//       )}
//     </main>
//   );
// }

// export default CategoryPage;





// import { useCallback, useEffect, useMemo, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Clock3,
//   Newspaper,
//   RefreshCw,
// } from "lucide-react";
// import API from "../services/api";

// function getList(data) {
//   if (Array.isArray(data)) return data;
//   if (Array.isArray(data?.results)) return data.results;
//   return [];
// }

// function normalize(value) {
//   try {
//     return decodeURIComponent(String(value || ""))
//       .trim()
//       .toLowerCase();
//   } catch {
//     return String(value || "").trim().toLowerCase();
//   }
// }

// function getImage(image) {
//   if (!image) return null;

//   try {
//     return new URL(image, API.defaults.baseURL).href;
//   } catch {
//     return image;
//   }
// }

// function formatDate(date) {
//   if (!date) return "हाल ही में";

//   const parsedDate = new Date(date);

//   if (Number.isNaN(parsedDate.getTime())) return "हाल ही में";

//   return parsedDate.toLocaleDateString("hi-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }

// function CategoryPage() {
//   const { category } = useParams();

//   const [categories, setCategories] = useState([]);
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const currentCategory = useMemo(() => {
//     const requestedCategory = normalize(category);

//     return categories.find((item) => {
//       return (
//         normalize(item.slug) === requestedCategory ||
//         normalize(item.name) === requestedCategory
//       );
//     });
//   }, [categories, category]);

//   const fetchCategoryNews = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const [categoryResponse, articleResponse] = await Promise.all([
//         API.get("categories/"),
//         API.get("articles/"),
//       ]);

//       const categoryList = getList(categoryResponse.data);
//       const articleList = getList(articleResponse.data);

//       setCategories(categoryList);

//       const requestedCategory = normalize(category);

//       const selectedCategory = categoryList.find((item) => {
//         return (
//           normalize(item.slug) === requestedCategory ||
//           normalize(item.name) === requestedCategory
//         );
//       });

//       if (!selectedCategory) {
//         setArticles([]);
//         return;
//       }

//       const filteredArticles = articleList.filter((article) => {
//         // Only published news
//         if (
//           String(article.status || "").toUpperCase() !== "PUBLISHED"
//         ) {
//           return false;
//         }

//         const articleCategory = article.category;

//         const articleCategoryId =
//           typeof articleCategory === "object"
//             ? articleCategory?.id
//             : articleCategory;

//         const articleCategorySlug =
//           typeof articleCategory === "object"
//             ? articleCategory?.slug
//             : "";

//         const articleCategoryName =
//           typeof articleCategory === "object"
//             ? articleCategory?.name
//             : article.category_name;

//         const sameCategoryId =
//           articleCategoryId != null &&
//           String(articleCategoryId) === String(selectedCategory.id);

//         const sameCategorySlug =
//           articleCategorySlug &&
//           normalize(articleCategorySlug) ===
//             normalize(selectedCategory.slug);

//         const sameCategoryName =
//           articleCategoryName &&
//           normalize(articleCategoryName) ===
//             normalize(selectedCategory.name);

//         return (
//           sameCategoryId ||
//           sameCategorySlug ||
//           sameCategoryName
//         );
//       });

//       filteredArticles.sort(
//         (a, b) =>
//           new Date(b.published_at || b.created_at || 0) -
//           new Date(a.published_at || a.created_at || 0)
//       );

//       setArticles(filteredArticles);
//     } catch (err) {
//       console.error("Category news error:", err);
//       setError("खबरें लोड नहीं हो सकीं। कृपया दोबारा कोशिश करें।");
//     } finally {
//       setLoading(false);
//     }
//   }, [category]);

//   useEffect(() => {
//     fetchCategoryNews();
//   }, [fetchCategoryNews]);

//   // CATEGORY NOT FOUND
//   if (!loading && !currentCategory) {
//     return (
//       <main className="min-h-[60vh] px-4 py-20 text-center">
//         <Newspaper
//           size={48}
//           className="mx-auto mb-5 text-[#C8102E]"
//         />

//         <h1 className="text-3xl font-black">
//           Category Not Found
//         </h1>

//         <p className="mt-3 text-gray-500 dark:text-gray-400">
//           यह कैटेगरी उपलब्ध नहीं है।
//         </p>

//         <Link
//           to="/"
//           className="mt-6 inline-block rounded-xl bg-[#C8102E] px-6 py-3 font-bold text-white transition hover:bg-red-700"
//         >
//           वापस होम पर जाएं
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <main className="mx-auto min-h-screen max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">

//       {/* CATEGORY HEADER */}
//       <div className="mb-10 border-b border-gray-200 pb-6 dark:border-white/10">
//         <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
//           HINDUSTAN.DIGITAL / NEWS
//         </p>

//         <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
//           {currentCategory?.name || "खबरें"}
//         </h1>

//         <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
//           {currentCategory?.description ||
//             "ताजा खबरें और महत्वपूर्ण अपडेट"}
//         </p>

//         {currentCategory?.image && (
//           <img
//             src={getImage(currentCategory.image)}
//             alt={currentCategory.name}
//             className="mt-6 h-48 w-full rounded-2xl object-cover sm:h-64"
//           />
//         )}
//       </div>

//       {/* ARTICLE COUNT */}
//       {!loading && !error && currentCategory && (
//         <div className="mb-7 flex items-center justify-between">
//           <h2 className="text-xl font-black sm:text-2xl">
//             Latest News
//           </h2>

//           <span className="rounded-full border border-gray-200 px-4 py-2 text-xs font-bold text-gray-600 dark:border-white/10 dark:text-gray-300">
//             {articles.length} Articles
//           </span>
//         </div>
//       )}

//       {/* LOADING */}
//       {loading && (
//         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {[1, 2, 3].map((item) => (
//             <div
//               key={item}
//               className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10"
//             >
//               <div className="h-56 bg-gray-200 dark:bg-white/10" />

//               <div className="space-y-4 p-5">
//                 <div className="h-3 w-24 rounded bg-gray-200 dark:bg-white/10" />
//                 <div className="h-5 w-full rounded bg-gray-200 dark:bg-white/10" />
//                 <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-white/10" />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ERROR */}
//       {!loading && error && (
//         <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-500/20 dark:bg-red-500/5">
//           <p className="font-semibold text-red-600 dark:text-red-400">
//             {error}
//           </p>

//           <button
//             onClick={fetchCategoryNews}
//             className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white"
//           >
//             <RefreshCw size={16} />
//             Retry
//           </button>
//         </div>
//       )}

//       {/* NEWS GRID */}
//       {!loading && !error && articles.length > 0 && (
//         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {articles.map((news) => (
//             <Link
//               to={`/article/${encodeURIComponent(news.slug)}`}
//               key={news.id}
//               className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#141519]"
//             >
//               {/* IMAGE */}
//               <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-[#202127]">
//                 {news.featured_image ? (
//                   <img
//                     src={getImage(news.featured_image)}
//                     alt={news.title}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 ) : (
//                   <div className="flex h-full items-center justify-center">
//                     <Newspaper
//                       size={48}
//                       className="text-gray-400"
//                     />
//                   </div>
//                 )}

//                 {news.is_featured && (
//                   <span className="absolute left-4 top-4 rounded-md bg-[#C8102E] px-3 py-1 text-xs font-bold text-white">
//                     Featured
//                   </span>
//                 )}
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">
//                 <span className="text-xs font-bold text-[#C8102E]">
//                   {news.category_name ||
//                     currentCategory?.name}
//                 </span>

//                 <h2 className="mt-3 line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-[#C8102E]">
//                   {news.title}
//                 </h2>

//                 {(news.excerpt || news.subtitle) && (
//                   <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
//                     {news.excerpt || news.subtitle}
//                   </p>
//                 )}

//                 <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
//                   <span className="flex items-center gap-2">
//                     <Clock3 size={14} />
//                     {formatDate(
//                       news.published_at || news.created_at
//                     )}
//                   </span>

//                   <span className="flex items-center gap-1 font-bold text-[#C8102E]">
//                     Read More
//                     <ArrowUpRight
//                       size={17}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* EMPTY STATE */}
//       {!loading && !error && currentCategory && articles.length === 0 && (
//         <div className="rounded-2xl border border-dashed border-gray-300 px-5 py-16 text-center dark:border-white/15">
//           <Newspaper
//             size={48}
//             className="mx-auto mb-5 text-gray-400"
//           />

//           <h2 className="text-2xl font-black">
//             अभी कोई खबर उपलब्ध नहीं है
//           </h2>

//           <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
//             इस कैटेगरी में नई खबरें प्रकाशित होने पर यहां दिखाई देंगी।
//           </p>

//           <Link
//             to="/"
//             className="mt-6 inline-block font-bold text-[#C8102E] hover:underline"
//           >
//             होम पेज पर जाएं
//           </Link>
//         </div>
//       )}
//     </main>
//   );
// }

// export default CategoryPage;



import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock3,
  Newspaper,
  RefreshCw,
} from "lucide-react";
import API from "../services/api";

/* =========================================================
   HELPERS
========================================================= */

function getList(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.results)) return data.results;
  return [];
}

function normalize(value) {
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
}

function getImage(image) {
  if (!image) return null;

  try {
    // Already complete URL
    if (
      image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("data:")
    ) {
      return image;
    }

    // Backend relative media URL
    return new URL(image, API.defaults.baseURL).href;
  } catch {
    return image;
  }
}

function formatDate(date) {
  if (!date) return "हाल ही में";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "हाल ही में";
  }

  return parsedDate.toLocaleDateString("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* =========================================================
   CATEGORY PAGE
========================================================= */

function CategoryPage() {
  const { category } = useParams();

  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =======================================================
     CURRENT CATEGORY
  ======================================================= */

  const currentCategory = useMemo(() => {
    const requested = normalize(category);

    if (!requested) return null;

    return categories.find((item) => {
      const idMatch =
        item?.id != null &&
        String(item.id) === String(requested);

      const slugMatch =
        item?.slug &&
        normalize(item.slug) === requested;

      const nameMatch =
        item?.name &&
        normalize(item.name) === requested;

      return idMatch || slugMatch || nameMatch;
    });
  }, [categories, category]);

  /* =======================================================
     FETCH CATEGORY + ARTICLES
  ======================================================= */

  const fetchCategoryNews = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const [categoryResponse, articleResponse] =
        await Promise.all([
          API.get("categories/"),
          API.get("articles/"),
        ]);

      const categoryList = getList(categoryResponse.data);
      const articleList = getList(articleResponse.data);

      setCategories(categoryList);

      /* ---------------------------------------------------
         FIND SELECTED CATEGORY
      --------------------------------------------------- */

      const requestedCategory = normalize(category);

      const selectedCategory = categoryList.find((item) => {
        const idMatch =
          item?.id != null &&
          String(item.id) === String(requestedCategory);

        const slugMatch =
          item?.slug &&
          normalize(item.slug) === requestedCategory;

        const nameMatch =
          item?.name &&
          normalize(item.name) === requestedCategory;

        return idMatch || slugMatch || nameMatch;
      });

      /* ---------------------------------------------------
         CATEGORY NOT FOUND
      --------------------------------------------------- */

      if (!selectedCategory) {
        setArticles([]);
        return;
      }

      /* ---------------------------------------------------
         FILTER ARTICLES
      --------------------------------------------------- */

      const filteredArticles = articleList.filter((article) => {
        // Only published news
        if (
          String(article?.status || "").toUpperCase() !==
          "PUBLISHED"
        ) {
          return false;
        }

        /*
          Backend article.category can be:

          1. category ID
             category: 20

          2. category object
             category: {
               id: 20,
               name: "India",
               slug: "india"
             }

          So both cases are handled.
        */

        const articleCategory = article?.category;

        let articleCategoryId = null;
        let articleCategorySlug = "";
        let articleCategoryName = "";

        if (
          typeof articleCategory === "object" &&
          articleCategory !== null
        ) {
          articleCategoryId = articleCategory?.id;
          articleCategorySlug = articleCategory?.slug || "";
          articleCategoryName = articleCategory?.name || "";
        } else {
          articleCategoryId = articleCategory;
          articleCategorySlug = "";
          articleCategoryName =
            article?.category_name || "";
        }

        /* -------------------------------------------------
           MATCH BY CATEGORY ID
        ------------------------------------------------- */

        const sameCategoryId =
          articleCategoryId != null &&
          selectedCategory?.id != null &&
          String(articleCategoryId) ===
            String(selectedCategory.id);

        /* -------------------------------------------------
           MATCH BY CATEGORY SLUG
        ------------------------------------------------- */

        const sameCategorySlug =
          articleCategorySlug &&
          selectedCategory?.slug &&
          normalize(articleCategorySlug) ===
            normalize(selectedCategory.slug);

        /* -------------------------------------------------
           MATCH BY CATEGORY NAME
        ------------------------------------------------- */

        const sameCategoryName =
          articleCategoryName &&
          selectedCategory?.name &&
          normalize(articleCategoryName) ===
            normalize(selectedCategory.name);

        return (
          sameCategoryId ||
          sameCategorySlug ||
          sameCategoryName
        );
      });

      /* ---------------------------------------------------
         SORT NEWEST FIRST
      --------------------------------------------------- */

      filteredArticles.sort((a, b) => {
        const dateA = new Date(
          a?.published_at ||
            a?.created_at ||
            0
        ).getTime();

        const dateB = new Date(
          b?.published_at ||
            b?.created_at ||
            0
        ).getTime();

        return dateB - dateA;
      });

      setArticles(filteredArticles);
    } catch (err) {
      console.error(
        "Category news error:",
        err
      );

      setError(
        "खबरें लोड नहीं हो सकीं। कृपया दोबारा कोशिश करें।"
      );
    } finally {
      setLoading(false);
    }
  }, [category]);

  /* =======================================================
     LOAD DATA
  ======================================================= */

  useEffect(() => {
    fetchCategoryNews();
  }, [fetchCategoryNews]);

  /* =======================================================
     CATEGORY NOT FOUND
  ======================================================= */

  if (!loading && !currentCategory) {
    return (
      <main className="min-h-screen bg-white px-4 py-20 text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
            <Newspaper
              size={36}
              className="text-gray-500"
            />
          </div>

          <h1 className="text-3xl font-bold">
            Category Not Found
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            यह category उपलब्ध नहीं है।
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Home पर जाएं
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-white px-4 py-16 text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-white/10" />

            <div className="mt-4 h-10 w-64 animate-pulse rounded bg-gray-200 dark:bg-white/10" />

            <div className="mt-3 h-4 w-96 max-w-full animate-pulse rounded bg-gray-200 dark:bg-white/10" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map(
              (item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#111318]"
                >
                  <div className="h-56 animate-pulse bg-gray-200 dark:bg-white/10" />

                  <div className="space-y-3 p-5">
                    <div className="h-3 w-24 animate-pulse rounded bg-gray-200 dark:bg-white/10" />

                    <div className="h-6 w-full animate-pulse rounded bg-gray-200 dark:bg-white/10" />

                    <div className="h-6 w-4/5 animate-pulse rounded bg-gray-200 dark:bg-white/10" />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     MAIN UI
  ======================================================= */

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* =================================================
            CATEGORY HEADER
        ================================================= */}

        <section className="mb-10 border-b border-gray-200 pb-7 dark:border-white/10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">
                News Category
              </p>

              <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                {currentCategory?.name}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:text-base">
                {currentCategory?.description ||
                  `${currentCategory?.name} से जुड़ी सभी ताज़ा और महत्वपूर्ण खबरें यहां पढ़ें।`}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <Newspaper size={16} />

              {articles.length}{" "}
              {articles.length === 1
                ? "News"
                : "News"}
            </div>
          </div>
        </section>

        {/* =================================================
            ERROR
        ================================================= */}

        {error && (
          <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium">
                {error}
              </p>

              <button
                onClick={fetchCategoryNews}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <RefreshCw size={16} />
                Retry
              </button>
            </div>
          </div>
        )}

        {/* =================================================
            NO NEWS
        ================================================= */}

        {!error && articles.length === 0 && (
          <section className="flex min-h-[350px] items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-white/10">
                <Newspaper
                  size={30}
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>

              <h2 className="text-xl font-bold">
                अभी कोई खबर उपलब्ध नहीं है
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                इस category में अभी published news उपलब्ध नहीं है।
              </p>

              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Latest News देखें
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </section>
        )}

        {/* =================================================
            NEWS GRID
        ================================================= */}

        {articles.length > 0 && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {articles.map((news) => {
              const image = getImage(
                news?.featured_image
              );

              return (
                <article
                  key={news.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#111318]"
                >

                  {/* =========================================
                      IMAGE
                  ========================================= */}

                  <Link
                    to={`/article/${encodeURIComponent(
                      news.slug || news.id
                    )}`}
                    className="block"
                  >
                    <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-white/5">

                      {image ? (
                        <img
                          src={image}
                          alt={
                            news.title ||
                            "News"
                          }
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Newspaper
                            size={42}
                            className="text-gray-400"
                          />
                        </div>
                      )}

                      {/* CATEGORY BADGE */}

                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                          {currentCategory?.name}
                        </span>
                      </div>

                    </div>
                  </Link>

                  {/* =========================================
                      CONTENT
                  ========================================= */}

                  <div className="p-5">

                    {/* DATE */}

                    <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Clock3 size={14} />

                      <span>
                        {formatDate(
                          news?.published_at ||
                            news?.created_at
                        )}
                      </span>
                    </div>

                    {/* TITLE */}

                    <Link
                      to={`/article/${encodeURIComponent(
                        news.slug || news.id
                      )}`}
                    >
                      <h2 className="line-clamp-2 text-xl font-bold leading-7 transition-colors group-hover:text-red-600">
                        {news?.title ||
                          "Untitled News"}
                      </h2>
                    </Link>

                    {/* EXCERPT */}

                    {news?.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {news.excerpt}
                      </p>
                    )}

                    {/* READ MORE */}

                    <Link
                      to={`/article/${encodeURIComponent(
                        news.slug || news.id
                      )}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition hover:gap-3"
                    >
                      पूरी खबर पढ़ें
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}

          </section>
        )}

      </div>
    </main>
  );
}

export default CategoryPage;