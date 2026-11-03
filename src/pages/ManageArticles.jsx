
// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Search,
//   PlusCircle,
//   Edit3,
//   Trash2,
//   Eye,
//   Filter,
//   CalendarDays,
//   FileText,
//   Newspaper,
//   CheckCircle2,
//   Clock3,
//   X,
//   UserRound,
//   Tag,
//   EyeOff,
//   ArrowUpRight,
// } from "lucide-react";

// const initialArticles = [
//   {
//     id: 1,
//     title: "भारत में डिजिटल तकनीक और विकास की नई संभावनाएं",
//     category: "टेक्नोलॉजी",
//     author: "Admin",
//     date: "02 Nov 2026",
//     status: "Published",
//     views: "12.5K",
//     summary: "भारत में डिजिटल तकनीक के विस्तार और नए अवसरों पर एक विशेष रिपोर्ट।",
//   },
//   {
//     id: 2,
//     title: "देश की अर्थव्यवस्था से जुड़ी महत्वपूर्ण खबरें",
//     category: "बिजनेस",
//     author: "Admin",
//     date: "02 Nov 2026",
//     status: "Draft",
//     views: "—",
//     summary: "देश की अर्थव्यवस्था और व्यापार से जुड़ी महत्वपूर्ण जानकारियां।",
//   },
//   {
//     id: 3,
//     title: "युवाओं के लिए शिक्षा और रोजगार के अवसर",
//     category: "शिक्षा",
//     author: "Editor",
//     date: "01 Nov 2026",
//     status: "Published",
//     views: "8.2K",
//     summary: "युवाओं के लिए शिक्षा, कौशल विकास और रोजगार के नए अवसर।",
//   },
//   {
//     id: 4,
//     title: "दुनिया में AI और नई तकनीक का बढ़ता प्रभाव",
//     category: "दुनिया",
//     author: "Admin",
//     date: "31 Oct 2026",
//     status: "Pending",
//     views: "—",
//     summary: "दुनिया में आर्टिफिशियल इंटेलिजेंस के बढ़ते प्रभाव पर नजर।",
//   },
//   {
//     id: 5,
//     title: "भारत में खेल जगत की बड़ी खबरें",
//     category: "खेल",
//     author: "Editor",
//     date: "30 Oct 2026",
//     status: "Published",
//     views: "5.4K",
//     summary: "भारतीय खेल जगत की प्रमुख गतिविधियों और अपडेट्स का सार।",
//   },
// ];

// const filters = ["All", "Published", "Draft", "Pending"];

// function StatusBadge({ status }) {
//   const styles = {
//     Published:
//       "bg-green-500/10 text-green-600 dark:text-green-400",
//     Draft:
//       "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
//     Pending:
//       "bg-blue-500/10 text-blue-600 dark:text-blue-400",
//   };

//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold ${
//         styles[status] || "bg-gray-500/10 text-gray-500"
//       }`}
//     >
//       <span className="h-1.5 w-1.5 rounded-full bg-current" />
//       {status}
//     </span>
//   );
// }

// function ManageArticles() {
//   const [articles, setArticles] = useState(initialArticles);
//   const [search, setSearch] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedArticle, setSelectedArticle] = useState(null);
//   const [deleteId, setDeleteId] = useState(null);

//   const statistics = useMemo(
//     () => [
//       {
//         label: "Total Articles",
//         value: articles.length,
//         icon: Newspaper,
//         color: "text-blue-500",
//         bg: "bg-blue-500/10",
//         description: "All news articles",
//       },
//       {
//         label: "Published",
//         value: articles.filter((a) => a.status === "Published").length,
//         icon: CheckCircle2,
//         color: "text-green-500",
//         bg: "bg-green-500/10",
//         description: "Live on website",
//       },
//       {
//         label: "Drafts",
//         value: articles.filter((a) => a.status === "Draft").length,
//         icon: FileText,
//         color: "text-yellow-500",
//         bg: "bg-yellow-500/10",
//         description: "Saved for later",
//       },
//       {
//         label: "Pending Review",
//         value: articles.filter((a) => a.status === "Pending").length,
//         icon: Clock3,
//         color: "text-purple-500",
//         bg: "bg-purple-500/10",
//         description: "Awaiting approval",
//       },
//     ],
//     [articles]
//   );

//   const filteredArticles = useMemo(() => {
//     return articles.filter((article) => {
//       const query = search.toLowerCase().trim();

//       const matchesSearch =
//         article.title.toLowerCase().includes(query) ||
//         article.category.toLowerCase().includes(query) ||
//         article.author.toLowerCase().includes(query);

//       const matchesFilter =
//         activeFilter === "All" || article.status === activeFilter;

//       return matchesSearch && matchesFilter;
//     });
//   }, [articles, search, activeFilter]);

//   const deleteArticle = () => {
//     setArticles((previous) =>
//       previous.filter((article) => article.id !== deleteId)
//     );
//     setDeleteId(null);
//   };

//   return (
//     <div className="space-y-7">
//       {/* Page Heading */}
//       <section className="flex flex-wrap items-center justify-between gap-4">
//         <div>
//           <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-gray-400">
//             <Link
//               to="/admin"
//               className="transition hover:text-[#C8102E]"
//             >
//               Dashboard
//             </Link>
//             <span>/</span>
//             <span className="text-[#C8102E]">Articles</span>
//           </div>

//           <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
//             Manage Articles
//           </h2>

//           <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//             View, search and manage all your news articles.
//           </p>
//         </div>

//         <Link
//           to="/admin/articles/new"
//           className="flex items-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:-translate-y-0.5 hover:bg-[#a90d27]"
//         >
//           <PlusCircle size={18} />
//           Add New Article
//         </Link>
//       </section>

//       {/* Statistics */}
//       <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//         {statistics.map((stat) => {
//           const Icon = stat.icon;

//           return (
//             <div
//               key={stat.label}
//               className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 dark:border-white/10 dark:bg-[#15171c]"
//             >
//               <div className="flex items-start justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                     {stat.label}
//                   </p>

//                   <h3 className="mt-3 text-3xl font-black tracking-tight">
//                     {stat.value}
//                   </h3>
//                 </div>

//                 <div
//                   className={`rounded-xl p-3 ${stat.bg} ${stat.color} transition duration-300 group-hover:scale-110`}
//                 >
//                   <Icon size={21} />
//                 </div>
//               </div>

//               <p className="mt-3 text-xs text-gray-400">
//                 {stat.description}
//               </p>
//             </div>
//           );
//         })}
//       </section>

//       {/* Articles Section */}
//       <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
//         {/* Section Header */}
//         <div className="flex flex-col gap-4 border-b border-gray-200 p-5 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <div className="flex items-center gap-2">
//               <div className="rounded-lg bg-[#C8102E]/10 p-2 text-[#C8102E]">
//                 <Newspaper size={18} />
//               </div>

//               <h3 className="text-base font-black">
//                 All News Articles
//               </h3>
//             </div>

//             <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
//               Manage your published and unpublished stories.
//             </p>
//           </div>

//           {/* Search */}
//           <div className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f] lg:w-[320px]">
//             <Search size={18} className="shrink-0 text-gray-400" />

//             <input
//               type="text"
//               value={search}
//               onChange={(event) => setSearch(event.target.value)}
//               placeholder="Search title, category, author..."
//               className="w-full bg-transparent py-3 text-xs outline-none placeholder:text-gray-400"
//             />

//             {search && (
//               <button
//                 type="button"
//                 onClick={() => setSearch("")}
//                 aria-label="Clear search"
//                 className="rounded-md p-1 text-gray-400 transition hover:bg-gray-200 hover:text-red-500 dark:hover:bg-white/10"
//               >
//                 <X size={15} />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 px-5 py-4 dark:border-white/10">
//           <Filter size={16} className="mr-1 text-gray-400" />

//           {filters.map((filter) => {
//             const count =
//               filter === "All"
//                 ? articles.length
//                 : articles.filter((a) => a.status === filter).length;

//             return (
//               <button
//                 key={filter}
//                 type="button"
//                 onClick={() => setActiveFilter(filter)}
//                 className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition ${
//                   activeFilter === filter
//                     ? "bg-[#C8102E] text-white shadow-md shadow-red-900/20"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
//                 }`}
//               >
//                 {filter}
//                 <span
//                   className={`rounded-md px-1.5 py-0.5 text-[10px] ${
//                     activeFilter === filter
//                       ? "bg-white/20 text-white"
//                       : "bg-gray-200 text-gray-500 dark:bg-white/10 dark:text-gray-400"
//                   }`}
//                 >
//                   {count}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[850px] text-left text-sm">
//             <thead className="bg-gray-50 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500 dark:bg-white/[0.03] dark:text-gray-400">
//               <tr>
//                 <th className="px-5 py-4">Article</th>
//                 <th className="px-5 py-4">Category</th>
//                 <th className="px-5 py-4">Author</th>
//                 <th className="px-5 py-4">Date</th>
//                 <th className="px-5 py-4">Views</th>
//                 <th className="px-5 py-4">Status</th>
//                 <th className="px-5 py-4">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredArticles.map((article) => (
//                 <tr
//                   key={article.id}
//                   className="border-t border-gray-100 transition duration-200 hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/[0.025]"
//                 >
//                   <td className="max-w-[300px] px-5 py-5">
//                     <div className="flex items-start gap-3">
//                       <div className="shrink-0 rounded-lg bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
//                         <FileText size={17} />
//                       </div>

//                       <div>
//                         <p className="font-bold leading-6 text-gray-800 dark:text-gray-100">
//                           {article.title}
//                         </p>

//                         <p className="mt-1 text-[11px] text-gray-400">
//                           Article ID: #{article.id}
//                         </p>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="px-5 py-5">
//                     <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
//                       <Tag size={13} />
//                       {article.category}
//                     </span>
//                   </td>

//                   <td className="px-5 py-5">
//                     <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
//                       <UserRound size={14} className="text-gray-400" />
//                       {article.author}
//                     </span>
//                   </td>

//                   <td className="px-5 py-5">
//                     <span className="flex items-center gap-2 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">
//                       <CalendarDays size={14} />
//                       {article.date}
//                     </span>
//                   </td>

//                   <td className="px-5 py-5 text-xs font-semibold text-gray-500 dark:text-gray-400">
//                     {article.views}
//                   </td>

//                   <td className="px-5 py-5">
//                     <StatusBadge status={article.status} />
//                   </td>

//                   <td className="px-5 py-5">
//                     <div className="flex items-center gap-1.5">
//                       <button
//                         type="button"
//                         title="Preview Article"
//                         aria-label="Preview article"
//                         onClick={() => setSelectedArticle(article)}
//                         className="rounded-lg p-2 text-gray-500 transition hover:bg-blue-500/10 hover:text-blue-500"
//                       >
//                         <Eye size={17} />
//                       </button>

//                       <button
//                         type="button"
//                         title="Edit Article"
//                         aria-label="Edit article"
//                         onClick={() =>
//                           alert(
//                             "Article editing will be connected when the backend is ready."
//                           )
//                         }
//                         className="rounded-lg p-2 text-gray-500 transition hover:bg-green-500/10 hover:text-green-600"
//                       >
//                         <Edit3 size={17} />
//                       </button>

//                       <button
//                         type="button"
//                         title="Delete Article"
//                         aria-label="Delete article"
//                         onClick={() => setDeleteId(article.id)}
//                         className="rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-500"
//                       >
//                         <Trash2 size={17} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Empty State */}
//           {filteredArticles.length === 0 && (
//             <div className="px-5 py-16 text-center">
//               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
//                 <EyeOff size={28} />
//               </div>

//               <h3 className="mt-5 text-base font-black">
//                 No articles found
//               </h3>

//               <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                 Try another search or select a different filter.
//               </p>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearch("");
//                   setActiveFilter("All");
//                 }}
//                 className="mt-5 text-xs font-bold text-[#C8102E] hover:underline"
//               >
//                 Clear all filters
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 px-5 py-4 dark:border-white/10">
//           <p className="text-xs text-gray-500 dark:text-gray-400">
//             Showing{" "}
//             <span className="font-bold text-gray-800 dark:text-white">
//               {filteredArticles.length}
//             </span>{" "}
//             of{" "}
//             <span className="font-bold text-gray-800 dark:text-white">
//               {articles.length}
//             </span>{" "}
//             articles
//           </p>

//           <Link
//             to="/admin/articles/new"
//             className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] transition hover:gap-2.5"
//           >
//             Create New Article
//             <ArrowUpRight size={14} />
//           </Link>
//         </div>
//       </section>

//       {/* Article Preview Modal */}
//       {selectedArticle && (
//         <div
//           className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) {
//               setSelectedArticle(null);
//             }
//           }}
//         >
//           <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#15171c]">
//             <div className="flex items-center justify-between border-b border-gray-200 p-5 dark:border-white/10">
//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-widest text-[#C8102E]">
//                   Article Preview
//                 </p>
//                 <h3 className="mt-1 text-lg font-black">
//                   Preview Details
//                 </h3>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedArticle(null)}
//                 aria-label="Close preview"
//                 className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-red-500 dark:hover:bg-white/10"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             <div className="space-y-5 p-5">
//               <div className="flex flex-wrap items-center gap-2">
//                 <StatusBadge status={selectedArticle.status} />

//                 <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] font-semibold text-gray-500 dark:bg-white/5 dark:text-gray-400">
//                   {selectedArticle.category}
//                 </span>
//               </div>

//               <h2 className="text-xl font-black leading-relaxed sm:text-2xl">
//                 {selectedArticle.title}
//               </h2>

//               <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
//                 {selectedArticle.summary}
//               </p>

//               <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
//                     Author
//                   </p>
//                   <p className="mt-2 text-sm font-bold">
//                     {selectedArticle.author}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
//                     Published Date
//                   </p>
//                   <p className="mt-2 text-sm font-bold">
//                     {selectedArticle.date}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
//                     Article ID
//                   </p>
//                   <p className="mt-2 text-sm font-bold">
//                     #{selectedArticle.id}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
//                     Total Views
//                   </p>
//                   <p className="mt-2 text-sm font-bold">
//                     {selectedArticle.views}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end border-t border-gray-200 p-4 dark:border-white/10">
//               <button
//                 type="button"
//                 onClick={() => setSelectedArticle(null)}
//                 className="rounded-lg bg-[#C8102E] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#a90d27]"
//               >
//                 Close Preview
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {deleteId !== null && (
//         <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#15171c]">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
//               <Trash2 size={25} />
//             </div>

//             <h3 className="mt-5 text-center text-lg font-black">
//               Delete Article?
//             </h3>

//             <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
//               Are you sure you want to delete this article? This action
//               cannot be undone.
//             </p>

//             <div className="mt-6 flex gap-3">
//               <button
//                 type="button"
//                 onClick={() => setDeleteId(null)}
//                 className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-xs font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//               >
//                 Cancel
//               </button>

//               <button
//                 type="button"
//                 onClick={deleteArticle}
//                 className="flex-1 rounded-xl bg-[#C8102E] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#a90d27]"
//               >
//                 Delete Article
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ManageArticles;




import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  PlusCircle,
  Edit3,
  Trash2,
  Eye,
  Filter,
  CalendarDays,
  FileText,
  Newspaper,
  CheckCircle2,
  Clock3,
  X,
  UserRound,
  Tag,
  EyeOff,
  ArrowUpRight,
  RefreshCw,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

import API from "../services/api";

const filters = ["All", "Published", "Draft", "Pending"];

const normalizeStatus = (status) => {
  const value = String(status || "").toUpperCase();

  if (value === "PUBLISHED") return "Published";
  if (value === "DRAFT") return "Draft";

  if (
    value === "PENDING" ||
    value === "PENDING_REVIEW" ||
    value === "IN_REVIEW"
  ) {
    return "Pending";
  }

  return value || "Draft";
};

const formatDate = (date) => {
  if (!date) return "—";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "—";

  return parsedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatViews = (views) => {
  if (views === null || views === undefined) return "—";

  const number = Number(views);

  if (Number.isNaN(number)) return "—";

  return number >= 1000
    ? `${(number / 1000).toFixed(1)}K`
    : number.toLocaleString("en-IN");
};

const normalizeArticle = (article) => ({
  ...article,
  status: normalizeStatus(article.status),
  category: article.category_name || article.category?.name || "Uncategorized",
  author: article.author_name || article.author?.username || "Unknown",
  date: formatDate(
    article.published_at || article.created_at || article.updated_at
  ),
  views: formatViews(article.views_count),
  summary:
    article.excerpt ||
    article.subtitle ||
    article.content ||
    "No article description available.",
});

function StatusBadge({ status }) {
  const styles = {
    Published: "bg-green-500/10 text-green-600 dark:text-green-400",
    Draft: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    Pending: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold ${
        styles[status] || "bg-gray-500/10 text-gray-500"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function ManageArticles() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  // Fetch articles from Django API
  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("articles/");

      // Supports both paginated and non-paginated DRF responses
      const data = response.data;
      const articleList = Array.isArray(data)
        ? data
        : Array.isArray(data.results)
          ? data.results
          : [];

      setArticles(articleList.map(normalizeArticle));
    } catch (err) {
      console.error("Articles fetch error:", err);

      setError(
        err.response?.data?.detail ||
          "Unable to load articles. Please check your connection and login."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Statistics
  const statistics = useMemo(
    () => [
      {
        label: "Total Articles",
        value: articles.length,
        icon: Newspaper,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        description: "All news articles",
      },
      {
        label: "Published",
        value: articles.filter((a) => a.status === "Published").length,
        icon: CheckCircle2,
        color: "text-green-500",
        bg: "bg-green-500/10",
        description: "Live on website",
      },
      {
        label: "Drafts",
        value: articles.filter((a) => a.status === "Draft").length,
        icon: FileText,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        description: "Saved for later",
      },
      {
        label: "Pending Review",
        value: articles.filter((a) => a.status === "Pending").length,
        icon: Clock3,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        description: "Awaiting approval",
      },
    ],
    [articles]
  );

  // Search and filters
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        String(article.title || "").toLowerCase().includes(query) ||
        String(article.category || "").toLowerCase().includes(query) ||
        String(article.author || "").toLowerCase().includes(query);

      const matchesFilter =
        activeFilter === "All" || article.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [articles, search, activeFilter]);

  // Delete article from database
  const deleteArticle = async () => {
    if (deleteId === null || deleting) return;

    try {
      setDeleting(true);
      setError("");

      await API.delete(`articles/${deleteId}/`);

      setArticles((previous) =>
        previous.filter((article) => article.id !== deleteId)
      );

      if (selectedArticle?.id === deleteId) {
        setSelectedArticle(null);
      }

      setDeleteId(null);
    } catch (err) {
      console.error("Article delete error:", err);

      setError(
        err.response?.data?.detail ||
          "Unable to delete this article. Please try again."
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-7">
      {/* Page Heading */}
      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-gray-400">
            <Link to="/admin" className="transition hover:text-[#C8102E]">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-[#C8102E]">Articles</span>
          </div>

          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            Manage Articles
          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            View, search and manage all your news articles.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={fetchArticles}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>

          <Link
            to="/admin/articles/new"
            className="flex items-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:-translate-y-0.5 hover:bg-[#a90d27]"
          >
            <PlusCircle size={18} />
            Add New Article
          </Link>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-600 dark:text-red-400">
          <AlertCircle size={19} className="mt-0.5 shrink-0" />
          <div className="flex-1">{error}</div>
          <button
            type="button"
            onClick={() => setError("")}
            aria-label="Close error"
          >
            <X size={17} />
          </button>
        </div>
      )}

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 dark:border-white/10 dark:bg-[#15171c]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-tight">
                    {loading ? "—" : stat.value}
                  </h3>
                </div>

                <div
                  className={`rounded-xl p-3 ${stat.bg} ${stat.color} transition duration-300 group-hover:scale-110`}
                >
                  <Icon size={21} />
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-400">
                {stat.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* Articles Section */}
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-gray-200 p-5 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-[#C8102E]/10 p-2 text-[#C8102E]">
                <Newspaper size={18} />
              </div>

              <h3 className="text-base font-black">All News Articles</h3>
            </div>

            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Manage your published and unpublished stories.
            </p>
          </div>

          {/* Search */}
          <div className="flex w-full items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f] lg:w-[320px]">
            <Search size={18} className="shrink-0 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search title, category, author..."
              className="w-full bg-transparent py-3 text-xs outline-none placeholder:text-gray-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="rounded-md p-1 text-gray-400 transition hover:bg-gray-200 hover:text-red-500 dark:hover:bg-white/10"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 px-5 py-4 dark:border-white/10">
          <Filter size={16} className="mr-1 text-gray-400" />

          {filters.map((filter) => {
            const count =
              filter === "All"
                ? articles.length
                : articles.filter((a) => a.status === filter).length;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition ${
                  activeFilter === filter
                    ? "bg-[#C8102E] text-white shadow-md shadow-red-900/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                }`}
              >
                {filter}
                <span
                  className={`rounded-md px-1.5 py-0.5 text-[10px] ${
                    activeFilter === filter
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 text-gray-500 dark:bg-white/10 dark:text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-gray-50 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-500 dark:bg-white/[0.03] dark:text-gray-400">
              <tr>
                <th className="px-5 py-4">Article</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Author</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Views</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="px-5 py-16 text-center">
                    <LoaderCircle
                      size={30}
                      className="mx-auto animate-spin text-[#C8102E]"
                    />
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      Loading articles from database...
                    </p>
                  </td>
                </tr>
              ) : (
                filteredArticles.map((article) => (
                  <tr
                    key={article.id}
                    className="border-t border-gray-100 transition duration-200 hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/[0.025]"
                  >
                    <td className="max-w-[300px] px-5 py-5">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 rounded-lg bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
                          <FileText size={17} />
                        </div>

                        <div>
                          <p className="font-bold leading-6 text-gray-800 dark:text-gray-100">
                            {article.title}
                          </p>

                          <p className="mt-1 text-[11px] text-gray-400">
                            Article ID: #{article.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                        <Tag size={13} />
                        {article.category}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                        <UserRound size={14} className="text-gray-400" />
                        {article.author}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <span className="flex items-center gap-2 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">
                        <CalendarDays size={14} />
                        {article.date}
                      </span>
                    </td>

                    <td className="px-5 py-5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {article.views}
                    </td>

                    <td className="px-5 py-5">
                      <StatusBadge status={article.status} />
                    </td>

                    <td className="px-5 py-5">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          title="Preview Article"
                          aria-label="Preview article"
                          onClick={() => setSelectedArticle(article)}
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-blue-500/10 hover:text-blue-500"
                        >
                          <Eye size={17} />
                        </button>

                        <Link
                          to={`/admin/articles/new?edit=${article.id}`}
                          title="Edit Article"
                          aria-label="Edit article"
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-green-500/10 hover:text-green-600"
                        >
                          <Edit3 size={17} />
                        </Link>

                        <button
                          type="button"
                          title="Delete Article"
                          aria-label="Delete article"
                          onClick={() => setDeleteId(article.id)}
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-500"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Empty State */}
          {!loading && filteredArticles.length === 0 && (
            <div className="px-5 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
                <EyeOff size={28} />
              </div>

              <h3 className="mt-5 text-base font-black">
                No articles found
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Try another search or select a different filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
                className="mt-5 text-xs font-bold text-[#C8102E] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 px-5 py-4 dark:border-white/10">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-bold text-gray-800 dark:text-white">
              {loading ? "—" : filteredArticles.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-800 dark:text-white">
              {loading ? "—" : articles.length}
            </span>{" "}
            articles
          </p>

          <Link
            to="/admin/articles/new"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] transition hover:gap-2.5"
          >
            Create New Article
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* Article Preview Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedArticle(null);
            }
          }}
        >
          <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#15171c]">
            <div className="flex items-center justify-between border-b border-gray-200 p-5 dark:border-white/10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#C8102E]">
                  Article Preview
                </p>
                <h3 className="mt-1 text-lg font-black">Preview Details</h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close preview"
                className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-red-500 dark:hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={selectedArticle.status} />

                <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] font-semibold text-gray-500 dark:bg-white/5 dark:text-gray-400">
                  {selectedArticle.category}
                </span>
              </div>

              <h2 className="text-xl font-black leading-relaxed sm:text-2xl">
                {selectedArticle.title}
              </h2>

              <p className="whitespace-pre-line text-sm leading-7 text-gray-500 dark:text-gray-400">
                {selectedArticle.summary}
              </p>

              <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-4 dark:bg-white/[0.03]">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Author
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    {selectedArticle.author}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Published Date
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    {selectedArticle.date}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Article ID
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    #{selectedArticle.id}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Total Views
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    {selectedArticle.views}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end border-t border-gray-200 p-4 dark:border-white/10">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="rounded-lg bg-[#C8102E] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#a90d27]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#15171c]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
              <Trash2 size={25} />
            </div>

            <h3 className="mt-5 text-center text-lg font-black">
              Delete Article?
            </h3>

            <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this article? This action
              cannot be undone.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                disabled={deleting}
                onClick={() => setDeleteId(null)}
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-xs font-bold text-gray-600 transition hover:bg-gray-100 disabled:opacity-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={deleting}
                onClick={deleteArticle}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#a90d27] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleting && <LoaderCircle size={15} className="animate-spin" />}
                {deleting ? "Deleting..." : "Delete Article"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageArticles;
