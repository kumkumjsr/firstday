
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusCircle,
  Search,
  Trash2,
  Edit3,
  FolderOpen,
  ArrowLeft,
  Newspaper,
  CheckCircle2,
  X,
  Hash,
  Layers3,
  ArrowUpRight,
  AlertTriangle,
  Save,
  FolderPlus,
  FileText,
} from "lucide-react";

const initialCategories = [
  { id: 1, name: "देश", slug: "desh", articles: 12, status: "Active" },
  { id: 2, name: "दुनिया", slug: "duniya", articles: 8, status: "Active" },
  { id: 3, name: "राजनीति", slug: "politics", articles: 15, status: "Active" },
  { id: 4, name: "बिजनेस", slug: "business", articles: 7, status: "Active" },
  { id: 5, name: "खेल", slug: "sports", articles: 10, status: "Active" },
  { id: 6, name: "मनोरंजन", slug: "entertainment", articles: 9, status: "Active" },
  { id: 7, name: "टेक्नोलॉजी", slug: "technology", articles: 6, status: "Active" },
  { id: 8, name: "शिक्षा", slug: "education", articles: 5, status: "Active" },
];

function StatCard({ title, value, icon: Icon, color, subtitle }) {
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

function CategoryModal({ category, onClose, onSave, categories }) {
  const [name, setName] = useState(category?.name || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      setError("Please enter a category name.");
      return;
    }

    const duplicate = categories.some(
      (item) =>
        item.name.toLowerCase() === trimmedName.toLowerCase() &&
        item.id !== category?.id
    );

    if (duplicate) {
      setError("This category already exists.");
      return;
    }

    onSave(trimmedName);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 dark:border-white/10">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white">
              {category ? "Edit Category" : "Create Category"}
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {category
                ? "Update your category information."
                : "Add a new category to your news portal."}
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
              Category Name
            </label>

            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="e.g. राजनीति"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
            />

            {error && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {error}
              </p>
            )}
          </div>

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
              {category ? "Update Category" : "Save Category"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

function DeleteModal({ category, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
          <AlertTriangle size={27} />
        </div>

        <h2 className="mt-5 text-center text-xl font-black text-gray-900 dark:text-white">
          Delete Category?
        </h2>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
          Are you sure you want to delete{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {category?.name}
          </span>
          ? This action cannot be undone in this demo.
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
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function ManageCategories() {
  const [categories, setCategories] = useState(initialCategories);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deletingCategory, setDeletingCategory] = useState(null);

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      `${category.name} ${category.slug}`
        .toLowerCase()
        .includes(search.toLowerCase().trim())
    );
  }, [categories, search]);

  const totalArticles = categories.reduce(
    (total, item) => total + item.articles,
    0
  );

  const activeCategories = categories.filter(
    (item) => item.status === "Active"
  ).length;

  const generateSlug = (name) => {
    return name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\p{L}\p{N}-]/gu, "");
  };

  const openAddModal = () => {
    setEditingCategory(null);
    setShowModal(true);
  };

  const openEditModal = (category) => {
    setEditingCategory(category);
    setShowModal(true);
  };

  const handleSaveCategory = (name) => {
    if (editingCategory) {
      setCategories((prev) =>
        prev.map((item) =>
          item.id === editingCategory.id
            ? { ...item, name, slug: generateSlug(name) }
            : item
        )
      );
    } else {
      setCategories((prev) => [
        ...prev,
        {
          id: Date.now(),
          name,
          slug: generateSlug(name),
          articles: 0,
          status: "Active",
        },
      ]);
    }

    setShowModal(false);
    setEditingCategory(null);
  };

  const handleDelete = () => {
    setCategories((prev) =>
      prev.filter((item) => item.id !== deletingCategory.id)
    );
    setDeletingCategory(null);
  };

  return (
    <div className="w-full text-gray-900 dark:text-white">
      {/* Page Header */}
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
              <FolderOpen size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                Categories
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Organize and manage your news sections.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl"
        >
          <PlusCircle size={18} />
          Add Category
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Categories"
          value={categories.length}
          icon={Layers3}
          color="bg-[#C8102E]/10 text-[#C8102E]"
          subtitle="All available news sections"
        />

        <StatCard
          title="Total Articles"
          value={totalArticles}
          icon={Newspaper}
          color="bg-blue-500/10 text-blue-500"
          subtitle="Articles across all categories"
        />

        <StatCard
          title="Active Categories"
          value={activeCategories}
          icon={CheckCircle2}
          color="bg-emerald-500/10 text-emerald-500"
          subtitle="Currently available sections"
        />
      </div>

      {/* Categories Section */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex flex-col justify-between gap-4 border-b border-gray-200 p-5 dark:border-white/10 sm:flex-row sm:items-center sm:p-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black">All Categories</h2>
              <span className="rounded-full bg-[#C8102E]/10 px-2.5 py-1 text-xs font-bold text-[#C8102E]">
                {filteredCategories.length}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              View, search and manage your news categories.
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search categories..."
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

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-gray-50/80 dark:bg-white/[0.025]">
              <tr className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Slug / URL</th>
                <th className="px-6 py-4">Articles</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-white/[0.06]">
              {filteredCategories.map((category, index) => (
                <motion.tr
                  key={category.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.025 }}
                  className="group transition-colors duration-200 hover:bg-gray-50/80 dark:hover:bg-white/[0.025]"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C8102E]/10 bg-[#C8102E]/5 text-[#C8102E] transition duration-300 group-hover:border-[#C8102E]/30 group-hover:bg-[#C8102E]/10">
                        <FolderOpen size={18} />
                      </div>

                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {category.name}
                        </p>
                        <p className="mt-0.5 text-[11px] text-gray-400">
                          Category #{category.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <Hash size={14} />
                      {category.slug}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <FileText size={15} className="text-gray-400" />
                      {category.articles}
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {category.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => openEditModal(category)}
                        title="Edit Category"
                        className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-500 transition duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 dark:border-white/10 dark:bg-[#1b1e25]"
                      >
                        <Edit3 size={16} />
                      </button>

                      <button
                        onClick={() => setDeletingCategory(category)}
                        title="Delete Category"
                        className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-500 transition duration-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-500 dark:border-white/10 dark:bg-[#1b1e25]"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}

              {filteredCategories.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-16 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
                      <FolderOpen size={25} />
                    </div>

                    <h3 className="mt-4 font-bold text-gray-800 dark:text-white">
                      No categories found
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Try another search or create a new category.
                    </p>

                    {search && (
                      <button
                        onClick={() => setSearch("")}
                        className="mt-4 text-sm font-bold text-[#C8102E] hover:underline"
                      >
                        Clear Search
                      </button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="flex flex-col justify-between gap-2 border-t border-gray-200 px-5 py-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400 sm:flex-row sm:items-center">
          <p>
            Showing{" "}
            <span className="font-bold text-gray-800 dark:text-white">
              {filteredCategories.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-800 dark:text-white">
              {categories.length}
            </span>{" "}
            categories
          </p>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-500" />
            All changes are currently local demo changes
          </div>
        </div>
      </div>

      {/* Bottom Information Card */}
      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#C8102E]/15 bg-gradient-to-r from-[#C8102E]/[0.06] to-transparent p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
            <FolderPlus size={20} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Keep your news organized
            </h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
              Create clear categories to help readers discover relevant news.
            </p>
          </div>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
        >
          Create Category
          <ArrowUpRight size={16} />
        </button>
      </div>

      <AnimatePresence>
        {showModal && (
          <CategoryModal
            category={editingCategory}
            categories={categories}
            onClose={() => {
              setShowModal(false);
              setEditingCategory(null);
            }}
            onSave={handleSaveCategory}
          />
        )}

        {deletingCategory && (
          <DeleteModal
            category={deletingCategory}
            onClose={() => setDeletingCategory(null)}
            onConfirm={handleDelete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ManageCategories;
