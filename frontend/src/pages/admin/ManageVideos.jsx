import { useEffect, useState } from "react";
import {
  Plus,
  Video,
  Edit,
  Trash2,
  Star,
  X,
  Upload,
  PlayCircle,
  RefreshCw,
} from "lucide-react";
import API from "../../services/api";

function ManageVideos() {
  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    video_url: "",
    status: "DRAFT",
    is_featured: false,
  });

  // =========================================================
  // FETCH VIDEOS
  // =========================================================

  const fetchVideos = async () => {
    try {
      setLoading(true);

      const response = await API.get("videos/");

      const data = response.data;

      if (Array.isArray(data)) {
        setVideos(data);
      } else if (Array.isArray(data?.results)) {
        setVideos(data.results);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Video fetch error:", error);

      alert("Videos load nahi ho paaye.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // =========================================================
  // INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================================================
  // OPEN ADD FORM
  // =========================================================

  const handleAdd = () => {
    setEditingId(null);

    setFormData({
      title: "",
      description: "",
      video_url: "",
      status: "DRAFT",
      is_featured: false,
    });

    setShowForm(true);
  };

  // =========================================================
  // EDIT VIDEO
  // =========================================================

  const handleEdit = (video) => {
    setEditingId(video.id);

    setFormData({
      title: video.title || "",
      description: video.description || "",
      video_url: video.video_url || "",
      status: video.status || "DRAFT",
      is_featured: Boolean(video.is_featured),
    });

    setShowForm(true);
  };

  // =========================================================
  // SAVE VIDEO
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter video title.");
      return;
    }

    if (!formData.video_url.trim()) {
      alert("Please enter video URL.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        video_url: formData.video_url.trim(),
        status: formData.status,
        is_featured: formData.is_featured,
      };

      if (editingId) {
        await API.patch(`videos/${editingId}/`, payload);
        alert("Video updated successfully.");
      } else {
        await API.post("videos/", payload);
        alert("Video added successfully.");
      }

      setShowForm(false);

      setEditingId(null);

      setFormData({
        title: "",
        description: "",
        video_url: "",
        status: "DRAFT",
        is_featured: false,
      });

      fetchVideos();
    } catch (error) {
      console.error("Video save error:", error);

      console.log("Response:", error.response?.data);

      alert(
        error.response?.data?.detail ||
          "Video save nahi ho paaya."
      );
    } finally {
      setSaving(false);
    }
  };

  // =========================================================
  // DELETE VIDEO
  // =========================================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`videos/${id}/`);

      alert("Video deleted successfully.");

      fetchVideos();
    } catch (error) {
      console.error("Video delete error:", error);

      alert("Video delete nahi ho paaya.");
    }
  };

  // =========================================================
  // STATUS BADGE
  // =========================================================

  const getStatusBadge = (status) => {
    if (status === "PUBLISHED") {
      return (
        <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400 border border-green-500/20">
          Published
        </span>
      );
    }

    return (
      <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400 border border-yellow-500/20">
        Draft
      </span>
    );
  };

  // =========================================================
  // FORMAT DATE
  // =========================================================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white p-4 sm:p-6 lg:p-8">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">

        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
              <Video size={26} />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Manage Videos
              </h1>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Add, edit and manage video news
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">

          <button
            onClick={fetchVideos}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <RefreshCw size={17} />
            Refresh
          </button>

          <button
            onClick={handleAdd}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <Plus size={18} />
            Add Video
          </button>

        </div>
      </div>

      {/* =====================================================
          STATS
      ====================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] p-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Videos
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {videos.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] p-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Published
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-500">
            {
              videos.filter(
                (video) => video.status === "PUBLISHED"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] p-5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-500">
            {
              videos.filter(
                (video) => video.is_featured
              ).length
            }
          </h2>
        </div>

      </div>

      {/* =====================================================
          VIDEO LIST
      ====================================================== */}

      <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] overflow-hidden">

        <div className="border-b border-gray-200 dark:border-white/10 px-5 py-4">
          <h2 className="font-semibold">
            All Videos
          </h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-gray-500">
              <RefreshCw
                size={20}
                className="animate-spin"
              />
              Loading videos...
            </div>
          </div>
        ) : videos.length === 0 ? (

          <div className="flex flex-col items-center justify-center py-20 px-6 text-center">

            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5">
              <Video
                size={30}
                className="text-gray-400"
              />
            </div>

            <h3 className="text-lg font-semibold">
              No videos found
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Add your first video news to get started.
            </p>

            <button
              onClick={handleAdd}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700"
            >
              <Plus size={18} />
              Add First Video
            </button>

          </div>

        ) : (

          <div className="divide-y divide-gray-200 dark:divide-white/10">

            {videos.map((video) => (

              <div
                key={video.id}
                className="p-5 transition hover:bg-gray-50 dark:hover:bg-white/[0.02]"
              >

                <div className="flex flex-col lg:flex-row lg:items-center gap-5">

                  {/* VIDEO ICON */}

                  <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 overflow-hidden">

                    {video.thumbnail_url ? (
                      <img
                        src={video.thumbnail_url}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <PlayCircle
                        size={32}
                        className="text-red-500"
                      />
                    )}

                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-2 mb-2">

                      <h3 className="text-lg font-semibold truncate">
                        {video.title}
                      </h3>

                      {getStatusBadge(video.status)}

                      {video.is_featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-500 border border-yellow-500/20">
                          <Star size={12} fill="currentColor" />
                          Featured
                        </span>
                      )}

                    </div>

                    {video.description && (
                      <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                        {video.description}
                      </p>
                    )}

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-500">

                      <span>
                        Views: {video.views_count || 0}
                      </span>

                      <span>
                        Created: {formatDate(video.created_at)}
                      </span>

                    </div>

                  </div>

                  {/* ACTIONS */}

                  <div className="flex items-center gap-2">

                    {video.video_url && (
                      <a
                        href={video.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10"
                        title="Open Video"
                      >
                        <PlayCircle size={18} />
                      </a>
                    )}

                    <button
                      onClick={() => handleEdit(video)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-blue-500 hover:bg-blue-500/10"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(video.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-red-500 hover:bg-red-500/10"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* =====================================================
          ADD / EDIT MODAL
      ====================================================== */}

      {showForm && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] shadow-2xl">

            {/* MODAL HEADER */}

            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0d0d] px-6 py-5">

              <div>
                <h2 className="text-xl font-bold">
                  {editingId ? "Edit Video" : "Add Video"}
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Manage video news details
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <X size={20} />
              </button>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6"
            >

              {/* TITLE */}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Video Title *
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter video title"
                  className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3 outline-none transition focus:border-red-500"
                  required
                />
              </div>

              {/* DESCRIPTION */}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter video description"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3 outline-none transition focus:border-red-500"
                />
              </div>

              {/* VIDEO URL */}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Video URL *
                </label>

                <input
                  type="url"
                  name="video_url"
                  value={formData.video_url}
                  onChange={handleChange}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3 outline-none transition focus:border-red-500"
                  required
                />

                <p className="mt-2 text-xs text-gray-500">
                  YouTube or any direct video URL can be added here.
                </p>
              </div>

              {/* STATUS */}

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3 outline-none focus:border-red-500"
                >
                  <option value="DRAFT">
                    Draft
                  </option>

                  <option value="PUBLISHED">
                    Published
                  </option>
                </select>
              </div>

              {/* FEATURED */}

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-4">

                <input
                  type="checkbox"
                  name="is_featured"
                  checked={formData.is_featured}
                  onChange={handleChange}
                  className="h-5 w-5 accent-red-600"
                />

                <div>
                  <p className="font-semibold">
                    Featured Video
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Show this video as featured content.
                  </p>
                </div>

              </label>

              {/* BUTTONS */}

              <div className="flex justify-end gap-3 border-t border-gray-200 dark:border-white/10 pt-5">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-gray-200 dark:border-white/10 px-5 py-3 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? (
                    <>
                      <RefreshCw
                        size={17}
                        className="animate-spin"
                      />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Upload size={17} />
                      {editingId
                        ? "Update Video"
                        : "Add Video"}
                    </>
                  )}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default ManageVideos;