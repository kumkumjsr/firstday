
import { useMemo, useState } from "react";
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
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@hindustan.digital",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Editorial Team",
    email: "editor@hindustan.digital",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "News Reporter",
    email: "reporter@hindustan.digital",
    role: "Author",
    status: "Active",
  },
  {
    id: 4,
    name: "Guest Writer",
    email: "guest@hindustan.digital",
    role: "Author",
    status: "Inactive",
  },
];

const roles = ["Admin", "Editor", "Author"];

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

function RoleBadge({ role }) {
  const styles = {
    Admin: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    Editor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    Author: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
        styles[role] || styles.Author
      }`}
    >
      {role === "Admin" ? (
        <Shield size={12} />
      ) : role === "Editor" ? (
        <Edit3 size={12} />
      ) : (
        <UserRound size={12} />
      )}
      {role}
    </span>
  );
}

function StatusBadge({ status }) {
  const active = status === "Active";

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
      {status}
    </span>
  );
}

function UserModal({ user, users, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "Author",
  });

  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();

    if (!name || !email) {
      setError("Please fill in all required fields.");
      return;
    }

    const duplicateEmail = users.some(
      (item) =>
        item.email.toLowerCase() === email &&
        item.id !== user?.id
    );

    if (duplicateEmail) {
      setError("This email address is already registered.");
      return;
    }

    onSave({
      name,
      email,
      role: formData.role,
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        className="my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 dark:border-white/10">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white">
              {user ? "Edit User" : "Add New User"}
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {user
                ? "Update user information and role."
                : "Add a new team member to your dashboard."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500 hover:text-[#C8102E] dark:border-white/10"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
              Full Name
            </label>

            <div className="relative">
              <UserRound
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                autoFocus
                type="text"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Enter full name"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
              User Role
            </label>

            <select
              value={formData.role}
              onChange={(e) => updateField("role", e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <p className="mt-2 text-xs text-gray-400">
              Role permissions will be enforced by the Django backend later.
            </p>
          </div>

          {error && (
            <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs font-medium text-red-500">
              {error}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#a50d25]"
            >
              <Save size={16} />
              {user ? "Update User" : "Save User"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

function DeleteModal({ user, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
          <AlertTriangle size={27} />
        </div>

        <h2 className="mt-5 text-center text-xl font-black text-gray-900 dark:text-white">
          Delete User?
        </h2>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
          Are you sure you want to delete{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {user?.name}
          </span>
          ?
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a50d25]"
          >
            Delete User
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.length - activeUsers;

  const authors = users.filter(
    (user) => user.role === "Author"
  ).length;

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = `${user.name} ${user.email} ${user.role}`
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      const matchesFilter =
        filter === "All" ||
        (filter === "Active" && user.status === "Active") ||
        (filter === "Inactive" && user.status === "Inactive") ||
        user.role === filter;

      return matchesSearch && matchesFilter;
    });
  }, [users, search, filter]);

  const openAddModal = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleSave = (data) => {
    if (editingUser) {
      setUsers((previous) =>
        previous.map((user) =>
          user.id === editingUser.id
            ? { ...user, ...data }
            : user
        )
      );
    } else {
      setUsers((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...data,
          status: "Active",
        },
      ]);
    }

    setShowModal(false);
    setEditingUser(null);
  };

  const toggleStatus = (id) => {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  const handleDelete = () => {
    if (!deletingUser) return;

    setUsers((previous) =>
      previous.filter((user) => user.id !== deletingUser.id)
    );

    setDeletingUser(null);
  };

  const filterOptions = [
    { label: "All", count: users.length },
    { label: "Active", count: activeUsers },
    { label: "Inactive", count: inactiveUsers },
    { label: "Admin", count: users.filter((u) => u.role === "Admin").length },
    { label: "Editor", count: users.filter((u) => u.role === "Editor").length },
    { label: "Author", count: authors },
  ];

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
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
              <Users size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                Users & Authors
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage your editorial team and user accounts.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl"
        >
          <UserPlus size={18} />
          Add New User
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value={users.length}
          subtitle="All registered team members"
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
          title="Authors"
          value={authors}
          subtitle="News writing team"
          icon={UserRound}
          color="bg-blue-500/10 text-blue-500"
        />

        <StatCard
          title="Inactive Users"
          value={inactiveUsers}
          subtitle="Currently inactive accounts"
          icon={UserCog}
          color="bg-orange-500/10 text-orange-500"
        />
      </div>

      {/* Team Overview */}
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
                Manage administrators, editors and authors from one place.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <RoleBadge role="Admin" />
            <RoleBadge role="Editor" />
            <RoleBadge role="Author" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-black">Team Directory</h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Search and manage user accounts.
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
              placeholder="Search name, email or role..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C8102E]"
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
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold transition ${
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

      {/* User Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex flex-col justify-between gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center dark:border-white/10">
          <div>
            <h2 className="text-lg font-black">All Users</h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {filteredUsers.length} team members found
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

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-gray-50 text-[11px] uppercase tracking-wider text-gray-500 dark:bg-white/[0.03] dark:text-gray-400">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {filteredUsers.map((user, index) => (
                <motion.tr
                  layout
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.04 }}
                  className="transition hover:bg-gray-50 dark:hover:bg-white/[0.025]"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8102E]/15 to-[#C8102E]/5 text-sm font-black text-[#C8102E] ring-1 ring-[#C8102E]/10">
                        {user.name.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {user.name}
                        </p>
                        <p className="mt-1 text-[11px] text-gray-400">
                          User ID: #{user.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Mail size={14} />
                      {user.email}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <RoleBadge role={user.role} />
                  </td>

                  <td className="px-6 py-5">
                    <StatusBadge status={user.status} />
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => toggleStatus(user.id)}
                        className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${
                          user.status === "Active"
                            ? "border-orange-500/20 text-orange-500 hover:bg-orange-500/10"
                            : "border-green-500/20 text-green-600 hover:bg-green-500/10 dark:text-green-400"
                        }`}
                      >
                        {user.status === "Active" ? "Deactivate" : "Activate"}
                      </button>

                      <button
                        onClick={() => openEditModal(user)}
                        title="Edit user"
                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-500 dark:border-white/10"
                      >
                        <Edit3 size={15} />
                      </button>

                      <button
                        onClick={() => setDeletingUser(user)}
                        title="Delete user"
                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500/40 hover:bg-red-500/5 hover:text-red-500 dark:border-white/10"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
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
                        setFilter("All");
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
      </div>

      {/* Information */}
      <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-5">
        <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-500">
          <ShieldCheck size={20} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            User Security & Permissions
          </h3>
          <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
            These are frontend demo users. Actual authentication, passwords,
            permissions, role-based access control and account security will
            be handled securely by Django.
          </p>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showModal && (
          <UserModal
            user={editingUser}
            users={users}
            onClose={() => {
              setShowModal(false);
              setEditingUser(null);
            }}
            onSave={handleSave}
          />
        )}

        {deletingUser && (
          <DeleteModal
            user={deletingUser}
            onClose={() => setDeletingUser(null)}
            onConfirm={handleDelete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ManageUsers;
