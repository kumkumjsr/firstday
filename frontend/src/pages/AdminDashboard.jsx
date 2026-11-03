
// import { Link } from "react-router-dom";
// import {
//   Newspaper,
//   FileText,
//   Eye,
//   TrendingUp,
//   ArrowUpRight,
//   Plus,
//   FolderOpen,
//   Users,
//   Clock3,
//   CalendarDays,
//   CheckCircle2,
//   Activity,
//   ChevronRight,
//   PenLine,
//   Zap,
//   FilePlus2,
// } from "lucide-react";

// const stats = [
//   {
//     label: "Total Articles",
//     value: "128",
//     change: "+12 this month",
//     icon: Newspaper,
//     color: "text-blue-500",
//     bg: "bg-blue-500/10",
//     trend: [35, 50, 42, 65, 48, 78, 90],
//   },
//   {
//     label: "Published Articles",
//     value: "96",
//     change: "+8 this month",
//     icon: CheckCircle2,
//     color: "text-emerald-500",
//     bg: "bg-emerald-500/10",
//     trend: [30, 45, 40, 60, 55, 75, 88],
//   },
//   {
//     label: "Draft Articles",
//     value: "24",
//     change: "Awaiting publication",
//     icon: Clock3,
//     color: "text-amber-500",
//     bg: "bg-amber-500/10",
//     trend: [65, 45, 60, 40, 55, 35, 48],
//   },
//   {
//     label: "Total Views",
//     value: "45.8K",
//     change: "+18% this month",
//     icon: Eye,
//     color: "text-purple-500",
//     bg: "bg-purple-500/10",
//     trend: [25, 40, 35, 60, 55, 80, 95],
//   },
// ];

// const recentArticles = [
//   {
//     title: "भारत में डिजिटल टेक्नोलॉजी का तेजी से विस्तार",
//     category: "टेक्नोलॉजी",
//     date: "02 Nov 2026",
//     status: "Published",
//     views: "2.4K",
//   },
//   {
//     title: "भारतीय अर्थव्यवस्था में नए अवसर",
//     category: "बिजनेस",
//     date: "01 Nov 2026",
//     status: "Draft",
//     views: "—",
//   },
//   {
//     title: "शिक्षा के क्षेत्र में डिजिटल बदलाव",
//     category: "शिक्षा",
//     date: "31 Oct 2026",
//     status: "Published",
//     views: "1.8K",
//   },
//   {
//     title: "खेल जगत की बड़ी खबरें",
//     category: "खेल",
//     date: "30 Oct 2026",
//     status: "Pending",
//     views: "—",
//   },
// ];

// const activityData = [
//   { day: "Mon", value: 45 },
//   { day: "Tue", value: 70 },
//   { day: "Wed", value: 55 },
//   { day: "Thu", value: 85 },
//   { day: "Fri", value: 60 },
//   { day: "Sat", value: 95 },
//   { day: "Sun", value: 75 },
// ];

// const quickActions = [
//   {
//     title: "Write New Article",
//     description: "Create and publish a news story",
//     icon: FilePlus2,
//     path: "/admin/articles/new",
//   },
//   {
//     title: "Manage Articles",
//     description: "View, edit and organize articles",
//     icon: Newspaper,
//     path: "/admin/articles",
//   },
//   {
//     title: "Manage Categories",
//     description: "Organize your news sections",
//     icon: FolderOpen,
//     path: "/admin/categories",
//   },
//   {
//     title: "Manage Users",
//     description: "Manage authors and editors",
//     icon: Users,
//     path: "/admin/users",
//   },
// ];

// function SectionTitle({ title, subtitle, action, to }) {
//   return (
//     <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
//       <div>
//         <h2 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
//           {title}
//         </h2>
//         <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//           {subtitle}
//         </p>
//       </div>

//       {action && (
//         <Link
//           to={to}
//           className="flex items-center gap-1.5 text-xs font-bold text-[#C8102E] transition hover:gap-2.5"
//         >
//           {action}
//           <ArrowUpRight size={15} />
//         </Link>
//       )}
//     </div>
//   );
// }

// function StatusBadge({ status }) {
//   const styles = {
//     Published:
//       "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
//     Draft:
//       "bg-amber-500/10 text-amber-600 dark:text-amber-400",
//     Pending:
//       "bg-blue-500/10 text-blue-600 dark:text-blue-400",
//   };

//   return (
//     <span
//       className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${
//         styles[status] || "bg-gray-500/10 text-gray-500"
//       }`}
//     >
//       <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
//       {status}
//     </span>
//   );
// }

// function AdminDashboard() {
//   return (
//     <div className="space-y-8 pb-8">

//       {/* Welcome Header */}
//       <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#15171c] sm:p-8">
//         <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#C8102E]/[0.07] blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 right-40 h-48 w-48 rounded-full bg-blue-500/[0.05] blur-3xl" />

//         <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
//           <div>
//             <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C8102E]/20 bg-[#C8102E]/[0.07] px-3 py-1.5 text-[11px] font-bold text-[#C8102E]">
//               <Activity size={13} />
//               ADMIN CONTROL CENTER
//             </div>

//             <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
//               Welcome back, Admin!
//             </h1>

//             <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500 dark:text-gray-400">
//               Manage your news platform, publish stories and keep your
//               readers updated with the latest happenings.
//             </p>

//             <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
//               <span className="flex items-center gap-1.5">
//                 <CalendarDays size={14} />
//                 02 November 2026
//               </span>
//               <span className="h-1 w-1 rounded-full bg-gray-400" />
//               <span className="flex items-center gap-1.5">
//                 <Zap size={14} className="text-amber-500" />
//                 Your newsroom is ready
//               </span>
//             </div>
//           </div>

//           <Link
//             to="/admin/articles/new"
//             className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-[#C8102E]/30"
//           >
//             <Plus size={18} />
//             Create New Article
//             <ArrowUpRight
//               size={16}
//               className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//             />
//           </Link>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section>
//         <SectionTitle
//           title="Platform Overview"
//           subtitle="A quick look at your website performance"
//         />

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           {stats.map((stat) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={stat.label}
//                 className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-gray-200/50 dark:border-white/10 dark:bg-[#15171c] dark:hover:shadow-black/20"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
//                       {stat.label}
//                     </p>
//                     <h3 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
//                       {stat.value}
//                     </h3>
//                   </div>

//                   <div className={`rounded-xl p-3 ${stat.bg} ${stat.color}`}>
//                     <Icon size={21} />
//                   </div>
//                 </div>

//                 <div className="mt-5 flex items-end justify-between gap-2">
//                   <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
//                     {stat.change}
//                   </span>

//                   <div className="flex h-8 items-end gap-1">
//                     {stat.trend.map((height, index) => (
//                       <span
//                         key={index}
//                         className={`w-1.5 rounded-t-sm ${stat.bg.replace("/10", "/70")}`}
//                         style={{ height: `${height}%` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Activity + Publishing Summary */}
//       <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

//         {/* Activity Chart */}
//         <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c] xl:col-span-2 sm:p-6">
//           <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
//             <div>
//               <h2 className="text-base font-black text-gray-900 dark:text-white">
//                 Publishing Activity
//               </h2>
//               <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                 Weekly article publishing overview
//               </p>
//             </div>

//             <span className="rounded-lg border border-gray-200 px-3 py-2 text-[11px] font-bold text-gray-600 dark:border-white/10 dark:text-gray-300">
//               This Week
//             </span>
//           </div>

//           <div className="flex h-44 items-end justify-between gap-3 border-b border-gray-100 pb-2 dark:border-white/10">
//             {activityData.map((item) => (
//               <div
//                 key={item.day}
//                 className="flex h-full flex-1 flex-col items-center justify-end gap-2"
//               >
//                 <div className="flex h-full w-full items-end justify-center">
//                   <div
//                     title={`${item.value} activity points`}
//                     className="w-full max-w-10 rounded-t-lg bg-[#C8102E]/15 transition-all duration-300 hover:bg-[#C8102E]"
//                     style={{ height: `${item.value}%` }}
//                   >
//                     <div className="h-full w-full rounded-t-lg bg-gradient-to-t from-[#C8102E] to-[#ed536d] opacity-90" />
//                   </div>
//                 </div>
//                 <span className="text-[10px] font-semibold text-gray-400">
//                   {item.day}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
//             <div className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-sm bg-[#C8102E]" />
//               <span className="text-xs text-gray-500 dark:text-gray-400">
//                 Publishing activity
//               </span>
//             </div>
//             <span className="text-xs font-bold text-emerald-500">
//               <TrendingUp size={14} className="mr-1 inline" />
//               Active this week
//             </span>
//           </div>
//         </div>

//         {/* Publishing Summary */}
//         <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c] sm:p-6">
//           <h2 className="text-base font-black text-gray-900 dark:text-white">
//             Publishing Summary
//           </h2>
//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             Your content distribution
//           </p>

//           <div className="my-7 flex items-center justify-center">
//             <div className="relative flex h-36 w-36 items-center justify-center rounded-full"
//               style={{
//                 background:
//                   "conic-gradient(#10b981 0% 75%, #f59e0b 75% 94%, #64748b 94% 100%)",
//               }}
//             >
//               <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white dark:bg-[#15171c]">
//                 <span className="text-3xl font-black text-gray-900 dark:text-white">
//                   96
//                 </span>
//                 <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
//                   Published
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
//                 <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
//                 Published
//               </div>
//               <span className="text-xs font-bold text-gray-900 dark:text-white">
//                 96
//               </span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
//                 <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
//                 Drafts
//               </div>
//               <span className="text-xs font-bold text-gray-900 dark:text-white">
//                 24
//               </span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
//                 <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
//                 Pending
//               </div>
//               <span className="text-xs font-bold text-gray-900 dark:text-white">
//                 8
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Actions */}
//       <section>
//         <SectionTitle
//           title="Quick Actions"
//           subtitle="Get things done faster with these shortcuts"
//         />

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           {quickActions.map((action) => {
//             const Icon = action.icon;

//             return (
//               <Link
//                 key={action.title}
//                 to={action.path}
//                 className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-gray-200/50 dark:border-white/10 dark:bg-[#15171c] dark:hover:shadow-black/20"
//               >
//                 <div className="rounded-xl border border-[#C8102E]/10 bg-[#C8102E]/[0.07] p-3 text-[#C8102E] transition group-hover:border-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white">
//                   <Icon size={21} />
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//                     {action.title}
//                   </h3>
//                   <p className="mt-1 text-[11px] leading-5 text-gray-500 dark:text-gray-400">
//                     {action.description}
//                   </p>
//                 </div>

//                 <ChevronRight
//                   size={17}
//                   className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#C8102E]"
//                 />
//               </Link>
//             );
//           })}
//         </div>
//       </section>

//       {/* Recent Articles */}
//       <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
//         <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-5 sm:p-6 dark:border-white/10">
//           <div>
//             <h2 className="text-lg font-black text-gray-900 dark:text-white">
//               Recent Articles
//             </h2>
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               Latest content activity on your platform
//             </p>
//           </div>

//           <Link
//             to="/admin/articles"
//             className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:text-gray-300"
//           >
//             View All Articles
//             <ArrowUpRight size={14} />
//           </Link>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[750px] text-left">
//             <thead className="bg-gray-50/80 dark:bg-white/[0.025]">
//               <tr className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
//                 <th className="px-6 py-4">Article Title</th>
//                 <th className="px-5 py-4">Category</th>
//                 <th className="px-5 py-4">Date</th>
//                 <th className="px-5 py-4">Views</th>
//                 <th className="px-5 py-4">Status</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-100 dark:divide-white/[0.06]">
//               {recentArticles.map((article) => (
//                 <tr
//                   key={article.title}
//                   className="transition hover:bg-gray-50/80 dark:hover:bg-white/[0.025]"
//                 >
//                   <td className="max-w-[300px] px-6 py-5">
//                     <p className="truncate text-sm font-bold text-gray-800 dark:text-gray-200">
//                       {article.title}
//                     </p>
//                   </td>

//                   <td className="px-5 py-5 text-xs font-medium text-gray-500 dark:text-gray-400">
//                     {article.category}
//                   </td>

//                   <td className="whitespace-nowrap px-5 py-5 text-xs text-gray-500 dark:text-gray-400">
//                     {article.date}
//                   </td>

//                   <td className="px-5 py-5 text-xs font-semibold text-gray-700 dark:text-gray-300">
//                     {article.views}
//                   </td>

//                   <td className="px-5 py-5">
//                     <StatusBadge status={article.status} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 px-6 py-4 dark:border-white/10">
//           <span className="text-[11px] text-gray-500 dark:text-gray-400">
//             Showing latest 4 articles
//           </span>

//           <Link
//             to="/admin/articles"
//             className="text-xs font-bold text-[#C8102E] hover:underline"
//           >
//             Explore articles
//           </Link>
//         </div>
//       </section>

//       {/* Bottom Info */}
//       <section className="flex flex-col justify-between gap-4 rounded-2xl border border-[#C8102E]/15 bg-[#C8102E]/[0.035] p-5 sm:flex-row sm:items-center sm:p-6">
//         <div className="flex items-start gap-3">
//           <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
//             <PenLine size={20} />
//           </div>

//           <div>
//             <h3 className="text-sm font-black text-gray-900 dark:text-white">
//               Have a story to share?
//             </h3>
//             <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//               Create your next article and keep your readers informed.
//             </p>
//           </div>
//         </div>

//         <Link
//           to="/admin/articles/new"
//           className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#a50d25]"
//         >
//           <Plus size={16} />
//           Start Writing
//           <ArrowUpRight size={15} />
//         </Link>
//       </section>

//       <p className="text-center text-[10px] text-gray-400 dark:text-gray-500">
//         HINDUSTAN.DIGITAL · Admin Dashboard
//       </p>
//     </div>
//   );
// }

// export default AdminDashboard;




// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Newspaper,
//   Eye,
//   TrendingUp,
//   ArrowUpRight,
//   Plus,
//   FolderOpen,
//   Users,
//   Clock3,
//   CalendarDays,
//   CheckCircle2,
//   Activity,
//   ChevronRight,
//   PenLine,
//   Zap,
//   FilePlus2,
//   RefreshCw,
// } from "lucide-react";

// import API from "../services/api";

// const quickActions = [
//   {
//     title: "Write New Article",
//     description: "Create and publish a news story",
//     icon: FilePlus2,
//     path: "/admin/articles/new",
//   },
//   {
//     title: "Manage Articles",
//     description: "View, edit and organize articles",
//     icon: Newspaper,
//     path: "/admin/articles",
//   },
//   {
//     title: "Manage Categories",
//     description: "Organize your news sections",
//     icon: FolderOpen,
//     path: "/admin/categories",
//   },
//   {
//     title: "Manage Users",
//     description: "Manage authors and editors",
//     icon: Users,
//     path: "/admin/users",
//   },
// ];

// const demoActivity = [
//   { day: "Mon", value: 45 },
//   { day: "Tue", value: 70 },
//   { day: "Wed", value: 55 },
//   { day: "Thu", value: 85 },
//   { day: "Fri", value: 60 },
//   { day: "Sat", value: 95 },
//   { day: "Sun", value: 75 },
// ];

// function SectionTitle({ title, subtitle, action, to }) {
//   return (
//     <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
//       <div>
//         <h2 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
//           {title}
//         </h2>
//         <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//           {subtitle}
//         </p>
//       </div>

//       {action && (
//         <Link
//           to={to}
//           className="flex items-center gap-1.5 text-xs font-bold text-[#C8102E] transition hover:gap-2.5"
//         >
//           {action}
//           <ArrowUpRight size={15} />
//         </Link>
//       )}
//     </div>
//   );
// }

// function StatusBadge({ status }) {
//   const normalizedStatus = String(status || "Draft").toLowerCase();

//   const styles = {
//     published:
//       "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
//     draft:
//       "bg-amber-500/10 text-amber-600 dark:text-amber-400",
//     pending:
//       "bg-blue-500/10 text-blue-600 dark:text-blue-400",
//     rejected:
//       "bg-red-500/10 text-red-600 dark:text-red-400",
//   };

//   const label =
//     normalizedStatus.charAt(0).toUpperCase() +
//     normalizedStatus.slice(1);

//   return (
//     <span
//       className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${
//         styles[normalizedStatus] || "bg-gray-500/10 text-gray-500"
//       }`}
//     >
//       <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
//       {label}
//     </span>
//   );
// }

// function formatDate(dateValue) {
//   if (!dateValue) return "—";

//   const date = new Date(dateValue);

//   if (Number.isNaN(date.getTime())) return "—";

//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function AdminDashboard() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [recentArticles, setRecentArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchDashboard = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await API.get("analytics/dashboard/");

//       const data = response.data;

//       // API response ke andar statistics overview mein hain
//       const overview = data?.overview || {};

//       setDashboardData(overview);

//       const articles = Array.isArray(data?.recent_articles)
//         ? data.recent_articles
//         : [];

//       setRecentArticles(articles);
//     } catch (err) {
//       console.error("Dashboard API Error:", err);
//       setError(
//         err.response?.data?.detail ||
//           "Unable to load dashboard data. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   const stats = useMemo(() => {
//     const data = dashboardData || {};

//     return [
//       {
//         label: "Total Articles",
//         value: Number(data.total_articles || 0),
//         change: "All articles",
//         icon: Newspaper,
//         color: "text-blue-500",
//         bg: "bg-blue-500/10",
//         trend: [35, 50, 42, 65, 48, 78, 90],
//       },
//       {
//         label: "Published Articles",
//         value: Number(data.published_articles || 0),
//         change: "Live articles",
//         icon: CheckCircle2,
//         color: "text-emerald-500",
//         bg: "bg-emerald-500/10",
//         trend: [30, 45, 40, 60, 55, 75, 88],
//       },
//       {
//         label: "Draft Articles",
//         value: Number(data.draft_articles || 0),
//         change: "Saved drafts",
//         icon: Clock3,
//         color: "text-amber-500",
//         bg: "bg-amber-500/10",
//         trend: [65, 45, 60, 40, 55, 35, 48],
//       },
//       {
//         label: "Total Views",
//         value: Number(data.total_views || 0),
//         change: "Article views",
//         icon: Eye,
//         color: "text-purple-500",
//         bg: "bg-purple-500/10",
//         trend: [25, 40, 35, 60, 55, 80, 95],
//       },
//     ];
//   }, [dashboardData]);

//   const totalArticles = Number(dashboardData?.total_articles || 0);
//   const publishedArticles = Number(
//     dashboardData?.published_articles || 0
//   );
//   const draftArticles = Number(dashboardData?.draft_articles || 0);
//   const pendingArticles = Number(
//     dashboardData?.pending_articles || 0
//   );

//   const publishedPercent =
//     totalArticles > 0
//       ? (publishedArticles / totalArticles) * 100
//       : 0;

//   const draftPercent =
//     totalArticles > 0
//       ? (draftArticles / totalArticles) * 100
//       : 0;

//   const pendingPercent =
//     totalArticles > 0
//       ? (pendingArticles / totalArticles) * 100
//       : 0;

//   const summaryGradient = `conic-gradient(
//     #10b981 0% ${publishedPercent}%,
//     #f59e0b ${publishedPercent}% ${publishedPercent + draftPercent}%,
//     #64748b ${publishedPercent + draftPercent}% 100%
//   )`;

//   const today = new Date().toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <div className="space-y-8 pb-8">

//       {/* Welcome Header */}
//       <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#15171c] sm:p-8">
//         <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#C8102E]/[0.07] blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 right-40 h-48 w-48 rounded-full bg-blue-500/[0.05] blur-3xl" />

//         <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
//           <div>
//             <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C8102E]/20 bg-[#C8102E]/[0.07] px-3 py-1.5 text-[11px] font-bold text-[#C8102E]">
//               <Activity size={13} />
//               ADMIN CONTROL CENTER
//             </div>

//             <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
//               Welcome back, Admin!
//             </h1>

//             <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500 dark:text-gray-400">
//               Manage your news platform, publish stories and keep your
//               readers updated with the latest happenings.
//             </p>

//             <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
//               <span className="flex items-center gap-1.5">
//                 <CalendarDays size={14} />
//                 {today}
//               </span>

//               <span className="h-1 w-1 rounded-full bg-gray-400" />

//               <span className="flex items-center gap-1.5">
//                 <Zap size={14} className="text-amber-500" />
//                 Your newsroom is ready
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-3">
//             <button
//               onClick={fetchDashboard}
//               disabled={loading}
//               className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] disabled:opacity-50 dark:border-white/10 dark:bg-[#1c1f26] dark:text-gray-200"
//             >
//               <RefreshCw
//                 size={16}
//                 className={loading ? "animate-spin" : ""}
//               />
//               Refresh
//             </button>

//             <Link
//               to="/admin/articles/new"
//               className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-[#C8102E]/30"
//             >
//               <Plus size={18} />
//               Create New Article
//               <ArrowUpRight
//                 size={16}
//                 className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Error Message */}
//       {error && (
//         <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-600 dark:text-red-400">
//           <span>{error}</span>
//           <button
//             onClick={fetchDashboard}
//             className="font-bold underline"
//           >
//             Try Again
//           </button>
//         </div>
//       )}

//       {/* Statistics */}
//       <section>
//         <SectionTitle
//           title="Platform Overview"
//           subtitle="Live statistics from your news platform"
//         />

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           {stats.map((stat) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={stat.label}
//                 className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-gray-200/50 dark:border-white/10 dark:bg-[#15171c] dark:hover:shadow-black/20"
//               >
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
//                       {stat.label}
//                     </p>

//                     <h3 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
//                       {loading ? "..." : stat.value.toLocaleString("en-IN")}
//                     </h3>
//                   </div>

//                   <div className={`rounded-xl p-3 ${stat.bg} ${stat.color}`}>
//                     <Icon size={21} />
//                   </div>
//                 </div>

//                 <div className="mt-5 flex items-end justify-between gap-2">
//                   <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
//                     {stat.change}
//                   </span>

//                   <div className="flex h-8 items-end gap-1">
//                     {stat.trend.map((height, index) => (
//                       <span
//                         key={index}
//                         className={`w-1.5 rounded-t-sm ${stat.bg.replace("/10", "/70")}`}
//                         style={{ height: `${height}%` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Activity + Publishing Summary */}
//       <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

//         {/* Activity Chart */}
//         <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c] xl:col-span-2 sm:p-6">
//           <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
//             <div>
//               <h2 className="text-base font-black text-gray-900 dark:text-white">
//                 Publishing Activity
//               </h2>
//               <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                 Sample weekly activity visualization
//               </p>
//             </div>

//             <span className="rounded-lg border border-gray-200 px-3 py-2 text-[11px] font-bold text-gray-600 dark:border-white/10 dark:text-gray-300">
//               Demo Data
//             </span>
//           </div>

//           <div className="flex h-44 items-end justify-between gap-3 border-b border-gray-100 pb-2 dark:border-white/10">
//             {demoActivity.map((item) => (
//               <div
//                 key={item.day}
//                 className="flex h-full flex-1 flex-col items-center justify-end gap-2"
//               >
//                 <div className="flex h-full w-full items-end justify-center">
//                   <div
//                     title={`${item.value} sample activity points`}
//                     className="w-full max-w-10 rounded-t-lg bg-[#C8102E]/15 transition-all duration-300 hover:bg-[#C8102E]"
//                     style={{ height: `${item.value}%` }}
//                   >
//                     <div className="h-full w-full rounded-t-lg bg-gradient-to-t from-[#C8102E] to-[#ed536d] opacity-90" />
//                   </div>
//                 </div>

//                 <span className="text-[10px] font-semibold text-gray-400">
//                   {item.day}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
//             <div className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-sm bg-[#C8102E]" />
//               <span className="text-xs text-gray-500 dark:text-gray-400">
//                 Sample publishing activity
//               </span>
//             </div>

//             <span className="text-xs font-bold text-emerald-500">
//               <TrendingUp size={14} className="mr-1 inline" />
//               Dashboard Active
//             </span>
//           </div>
//         </div>

//         {/* Publishing Summary */}
//         <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c] sm:p-6">
//           <h2 className="text-base font-black text-gray-900 dark:text-white">
//             Publishing Summary
//           </h2>

//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             Your content distribution
//           </p>

//           <div className="my-7 flex items-center justify-center">
//             <div
//               className="relative flex h-36 w-36 items-center justify-center rounded-full"
//               style={{ background: summaryGradient }}
//             >
//               <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white dark:bg-[#15171c]">
//                 <span className="text-3xl font-black text-gray-900 dark:text-white">
//                   {loading ? "..." : totalArticles}
//                 </span>

//                 <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
//                   Total Articles
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
//                 <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
//                 Published
//               </div>

//               <span className="text-xs font-bold text-gray-900 dark:text-white">
//                 {publishedArticles}
//               </span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
//                 <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
//                 Drafts
//               </div>

//               <span className="text-xs font-bold text-gray-900 dark:text-white">
//                 {draftArticles}
//               </span>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
//                 <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
//                 Pending
//               </div>

//               <span className="text-xs font-bold text-gray-900 dark:text-white">
//                 {pendingArticles}
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Actions */}
//       <section>
//         <SectionTitle
//           title="Quick Actions"
//           subtitle="Get things done faster with these shortcuts"
//         />

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           {quickActions.map((action) => {
//             const Icon = action.icon;

//             return (
//               <Link
//                 key={action.title}
//                 to={action.path}
//                 className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-gray-200/50 dark:border-white/10 dark:bg-[#15171c] dark:hover:shadow-black/20"
//               >
//                 <div className="rounded-xl border border-[#C8102E]/10 bg-[#C8102E]/[0.07] p-3 text-[#C8102E] transition group-hover:border-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white">
//                   <Icon size={21} />
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//                     {action.title}
//                   </h3>

//                   <p className="mt-1 text-[11px] leading-5 text-gray-500 dark:text-gray-400">
//                     {action.description}
//                   </p>
//                 </div>

//                 <ChevronRight
//                   size={17}
//                   className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#C8102E]"
//                 />
//               </Link>
//             );
//           })}
//         </div>
//       </section>

//       {/* Recent Articles */}
//       <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
//         <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-5 sm:p-6 dark:border-white/10">
//           <div>
//             <h2 className="text-lg font-black text-gray-900 dark:text-white">
//               Recent Articles
//             </h2>

//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               Latest content activity on your platform
//             </p>
//           </div>

//           <Link
//             to="/admin/articles"
//             className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:text-gray-300"
//           >
//             View All Articles
//             <ArrowUpRight size={14} />
//           </Link>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[750px] text-left">
//             <thead className="bg-gray-50/80 dark:bg-white/[0.025]">
//               <tr className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
//                 <th className="px-6 py-4">Article Title</th>
//                 <th className="px-5 py-4">Category</th>
//                 <th className="px-5 py-4">Date</th>
//                 <th className="px-5 py-4">Views</th>
//                 <th className="px-5 py-4">Status</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-100 dark:divide-white/[0.06]">
//               {loading ? (
//                 <tr>
//                   <td
//                     colSpan="5"
//                     className="px-6 py-10 text-center text-sm text-gray-500"
//                   >
//                     Loading articles...
//                   </td>
//                 </tr>
//               ) : recentArticles.length > 0 ? (
//                 recentArticles.map((article) => (
//                   <tr
//                     key={article.id}
//                     className="transition hover:bg-gray-50/80 dark:hover:bg-white/[0.025]"
//                   >
//                     <td className="max-w-[300px] px-6 py-5">
//                       <p className="truncate text-sm font-bold text-gray-800 dark:text-gray-200">
//                         {article.title || "Untitled Article"}
//                       </p>
//                     </td>

//                     <td className="px-5 py-5 text-xs font-medium text-gray-500 dark:text-gray-400">
//                       {typeof article.category === "object"
//                         ? article.category?.name || "—"
//                         : article.category || article.category_name || "—"}
//                     </td>

//                     <td className="whitespace-nowrap px-5 py-5 text-xs text-gray-500 dark:text-gray-400">
//                       {formatDate(
//                         article.published_at ||
//                         article.created_at ||
//                         article.updated_at
//                       )}
//                     </td>

//                     <td className="px-5 py-5 text-xs font-semibold text-gray-700 dark:text-gray-300">
//                       {Number(
//                         article.views ??
//                         article.view_count ??
//                         article.total_views ??
//                         0
//                       ).toLocaleString("en-IN")}
//                     </td>

//                     <td className="px-5 py-5">
//                       <StatusBadge status={article.status} />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="5"
//                     className="px-6 py-10 text-center text-sm text-gray-500 dark:text-gray-400"
//                   >
//                     No articles found. Create your first article!
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 px-6 py-4 dark:border-white/10">
//           <span className="text-[11px] text-gray-500 dark:text-gray-400">
//             Showing {recentArticles.length} recent articles
//           </span>

//           <Link
//             to="/admin/articles"
//             className="text-xs font-bold text-[#C8102E] hover:underline"
//           >
//             Explore articles
//           </Link>
//         </div>
//       </section>

//       {/* Bottom Info */}
//       <section className="flex flex-col justify-between gap-4 rounded-2xl border border-[#C8102E]/15 bg-[#C8102E]/[0.035] p-5 sm:flex-row sm:items-center sm:p-6">
//         <div className="flex items-start gap-3">
//           <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
//             <PenLine size={20} />
//           </div>

//           <div>
//             <h3 className="text-sm font-black text-gray-900 dark:text-white">
//               Have a story to share?
//             </h3>

//             <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//               Create your next article and keep your readers informed.
//             </p>
//           </div>
//         </div>

//         <Link
//           to="/admin/articles/new"
//           className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#a50d25]"
//         >
//           <Plus size={16} />
//           Start Writing
//           <ArrowUpRight size={15} />
//         </Link>
//       </section>

//       <p className="text-center text-[10px] text-gray-400 dark:text-gray-500">
//         HINDUSTAN.DIGITAL · Admin Dashboard
//       </p>
//     </div>
//   );
// }

// export default AdminDashboard;


import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Newspaper,
  Eye,
  TrendingUp,
  ArrowUpRight,
  Plus,
  FolderOpen,
  Users,
  Clock3,
  CalendarDays,
  CheckCircle2,
  Activity,
  ChevronRight,
  PenLine,
  Zap,
  FilePlus2,
  RefreshCw,
} from "lucide-react";

import API from "../services/api";

const quickActions = [
  {
    title: "Write New Article",
    description: "Create and publish a news story",
    icon: FilePlus2,
    path: "/admin/articles/new",
  },
  {
    title: "Manage Articles",
    description: "View, edit and organize articles",
    icon: Newspaper,
    path: "/admin/articles",
  },
  {
    title: "Manage Categories",
    description: "Organize your news sections",
    icon: FolderOpen,
    path: "/admin/categories",
  },
  {
    title: "Manage Users",
    description: "Manage authors and editors",
    icon: Users,
    path: "/admin/users",
  },
];

function SectionTitle({ title, subtitle, action, to }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      </div>

      {action && (
        <Link
          to={to}
          className="flex items-center gap-1.5 text-xs font-bold text-[#C8102E] transition hover:gap-2.5"
        >
          {action}
          <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const normalizedStatus = String(status || "DRAFT").toLowerCase();

  const styles = {
    published:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    draft:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    pending:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    rejected:
      "bg-red-500/10 text-red-600 dark:text-red-400",
  };

  const label =
    normalizedStatus.charAt(0).toUpperCase() +
    normalizedStatus.slice(1);

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold ${
        styles[normalizedStatus] || "bg-gray-500/10 text-gray-500"
      }`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

function formatDate(dateValue) {
  if (!dateValue) return "—";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) return "—";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [recentArticles, setRecentArticles] = useState([]);

  const [weeklyActivity, setWeeklyActivity] = useState([]);
  const [weeklyTotal, setWeeklyTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [activityLoading, setActivityLoading] = useState(true);

  const [error, setError] = useState("");
  const [activityError, setActivityError] = useState("");

  /*
   * Get currently logged-in user and role.
   *
   * admin_user is stored during login by auth.js.
   * user_role is also stored separately.
   */
  const getLoggedInUser = () => {
    try {
      const storedUser = localStorage.getItem("admin_user");

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        if (parsedUser) {
          return parsedUser;
        }
      }
    } catch (error) {
      console.error("Unable to read logged-in user:", error);
    }

    return null;
  };

  const loggedInUser = getLoggedInUser();

  const storedRole = String(
    localStorage.getItem("user_role") ||
      loggedInUser?.role ||
      ""
  ).toUpperCase();

  const userRole =
    storedRole === "EDITOR"
      ? "EDITOR"
      : "ADMIN";

  const welcomeRole =
    userRole === "EDITOR"
      ? "Editor"
      : "Admin";

  const controlCenterTitle =
    userRole === "EDITOR"
      ? "EDITOR CONTROL CENTER"
      : "ADMIN CONTROL CENTER";

  const fetchDashboard = async () => {
    setLoading(true);
    setActivityLoading(true);

    setError("");
    setActivityError("");

    const [dashboardResult, activityResult] =
      await Promise.allSettled([
        API.get("analytics/dashboard/"),
        API.get("analytics/weekly-publishing/"),
      ]);

    // Dashboard data
    if (dashboardResult.status === "fulfilled") {
      const data = dashboardResult.value.data;

      setDashboardData(data?.overview || {});

      setRecentArticles(
        Array.isArray(data?.recent_articles)
          ? data.recent_articles
          : []
      );
    } else {
      console.error(
        "Dashboard API Error:",
        dashboardResult.reason
      );

      setError(
        dashboardResult.reason?.response?.data?.detail ||
          "Unable to load dashboard data. Please try again."
      );
    }

    // Weekly publishing activity
    if (activityResult.status === "fulfilled") {
      const activityData = activityResult.value.data;

      setWeeklyActivity(
        Array.isArray(activityData?.activity)
          ? activityData.activity
          : []
      );

      setWeeklyTotal(
        Number(activityData?.total_published || 0)
      );
    } else {
      console.error(
        "Weekly Activity API Error:",
        activityResult.reason
      );

      setActivityError(
        "Unable to load weekly publishing activity."
      );

      setWeeklyActivity([]);
      setWeeklyTotal(0);
    }

    setLoading(false);
    setActivityLoading(false);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const stats = useMemo(() => {
    const data = dashboardData || {};

    return [
      {
        label: "Total Articles",
        value: Number(data.total_articles || 0),
        change: "All articles",
        icon: Newspaper,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        trend: [35, 50, 42, 65, 48, 78, 90],
      },
      {
        label: "Published Articles",
        value: Number(data.published_articles || 0),
        change: "Live articles",
        icon: CheckCircle2,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        trend: [30, 45, 40, 60, 55, 75, 88],
      },
      {
        label: "Draft Articles",
        value: Number(data.draft_articles || 0),
        change: "Saved drafts",
        icon: Clock3,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        trend: [65, 45, 60, 40, 55, 35, 48],
      },
      {
        label: "Total Views",
        value: Number(data.total_views || 0),
        change: "Article views",
        icon: Eye,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        trend: [25, 40, 35, 60, 55, 80, 95],
      },
    ];
  }, [dashboardData]);

  const totalArticles = Number(
    dashboardData?.total_articles || 0
  );

  const publishedArticles = Number(
    dashboardData?.published_articles || 0
  );

  const draftArticles = Number(
    dashboardData?.draft_articles || 0
  );

  const pendingArticles = Number(
    dashboardData?.pending_articles || 0
  );

  const publishedPercent =
    totalArticles > 0
      ? (publishedArticles / totalArticles) * 100
      : 0;

  const draftPercent =
    totalArticles > 0
      ? (draftArticles / totalArticles) * 100
      : 0;

  const pendingPercent =
    totalArticles > 0
      ? (pendingArticles / totalArticles) * 100
      : 0;

  const summaryGradient = `conic-gradient(
    #10b981 0% ${publishedPercent}%,
    #f59e0b ${publishedPercent}% ${publishedPercent + draftPercent}%,
    #64748b ${publishedPercent + draftPercent}% 100%
  )`;

  const activityMax = Math.max(
    1,
    ...weeklyActivity.map((item) =>
      Number(item.articles || 0)
    )
  );

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-8 pb-8">

      {/* Welcome Header */}
      <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#15171c] sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#C8102E]/[0.07] blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 right-40 h-48 w-48 rounded-full bg-blue-500/[0.05] blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C8102E]/20 bg-[#C8102E]/[0.07] px-3 py-1.5 text-[11px] font-bold text-[#C8102E]">
              <Activity size={13} />
              {controlCenterTitle}
            </div>

            <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Welcome back, {welcomeRole}!
            </h1>

            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500 dark:text-gray-400">
              Manage your news platform, publish stories and keep your
              readers updated with the latest happenings.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} />
                {today}
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-400" />

              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-amber-500" />
                Your newsroom is ready
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={fetchDashboard}
              disabled={loading || activityLoading}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] disabled:opacity-50 dark:border-white/10 dark:bg-[#1c1f26] dark:text-gray-200"
            >
              <RefreshCw
                size={16}
                className={
                  loading || activityLoading
                    ? "animate-spin"
                    : ""
                }
              />

              Refresh
            </button>

            <Link
              to="/admin/articles/new"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-[#C8102E]/30"
            >
              <Plus size={18} />

              Create New Article

              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-600 dark:text-red-400">
          <span>{error}</span>

          <button
            onClick={fetchDashboard}
            className="font-bold underline"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Statistics */}
      <section>
        <SectionTitle
          title="Platform Overview"
          subtitle="Live statistics from your news platform"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-gray-200/50 dark:border-white/10 dark:bg-[#15171c] dark:hover:shadow-black/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>

                    <h3 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                      {loading
                        ? "..."
                        : stat.value.toLocaleString("en-IN")}
                    </h3>
                  </div>

                  <div
                    className={`rounded-xl p-3 ${stat.bg} ${stat.color}`}
                  >
                    <Icon size={21} />
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-2">
                  <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                    {stat.change}
                  </span>

                  <div className="flex h-8 items-end gap-1">
                    {stat.trend.map((height, index) => (
                      <span
                        key={index}
                        className={`w-1.5 rounded-t-sm ${stat.bg.replace(
                          "/10",
                          "/70"
                        )}`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Activity + Publishing Summary */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

        {/* Real Publishing Activity Chart */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c] xl:col-span-2 sm:p-6">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-black text-gray-900 dark:text-white">
                Publishing Activity
              </h2>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Published articles over the last 7 days
              </p>
            </div>

            <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              Live Analytics
            </span>
          </div>

          {activityError ? (
            <div className="flex h-44 items-center justify-center text-center text-sm text-red-500">
              {activityError}
            </div>
          ) : activityLoading ? (
            <div className="flex h-44 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              Loading publishing activity...
            </div>
          ) : weeklyActivity.length > 0 ? (
            <>
              <div className="flex h-44 items-end justify-between gap-3 border-b border-gray-100 pb-2 dark:border-white/10">
                {weeklyActivity.map((item, index) => {
                  const count = Number(item.articles || 0);

                  const barHeight =
                    count > 0
                      ? Math.max(
                          (count / activityMax) * 100,
                          8
                        )
                      : 3;

                  return (
                    <div
                      key={item.date || index}
                      className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
                    >
                      <div className="flex h-full w-full items-end justify-center">
                        <div className="relative flex h-full w-full max-w-10 flex-col items-center justify-end">
                          <span className="mb-1 text-[10px] font-bold text-gray-600 dark:text-gray-300">
                            {count}
                          </span>

                          <div
                            title={`${item.day}: ${count} published article${
                              count === 1 ? "" : "s"
                            }`}
                            className={`w-full rounded-t-lg transition-all duration-500 ${
                              count > 0
                                ? "bg-gradient-to-t from-[#C8102E] to-[#ed536d] shadow-md shadow-[#C8102E]/10"
                                : "bg-gray-200 dark:bg-white/10"
                            }`}
                            style={{
                              height: `${barHeight}%`,
                            }}
                          />
                        </div>
                      </div>

                      <span className="text-[10px] font-semibold text-gray-400">
                        {item.day}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#C8102E]" />

                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Published articles
                  </span>
                </div>

                <span className="text-xs font-bold text-emerald-500">
                  <TrendingUp
                    size={14}
                    className="mr-1 inline"
                  />

                  {weeklyTotal} published this week
                </span>
              </div>
            </>
          ) : (
            <div className="flex h-44 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              No publishing activity available.
            </div>
          )}
        </div>

        {/* Publishing Summary */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c] sm:p-6">
          <h2 className="text-base font-black text-gray-900 dark:text-white">
            Publishing Summary
          </h2>

          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Your content distribution
          </p>

          <div className="my-7 flex items-center justify-center">
            <div
              className="relative flex h-36 w-36 items-center justify-center rounded-full"
              style={{ background: summaryGradient }}
            >
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white dark:bg-[#15171c]">
                <span className="text-3xl font-black text-gray-900 dark:text-white">
                  {loading ? "..." : totalArticles}
                </span>

                <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                  Total Articles
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Published
              </div>

              <span className="text-xs font-bold text-gray-900 dark:text-white">
                {publishedArticles}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                Drafts
              </div>

              <span className="text-xs font-bold text-gray-900 dark:text-white">
                {draftArticles}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                Pending
              </div>

              <span className="text-xs font-bold text-gray-900 dark:text-white">
                {pendingArticles}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <SectionTitle
          title="Quick Actions"
          subtitle="Get things done faster with these shortcuts"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.title}
                to={action.path}
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-gray-200/50 dark:border-white/10 dark:bg-[#15171c] dark:hover:shadow-black/20"
              >
                <div className="rounded-xl border border-[#C8102E]/10 bg-[#C8102E]/[0.07] p-3 text-[#C8102E] transition group-hover:border-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white">
                  <Icon size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-gray-500 dark:text-gray-400">
                    {action.description}
                  </p>
                </div>

                <ChevronRight
                  size={17}
                  className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#C8102E]"
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-5 sm:p-6 dark:border-white/10">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white">
              Recent Articles
            </h2>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Latest content activity on your platform
            </p>
          </div>

          <Link
            to="/admin/articles"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:text-gray-300"
          >
            View All Articles
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-gray-50/80 dark:bg-white/[0.025]">
              <tr className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <th className="px-6 py-4">Article Title</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Views</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.06]">
              {loading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-10 text-center text-sm text-gray-500"
                  >
                    Loading articles...
                  </td>
                </tr>
              ) : recentArticles.length > 0 ? (
                recentArticles.map((article) => (
                  <tr
                    key={article.id}
                    className="transition hover:bg-gray-50/80 dark:hover:bg-white/[0.025]"
                  >
                    <td className="max-w-[300px] px-6 py-5">
                      <p className="truncate text-sm font-bold text-gray-800 dark:text-gray-200">
                        {article.title || "Untitled Article"}
                      </p>
                    </td>

                    <td className="px-5 py-5 text-xs font-semibold text-gray-600 dark:text-gray-300">
                      {article.category_name ||
                        article.category?.name ||
                        "—"}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(
                        article.published_at ||
                          article.created_at ||
                          article.updated_at
                      )}
                    </td>

                    <td className="px-5 py-5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                      <span className="inline-flex items-center gap-1.5">
                        <Eye
                          size={14}
                          className="text-purple-500"
                        />

                        {Number(
                          article.views_count ?? 0
                        ).toLocaleString("en-IN")}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <StatusBadge status={article.status} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-10 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    No articles found. Create your first article!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 px-6 py-4 dark:border-white/10">
          <span className="text-[11px] text-gray-500 dark:text-gray-400">
            Showing {recentArticles.length} recent articles
          </span>

          <Link
            to="/admin/articles"
            className="text-xs font-bold text-[#C8102E] hover:underline"
          >
            Explore articles
          </Link>
        </div>
      </section>

      {/* Bottom Info */}
      <section className="flex flex-col justify-between gap-4 rounded-2xl border border-[#C8102E]/15 bg-[#C8102E]/[0.035] p-5 sm:flex-row sm:items-center sm:p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
            <PenLine size={20} />
          </div>

          <div>
            <h3 className="text-sm font-black text-gray-900 dark:text-white">
              Have a story to share?
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
              Create your next article and keep your readers informed.
            </p>
          </div>
        </div>

        <Link
          to="/admin/articles/new"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#a50d25]"
        >
          <Plus size={16} />
          Start Writing
          <ArrowUpRight size={15} />
        </Link>
      </section>

      <p className="text-center text-[10px] text-gray-400 dark:text-gray-500">
        HINDUSTAN.DIGITAL · {welcomeRole} Dashboard
      </p>
    </div>
  );
}

export default AdminDashboard;
