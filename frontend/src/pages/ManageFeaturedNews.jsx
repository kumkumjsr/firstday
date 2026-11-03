
// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   Star,
//   Search,
//   PlusCircle,
//   Trash2,
//   Newspaper,
//   Image,
//   Edit3,
//   X,
//   Save,
//   AlertTriangle,
//   CheckCircle2,
//   Eye,
//   Layers3,
//   UserRound,
//   Filter,
//   ExternalLink,
// } from "lucide-react";

// const initialArticles = [
//   {
//     id: 1,
//     title: "भारत में डिजिटल टेक्नोलॉजी का तेजी से विस्तार",
//     category: "टेक्नोलॉजी",
//     author: "Editorial Team",
//     featured: true,
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
//   },
//   {
//     id: 2,
//     title: "भारतीय अर्थव्यवस्था में नए अवसरों की शुरुआत",
//     category: "बिजनेस",
//     author: "Business Desk",
//     featured: false,
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
//   },
//   {
//     id: 3,
//     title: "शिक्षा के क्षेत्र में डिजिटल बदलाव",
//     category: "शिक्षा",
//     author: "Education Desk",
//     featured: true,
//     image:
//       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
//   },
//   {
//     id: 4,
//     title: "भारत में खेलों को मिल रहा नया प्रोत्साहन",
//     category: "खेल",
//     author: "Sports Desk",
//     featured: false,
//     image:
//       "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600",
//   },
// ];

// const categories = [
//   "देश",
//   "दुनिया",
//   "राजनीति",
//   "बिजनेस",
//   "खेल",
//   "मनोरंजन",
//   "टेक्नोलॉजी",
//   "शिक्षा",
// ];

// function StatCard({ title, value, subtitle, icon: Icon, color }) {
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       transition={{ duration: 0.2 }}
//       className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-red-900/5 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-[#C8102E]/50"
//     >
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//             {title}
//           </p>
//           <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
//             {value}
//           </h2>
//           <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
//             {subtitle}
//           </p>
//         </div>

//         <div className={`rounded-xl p-3 ${color}`}>
//           <Icon size={22} />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function ArticleModal({ article, onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     title: article?.title || "",
//     category: article?.category || "देश",
//     author: article?.author || "",
//     image: article?.image || "",
//   });

//   const [error, setError] = useState("");

//   const updateField = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.title.trim()) {
//       setError("Please enter the article title.");
//       return;
//     }

//     if (!formData.author.trim()) {
//       setError("Please enter the author name.");
//       return;
//     }

//     if (
//       formData.image.trim() &&
//       !/^https?:\/\/.+/i.test(formData.image.trim())
//     ) {
//       setError("Please enter a valid image URL starting with http or https.");
//       return;
//     }

//     onSave({
//       title: formData.title.trim(),
//       category: formData.category,
//       author: formData.author.trim(),
//       image: formData.image.trim(),
//     });
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm"
//       onMouseDown={(e) => {
//         if (e.target === e.currentTarget) onClose();
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.94, y: 15 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.94, y: 15 }}
//         className="my-auto w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//       >
//         <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 dark:border-white/10">
//           <div>
//             <h2 className="text-lg font-black text-gray-900 dark:text-white">
//               {article ? "Edit Article" : "Add Featured Article"}
//             </h2>
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               {article
//                 ? "Update article information."
//                 : "Add an article to your featured news list."}
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500 hover:text-[#C8102E] dark:border-white/10"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5 p-6">
//           <div>
//             <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//               Article Title
//             </label>
//             <input
//               autoFocus
//               type="text"
//               value={formData.title}
//               onChange={(e) => updateField("title", e.target.value)}
//               placeholder="Enter article headline"
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//             />
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Category
//               </label>
//               <select
//                 value={formData.category}
//                 onChange={(e) => updateField("category", e.target.value)}
//                 className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//               >
//                 {categories.map((category) => (
//                   <option key={category} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Author
//               </label>
//               <input
//                 type="text"
//                 value={formData.author}
//                 onChange={(e) => updateField("author", e.target.value)}
//                 placeholder="Author name"
//                 className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//               Image URL
//             </label>
//             <input
//               type="url"
//               value={formData.image}
//               onChange={(e) => updateField("image", e.target.value)}
//               placeholder="https://example.com/image.jpg"
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//             />
//           </div>

//           {formData.image.trim() && (
//             <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">
//               <p className="border-b border-gray-100 px-3 py-2 text-xs font-bold text-gray-500 dark:border-white/10">
//                 IMAGE PREVIEW
//               </p>
//               <img
//                 src={formData.image}
//                 alt="Article preview"
//                 onError={(e) => {
//                   e.currentTarget.style.display = "none";
//                 }}
//                 className="h-40 w-full object-cover"
//               />
//             </div>
//           )}

//           {error && (
//             <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs font-medium text-red-500">
//               {error}
//             </p>
//           )}

//           <div className="flex gap-3 pt-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#a50d25]"
//             >
//               <Save size={16} />
//               {article ? "Update Article" : "Save Article"}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

// function DeleteModal({ article, onClose, onConfirm }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.94 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//       >
//         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
//           <AlertTriangle size={27} />
//         </div>

//         <h2 className="mt-5 text-center text-xl font-black text-gray-900 dark:text-white">
//           Remove Article?
//         </h2>

//         <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
//           Are you sure you want to remove{" "}
//           <span className="font-bold text-gray-900 dark:text-white">
//             {article?.title}
//           </span>{" "}
//           from this demo list?
//         </p>

//         <div className="mt-6 flex gap-3">
//           <button
//             onClick={onClose}
//             className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={onConfirm}
//             className="flex-1 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a50d25]"
//           >
//             Remove
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function ManageFeaturedNews() {
//   const [articles, setArticles] = useState(initialArticles);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [showModal, setShowModal] = useState(false);
//   const [editingArticle, setEditingArticle] = useState(null);
//   const [deletingArticle, setDeletingArticle] = useState(null);

//   const featuredCount = articles.filter((item) => item.featured).length;

//   const filteredArticles = useMemo(() => {
//     return articles.filter((item) => {
//       const matchesSearch = `${item.title} ${item.category} ${item.author}`
//         .toLowerCase()
//         .includes(search.toLowerCase().trim());

//       const matchesFilter =
//         filter === "All" ||
//         (filter === "Featured" && item.featured) ||
//         (filter === "Not Featured" && !item.featured);

//       return matchesSearch && matchesFilter;
//     });
//   }, [articles, search, filter]);

//   const openAddModal = () => {
//     setEditingArticle(null);
//     setShowModal(true);
//   };

//   const openEditModal = (article) => {
//     setEditingArticle(article);
//     setShowModal(true);
//   };

//   const handleSave = (data) => {
//     if (editingArticle) {
//       setArticles((previous) =>
//         previous.map((item) =>
//           item.id === editingArticle.id ? { ...item, ...data } : item
//         )
//       );
//     } else {
//       setArticles((previous) => [
//         {
//           id: Date.now(),
//           ...data,
//           featured: false,
//         },
//         ...previous,
//       ]);
//     }

//     setShowModal(false);
//     setEditingArticle(null);
//   };

//   const toggleFeatured = (id) => {
//     setArticles((previous) =>
//       previous.map((item) =>
//         item.id === id ? { ...item, featured: !item.featured } : item
//       )
//     );
//   };

//   const handleDelete = () => {
//     setArticles((previous) =>
//       previous.filter((item) => item.id !== deletingArticle.id)
//     );
//     setDeletingArticle(null);
//   };

//   const filterOptions = [
//     { label: "All", count: articles.length },
//     { label: "Featured", count: featuredCount },
//     { label: "Not Featured", count: articles.length - featuredCount },
//   ];

//   return (
//     <div className="w-full text-gray-900 dark:text-white">
//       {/* Header */}
//       <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
//         <div>
//           <Link
//             to="/admin"
//             className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
//           >
//             <ArrowLeft size={16} />
//             Back to Dashboard
//           </Link>

//           <div className="flex items-center gap-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
//               <Star size={24} />
//             </div>

//             <div>
//               <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                 Featured News
//               </h1>
//               <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                 Manage stories highlighted on your homepage.
//               </p>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={openAddModal}
//           className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl"
//         >
//           <PlusCircle size={18} />
//           Add Article
//         </button>
//       </div>

//       {/* Statistics */}
//       <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
//         <StatCard
//           title="Total Articles"
//           value={articles.length}
//           subtitle="All available demo articles"
//           icon={Newspaper}
//           color="bg-[#C8102E]/10 text-[#C8102E]"
//         />

//         <StatCard
//           title="Featured Articles"
//           value={featuredCount}
//           subtitle="Selected for homepage highlight"
//           icon={Star}
//           color="bg-yellow-500/10 text-yellow-500"
//         />

//         <StatCard
//           title="Not Featured"
//           value={articles.length - featuredCount}
//           subtitle="Available for future selection"
//           icon={Layers3}
//           color="bg-blue-500/10 text-blue-500"
//         />
//       </div>

//       {/* Featured Highlight */}
//       <div className="mb-7 flex flex-col justify-between gap-4 rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/[0.08] to-transparent p-5 sm:flex-row sm:items-center">
//         <div className="flex items-start gap-3">
//           <div className="rounded-xl bg-yellow-500/10 p-2.5 text-yellow-500">
//             <Star size={21} />
//           </div>

//           <div>
//             <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//               Homepage Featured Stories
//             </h3>
//             <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//               You currently have {featuredCount} featured article
//               {featuredCount !== 1 ? "s" : ""} selected.
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center gap-2 text-xs font-bold text-yellow-600 dark:text-yellow-400">
//           <CheckCircle2 size={16} />
//           {featuredCount} Selected
//         </div>
//       </div>

//       {/* Search and Filters */}
//       <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
//         <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-lg font-black">Article Library</h2>
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               Search and manage homepage featured articles.
//             </p>
//           </div>

//           <div className="relative w-full sm:max-w-xs">
//             <Search
//               size={18}
//               className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//             />

//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search title, category, author..."
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//             />

//             {search && (
//               <button
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#C8102E]"
//               >
//                 <X size={16} />
//               </button>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 px-5 py-4 dark:border-white/10">
//           <Filter size={15} className="mr-1 text-gray-400" />

//           {filterOptions.map((option) => (
//             <button
//               key={option.label}
//               onClick={() => setFilter(option.label)}
//               className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition ${
//                 filter === option.label
//                   ? "bg-[#C8102E] text-white shadow-md shadow-red-900/15"
//                   : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10"
//               }`}
//             >
//               {option.label}
//               <span
//                 className={`rounded-full px-1.5 py-0.5 text-[10px] ${
//                   filter === option.label
//                     ? "bg-white/20 text-white"
//                     : "bg-white text-gray-500 dark:bg-white/10 dark:text-gray-300"
//                 }`}
//               >
//                 {option.count}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Article Cards */}
//       <div className="mb-6 flex items-center justify-between gap-3">
//         <div>
//           <h2 className="text-lg font-black">All Articles</h2>
//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             {filteredArticles.length} articles found
//           </p>
//         </div>

//         <button
//           onClick={openAddModal}
//           className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
//         >
//           Add New
//           <PlusCircle size={16} />
//         </button>
//       </div>

//       <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//         {filteredArticles.map((article, index) => (
//           <motion.div
//             key={article.id}
//             layout
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.04 }}
//             className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-xl hover:shadow-red-900/5 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-[#C8102E]/40"
//           >
//             {/* Image */}
//             <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-[#22252b]">
//               <img
//                 src={article.image || "https://placehold.co/600x400?text=News"}
//                 alt={article.title}
//                 loading="lazy"
//                 onError={(e) => {
//                   e.currentTarget.src =
//                     "https://placehold.co/600x400?text=Image+Unavailable";
//                 }}
//                 className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

//               {article.featured && (
//                 <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1.5 text-[10px] font-black tracking-wider text-black shadow-lg">
//                   <Star size={12} fill="currentColor" />
//                   FEATURED
//                 </span>
//               )}

//               <span className="absolute bottom-3 left-3 rounded-lg border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
//                 {article.category}
//               </span>

//               <span className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs font-medium text-white">
//                 <Image size={13} />
//                 Article Image
//               </span>
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
//                 <UserRound size={14} />
//                 {article.author}
//               </div>

//               <h3 className="mb-5 min-h-[52px] text-base font-bold leading-6 text-gray-900 dark:text-white">
//                 {article.title}
//               </h3>

//               <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/10">
//                 <span
//                   className={`inline-flex items-center gap-1.5 text-xs font-bold ${
//                     article.featured
//                       ? "text-yellow-600 dark:text-yellow-400"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   <Star
//                     size={14}
//                     fill={article.featured ? "currentColor" : "none"}
//                   />
//                   {article.featured ? "Featured Story" : "Standard Story"}
//                 </span>

//                 <button
//                   onClick={() => openEditModal(article)}
//                   className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 transition hover:text-blue-500 dark:text-gray-400"
//                 >
//                   <Edit3 size={14} />
//                   Edit
//                 </button>
//               </div>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => toggleFeatured(article.id)}
//                   className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold transition duration-200 ${
//                     article.featured
//                       ? "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 dark:text-yellow-400"
//                       : "bg-[#C8102E] text-white hover:bg-[#a50d25]"
//                   }`}
//                 >
//                   <Star
//                     size={15}
//                     fill={article.featured ? "currentColor" : "none"}
//                   />
//                   {article.featured ? "Remove Featured" : "Make Featured"}
//                 </button>

//                 <button
//                   onClick={() => setDeletingArticle(article)}
//                   title="Remove article"
//                   className="rounded-lg border border-gray-200 p-2.5 text-gray-500 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-500 dark:border-white/10"
//                 >
//                   <Trash2 size={16} />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}

//         {filteredArticles.length === 0 && (
//           <div className="col-span-full rounded-2xl border border-gray-200 bg-white px-5 py-16 text-center dark:border-white/10 dark:bg-[#15171c]">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
//               <Newspaper size={25} />
//             </div>

//             <h3 className="mt-4 font-bold text-gray-800 dark:text-white">
//               No articles found
//             </h3>

//             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//               Try another search or change the filter.
//             </p>

//             <button
//               onClick={() => {
//                 setSearch("");
//                 setFilter("All");
//               }}
//               className="mt-4 text-sm font-bold text-[#C8102E] hover:underline"
//             >
//               Clear Filters
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Footer Note */}
//       <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-[#C8102E]/15 bg-gradient-to-r from-[#C8102E]/[0.06] to-transparent p-5 sm:flex-row sm:items-center sm:justify-between">
//         <div className="flex items-start gap-3">
//           <div className="rounded-xl bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
//             <Eye size={20} />
//           </div>

//           <div>
//             <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//               Manage your homepage highlights
//             </h3>
//             <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//               Select important stories to feature on your homepage.
//             </p>
//           </div>
//         </div>

//         <Link
//           to="/"
//           target="_blank"
//           className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
//         >
//           View Website
//           <ExternalLink size={15} />
//         </Link>
//       </div>

//       {/* Modals */}
//       <AnimatePresence>
//         {showModal && (
//           <ArticleModal
//             article={editingArticle}
//             onClose={() => {
//               setShowModal(false);
//               setEditingArticle(null);
//             }}
//             onSave={handleSave}
//           />
//         )}

//         {deletingArticle && (
//           <DeleteModal
//             article={deletingArticle}
//             onClose={() => setDeletingArticle(null)}
//             onConfirm={handleDelete}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default ManageFeaturedNews;



import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Search,
  Newspaper,
  Image as ImageIcon,
  X,
  CheckCircle2,
  Eye,
  Layers3,
  UserRound,
  Filter,
  ExternalLink,
  LoaderCircle,
  RefreshCw,
  AlertCircle,
  PlusCircle,
} from "lucide-react";

import API from "../services/api";

function StatCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-red-900/5 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-[#C8102E]/50"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            {value}
          </h2>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            {subtitle}
          </p>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={22} />
        </div>
      </div>
    </motion.div>
  );
}

function ManageFeaturedNews() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState("success");

  // Fetch actual articles from backend
  const loadArticles = useCallback(async () => {
    try {
      setLoading(true);

      const response = await API.get("articles/");
      const data = response.data;

      const articleList = Array.isArray(data)
        ? data
        : Array.isArray(data.results)
          ? data.results
          : [];

      setArticles(articleList);
    } catch (error) {
      console.error("Featured articles loading error:", error);

      setNotice(
        error.response?.data?.detail ||
          "Unable to load articles. Please refresh the page."
      );
      setNoticeType("error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  // Normalize backend status
  const isPublished = (article) =>
    String(article.status || "").toUpperCase() === "PUBLISHED";

  const featuredCount = articles.filter(
    (item) => item.is_featured && isPublished(item)
  ).length;

  const publishedCount = articles.filter(isPublished).length;

  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      const title = item.title || "";
      const category = item.category_name || "";
      const author = item.author_name || "";

      const matchesSearch = `${title} ${category} ${author}`
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      const matchesFilter =
        filter === "All" ||
        (filter === "Featured" && item.is_featured) ||
        (filter === "Not Featured" && !item.is_featured);

      return matchesSearch && matchesFilter;
    });
  }, [articles, search, filter]);

  // Extract backend errors
  const getErrorMessage = (error) => {
    const data = error.response?.data;

    if (data?.detail) return data.detail;

    if (data && typeof data === "object") {
      const firstError = Object.entries(data)[0];

      if (firstError) {
        const [field, value] = firstError;

        return `${field}: ${
          Array.isArray(value) ? value.join(", ") : String(value)
        }`;
      }
    }

    return "Something went wrong. Please try again.";
  };

  // Toggle featured status in database
  const toggleFeatured = async (article) => {
    if (!isPublished(article)) {
      setNotice("Only published articles can appear in homepage featured news.");
      setNoticeType("error");
      return;
    }

    try {
      setUpdatingId(article.id);
      setNotice("");

      const newFeaturedStatus = !article.is_featured;

      await API.patch(`articles/${article.id}/`, {
        is_featured: newFeaturedStatus,
      });

      setArticles((previous) =>
        previous.map((item) =>
          item.id === article.id
            ? { ...item, is_featured: newFeaturedStatus }
            : item
        )
      );

      setNotice(
        newFeaturedStatus
          ? "Article added to homepage featured news!"
          : "Article removed from homepage featured news."
      );
      setNoticeType("success");
    } catch (error) {
      console.error("Featured status update error:", error);

      setNotice(getErrorMessage(error));
      setNoticeType("error");
    } finally {
      setUpdatingId(null);
    }
  };

  const filterOptions = [
    { label: "All", count: articles.length },
    { label: "Featured", count: featuredCount },
    { label: "Not Featured", count: articles.length - featuredCount },
  ];

  const getImage = (article) => {
    return (
      article.featured_image ||
      "https://placehold.co/600x400?text=News"
    );
  };

  const formatDate = (date) => {
    if (!date) return "Recently added";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="w-full text-gray-900 dark:text-white">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <Link
            to="/admin"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
              <Star size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                Featured News
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage stories highlighted on your homepage.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={loadArticles}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] disabled:opacity-50 dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
          >
            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>

          <Link
            to="/admin/articles/new"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl"
          >
            <PlusCircle size={18} />
            Create Article
          </Link>
        </div>
      </div>

      {/* Notice */}
      {notice && (
        <div
          className={`mb-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
            noticeType === "success"
              ? "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-600 dark:text-emerald-400"
              : "border-red-500/20 bg-red-500/[0.06] text-red-600 dark:text-red-400"
          }`}
        >
          {noticeType === "success" ? (
            <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
          ) : (
            <AlertCircle size={17} className="mt-0.5 shrink-0" />
          )}

          <span>{notice}</span>

          <button
            onClick={() => setNotice("")}
            className="ml-auto shrink-0"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Statistics */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Articles"
          value={articles.length}
          subtitle="Articles available in database"
          icon={Newspaper}
          color="bg-[#C8102E]/10 text-[#C8102E]"
        />

        <StatCard
          title="Featured Articles"
          value={featuredCount}
          subtitle="Published homepage highlights"
          icon={Star}
          color="bg-yellow-500/10 text-yellow-500"
        />

        <StatCard
          title="Published Articles"
          value={publishedCount}
          subtitle="Available for homepage selection"
          icon={Layers3}
          color="bg-blue-500/10 text-blue-500"
        />
      </div>

      {/* Featured Highlight */}
      <div className="mb-7 flex flex-col justify-between gap-4 rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/[0.08] to-transparent p-5 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-yellow-500/10 p-2.5 text-yellow-500">
            <Star size={21} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Homepage Featured Stories
            </h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
              You currently have {featuredCount} published featured article
              {featuredCount !== 1 ? "s" : ""} selected.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-yellow-600 dark:text-yellow-400">
          <CheckCircle2 size={16} />
          {featuredCount} Selected
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-black">Article Library</h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Search and manage homepage featured articles.
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, category, author..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#C8102E]"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 px-5 py-4 dark:border-white/10">
          <Filter size={15} className="mr-1 text-gray-400" />

          {filterOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => setFilter(option.label)}
              className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition ${
                filter === option.label
                  ? "bg-[#C8102E] text-white shadow-md shadow-red-900/15"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10"
              }`}
            >
              {option.label}

              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  filter === option.label
                    ? "bg-white/20 text-white"
                    : "bg-white text-gray-500 dark:bg-white/10 dark:text-gray-300"
                }`}
              >
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Article Cards */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-black">All Articles</h2>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {filteredArticles.length} articles found
          </p>
        </div>

        <Link
          to="/admin/articles"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
        >
          Manage Articles
          <ExternalLink size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <div className="col-span-full rounded-2xl border border-gray-200 bg-white px-5 py-16 text-center dark:border-white/10 dark:bg-[#15171c]">
            <LoaderCircle
              size={30}
              className="mx-auto animate-spin text-[#C8102E]"
            />
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Loading articles...
            </p>
          </div>
        ) : (
          <>
            {filteredArticles.map((article, index) => {
              const published = isPublished(article);
              const featured = Boolean(article.is_featured);
              const image = getImage(article);

              return (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-xl hover:shadow-red-900/5 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-[#C8102E]/40"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-[#22252b]">
                    <img
                      src={image}
                      alt={article.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400?text=Image+Unavailable";
                      }}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                    {featured && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1.5 text-[10px] font-black tracking-wider text-black shadow-lg">
                        <Star size={12} fill="currentColor" />
                        FEATURED
                      </span>
                    )}

                    <span className="absolute bottom-3 left-3 rounded-lg border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                      {article.category_name || "Uncategorized"}
                    </span>

                    <span className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs font-medium text-white">
                      <ImageIcon size={13} />
                      Article Image
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-2">
                        <UserRound size={14} />
                        {article.author_name || "Editorial Team"}
                      </span>

                      <span>{formatDate(article.published_at || article.created_at)}</span>
                    </div>

                    <h3 className="mb-5 min-h-[52px] text-base font-bold leading-6 text-gray-900 dark:text-white">
                      {article.title}
                    </h3>

                    <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/10">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                          featured
                            ? "text-yellow-600 dark:text-yellow-400"
                            : "text-gray-400"
                        }`}
                      >
                        <Star
                          size={14}
                          fill={featured ? "currentColor" : "none"}
                        />
                        {featured ? "Featured Story" : "Standard Story"}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                          published
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                        }`}
                      >
                        {article.status || "Draft"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFeatured(article)}
                        disabled={!published || updatingId === article.id}
                        title={
                          published
                            ? "Toggle homepage featured status"
                            : "Publish this article before featuring it"
                        }
                        className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold transition duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${
                          featured
                            ? "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 dark:text-yellow-400"
                            : "bg-[#C8102E] text-white hover:bg-[#a50d25]"
                        }`}
                      >
                        {updatingId === article.id ? (
                          <LoaderCircle size={15} className="animate-spin" />
                        ) : (
                          <Star
                            size={15}
                            fill={featured ? "currentColor" : "none"}
                          />
                        )}

                        {updatingId === article.id
                          ? "Updating..."
                          : featured
                            ? "Remove Featured"
                            : "Make Featured"}
                      </button>

                      <Link
                        to={`/admin/articles/new?edit=${article.id}`}
                        title="Edit article"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 text-gray-500 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 dark:border-white/10"
                      >
                        <Eye size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {filteredArticles.length === 0 && (
              <div className="col-span-full rounded-2xl border border-gray-200 bg-white px-5 py-16 text-center dark:border-white/10 dark:bg-[#15171c]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
                  <Newspaper size={25} />
                </div>

                <h3 className="mt-4 font-bold text-gray-800 dark:text-white">
                  No articles found
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Try another search or change the filter.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setFilter("All");
                  }}
                  className="mt-4 text-sm font-bold text-[#C8102E] hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer Note */}
      <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-[#C8102E]/15 bg-gradient-to-r from-[#C8102E]/[0.06] to-transparent p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
            <Eye size={20} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Manage your homepage highlights
            </h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
              Only published articles marked as featured appear in homepage highlights.
            </p>
          </div>
        </div>

        <Link
          to="/"
          target="_blank"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
        >
          View Website
          <ExternalLink size={15} />
        </Link>
      </div>
    </div>
  );
}

export default ManageFeaturedNews;
