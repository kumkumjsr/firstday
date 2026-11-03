
// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   Search,
//   PlusCircle,
//   Trash2,
//   Users,
//   ShieldCheck,
//   UserRound,
//   X,
//   Edit3,
//   Save,
//   AlertTriangle,
//   CheckCircle2,
//   UserCog,
//   Mail,
//   Filter,
//   UserPlus,
//   Shield,
// } from "lucide-react";

// const initialUsers = [
//   {
//     id: 1,
//     name: "Admin User",
//     email: "admin@hindustan.digital",
//     role: "Admin",
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "Editorial Team",
//     email: "editor@hindustan.digital",
//     role: "Editor",
//     status: "Active",
//   },
//   {
//     id: 3,
//     name: "News Reporter",
//     email: "reporter@hindustan.digital",
//     role: "Author",
//     status: "Active",
//   },
//   {
//     id: 4,
//     name: "Guest Writer",
//     email: "guest@hindustan.digital",
//     role: "Author",
//     status: "Inactive",
//   },
// ];

// const roles = ["Admin", "Editor", "Author"];

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

// function RoleBadge({ role }) {
//   const styles = {
//     Admin: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
//     Editor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
//     Author: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
//   };

//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
//         styles[role] || styles.Author
//       }`}
//     >
//       {role === "Admin" ? (
//         <Shield size={12} />
//       ) : role === "Editor" ? (
//         <Edit3 size={12} />
//       ) : (
//         <UserRound size={12} />
//       )}
//       {role}
//     </span>
//   );
// }

// function StatusBadge({ status }) {
//   const active = status === "Active";

//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
//         active
//           ? "bg-green-500/10 text-green-600 dark:text-green-400"
//           : "bg-gray-500/10 text-gray-500 dark:text-gray-400"
//       }`}
//     >
//       <span
//         className={`h-1.5 w-1.5 rounded-full ${
//           active ? "bg-green-500" : "bg-gray-400"
//         }`}
//       />
//       {status}
//     </span>
//   );
// }

// function UserModal({ user, users, onClose, onSave }) {
//   const [formData, setFormData] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     role: user?.role || "Author",
//   });

//   const [error, setError] = useState("");

//   const updateField = (field, value) => {
//     setFormData((previous) => ({
//       ...previous,
//       [field]: value,
//     }));
//     setError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const name = formData.name.trim();
//     const email = formData.email.trim().toLowerCase();

//     if (!name || !email) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     const duplicateEmail = users.some(
//       (item) =>
//         item.email.toLowerCase() === email &&
//         item.id !== user?.id
//     );

//     if (duplicateEmail) {
//       setError("This email address is already registered.");
//       return;
//     }

//     onSave({
//       name,
//       email,
//       role: formData.role,
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
//         className="my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//       >
//         <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 dark:border-white/10">
//           <div>
//             <h2 className="text-lg font-black text-gray-900 dark:text-white">
//               {user ? "Edit User" : "Add New User"}
//             </h2>
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               {user
//                 ? "Update user information and role."
//                 : "Add a new team member to your dashboard."}
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
//               Full Name
//             </label>

//             <div className="relative">
//               <UserRound
//                 size={17}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//               />

//               <input
//                 autoFocus
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => updateField("name", e.target.value)}
//                 placeholder="Enter full name"
//                 required
//                 className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//               Email Address
//             </label>

//             <div className="relative">
//               <Mail
//                 size={17}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//               />

//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => updateField("email", e.target.value)}
//                 placeholder="name@example.com"
//                 required
//                 className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//               User Role
//             </label>

//             <select
//               value={formData.role}
//               onChange={(e) => updateField("role", e.target.value)}
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//             >
//               {roles.map((role) => (
//                 <option key={role} value={role}>
//                   {role}
//                 </option>
//               ))}
//             </select>

//             <p className="mt-2 text-xs text-gray-400">
//               Role permissions will be enforced by the Django backend later.
//             </p>
//           </div>

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
//               {user ? "Update User" : "Save User"}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

// function DeleteModal({ user, onClose, onConfirm }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.94 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.94 }}
//         className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//       >
//         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
//           <AlertTriangle size={27} />
//         </div>

//         <h2 className="mt-5 text-center text-xl font-black text-gray-900 dark:text-white">
//           Delete User?
//         </h2>

//         <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
//           Are you sure you want to delete{" "}
//           <span className="font-bold text-gray-900 dark:text-white">
//             {user?.name}
//           </span>
//           ?
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
//             Delete User
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function ManageUsers() {
//   const [users, setUsers] = useState(initialUsers);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const [showModal, setShowModal] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);
//   const [deletingUser, setDeletingUser] = useState(null);

//   const activeUsers = users.filter(
//     (user) => user.status === "Active"
//   ).length;

//   const inactiveUsers = users.length - activeUsers;

//   const authors = users.filter(
//     (user) => user.role === "Author"
//   ).length;

//   const filteredUsers = useMemo(() => {
//     return users.filter((user) => {
//       const matchesSearch = `${user.name} ${user.email} ${user.role}`
//         .toLowerCase()
//         .includes(search.toLowerCase().trim());

//       const matchesFilter =
//         filter === "All" ||
//         (filter === "Active" && user.status === "Active") ||
//         (filter === "Inactive" && user.status === "Inactive") ||
//         user.role === filter;

//       return matchesSearch && matchesFilter;
//     });
//   }, [users, search, filter]);

//   const openAddModal = () => {
//     setEditingUser(null);
//     setShowModal(true);
//   };

//   const openEditModal = (user) => {
//     setEditingUser(user);
//     setShowModal(true);
//   };

//   const handleSave = (data) => {
//     if (editingUser) {
//       setUsers((previous) =>
//         previous.map((user) =>
//           user.id === editingUser.id
//             ? { ...user, ...data }
//             : user
//         )
//       );
//     } else {
//       setUsers((previous) => [
//         ...previous,
//         {
//           id: Date.now(),
//           ...data,
//           status: "Active",
//         },
//       ]);
//     }

//     setShowModal(false);
//     setEditingUser(null);
//   };

//   const toggleStatus = (id) => {
//     setUsers((previous) =>
//       previous.map((user) =>
//         user.id === id
//           ? {
//               ...user,
//               status:
//                 user.status === "Active" ? "Inactive" : "Active",
//             }
//           : user
//       )
//     );
//   };

//   const handleDelete = () => {
//     if (!deletingUser) return;

//     setUsers((previous) =>
//       previous.filter((user) => user.id !== deletingUser.id)
//     );

//     setDeletingUser(null);
//   };

//   const filterOptions = [
//     { label: "All", count: users.length },
//     { label: "Active", count: activeUsers },
//     { label: "Inactive", count: inactiveUsers },
//     { label: "Admin", count: users.filter((u) => u.role === "Admin").length },
//     { label: "Editor", count: users.filter((u) => u.role === "Editor").length },
//     { label: "Author", count: authors },
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
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
//               <Users size={24} />
//             </div>

//             <div>
//               <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                 Users & Authors
//               </h1>
//               <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                 Manage your editorial team and user accounts.
//               </p>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={openAddModal}
//           className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl"
//         >
//           <UserPlus size={18} />
//           Add New User
//         </button>
//       </div>

//       {/* Statistics */}
//       <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//         <StatCard
//           title="Total Users"
//           value={users.length}
//           subtitle="All registered team members"
//           icon={Users}
//           color="bg-[#C8102E]/10 text-[#C8102E]"
//         />

//         <StatCard
//           title="Active Users"
//           value={activeUsers}
//           subtitle="Currently active accounts"
//           icon={ShieldCheck}
//           color="bg-green-500/10 text-green-500"
//         />

//         <StatCard
//           title="Authors"
//           value={authors}
//           subtitle="News writing team"
//           icon={UserRound}
//           color="bg-blue-500/10 text-blue-500"
//         />

//         <StatCard
//           title="Inactive Users"
//           value={inactiveUsers}
//           subtitle="Currently inactive accounts"
//           icon={UserCog}
//           color="bg-orange-500/10 text-orange-500"
//         />
//       </div>

//       {/* Team Overview */}
//       <div className="mb-7 rounded-2xl border border-[#C8102E]/15 bg-gradient-to-r from-[#C8102E]/[0.06] to-transparent p-5">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//           <div className="flex items-start gap-3">
//             <div className="rounded-xl bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
//               <ShieldCheck size={21} />
//             </div>

//             <div>
//               <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//                 Editorial Team Management
//               </h3>
//               <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//                 Manage administrators, editors and authors from one place.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <RoleBadge role="Admin" />
//             <RoleBadge role="Editor" />
//             <RoleBadge role="Author" />
//           </div>
//         </div>
//       </div>

//       {/* Search and Filters */}
//       <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
//         <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-lg font-black">Team Directory</h2>
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               Search and manage user accounts.
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
//               placeholder="Search name, email or role..."
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//             />

//             {search && (
//               <button
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C8102E]"
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
//               className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold transition ${
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

//       {/* User Table */}
//       <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
//         <div className="flex flex-col justify-between gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center dark:border-white/10">
//           <div>
//             <h2 className="text-lg font-black">All Users</h2>
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               {filteredUsers.length} team members found
//             </p>
//           </div>

//           <button
//             onClick={openAddModal}
//             className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
//           >
//             Add Member
//             <PlusCircle size={16} />
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[850px] text-left">
//             <thead className="bg-gray-50 text-[11px] uppercase tracking-wider text-gray-500 dark:bg-white/[0.03] dark:text-gray-400">
//               <tr>
//                 <th className="px-6 py-4">User</th>
//                 <th className="px-6 py-4">Email Address</th>
//                 <th className="px-6 py-4">Role</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-100 dark:divide-white/5">
//               {filteredUsers.map((user, index) => (
//                 <motion.tr
//                   layout
//                   key={user.id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: index * 0.04 }}
//                   className="transition hover:bg-gray-50 dark:hover:bg-white/[0.025]"
//                 >
//                   <td className="px-6 py-5">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8102E]/15 to-[#C8102E]/5 text-sm font-black text-[#C8102E] ring-1 ring-[#C8102E]/10">
//                         {user.name.charAt(0).toUpperCase()}
//                       </div>

//                       <div>
//                         <p className="font-bold text-gray-900 dark:text-white">
//                           {user.name}
//                         </p>
//                         <p className="mt-1 text-[11px] text-gray-400">
//                           User ID: #{user.id}
//                         </p>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="px-6 py-5">
//                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                       <Mail size={14} />
//                       {user.email}
//                     </div>
//                   </td>

//                   <td className="px-6 py-5">
//                     <RoleBadge role={user.role} />
//                   </td>

//                   <td className="px-6 py-5">
//                     <StatusBadge status={user.status} />
//                   </td>

//                   <td className="px-6 py-5">
//                     <div className="flex justify-end gap-2">
//                       <button
//                         onClick={() => toggleStatus(user.id)}
//                         className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${
//                           user.status === "Active"
//                             ? "border-orange-500/20 text-orange-500 hover:bg-orange-500/10"
//                             : "border-green-500/20 text-green-600 hover:bg-green-500/10 dark:text-green-400"
//                         }`}
//                       >
//                         {user.status === "Active" ? "Deactivate" : "Activate"}
//                       </button>

//                       <button
//                         onClick={() => openEditModal(user)}
//                         title="Edit user"
//                         className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-500 dark:border-white/10"
//                       >
//                         <Edit3 size={15} />
//                       </button>

//                       <button
//                         onClick={() => setDeletingUser(user)}
//                         title="Delete user"
//                         className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500/40 hover:bg-red-500/5 hover:text-red-500 dark:border-white/10"
//                       >
//                         <Trash2 size={15} />
//                       </button>
//                     </div>
//                   </td>
//                 </motion.tr>
//               ))}

//               {filteredUsers.length === 0 && (
//                 <tr>
//                   <td colSpan={5} className="px-6 py-16 text-center">
//                     <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
//                       <Users size={25} />
//                     </div>

//                     <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
//                       No users found
//                     </h3>

//                     <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                       Try another search or change the filter.
//                     </p>

//                     <button
//                       onClick={() => {
//                         setSearch("");
//                         setFilter("All");
//                       }}
//                       className="mt-4 text-sm font-bold text-[#C8102E] hover:underline"
//                     >
//                       Clear Filters
//                     </button>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Information */}
//       <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-5">
//         <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-500">
//           <ShieldCheck size={20} />
//         </div>

//         <div>
//           <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//             User Security & Permissions
//           </h3>
//           <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//             These are frontend demo users. Actual authentication, passwords,
//             permissions, role-based access control and account security will
//             be handled securely by Django.
//           </p>
//         </div>
//       </div>

//       {/* Modals */}
//       <AnimatePresence>
//         {showModal && (
//           <UserModal
//             user={editingUser}
//             users={users}
//             onClose={() => {
//               setShowModal(false);
//               setEditingUser(null);
//             }}
//             onSave={handleSave}
//           />
//         )}

//         {deletingUser && (
//           <DeleteModal
//             user={deletingUser}
//             onClose={() => setDeletingUser(null)}
//             onConfirm={handleDelete}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default ManageUsers;


import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Search,
  PlusCircle,
  Trash2,
  Users,
  ShieldCheck,
  UserRound,
  X,
  Edit3,
  Save,
  AlertTriangle,
  CheckCircle2,
  UserCog,
  Mail,
  Filter,
  UserPlus,
  Shield,
  Phone,
  Lock,
  RefreshCw,
  Eye,
  EyeOff,
} from "lucide-react";
import API from "../services/api.js";

// =========================================================
// ROLE CONFIG
// =========================================================
const roles = [
  { value: "ADMIN", label: "Admin" },
  { value: "EDITOR", label: "Editor" },
];

// =========================================================
// HELPERS
// =========================================================
const getList = (data) => {
  if (Array.isArray(data)) return data;

  if (Array.isArray(data?.results)) {
    return data.results;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  return [];
};

const getRoleLabel = (role) => {
  const found = roles.find(
    (item) => item.value === role
  );

  return found?.label || role || "Unknown";
};

const getFullName = (user) => {
  const fullName = `${user?.first_name || ""} ${
    user?.last_name || ""
  }`.trim();

  return fullName || user?.username || "Unnamed User";
};

// =========================================================
// STAT CARD
// =========================================================
function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}) {
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

// =========================================================
// ROLE BADGE
// =========================================================
function RoleBadge({ role }) {
  const styles = {
    ADMIN:
      "bg-purple-500/10 text-purple-600 dark:text-purple-400",

    EDITOR:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
        styles[role] ||
        "bg-gray-500/10 text-gray-600 dark:text-gray-400"
      }`}
    >
      {role === "ADMIN" ? (
        <Shield size={12} />
      ) : (
        <Edit3 size={12} />
      )}

      {getRoleLabel(role)}
    </span>
  );
}

// =========================================================
// STATUS BADGE
// =========================================================
function StatusBadge({ active }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
        active
          ? "bg-green-500/10 text-green-600 dark:text-green-400"
          : "bg-gray-500/10 text-gray-500 dark:text-gray-400"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active ? "bg-green-500" : "bg-gray-400"
        }`}
      />

      {active ? "Active" : "Inactive"}
    </span>
  );
}

// =========================================================
// USER MODAL
// =========================================================
function UserModal({
  user,
  users,
  onClose,
  onSave,
  saving,
}) {
  const isEditing = Boolean(user);

  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    password: "",
    role: user?.role || "EDITOR",
    phone: user?.phone || "",
    bio: user?.bio || "",
    is_verified: user?.is_verified ?? false,
    is_active: user?.is_active ?? true,
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = formData.username.trim();
    const email = formData.email.trim().toLowerCase();
    const firstName = formData.first_name.trim();
    const lastName = formData.last_name.trim();
    const password = formData.password;

    if (!username || !email) {
      setError("Username and email are required.");
      return;
    }

    if (!isEditing && !password) {
      setError("Password is required for a new user.");
      return;
    }

    if (!["ADMIN", "EDITOR"].includes(formData.role)) {
      setError("Only ADMIN and EDITOR roles are allowed.");
      return;
    }

    const duplicateUsername = users.some(
      (item) =>
        item.username?.toLowerCase() ===
          username.toLowerCase() &&
        item.id !== user?.id
    );

    if (duplicateUsername) {
      setError("This username is already registered.");
      return;
    }

    const duplicateEmail = users.some(
      (item) =>
        item.email?.toLowerCase() === email &&
        item.id !== user?.id
    );

    if (duplicateEmail) {
      setError("This email address is already registered.");
      return;
    }

    onSave(
      {
        username,
        email,
        first_name: firstName,
        last_name: lastName,
        password,
        role: formData.role,
        phone: formData.phone.trim(),
        bio: formData.bio.trim(),
        is_verified: formData.is_verified,
        is_active: formData.is_active,
      },
      setError
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (
          e.target === e.currentTarget &&
          !saving
        ) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.94,
          y: 15,
        }}
        className="my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-5 dark:border-white/10 dark:bg-[#17191f]">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white">
              {isEditing
                ? "Edit User"
                : "Add New User"}
            </h2>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {isEditing
                ? "Update user information and permissions."
                : "Create a new user account for your team."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500 hover:text-[#C8102E] disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          {/* Username */}
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
              Username *
            </label>

            <div className="relative">
              <UserRound
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                autoFocus
                type="text"
                value={formData.username}
                onChange={(e) =>
                  updateField(
                    "username",
                    e.target.value
                  )
                }
                placeholder="Enter username"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
              />
            </div>
          </div>

          {/* First + Last Name */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
                First Name
              </label>

              <input
                type="text"
                value={formData.first_name}
                onChange={(e) =>
                  updateField(
                    "first_name",
                    e.target.value
                  )
                }
                placeholder="First name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
                Last Name
              </label>

              <input
                type="text"
                value={formData.last_name}
                onChange={(e) =>
                  updateField(
                    "last_name",
                    e.target.value
                  )
                }
                placeholder="Last name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
                Email Address *
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    updateField(
                      "email",
                      e.target.value
                    )
                  }
                  placeholder="name@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
                Phone
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    updateField(
                      "phone",
                      e.target.value
                    )
                  }
                  placeholder="Phone number"
                  maxLength={15}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
              Password{" "}
              {isEditing
                ? "(leave blank to keep current)"
                : "*"}
            </label>

            <div className="relative">
              <Lock
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={formData.password}
                onChange={(e) =>
                  updateField(
                    "password",
                    e.target.value
                  )
                }
                placeholder={
                  isEditing
                    ? "Leave blank to keep current password"
                    : "Enter password"
                }
                required={!isEditing}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    (previous) => !previous
                  )
                }
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#C8102E]"
              >
                {showPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
              User Role
            </label>

            <select
              value={formData.role}
              onChange={(e) =>
                updateField(
                  "role",
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
            >
              {roles.map((role) => (
                <option
                  key={role.value}
                  value={role.value}
                >
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bio */}
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
              Bio
            </label>

            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) =>
                updateField(
                  "bio",
                  e.target.value
                )
              }
              placeholder="Short user biography..."
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
            />
          </div>

          {/* Status Options */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#0d0f13]">
              <input
                type="checkbox"
                checked={formData.is_verified}
                onChange={(e) =>
                  updateField(
                    "is_verified",
                    e.target.checked
                  )
                }
                className="h-4 w-4 accent-[#C8102E]"
              />

              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Verified User
                </p>

                <p className="text-xs text-gray-400">
                  Mark this account as verified.
                </p>
              </div>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#0d0f13]">
              <input
                type="checkbox"
                checked={formData.is_active}
                onChange={(e) =>
                  updateField(
                    "is_active",
                    e.target.checked
                  )
                }
                className="h-4 w-4 accent-[#C8102E]"
              />

              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  Active Account
                </p>

                <p className="text-xs text-gray-400">
                  Allow this user to remain active.
                </p>
              </div>
            </label>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-xs font-medium text-red-500">
              <AlertTriangle
                size={15}
                className="mt-0.5 shrink-0"
              />

              <span>{error}</span>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#a50d25] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {saving ? (
                <>
                  <RefreshCw
                    size={16}
                    className="animate-spin"
                  />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={16} />
                  {isEditing
                    ? "Update User"
                    : "Create User"}
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

// =========================================================
// DELETE MODAL
// =========================================================
function DeleteModal({
  user,
  onClose,
  onConfirm,
  deleting,
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.94,
        }}
        className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
          <AlertTriangle size={27} />
        </div>

        <h2 className="mt-5 text-center text-xl font-black text-gray-900 dark:text-white">
          Delete User?
        </h2>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
          Are you sure you want to permanently delete{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {getFullName(user)}
          </span>
          ?
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            disabled={deleting}
            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 disabled:opacity-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={deleting}
            className="flex-1 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a50d25] disabled:opacity-70"
          >
            {deleting
              ? "Deleting..."
              : "Delete User"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// =========================================================
// MAIN COMPONENT
// =========================================================
function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // =======================================================
  // FETCH USERS
  // =======================================================
  const fetchUsers = async (showRefresh = false) => {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response = await API.get(
        "accounts/users/"
      );

      const userList = getList(response.data);

      // Only ADMIN and EDITOR are valid management users
      const allowedUsers = userList.filter((user) =>
        ["ADMIN", "EDITOR"].includes(user.role)
      );

      setUsers(allowedUsers);
    } catch (err) {
      console.error(
        "FETCH USERS ERROR:",
        err
      );

      const message =
        err?.response?.data?.detail ||
        "Unable to load users from the server.";

      setError(message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // =======================================================
  // STATS
  // =======================================================
  const activeUsers = users.filter(
    (user) => user.is_active
  ).length;

  const inactiveUsers =
    users.length - activeUsers;

  const editors = users.filter(
    (user) => user.role === "EDITOR"
  ).length;

  const admins = users.filter(
    (user) => user.role === "ADMIN"
  ).length;

  // =======================================================
  // FILTER USERS
  // =======================================================
  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase().trim();

    return users.filter((user) => {
      const fullName = getFullName(user);

      const searchableText = `
        ${fullName}
        ${user.username || ""}
        ${user.email || ""}
        ${user.role || ""}
        ${user.phone || ""}
      `.toLowerCase();

      const matchesSearch =
        !query ||
        searchableText.includes(query);

      let matchesFilter = true;

      if (filter === "Active") {
        matchesFilter = user.is_active;
      } else if (filter === "Inactive") {
        matchesFilter = !user.is_active;
      } else if (
        ["ADMIN", "EDITOR"].includes(filter)
      ) {
        matchesFilter = user.role === filter;
      }

      return (
        matchesSearch &&
        matchesFilter
      );
    });
  }, [users, search, filter]);

  // =======================================================
  // OPEN ADD
  // =======================================================
  const openAddModal = () => {
    setEditingUser(null);
    setShowModal(true);
    setError("");
    setSuccess("");
  };

  // =======================================================
  // OPEN EDIT
  // =======================================================
  const openEditModal = (user) => {
    setEditingUser(user);
    setShowModal(true);
    setError("");
    setSuccess("");
  };

  // =======================================================
  // SAVE USER
  // =======================================================
  const handleSave = async (
    data,
    setFormError
  ) => {
    try {
      setSaving(true);
      setError("");
      setSuccess("");

      let response;

      if (editingUser) {
        const payload = {
          username: data.username,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          role: data.role,
          phone: data.phone,
          bio: data.bio,
          is_verified: data.is_verified,
          is_active: data.is_active,
        };

        if (data.password) {
          payload.password = data.password;
        }

        response = await API.patch(
          `accounts/users/${editingUser.id}/`,
          payload
        );

        // Keep frontend restricted to ADMIN/EDITOR
        if (
          ["ADMIN", "EDITOR"].includes(
            response.data.role
          )
        ) {
          setUsers((previous) =>
            previous.map((user) =>
              user.id === editingUser.id
                ? response.data
                : user
            )
          );
        }

        setSuccess(
          "User updated successfully."
        );
      } else {
        const payload = {
          username: data.username,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          password: data.password,
          role: data.role,
          phone: data.phone,
          bio: data.bio,
          is_verified: data.is_verified,
          is_active: data.is_active,
        };

        response = await API.post(
          "accounts/users/",
          payload
        );

        if (
          ["ADMIN", "EDITOR"].includes(
            response.data.role
          )
        ) {
          setUsers((previous) => [
            response.data,
            ...previous,
          ]);
        }

        setSuccess(
          "User created successfully."
        );
      }

      setShowModal(false);
      setEditingUser(null);

      setTimeout(() => {
        setSuccess("");
      }, 3500);
    } catch (err) {
      console.error(
        "SAVE USER ERROR:",
        err
      );

      const backendError =
        err?.response?.data;

      let message = "Unable to save user.";

      if (backendError?.detail) {
        message = backendError.detail;
      } else if (backendError) {
        const firstField =
          Object.keys(backendError)[0];

        if (firstField) {
          const value =
            backendError[firstField];

          message = Array.isArray(value)
            ? `${firstField}: ${value[0]}`
            : `${firstField}: ${value}`;
        }
      }

      setFormError(message);
    } finally {
      setSaving(false);
    }
  };

  // =======================================================
  // TOGGLE STATUS
  // =======================================================
  const toggleStatus = async (user) => {
    try {
      setError("");
      setSuccess("");

      const response = await API.patch(
        `accounts/users/${user.id}/`,
        {
          is_active: !user.is_active,
        }
      );

      setUsers((previous) =>
        previous.map((item) =>
          item.id === user.id
            ? response.data
            : item
        )
      );

      setSuccess(
        response.data.is_active
          ? "User activated successfully."
          : "User deactivated successfully."
      );

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      console.error(
        "TOGGLE USER STATUS ERROR:",
        err
      );

      setError(
        err?.response?.data?.detail ||
          "Unable to update user status."
      );
    }
  };

  // =======================================================
  // DELETE USER
  // =======================================================
  const handleDelete = async () => {
    if (!deletingUser) return;

    try {
      setDeleting(true);
      setError("");
      setSuccess("");

      await API.delete(
        `accounts/users/${deletingUser.id}/`
      );

      setUsers((previous) =>
        previous.filter(
          (user) =>
            user.id !== deletingUser.id
        )
      );

      setDeletingUser(null);
      setSuccess(
        "User deleted successfully."
      );

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      console.error(
        "DELETE USER ERROR:",
        err
      );

      setError(
        err?.response?.data?.detail ||
          "Unable to delete user."
      );
    } finally {
      setDeleting(false);
    }
  };

  // =======================================================
  // FILTER OPTIONS
  // =======================================================
  const filterOptions = [
    {
      label: "All",
      count: users.length,
    },
    {
      label: "Active",
      count: activeUsers,
    },
    {
      label: "Inactive",
      count: inactiveUsers,
    },
    {
      label: "ADMIN",
      count: admins,
    },
    {
      label: "EDITOR",
      count: editors,
    },
  ];

  // =======================================================
  // RENDER
  // =======================================================
  return (
    <div className="w-full text-gray-900 dark:text-white">

      {/* ===================================================
          HEADER
      =================================================== */}
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
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
              <Users size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                Users
              </h1>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage your administrators and editors.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              fetchUsers(true)
            }
            disabled={refreshing}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] disabled:opacity-60 dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
          >
            <RefreshCw
              size={17}
              className={
                refreshing
                  ? "animate-spin"
                  : ""
              }
            />
            Refresh
          </button>

          <button
            onClick={openAddModal}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl"
          >
            <UserPlus size={18} />
            Add New User
          </button>
        </div>
      </div>

      {/* ===================================================
          SUCCESS MESSAGE
      =================================================== */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="mb-5 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm font-bold text-green-600 dark:text-green-400"
          >
            <CheckCircle2 size={18} />
            {success}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================
          ERROR MESSAGE
      =================================================== */}
      {error && !showModal && (
        <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-500">
          <AlertTriangle
            size={18}
            className="mt-0.5 shrink-0"
          />

          <div className="flex-1">
            {error}
          </div>

          <button
            onClick={() => setError("")}
            className="text-red-400 hover:text-red-600"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* ===================================================
          STATISTICS
      =================================================== */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value={users.length}
          subtitle="All admin & editor accounts"
          icon={Users}
          color="bg-[#C8102E]/10 text-[#C8102E]"
        />

        <StatCard
          title="Active Users"
          value={activeUsers}
          subtitle="Currently active accounts"
          icon={ShieldCheck}
          color="bg-green-500/10 text-green-500"
        />

        <StatCard
          title="Editors"
          value={editors}
          subtitle="Editorial team members"
          icon={Edit3}
          color="bg-blue-500/10 text-blue-500"
        />

        <StatCard
          title="Inactive Users"
          value={inactiveUsers}
          subtitle="Currently inactive"
          icon={UserCog}
          color="bg-orange-500/10 text-orange-500"
        />
      </div>

      {/* ===================================================
          TEAM OVERVIEW
      =================================================== */}
      <div className="mb-7 rounded-2xl border border-[#C8102E]/15 bg-gradient-to-r from-[#C8102E]/[0.06] to-transparent p-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
              <ShieldCheck size={21} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                Editorial Team Management
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                Manage administrators and editors from one place.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <RoleBadge role="ADMIN" />
            <RoleBadge role="EDITOR" />
          </div>
        </div>
      </div>

      {/* ===================================================
          SEARCH & FILTERS
      =================================================== */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-black">
              Team Directory
            </h2>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Search and manage real Django user accounts.
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search name, email, role..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
            />

            {search && (
              <button
                onClick={() =>
                  setSearch("")
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C8102E]"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 px-5 py-4 dark:border-white/10">
          <Filter
            size={15}
            className="mr-1 text-gray-400"
          />

          {filterOptions.map(
            (option) => (
              <button
                key={option.label}
                onClick={() =>
                  setFilter(option.label)
                }
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold transition ${
                  filter === option.label
                    ? "bg-[#C8102E] text-white shadow-md shadow-red-900/15"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10"
                }`}
              >
                {option.label === "All" ||
                option.label === "Active" ||
                option.label === "Inactive"
                  ? option.label
                  : getRoleLabel(
                      option.label
                    )}

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
            )
          )}
        </div>
      </div>

      {/* ===================================================
          USER TABLE
      =================================================== */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex flex-col justify-between gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center dark:border-white/10">
          <div>
            <h2 className="text-lg font-black">
              All Users
            </h2>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {loading
                ? "Loading users..."
                : `${filteredUsers.length} users found`}
            </p>
          </div>

          <button
            onClick={openAddModal}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
          >
            Add Member
            <PlusCircle size={16} />
          </button>
        </div>

        {loading ? (
          <div className="flex min-h-[350px] items-center justify-center">
            <div className="text-center">
              <RefreshCw
                size={30}
                className="mx-auto animate-spin text-[#C8102E]"
              />

              <p className="mt-4 text-sm font-bold text-gray-500 dark:text-gray-400">
                Loading users from Django...
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left">
              <thead className="bg-gray-50 text-[11px] uppercase tracking-wider text-gray-500 dark:bg-white/[0.03] dark:text-gray-400">
                <tr>
                  <th className="px-6 py-4">
                    User
                  </th>

                  <th className="px-6 py-4">
                    Email
                  </th>

                  <th className="px-6 py-4">
                    Phone
                  </th>

                  <th className="px-6 py-4">
                    Role
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {filteredUsers.map(
                  (user, index) => (
                    <motion.tr
                      layout
                      key={user.id}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="transition hover:bg-gray-50 dark:hover:bg-white/[0.025]"
                    >
                      {/* User */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#C8102E]/15 to-[#C8102E]/5 text-sm font-black text-[#C8102E] ring-1 ring-[#C8102E]/10">
                            {user.profile_image ? (
                              <img
                                src={
                                  user.profile_image
                                }
                                alt={getFullName(
                                  user
                                )}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              getFullName(
                                user
                              )
                                .charAt(0)
                                .toUpperCase()
                            )}
                          </div>

                          <div>
                            <p className="font-bold text-gray-900 dark:text-white">
                              {getFullName(
                                user
                              )}
                            </p>

                            <p className="mt-1 text-[11px] text-gray-400">
                              @{user.username}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Mail size={14} />
                          {user.email || "—"}
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Phone size={14} />
                          {user.phone || "—"}
                        </div>
                      </td>

                      {/* Role */}
                      <td className="px-6 py-5">
                        <RoleBadge
                          role={user.role}
                        />
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">
                        <div className="flex flex-col items-start gap-2">
                          <StatusBadge
                            active={
                              user.is_active
                            }
                          />

                          {user.is_verified && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400">
                              <CheckCircle2
                                size={11}
                              />
                              Verified
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() =>
                              toggleStatus(
                                user
                              )
                            }
                            className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${
                              user.is_active
                                ? "border-orange-500/20 text-orange-500 hover:bg-orange-500/10"
                                : "border-green-500/20 text-green-600 hover:bg-green-500/10 dark:text-green-400"
                            }`}
                          >
                            {user.is_active
                              ? "Deactivate"
                              : "Activate"}
                          </button>

                          <button
                            onClick={() =>
                              openEditModal(
                                user
                              )
                            }
                            title="Edit user"
                            className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-500 dark:border-white/10"
                          >
                            <Edit3 size={15} />
                          </button>

                          <button
                            onClick={() =>
                              setDeletingUser(
                                user
                              )
                            }
                            title="Delete user"
                            className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500/40 hover:bg-red-500/5 hover:text-red-500 dark:border-white/10"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  )
                )}

                {/* Empty */}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-16 text-center"
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
                        <Users size={25} />
                      </div>

                      <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                        No users found
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Try another search or change the filter.
                      </p>

                      <button
                        onClick={() => {
                          setSearch("");
                          setFilter(
                            "All"
                          );
                        }}
                        className="mt-4 text-sm font-bold text-[#C8102E] hover:underline"
                      >
                        Clear Filters
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ===================================================
          SECURITY INFO
      =================================================== */}
      <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-5">
        <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-500">
          <ShieldCheck size={20} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            User Security & Permissions
          </h3>

          <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
            User management is protected by your
            Django ADMIN or EDITOR role, along with
            superuser permission. Passwords are securely
            hashed by Django before being stored.
          </p>
        </div>
      </div>

      {/* ===================================================
          MODALS
      =================================================== */}
      <AnimatePresence>
        {showModal && (
          <UserModal
            user={editingUser}
            users={users}
            onClose={() => {
              if (!saving) {
                setShowModal(false);
                setEditingUser(null);
              }
            }}
            onSave={handleSave}
            saving={saving}
          />
        )}

        {deletingUser && (
          <DeleteModal
            user={deletingUser}
            onClose={() => {
              if (!deleting) {
                setDeletingUser(null);
              }
            }}
            onConfirm={handleDelete}
            deleting={deleting}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ManageUsers;


// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   Search,
//   PlusCircle,
//   Trash2,
//   Users,
//   ShieldCheck,
//   UserRound,
//   X,
//   Edit3,
//   Save,
//   AlertTriangle,
//   CheckCircle2,
//   UserCog,
//   Mail,
//   Filter,
//   UserPlus,
//   Shield,
//   Phone,
//   Lock,
//   RefreshCw,
//   Eye,
//   EyeOff,
// } from "lucide-react";
// import API from "../services/api.js";

// // =========================================================
// // ROLE CONFIG
// // =========================================================
// const roles = [
//   { value: "ADMIN", label: "Admin" },
//   { value: "EDITOR", label: "Editor" },
//   { value: "AUTHOR", label: "Author" },
//   { value: "READER", label: "Reader" },
// ];

// // =========================================================
// // HELPERS
// // =========================================================
// const getList = (data) => {
//   if (Array.isArray(data)) return data;

//   if (Array.isArray(data?.results)) {
//     return data.results;
//   }

//   if (Array.isArray(data?.data)) {
//     return data.data;
//   }

//   return [];
// };

// const getRoleLabel = (role) => {
//   const found = roles.find((item) => item.value === role);
//   return found?.label || role || "Reader";
// };

// const getFullName = (user) => {
//   const fullName = `${user?.first_name || ""} ${
//     user?.last_name || ""
//   }`.trim();

//   return fullName || user?.username || "Unnamed User";
// };

// // =========================================================
// // STAT CARD
// // =========================================================
// function StatCard({
//   title,
//   value,
//   subtitle,
//   icon: Icon,
//   color,
// }) {
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

// // =========================================================
// // ROLE BADGE
// // =========================================================
// function RoleBadge({ role }) {
//   const styles = {
//     ADMIN:
//       "bg-purple-500/10 text-purple-600 dark:text-purple-400",

//     EDITOR:
//       "bg-blue-500/10 text-blue-600 dark:text-blue-400",

//     AUTHOR:
//       "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",

//     READER:
//       "bg-gray-500/10 text-gray-600 dark:text-gray-400",
//   };

//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
//         styles[role] || styles.READER
//       }`}
//     >
//       {role === "ADMIN" ? (
//         <Shield size={12} />
//       ) : role === "EDITOR" ? (
//         <Edit3 size={12} />
//       ) : (
//         <UserRound size={12} />
//       )}

//       {getRoleLabel(role)}
//     </span>
//   );
// }

// // =========================================================
// // STATUS BADGE
// // =========================================================
// function StatusBadge({ active }) {
//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
//         active
//           ? "bg-green-500/10 text-green-600 dark:text-green-400"
//           : "bg-gray-500/10 text-gray-500 dark:text-gray-400"
//       }`}
//     >
//       <span
//         className={`h-1.5 w-1.5 rounded-full ${
//           active ? "bg-green-500" : "bg-gray-400"
//         }`}
//       />

//       {active ? "Active" : "Inactive"}
//     </span>
//   );
// }

// // =========================================================
// // USER MODAL
// // =========================================================
// function UserModal({
//   user,
//   users,
//   onClose,
//   onSave,
//   saving,
// }) {
//   const isEditing = Boolean(user);

//   const [formData, setFormData] = useState({
//     username: user?.username || "",
//     email: user?.email || "",
//     first_name: user?.first_name || "",
//     last_name: user?.last_name || "",
//     password: "",
//     role: user?.role || "READER",
//     phone: user?.phone || "",
//     bio: user?.bio || "",
//     is_verified: user?.is_verified ?? false,
//     is_active: user?.is_active ?? true,
//   });

//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const updateField = (field, value) => {
//     setFormData((previous) => ({
//       ...previous,
//       [field]: value,
//     }));

//     setError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const username = formData.username.trim();
//     const email = formData.email.trim().toLowerCase();
//     const firstName = formData.first_name.trim();
//     const lastName = formData.last_name.trim();
//     const password = formData.password;

//     if (!username || !email) {
//       setError("Username and email are required.");
//       return;
//     }

//     if (!isEditing && !password) {
//       setError("Password is required for a new user.");
//       return;
//     }

//     const duplicateUsername = users.some(
//       (item) =>
//         item.username?.toLowerCase() === username.toLowerCase() &&
//         item.id !== user?.id
//     );

//     if (duplicateUsername) {
//       setError("This username is already registered.");
//       return;
//     }

//     const duplicateEmail = users.some(
//       (item) =>
//         item.email?.toLowerCase() === email &&
//         item.id !== user?.id
//     );

//     if (duplicateEmail) {
//       setError("This email address is already registered.");
//       return;
//     }

//     onSave({
//       username,
//       email,
//       first_name: firstName,
//       last_name: lastName,
//       password,
//       role: formData.role,
//       phone: formData.phone.trim(),
//       bio: formData.bio.trim(),
//       is_verified: formData.is_verified,
//       is_active: formData.is_active,
//     }, setError);
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm"
//       onMouseDown={(e) => {
//         if (e.target === e.currentTarget && !saving) {
//           onClose();
//         }
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.94, y: 15 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.94, y: 15 }}
//         className="my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//       >
//         {/* Header */}
//         <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-5 dark:border-white/10 dark:bg-[#17191f]">
//           <div>
//             <h2 className="text-lg font-black text-gray-900 dark:text-white">
//               {isEditing ? "Edit User" : "Add New User"}
//             </h2>

//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               {isEditing
//                 ? "Update user information and permissions."
//                 : "Create a new user account for your team."}
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             disabled={saving}
//             className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500 hover:text-[#C8102E] disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5 p-6"
//         >
//           {/* Username */}
//           <div>
//             <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//               Username *
//             </label>

//             <div className="relative">
//               <UserRound
//                 size={17}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//               />

//               <input
//                 autoFocus
//                 type="text"
//                 value={formData.username}
//                 onChange={(e) =>
//                   updateField("username", e.target.value)
//                 }
//                 placeholder="Enter username"
//                 required
//                 className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//               />
//             </div>
//           </div>

//           {/* First + Last Name */}
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 First Name
//               </label>

//               <input
//                 type="text"
//                 value={formData.first_name}
//                 onChange={(e) =>
//                   updateField("first_name", e.target.value)
//                 }
//                 placeholder="First name"
//                 className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Last Name
//               </label>

//               <input
//                 type="text"
//                 value={formData.last_name}
//                 onChange={(e) =>
//                   updateField("last_name", e.target.value)
//                 }
//                 placeholder="Last name"
//                 className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Email + Phone */}
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Email Address *
//               </label>

//               <div className="relative">
//                 <Mail
//                   size={17}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//                 />

//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) =>
//                     updateField("email", e.target.value)
//                   }
//                   placeholder="name@example.com"
//                   required
//                   className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Phone
//               </label>

//               <div className="relative">
//                 <Phone
//                   size={17}
//                   className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//                 />

//                 <input
//                   type="text"
//                   value={formData.phone}
//                   onChange={(e) =>
//                     updateField("phone", e.target.value)
//                   }
//                   placeholder="Phone number"
//                   maxLength={15}
//                   className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//               Password {isEditing ? "(leave blank to keep current)" : "*"}
//             </label>

//             <div className="relative">
//               <Lock
//                 size={17}
//                 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//               />

//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={(e) =>
//                   updateField("password", e.target.value)
//                 }
//                 placeholder={
//                   isEditing
//                     ? "Leave blank to keep current password"
//                     : "Enter password"
//                 }
//                 required={!isEditing}
//                 className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//               />

//               <button
//                 type="button"
//                 onClick={() =>
//                   setShowPassword((previous) => !previous)
//                 }
//                 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#C8102E]"
//               >
//                 {showPassword ? (
//                   <EyeOff size={17} />
//                 ) : (
//                   <Eye size={17} />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Role */}
//           <div>
//             <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//               User Role
//             </label>

//             <select
//               value={formData.role}
//               onChange={(e) =>
//                 updateField("role", e.target.value)
//               }
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//             >
//               {roles.map((role) => (
//                 <option
//                   key={role.value}
//                   value={role.value}
//                 >
//                   {role.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Bio */}
//           <div>
//             <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//               Bio
//             </label>

//             <textarea
//               rows={3}
//               value={formData.bio}
//               onChange={(e) =>
//                 updateField("bio", e.target.value)
//               }
//               placeholder="Short user biography..."
//               className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//             />
//           </div>

//           {/* Status Options */}
//           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//             <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#0d0f13]">
//               <input
//                 type="checkbox"
//                 checked={formData.is_verified}
//                 onChange={(e) =>
//                   updateField(
//                     "is_verified",
//                     e.target.checked
//                   )
//                 }
//                 className="h-4 w-4 accent-[#C8102E]"
//               />

//               <div>
//                 <p className="text-sm font-bold text-gray-900 dark:text-white">
//                   Verified User
//                 </p>

//                 <p className="text-xs text-gray-400">
//                   Mark this account as verified.
//                 </p>
//               </div>
//             </label>

//             <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#0d0f13]">
//               <input
//                 type="checkbox"
//                 checked={formData.is_active}
//                 onChange={(e) =>
//                   updateField(
//                     "is_active",
//                     e.target.checked
//                   )
//                 }
//                 className="h-4 w-4 accent-[#C8102E]"
//               />

//               <div>
//                 <p className="text-sm font-bold text-gray-900 dark:text-white">
//                   Active Account
//                 </p>

//                 <p className="text-xs text-gray-400">
//                   Allow this user to remain active.
//                 </p>
//               </div>
//             </label>
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-xs font-medium text-red-500">
//               <AlertTriangle
//                 size={15}
//                 className="mt-0.5 shrink-0"
//               />
//               <span>{error}</span>
//             </div>
//           )}

//           {/* Buttons */}
//           <div className="flex gap-3 pt-2">
//             <button
//               type="button"
//               onClick={onClose}
//               disabled={saving}
//               className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={saving}
//               className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#a50d25] disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {saving ? (
//                 <>
//                   <RefreshCw
//                     size={16}
//                     className="animate-spin"
//                   />
//                   Saving...
//                 </>
//               ) : (
//                 <>
//                   <Save size={16} />
//                   {isEditing ? "Update User" : "Create User"}
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

// // =========================================================
// // DELETE MODAL
// // =========================================================
// function DeleteModal({
//   user,
//   onClose,
//   onConfirm,
//   deleting,
// }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.94 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.94 }}
//         className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//       >
//         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
//           <AlertTriangle size={27} />
//         </div>

//         <h2 className="mt-5 text-center text-xl font-black text-gray-900 dark:text-white">
//           Delete User?
//         </h2>

//         <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
//           Are you sure you want to permanently delete{" "}
//           <span className="font-bold text-gray-900 dark:text-white">
//             {getFullName(user)}
//           </span>
//           ?
//         </p>

//         <div className="mt-6 flex gap-3">
//           <button
//             onClick={onClose}
//             disabled={deleting}
//             className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 disabled:opacity-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={onConfirm}
//             disabled={deleting}
//             className="flex-1 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a50d25] disabled:opacity-70"
//           >
//             {deleting ? "Deleting..." : "Delete User"}
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // =========================================================
// // MAIN COMPONENT
// // =========================================================
// function ManageUsers() {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const [showModal, setShowModal] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);
//   const [deletingUser, setDeletingUser] = useState(null);

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [deleting, setDeleting] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // =======================================================
//   // FETCH USERS
//   // =======================================================
//   const fetchUsers = async (showRefresh = false) => {
//     try {
//       if (showRefresh) {
//         setRefreshing(true);
//       } else {
//         setLoading(true);
//       }

//       setError("");

//       const response = await API.get("accounts/users/");

//       const userList = getList(response.data);

//       setUsers(userList);
//     } catch (err) {
//       console.error("FETCH USERS ERROR:", err);

//       const message =
//         err?.response?.data?.detail ||
//         "Unable to load users from the server.";

//       setError(message);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // =======================================================
//   // STATS
//   // =======================================================
//   const activeUsers = users.filter(
//     (user) => user.is_active
//   ).length;

//   const inactiveUsers = users.length - activeUsers;

//   const authors = users.filter(
//     (user) => user.role === "AUTHOR"
//   ).length;

//   const editors = users.filter(
//     (user) => user.role === "EDITOR"
//   ).length;

//   const admins = users.filter(
//     (user) => user.role === "ADMIN"
//   ).length;

//   // =======================================================
//   // FILTER USERS
//   // =======================================================
//   const filteredUsers = useMemo(() => {
//     const query = search.toLowerCase().trim();

//     return users.filter((user) => {
//       const fullName = getFullName(user);

//       const searchableText = `
//         ${fullName}
//         ${user.username || ""}
//         ${user.email || ""}
//         ${user.role || ""}
//         ${user.phone || ""}
//       `.toLowerCase();

//       const matchesSearch =
//         !query || searchableText.includes(query);

//       let matchesFilter = true;

//       if (filter === "Active") {
//         matchesFilter = user.is_active;
//       } else if (filter === "Inactive") {
//         matchesFilter = !user.is_active;
//       } else if (
//         ["ADMIN", "EDITOR", "AUTHOR", "READER"].includes(filter)
//       ) {
//         matchesFilter = user.role === filter;
//       }

//       return matchesSearch && matchesFilter;
//     });
//   }, [users, search, filter]);

//   // =======================================================
//   // OPEN ADD
//   // =======================================================
//   const openAddModal = () => {
//     setEditingUser(null);
//     setShowModal(true);
//     setError("");
//     setSuccess("");
//   };

//   // =======================================================
//   // OPEN EDIT
//   // =======================================================
//   const openEditModal = (user) => {
//     setEditingUser(user);
//     setShowModal(true);
//     setError("");
//     setSuccess("");
//   };

//   // =======================================================
//   // SAVE USER
//   // =======================================================
//   const handleSave = async (data, setFormError) => {
//     try {
//       setSaving(true);
//       setError("");
//       setSuccess("");

//       let response;

//       if (editingUser) {
//         const payload = {
//           username: data.username,
//           email: data.email,
//           first_name: data.first_name,
//           last_name: data.last_name,
//           role: data.role,
//           phone: data.phone,
//           bio: data.bio,
//           is_verified: data.is_verified,
//           is_active: data.is_active,
//         };

//         if (data.password) {
//           payload.password = data.password;
//         }

//         response = await API.patch(
//           `accounts/users/${editingUser.id}/`,
//           payload
//         );

//         setUsers((previous) =>
//           previous.map((user) =>
//             user.id === editingUser.id
//               ? response.data
//               : user
//           )
//         );

//         setSuccess("User updated successfully.");
//       } else {
//         const payload = {
//           username: data.username,
//           email: data.email,
//           first_name: data.first_name,
//           last_name: data.last_name,
//           password: data.password,
//           role: data.role,
//           phone: data.phone,
//           bio: data.bio,
//           is_verified: data.is_verified,
//           is_active: data.is_active,
//         };

//         response = await API.post(
//           "accounts/users/",
//           payload
//         );

//         setUsers((previous) => [
//           response.data,
//           ...previous,
//         ]);

//         setSuccess("User created successfully.");
//       }

//       setShowModal(false);
//       setEditingUser(null);

//       setTimeout(() => {
//         setSuccess("");
//       }, 3500);
//     } catch (err) {
//       console.error("SAVE USER ERROR:", err);

//       const backendError = err?.response?.data;

//       let message = "Unable to save user.";

//       if (backendError?.detail) {
//         message = backendError.detail;
//       } else if (backendError) {
//         const firstField = Object.keys(backendError)[0];

//         if (firstField) {
//           const value = backendError[firstField];

//           message = Array.isArray(value)
//             ? `${firstField}: ${value[0]}`
//             : `${firstField}: ${value}`;
//         }
//       }

//       setFormError(message);
//     } finally {
//       setSaving(false);
//     }
//   };

//   // =======================================================
//   // TOGGLE STATUS
//   // =======================================================
//   const toggleStatus = async (user) => {
//     try {
//       setError("");
//       setSuccess("");

//       const response = await API.patch(
//         `accounts/users/${user.id}/`,
//         {
//           is_active: !user.is_active,
//         }
//       );

//       setUsers((previous) =>
//         previous.map((item) =>
//           item.id === user.id
//             ? response.data
//             : item
//         )
//       );

//       setSuccess(
//         response.data.is_active
//           ? "User activated successfully."
//           : "User deactivated successfully."
//       );

//       setTimeout(() => {
//         setSuccess("");
//       }, 3000);
//     } catch (err) {
//       console.error("TOGGLE USER STATUS ERROR:", err);

//       setError(
//         err?.response?.data?.detail ||
//           "Unable to update user status."
//       );
//     }
//   };

//   // =======================================================
//   // DELETE USER
//   // =======================================================
//   const handleDelete = async () => {
//     if (!deletingUser) return;

//     try {
//       setDeleting(true);
//       setError("");
//       setSuccess("");

//       await API.delete(
//         `accounts/users/${deletingUser.id}/`
//       );

//       setUsers((previous) =>
//         previous.filter(
//           (user) => user.id !== deletingUser.id
//         )
//       );

//       setDeletingUser(null);
//       setSuccess("User deleted successfully.");

//       setTimeout(() => {
//         setSuccess("");
//       }, 3000);
//     } catch (err) {
//       console.error("DELETE USER ERROR:", err);

//       setError(
//         err?.response?.data?.detail ||
//           "Unable to delete user."
//       );
//     } finally {
//       setDeleting(false);
//     }
//   };

//   // =======================================================
//   // FILTER OPTIONS
//   // =======================================================
//   const filterOptions = [
//     {
//       label: "All",
//       count: users.length,
//     },
//     {
//       label: "Active",
//       count: activeUsers,
//     },
//     {
//       label: "Inactive",
//       count: inactiveUsers,
//     },
//     {
//       label: "ADMIN",
//       count: admins,
//     },
//     {
//       label: "EDITOR",
//       count: editors,
//     },
//     {
//       label: "AUTHOR",
//       count: authors,
//     },
//     {
//       label: "READER",
//       count: users.filter(
//         (user) => user.role === "READER"
//       ).length,
//     },
//   ];

//   // =======================================================
//   // RENDER
//   // =======================================================
//   return (
//     <div className="w-full text-gray-900 dark:text-white">

//       {/* ===================================================
//           HEADER
//       =================================================== */}
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
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
//               <Users size={24} />
//             </div>

//             <div>
//               <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                 Users & Authors
//               </h1>

//               <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                 Manage your editorial team and user accounts.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-2">
//           <button
//             onClick={() => fetchUsers(true)}
//             disabled={refreshing}
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] disabled:opacity-60 dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
//           >
//             <RefreshCw
//               size={17}
//               className={
//                 refreshing ? "animate-spin" : ""
//               }
//             />
//             Refresh
//           </button>

//           <button
//             onClick={openAddModal}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl"
//           >
//             <UserPlus size={18} />
//             Add New User
//           </button>
//         </div>
//       </div>

//       {/* ===================================================
//           SUCCESS MESSAGE
//       =================================================== */}
//       <AnimatePresence>
//         {success && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="mb-5 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm font-bold text-green-600 dark:text-green-400"
//           >
//             <CheckCircle2 size={18} />
//             {success}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ===================================================
//           ERROR MESSAGE
//       =================================================== */}
//       {error && !showModal && (
//         <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-500">
//           <AlertTriangle
//             size={18}
//             className="mt-0.5 shrink-0"
//           />

//           <div className="flex-1">
//             {error}
//           </div>

//           <button
//             onClick={() => setError("")}
//             className="text-red-400 hover:text-red-600"
//           >
//             <X size={16} />
//           </button>
//         </div>
//       )}

//       {/* ===================================================
//           STATISTICS
//       =================================================== */}
//       <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//         <StatCard
//           title="Total Users"
//           value={users.length}
//           subtitle="All registered users"
//           icon={Users}
//           color="bg-[#C8102E]/10 text-[#C8102E]"
//         />

//         <StatCard
//           title="Active Users"
//           value={activeUsers}
//           subtitle="Currently active accounts"
//           icon={ShieldCheck}
//           color="bg-green-500/10 text-green-500"
//         />

//         <StatCard
//           title="Authors"
//           value={authors}
//           subtitle="News writing team"
//           icon={UserRound}
//           color="bg-blue-500/10 text-blue-500"
//         />

//         <StatCard
//           title="Inactive Users"
//           value={inactiveUsers}
//           subtitle="Currently inactive"
//           icon={UserCog}
//           color="bg-orange-500/10 text-orange-500"
//         />
//       </div>

//       {/* ===================================================
//           TEAM OVERVIEW
//       =================================================== */}
//       <div className="mb-7 rounded-2xl border border-[#C8102E]/15 bg-gradient-to-r from-[#C8102E]/[0.06] to-transparent p-5">
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//           <div className="flex items-start gap-3">
//             <div className="rounded-xl bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
//               <ShieldCheck size={21} />
//             </div>

//             <div>
//               <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//                 Editorial Team Management
//               </h3>

//               <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//                 Manage administrators, editors, authors and readers from one place.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <RoleBadge role="ADMIN" />
//             <RoleBadge role="EDITOR" />
//             <RoleBadge role="AUTHOR" />
//             <RoleBadge role="READER" />
//           </div>
//         </div>
//       </div>

//       {/* ===================================================
//           SEARCH & FILTERS
//       =================================================== */}
//       <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
//         <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-lg font-black">
//               Team Directory
//             </h2>

//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               Search and manage real Django user accounts.
//             </p>
//           </div>

//           <div className="relative w-full sm:max-w-xs">
//             <Search
//               size={18}
//               className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//             />

//             <input
//               value={search}
//               onChange={(e) =>
//                 setSearch(e.target.value)
//               }
//               placeholder="Search name, email, role..."
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//             />

//             {search && (
//               <button
//                 onClick={() => setSearch("")}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C8102E]"
//               >
//                 <X size={16} />
//               </button>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 px-5 py-4 dark:border-white/10">
//           <Filter
//             size={15}
//             className="mr-1 text-gray-400"
//           />

//           {filterOptions.map((option) => (
//             <button
//               key={option.label}
//               onClick={() => setFilter(option.label)}
//               className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold transition ${
//                 filter === option.label
//                   ? "bg-[#C8102E] text-white shadow-md shadow-red-900/15"
//                   : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10"
//               }`}
//             >
//               {getRoleLabel(option.label)}

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

//       {/* ===================================================
//           USER TABLE
//       =================================================== */}
//       <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
//         <div className="flex flex-col justify-between gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center dark:border-white/10">
//           <div>
//             <h2 className="text-lg font-black">
//               All Users
//             </h2>

//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               {loading
//                 ? "Loading users..."
//                 : `${filteredUsers.length} users found`}
//             </p>
//           </div>

//           <button
//             onClick={openAddModal}
//             className="inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
//           >
//             Add Member
//             <PlusCircle size={16} />
//           </button>
//         </div>

//         {loading ? (
//           <div className="flex min-h-[350px] items-center justify-center">
//             <div className="text-center">
//               <RefreshCw
//                 size={30}
//                 className="mx-auto animate-spin text-[#C8102E]"
//               />

//               <p className="mt-4 text-sm font-bold text-gray-500 dark:text-gray-400">
//                 Loading users from Django...
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1050px] text-left">
//               <thead className="bg-gray-50 text-[11px] uppercase tracking-wider text-gray-500 dark:bg-white/[0.03] dark:text-gray-400">
//                 <tr>
//                   <th className="px-6 py-4">
//                     User
//                   </th>

//                   <th className="px-6 py-4">
//                     Email
//                   </th>

//                   <th className="px-6 py-4">
//                     Phone
//                   </th>

//                   <th className="px-6 py-4">
//                     Role
//                   </th>

//                   <th className="px-6 py-4">
//                     Status
//                   </th>

//                   <th className="px-6 py-4 text-right">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-gray-100 dark:divide-white/5">
//                 {filteredUsers.map(
//                   (user, index) => (
//                     <motion.tr
//                       layout
//                       key={user.id}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{
//                         delay: index * 0.04,
//                       }}
//                       className="transition hover:bg-gray-50 dark:hover:bg-white/[0.025]"
//                     >
//                       {/* User */}
//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-3">
//                           <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#C8102E]/15 to-[#C8102E]/5 text-sm font-black text-[#C8102E] ring-1 ring-[#C8102E]/10">
//                             {user.profile_image ? (
//                               <img
//                                 src={user.profile_image}
//                                 alt={getFullName(user)}
//                                 className="h-full w-full object-cover"
//                               />
//                             ) : (
//                               getFullName(user)
//                                 .charAt(0)
//                                 .toUpperCase()
//                             )}
//                           </div>

//                           <div>
//                             <p className="font-bold text-gray-900 dark:text-white">
//                               {getFullName(user)}
//                             </p>

//                             <p className="mt-1 text-[11px] text-gray-400">
//                               @{user.username}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       {/* Email */}
//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                           <Mail size={14} />
//                           {user.email || "—"}
//                         </div>
//                       </td>

//                       {/* Phone */}
//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                           <Phone size={14} />
//                           {user.phone || "—"}
//                         </div>
//                       </td>

//                       {/* Role */}
//                       <td className="px-6 py-5">
//                         <RoleBadge role={user.role} />
//                       </td>

//                       {/* Status */}
//                       <td className="px-6 py-5">
//                         <div className="flex flex-col items-start gap-2">
//                           <StatusBadge
//                             active={user.is_active}
//                           />

//                           {user.is_verified && (
//                             <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400">
//                               <CheckCircle2 size={11} />
//                               Verified
//                             </span>
//                           )}
//                         </div>
//                       </td>

//                       {/* Actions */}
//                       <td className="px-6 py-5">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             onClick={() =>
//                               toggleStatus(user)
//                             }
//                             className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${
//                               user.is_active
//                                 ? "border-orange-500/20 text-orange-500 hover:bg-orange-500/10"
//                                 : "border-green-500/20 text-green-600 hover:bg-green-500/10 dark:text-green-400"
//                             }`}
//                           >
//                             {user.is_active
//                               ? "Deactivate"
//                               : "Activate"}
//                           </button>

//                           <button
//                             onClick={() =>
//                               openEditModal(user)
//                             }
//                             title="Edit user"
//                             className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-500 dark:border-white/10"
//                           >
//                             <Edit3 size={15} />
//                           </button>

//                           <button
//                             onClick={() =>
//                               setDeletingUser(user)
//                             }
//                             title="Delete user"
//                             className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500/40 hover:bg-red-500/5 hover:text-red-500 dark:border-white/10"
//                           >
//                             <Trash2 size={15} />
//                           </button>
//                         </div>
//                       </td>
//                     </motion.tr>
//                   )
//                 )}

//                 {/* Empty */}
//                 {filteredUsers.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={6}
//                       className="px-6 py-16 text-center"
//                     >
//                       <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
//                         <Users size={25} />
//                       </div>

//                       <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
//                         No users found
//                       </h3>

//                       <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                         Try another search or change the filter.
//                       </p>

//                       <button
//                         onClick={() => {
//                           setSearch("");
//                           setFilter("All");
//                         }}
//                         className="mt-4 text-sm font-bold text-[#C8102E] hover:underline"
//                       >
//                         Clear Filters
//                       </button>
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* ===================================================
//           SECURITY INFO
//       =================================================== */}
//       <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-5">
//         <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-500">
//           <ShieldCheck size={20} />
//         </div>

//         <div>
//           <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//             User Security & Permissions
//           </h3>

//           <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//             User management is protected by your Django
//             ADMIN role or superuser permission. Passwords are
//             securely hashed by Django before being stored.
//           </p>
//         </div>
//       </div>

//       {/* ===================================================
//           MODALS
//       =================================================== */}
//       <AnimatePresence>
//         {showModal && (
//           <UserModal
//             user={editingUser}
//             users={users}
//             onClose={() => {
//               if (!saving) {
//                 setShowModal(false);
//                 setEditingUser(null);
//               }
//             }}
//             onSave={handleSave}
//             saving={saving}
//           />
//         )}

//         {deletingUser && (
//           <DeleteModal
//             user={deletingUser}
//             onClose={() => {
//               if (!deleting) {
//                 setDeletingUser(null);
//               }
//             }}
//             onConfirm={handleDelete}
//             deleting={deleting}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default ManageUsers;