import { motion } from "framer-motion";
import {
  PlayCircle,
  Video,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";
import API from "../services/api";

function VideoNews() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================================================
  // GET LIST FROM API RESPONSE
  // =========================================================

  const getList = (data) => {
    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data?.results)) {
      return data.results;
    }

    if (Array.isArray(data?.videos)) {
      return data.videos;
    }

    if (Array.isArray(data?.data)) {
      return data.data;
    }

    return [];
  };

  // =========================================================
  // FETCH VIDEOS FROM MEDIA LIBRARY
  // =========================================================

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("media/videos/");

      console.log("VIDEO API RESPONSE:", response.data);

      const videoList = getList(response.data);

      // Only actual videos with file URL
      const validVideos = videoList
        .filter((item) => {
          const videoUrl =
            item?.file_url ||
            item?.file ||
            item?.video_url ||
            item?.video;

          return (
            Boolean(videoUrl) &&
            String(item?.media_type || "").toUpperCase() ===
              "VIDEO"
          );
        })
        .sort(
          (a, b) =>
            new Date(b.created_at || 0) -
            new Date(a.created_at || 0)
        );

      console.log("FILTERED VIDEOS:", validVideos);

      setVideos(validVideos);
    } catch (err) {
      console.error("Homepage videos error:", err);

      setError(
        "Video News load nahi ho paayi. API connection check karein."
      );

      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // INITIAL LOAD
  // =========================================================

  useEffect(() => {
    fetchVideos();
  }, []);

  // =========================================================
  // GET VIDEO URL
  // =========================================================

  const getVideoUrl = (video) => {
    return (
      video?.file_url ||
      video?.file ||
      video?.video_url ||
      video?.video ||
      ""
    );
  };

  // =========================================================
  // GET TITLE
  // =========================================================

  const getTitle = (video) => {
    return (
      video?.title ||
      video?.name ||
      video?.filename ||
      video?.file_name ||
      "Video News"
    );
  };

  // =========================================================
  // GET THUMBNAIL
  // =========================================================

  const getThumbnail = (video) => {
    return (
      video?.thumbnail_url ||
      video?.thumbnail ||
      video?.image_url ||
      video?.image ||
      video?.cover_image ||
      ""
    );
  };

  // =========================================================
  // CHECK YOUTUBE URL
  // =========================================================

  const getYouTubeId = (url) => {
    if (!url) return null;

    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.hostname.includes("youtube.com")) {
        const videoId = parsedUrl.searchParams.get("v");

        if (videoId) {
          return videoId;
        }

        const shortsMatch = parsedUrl.pathname.match(
          /\/shorts\/([^/?]+)/
        );

        if (shortsMatch) {
          return shortsMatch[1];
        }

        const embedMatch = parsedUrl.pathname.match(
          /\/embed\/([^/?]+)/
        );

        if (embedMatch) {
          return embedMatch[1];
        }
      }

      if (parsedUrl.hostname === "youtu.be") {
        const videoId = parsedUrl.pathname.replace("/", "");

        if (videoId) {
          return videoId;
        }
      }
    } catch {
      return null;
    }

    return null;
  };

  // =========================================================
  // CHECK DIRECT VIDEO
  // =========================================================

  const isDirectVideo = (url) => {
    if (!url) return false;

    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
  };

  // =========================================================
  // FORMAT DATE
  // =========================================================

  const formatDate = (date) => {
    if (!date) return "";

    try {
      return new Date(date).toLocaleDateString("hi-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  // =========================================================
  // VIDEO PLAYER
  // =========================================================

  const renderVideo = (video) => {
    const videoUrl = getVideoUrl(video);
    const thumbnail = getThumbnail(video);

    const youtubeId = getYouTubeId(videoUrl);

    // -------------------------------------------------------
    // YOUTUBE
    // -------------------------------------------------------

    if (youtubeId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={getTitle(video)}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }

    // -------------------------------------------------------
    // DIRECT VIDEO
    // -------------------------------------------------------

    if (isDirectVideo(videoUrl)) {
      return (
        <video
          controls
          preload="metadata"
          poster={thumbnail || undefined}
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} />

          Your browser does not support video playback.
        </video>
      );
    }

    // -------------------------------------------------------
    // GENERIC VIDEO FILE
    // -------------------------------------------------------

    if (videoUrl) {
      return (
        <video
          controls
          preload="metadata"
          poster={thumbnail || undefined}
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} />

          Your browser does not support video playback.
        </video>
      );
    }

    // -------------------------------------------------------
    // THUMBNAIL
    // -------------------------------------------------------

    if (thumbnail) {
      return (
        <div className="relative h-full w-full">
          <img
            src={thumbnail}
            alt={getTitle(video)}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <PlayCircle
              size={60}
              className="text-white drop-shadow-lg"
            />
          </div>
        </div>
      );
    }

    // -------------------------------------------------------
    // EMPTY
    // -------------------------------------------------------

    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-black">
        <PlayCircle
          size={65}
          className="text-white/60"
        />
      </div>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c0f] dark:text-white">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="border-b border-gray-200 dark:border-white/10">

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            <div className="mb-3 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-white">
                <Video size={22} />
              </div>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Video News
              </h1>

            </div>

            <p className="max-w-2xl text-gray-600 dark:text-gray-400">
              Watch the latest news videos, breaking updates and
              important stories from Hindustan Digital.
            </p>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* REFRESH */}

        <div className="mb-6 flex justify-end">

          <button
            onClick={fetchVideos}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-red-500 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-[#111318] dark:text-gray-300 dark:hover:border-red-500 dark:hover:text-red-400"
          >

            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />

            Refresh

          </button>

        </div>

        {/* ===================================================
            LOADING
        =================================================== */}

        {loading && (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3, 4, 5, 6].map((item) => (

              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#111318]"
              >

                <div className="aspect-video animate-pulse bg-gray-200 dark:bg-white/10" />

                <div className="space-y-3 p-5">

                  <div className="h-5 animate-pulse rounded bg-gray-200 dark:bg-white/10" />

                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-white/10" />

                  <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-white/10" />

                </div>

              </div>

            ))}

          </div>

        )}

        {/* ===================================================
            ERROR
        =================================================== */}

        {!loading && error && (

          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-500/20 dark:bg-red-500/10">

            <Video
              className="mx-auto mb-4 text-red-500"
              size={45}
            />

            <h2 className="mb-2 text-xl font-semibold">
              Unable to Load Videos
            </h2>

            <p className="mb-5 text-gray-600 dark:text-gray-400">
              {error}
            </p>

            <button
              onClick={fetchVideos}
              className="rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700"
            >
              Try Again
            </button>

          </div>

        )}

        {/* ===================================================
            EMPTY
        =================================================== */}

        {!loading &&
          !error &&
          videos.length === 0 && (

            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center dark:border-white/10 dark:bg-[#111318]">

              <PlayCircle
                size={55}
                className="mx-auto mb-4 text-gray-400"
              />

              <h2 className="mb-2 text-xl font-semibold">
                No Video News Available
              </h2>

              <p className="text-gray-500 dark:text-gray-400">
                Video news will appear here when available.
              </p>

            </div>

          )}

        {/* ===================================================
            VIDEO GRID
        =================================================== */}

        {!loading && videos.length > 0 && (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {videos.map((video, index) => {

              const videoUrl = getVideoUrl(video);
              const title = getTitle(video);
              const thumbnail = getThumbnail(video);

              const youtubeId = getYouTubeId(videoUrl);

              return (

                <motion.article
                  key={video?.id || index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#111318]"
                >

                  {/* VIDEO */}

                  <div className="relative aspect-video overflow-hidden bg-black">

                    {renderVideo(video)}

                    {youtubeId && (

                      <a
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-red-600"
                      >

                        <ExternalLink size={13} />

                        YouTube

                      </a>

                    )}

                  </div>

                  {/* CONTENT */}

                  <div className="p-5">

                    <div className="mb-3 flex items-center gap-2 text-xs font-medium text-red-600 dark:text-red-400">

                      <Video size={14} />

                      VIDEO NEWS

                    </div>

                    <h2 className="line-clamp-2 text-lg font-bold leading-snug">
                      {title}
                    </h2>

                    {video?.description && (

                      <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                        {video.description}
                      </p>

                    )}

                    {video?.created_at && (

                      <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                        {formatDate(video.created_at)}
                      </p>

                    )}

                  </div>

                </motion.article>

              );

            })}

          </div>

        )}

      </section>

    </main>
  );
}

export default VideoNews;