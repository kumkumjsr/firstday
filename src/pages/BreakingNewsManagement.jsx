
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radio,
  PlusCircle,
  Trash2,
  ArrowLeft,
  Clock3,
  Megaphone,
  Power,
  Search,
  Edit3,
  X,
  Save,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Newspaper,
  Activity,
  Send,
} from "lucide-react";

const initialNews = [
  {
    id: 1,
    headline: "HINDUSTAN.DIGITAL पर आपका स्वागत है",
    active: true,
    createdAt: "02 Nov 2026",
  },
  {
    id: 2,
    headline: "देश और दुनिया की ताजा खबरों से जुड़े रहें",
    active: false,
    createdAt: "02 Nov 2026",
  },
];

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

function NewsModal({ item, news, onClose, onSave }) {
  const [headline, setHeadline] = useState(item?.headline || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = headline.trim();

    if (!value) {
      setError("Please enter a headline.");
      return;
    }

    const duplicate = news.some(
      (newsItem) =>
        newsItem.headline.toLowerCase() === value.toLowerCase() &&
        newsItem.id !== item?.id
    );

    if (duplicate) {
      setError("This headline already exists.");
      return;
    }

    onSave(value);
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
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 dark:border-white/10">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white">
              {item ? "Edit Breaking News" : "Create Breaking News"}
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {item
                ? "Update your breaking news headline."
                : "Add a new headline to your news ticker."}
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
              News Headline
            </label>

            <textarea
              autoFocus
              rows={3}
              maxLength={220}
              value={headline}
              onChange={(e) => {
                setHeadline(e.target.value);
                setError("");
              }}
              placeholder="Write your breaking news headline..."
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
            />

            <div className="mt-2 flex justify-between gap-3">
              {error ? (
                <p className="text-xs font-medium text-red-500">{error}</p>
              ) : (
                <p className="text-xs text-gray-400">
                  Keep your headline clear and concise.
                </p>
              )}

              <span className="shrink-0 text-xs text-gray-400">
                {headline.length}/220
              </span>
            </div>
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
              {item ? "Update Headline" : "Save Headline"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

function DeleteModal({ item, onClose, onConfirm }) {
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
          Delete Headline?
        </h2>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this breaking news headline? This
          action cannot be undone in this demo.
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

function BreakingNewsManagement() {
  const [news, setNews] = useState(initialNews);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);

  const activeNews = news.find((item) => item.active);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesSearch = item.headline
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      const matchesFilter =
        filter === "All" ||
        (filter === "Active" && item.active) ||
        (filter === "Inactive" && !item.active);

      return matchesSearch && matchesFilter;
    });
  }, [news, search, filter]);

  const openAddModal = () => {
    setEditingItem(null);
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleSave = (value) => {
    if (editingItem) {
      setNews((previous) =>
        previous.map((item) =>
          item.id === editingItem.id
            ? { ...item, headline: value }
            : item
        )
      );
    } else {
      setNews((previous) => [
        {
          id: Date.now(),
          headline: value,
          active: false,
          createdAt: new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
        },
        ...previous,
      ]);
    }

    setShowModal(false);
    setEditingItem(null);
  };

  const toggleStatus = (id) => {
    setNews((previous) =>
      previous.map((item) => ({
        ...item,
        active: item.id === id ? !item.active : false,
      }))
    );
  };

  const handleDelete = () => {
    setNews((previous) =>
      previous.filter((item) => item.id !== deletingItem.id)
    );
    setDeletingItem(null);
  };

  const filterOptions = [
    { label: "All", count: news.length },
    { label: "Active", count: news.filter((item) => item.active).length },
    { label: "Inactive", count: news.filter((item) => !item.active).length },
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
              <Radio size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                Breaking News
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Control your website's breaking news ticker.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-600 dark:text-emerald-400 sm:self-auto">
          <Activity size={17} />
          News Control Center
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Headlines"
          value={news.length}
          subtitle="All created headlines"
          icon={Megaphone}
          color="bg-[#C8102E]/10 text-[#C8102E]"
        />

        <StatCard
          title="Active Headlines"
          value={news.filter((item) => item.active).length}
          subtitle="Currently selected for ticker"
          icon={Radio}
          color="bg-emerald-500/10 text-emerald-500"
        />

        <StatCard
          title="Inactive Headlines"
          value={news.filter((item) => !item.active).length}
          subtitle="Saved but not displayed"
          icon={Power}
          color="bg-gray-500/10 text-gray-500"
        />
      </div>

      {/* Add Headline */}
      <div className="mb-7 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex items-center gap-3 border-b border-gray-100 p-5 dark:border-white/10">
          <div className="rounded-xl bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
            <PlusCircle size={20} />
          </div>

          <div>
            <h2 className="font-black">Manage Headlines</h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Create a new headline for your news ticker.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold">Ready to publish breaking news?</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Add a headline and activate it whenever you want.
            </p>
          </div>

          <button
            onClick={openAddModal}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl sm:w-auto"
          >
            <PlusCircle size={18} />
            Add Headline
          </button>
        </div>
      </div>

      {/* Live Preview */}
      <div className="mb-7 overflow-hidden rounded-2xl border border-[#C8102E]/20 bg-white shadow-sm dark:border-[#C8102E]/30 dark:bg-[#15171c]">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#C8102E] px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <Radio size={20} />
            <span className="text-sm font-black uppercase tracking-wider">
              Live Ticker Preview
            </span>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            Preview
          </span>
        </div>

        <div className="flex min-h-[90px] items-center gap-4 p-5">
          <div className="flex shrink-0 items-center gap-2 rounded-lg bg-[#C8102E]/10 px-3 py-2 text-xs font-black uppercase text-[#C8102E]">
            <Zap size={15} />
            Breaking
          </div>

          <p className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-100 sm:text-base">
            {activeNews?.headline || (
              <span className="font-medium text-gray-400">
                No active breaking news headline. Activate a headline to see
                the preview.
              </span>
            )}
          </p>
        </div>

        <div className="border-t border-gray-100 px-5 py-3 dark:border-white/10">
          <p className="text-xs text-gray-400">
            This is an admin-side preview. Public ticker synchronization will
            be connected with Django backend.
          </p>
        </div>
      </div>

      {/* All Headlines */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#15171c]">
        <div className="flex flex-col justify-between gap-4 border-b border-gray-200 p-5 dark:border-white/10 sm:flex-row sm:items-center sm:p-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black">All Headlines</h2>
              <span className="rounded-full bg-[#C8102E]/10 px-2.5 py-1 text-xs font-bold text-[#C8102E]">
                {filteredNews.length}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Activate, edit or remove your saved headlines.
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
              placeholder="Search headlines..."
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

        {/* Filters */}
        <div className="flex flex-wrap gap-2 border-b border-gray-100 px-5 py-4 dark:border-white/10">
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

        {/* News List */}
        <div className="divide-y divide-gray-100 dark:divide-white/[0.06]">
          {filteredNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.025 }}
              className="group flex flex-col justify-between gap-4 p-5 transition-colors duration-200 hover:bg-gray-50/80 dark:hover:bg-white/[0.025] sm:flex-row sm:items-center sm:p-6"
            >
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <div
                  className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    item.active
                      ? "bg-emerald-500/10 text-emerald-500"
                      : "bg-gray-100 text-gray-400 dark:bg-white/5"
                  }`}
                >
                  <Newspaper size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold ${
                        item.active
                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "border-gray-200 bg-gray-100 text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-400"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          item.active ? "bg-emerald-500" : "bg-gray-400"
                        }`}
                      />
                      {item.active ? "Active" : "Inactive"}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <Clock3 size={12} />
                      {item.createdAt}
                    </span>
                  </div>

                  <h3 className="break-words text-sm font-bold leading-6 text-gray-900 dark:text-white sm:text-base">
                    {item.headline}
                  </h3>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
                <button
                  type="button"
                  onClick={() => toggleStatus(item.id)}
                  className={`inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold transition ${
                    item.active
                      ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/15"
                  }`}
                >
                  <Power size={15} />
                  {item.active ? "Deactivate" : "Activate"}
                </button>

                <button
                  type="button"
                  onClick={() => openEditModal(item)}
                  title="Edit headline"
                  className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-500 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 dark:border-white/10 dark:bg-[#1b1e25]"
                >
                  <Edit3 size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => setDeletingItem(item)}
                  title="Delete headline"
                  className="rounded-lg border border-gray-200 bg-white p-2.5 text-gray-500 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-500 dark:border-white/10 dark:bg-[#1b1e25]"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}

          {filteredNews.length === 0 && (
            <div className="px-5 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
                <Radio size={25} />
              </div>

              <h3 className="mt-4 font-bold text-gray-800 dark:text-white">
                No headlines found
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Try another search or change the status filter.
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
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-between gap-2 border-t border-gray-200 px-5 py-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400 sm:flex-row sm:items-center">
          <p>
            Showing{" "}
            <span className="font-bold text-gray-800 dark:text-white">
              {filteredNews.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-800 dark:text-white">
              {news.length}
            </span>{" "}
            headlines
          </p>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-500" />
            Local demo management
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#C8102E]/15 bg-gradient-to-r from-[#C8102E]/[0.06] to-transparent p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-[#C8102E]/10 p-2.5 text-[#C8102E]">
            <Send size={20} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Keep your readers updated
            </h3>
            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
              Choose one active headline to highlight important news.
            </p>
          </div>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#C8102E] transition hover:gap-3"
        >
          Create Headline
          <PlusCircle size={16} />
        </button>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showModal && (
          <NewsModal
            item={editingItem}
            news={news}
            onClose={() => {
              setShowModal(false);
              setEditingItem(null);
            }}
            onSave={handleSave}
          />
        )}

        {deletingItem && (
          <DeleteModal
            item={deletingItem}
            onClose={() => setDeletingItem(null)}
            onConfirm={handleDelete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default BreakingNewsManagement;
