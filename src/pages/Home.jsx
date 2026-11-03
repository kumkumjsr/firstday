import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Clock3,
  TrendingUp,
  ChevronRight,
  PlayCircle,
  Eye,
  Radio,
  Flame,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import API from "../services/api";

import { useLanguage } from "../context/LanguageContext";

/* =========================================================
   HELPERS
========================================================= */

const getList = (data) => {
  if (Array.isArray(data)) return data;

  if (Array.isArray(data?.results)) {
    return data.results;
  }

  return [];
};

/* =========================================================
   ARTICLE IMAGE HELPER
========================================================= */

const getArticleImage = (article) => {
  if (!article || typeof article !== "object") {
    return null;
  }

  return (
    article.image_url ||
    article.featured_image ||
    article.image ||
    article.imageUrl ||
    article.thumbnail ||
    article.thumbnail_url ||
    null
  );
};

/* =========================================================
   IMAGE URL HELPER
========================================================= */

const getImage = (image) => {
  if (!image || typeof image !== "string") {
    return null;
  }

  const url = image.trim();

  if (!url) {
    return null;
  }

  /*
   * External image URL
   */
  if (
    url.startsWith("http://") ||
    url.startsWith("https://")
  ) {
    return url;
  }

  /*
   * Backend base URL
   *
   * API base URL:
   * http://127.0.0.1:8000/api/
   *
   * We need:
   * http://127.0.0.1:8000
   */
  const baseURL = API.defaults.baseURL
    .replace(/\/api\/?$/, "")
    .replace(/\/$/, "");

  /*
   * Backend media/static path
   */
  if (url.startsWith("/")) {
    return `${baseURL}${url}`;
  }

  return `${baseURL}/${url}`;
};

/* =========================================================
   VIDEO URL
========================================================= */

const getVideoUrl = (video) => {
  return getImage(video?.file_url || video?.file);
};

/* =========================================================
   LOCALE MAP
========================================================= */

const localeMap = {
  hi: "hi-IN",
  en: "en-IN",
  bn: "bn-IN",
  mr: "mr-IN",
  gu: "gu-IN",
  ta: "ta-IN",
  te: "te-IN",
  pa: "pa-IN",
  ur: "ur-IN",
  or: "or-IN",
};

/* =========================================================
   DATE FORMAT
========================================================= */

const formatDate = (date, language = "hi") => {
  if (!date) {
    const fallback = {
      hi: "ताज़ा अपडेट",
      en: "Latest Update",
      bn: "সর্বশেষ আপডেট",
      mr: "नवीनतम अपडेट",
      gu: "તાજેતરનું અપડેટ",
      ta: "சமீபத்திய புதுப்பிப்பு",
      te: "తాజా అప్‌డేట్",
      pa: "ਤਾਜ਼ਾ ਅਪਡੇਟ",
      ur: "تازہ ترین اپڈیٹ",
      or: "ସର୍ବଶେଷ ଅପଡେଟ୍",
    };

    return fallback[language] || fallback.hi;
  }

  try {
    return new Date(date).toLocaleDateString(
      localeMap[language] || "hi-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  } catch {
    return new Date(date).toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
};

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  title,
  subtitle,
  link,
}) {
  const { t } = useLanguage();

  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-[#C8102E]" />

          <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {title}
          </h2>
        </div>

        {subtitle && (
          <p className="mt-2 pl-3 text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      {link && (
        <Link
          to={link}
          className="group flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-bold text-gray-700 transition duration-300 hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white dark:border-gray-800 dark:bg-[#141519] dark:text-gray-300"
        >
          {t("viewAll")}

          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </div>
  );
}

/* =========================================================
   NEWS IMAGE
========================================================= */

function NewsImage({
  src,
  alt,
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  const image = getImage(src);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!image || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-950 text-white ${className}`}
      >
        <Radio size={32} className="opacity-50" />
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={alt || "News"}
      loading="lazy"
      onError={(event) => {
        console.error(
          "News image failed to load:",
          image
        );

        event.currentTarget.style.display = "none";
        setFailed(true);
      }}
      className={className}
    />
  );
}

/* =========================================================
   BREAKING NEWS
========================================================= */

function BreakingNewsSection() {
  const { t, language } = useLanguage();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchBreakingNews = async () => {
      try {
        const response =
          await API.get("breaking-news/");

        const newsList = getList(response.data);

        if (isMounted) {
          setNews(
            newsList
              .filter(
                (item) => item.is_active === true
              )
              .slice(0, 2)
          );
        }
      } catch (error) {
        console.error(
          "Breaking news error:",
          error
        );

        if (isMounted) {
          setNews([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBreakingNews();

    const interval = setInterval(
      fetchBreakingNews,
      30000
    );

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading || news.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="mb-6 flex flex-wrap items-center gap-2.5">
        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-[#C8102E]" />

          <Flame
            size={22}
            className="text-[#C8102E]"
          />

          <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            {t("bigBreakingNews")}
          </h2>
        </div>

        <span className="flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#C8102E] dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C8102E]" />

          {t("live")}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {news.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/60 hover:shadow-xl hover:shadow-red-900/10 dark:border-gray-800 dark:bg-[#141519] dark:hover:border-[#C8102E]/60"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-[#C8102E]" />

            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#C8102E]">
                <Radio
                  size={15}
                  className="animate-pulse"
                />

                {t("breakingNews")}
              </span>

              <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-[#C8102E] dark:bg-red-950/60 dark:text-red-400">
                {t("importantUpdate")}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-extrabold leading-relaxed text-gray-900 transition-colors duration-300 group-hover:text-[#C8102E] dark:text-white sm:text-xl">
              {item.title}
            </h3>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Clock3 size={14} />

                {formatDate(
                  item.created_at,
                  language
                )}
              </div>

              <ArrowUpRight
                size={17}
                className="text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C8102E]"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   VIDEO NEWS
========================================================= */

function VideoNewsSection({
  videos,
  loading,
  error,
  onRetry,
}) {
  const { t, language } = useLanguage();

  const [failedVideos, setFailedVideos] =
    useState([]);

  useEffect(() => {
    setFailedVideos([]);
  }, [videos]);

  return (
    <div className="mt-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-xl font-black text-gray-900 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/30">
            <PlayCircle
              size={21}
              className="text-[#C8102E]"
            />
          </span>

          {t("videoNews")}
        </h2>

        <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#C8102E] dark:border-red-900/30 dark:bg-red-950/30 dark:text-red-400">
          {t("latestVideos")}
        </span>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#141519]">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

          <div className="mt-4 aspect-video animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" />
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-950/20">
          <p className="text-sm text-red-500">
            {error}
          </p>

          <button
            onClick={onRetry}
            className="mt-3 rounded-lg bg-[#C8102E] px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700"
          >
            {t("retry")}
          </button>
        </div>
      ) : videos.length > 0 ? (
        <div className="space-y-5">
          {/* SHOW ONLY 2 VIDEOS */}
          {videos.slice(0, 2).map((video) => {
            const videoUrl = getVideoUrl(video);

            const hasFailed =
              failedVideos.includes(video.id);

            return (
              <article
                key={video.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/50 hover:shadow-xl dark:border-gray-800 dark:bg-[#141519]"
              >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-black">
                  {videoUrl && !hasFailed ? (
                    <video
                      src={videoUrl}
                      controls
                      playsInline
                      preload="metadata"
                      controlsList="nodownload"
                      className="h-full w-full object-contain"
                      onError={(event) => {
                        console.error(
                          "Video playback error:",
                          videoUrl,
                          event.currentTarget.error
                        );

                        setFailedVideos(
                          (previous) =>
                            previous.includes(video.id)
                              ? previous
                              : [
                                  ...previous,
                                  video.id,
                                ]
                        );
                      }}
                    >
                      {t("browserVideoSupport")}
                    </video>
                  ) : (
                    <div className="px-4 text-center text-white">
                      <PlayCircle
                        size={38}
                        className="mx-auto mb-2 text-[#C8102E]"
                      />

                      <p className="text-sm font-semibold">
                        {t("videoLoadFailed")}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 text-base font-extrabold leading-6 text-gray-900 transition-colors group-hover:text-[#C8102E] dark:text-white">
                    {video.title ||
                      t("latestVideoNews")}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock3 size={13} />

                    {formatDate(
                      video.created_at,
                      language
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-7 text-center dark:border-gray-700 dark:bg-[#141519]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
            <PlayCircle
              size={30}
              className="text-gray-400"
            />
          </div>

          <h3 className="mt-4 font-bold text-gray-800 dark:text-white">
            {t("noVideos")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            {t("videoAdminMessage")}
          </p>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  const { t, language } = useLanguage();

  const [siteSettings, setSiteSettings] = useState({
    site_name: "HINDUSTAN.DIGITAL",
    tagline: "",
    site_description: "",
    logo: "",
    favicon: "",
    seo_title: "",
    seo_description: "",
    seo_keywords: "",
  });

  const [featuredNews, setFeaturedNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [videos, setVideos] = useState([]);

  const [videosLoading, setVideosLoading] =
    useState(true);

  const [videosError, setVideosError] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  /* =======================================================
     WEBSITE SETTINGS
  ======================================================= */

  useEffect(() => {
    let isMounted = true;

    const fetchSettings = async () => {
      try {
        const response =
          await API.get("settings/");

        if (!isMounted) return;

        const data = response.data || {};

        setSiteSettings((previous) => ({
          ...previous,
          ...data,
        }));

        const pageTitle =
          data.seo_title ||
          data.site_name ||
          "HINDUSTAN.DIGITAL";

        document.title = pageTitle;

        if (data.seo_description) {
          let metaDescription =
            document.querySelector(
              'meta[name="description"]'
            );

          if (!metaDescription) {
            metaDescription =
              document.createElement("meta");

            metaDescription.setAttribute(
              "name",
              "description"
            );

            document.head.appendChild(
              metaDescription
            );
          }

          metaDescription.setAttribute(
            "content",
            data.seo_description
          );
        }

        if (data.seo_keywords) {
          let metaKeywords =
            document.querySelector(
              'meta[name="keywords"]'
            );

          if (!metaKeywords) {
            metaKeywords =
              document.createElement("meta");

            metaKeywords.setAttribute(
              "name",
              "keywords"
            );

            document.head.appendChild(
              metaKeywords
            );
          }

          metaKeywords.setAttribute(
            "content",
            data.seo_keywords
          );
        }

        if (data.favicon) {
          const faviconUrl = getImage(
            data.favicon
          );

          if (faviconUrl) {
            let favicon =
              document.querySelector(
                'link[rel="icon"]'
              );

            if (!favicon) {
              favicon =
                document.createElement("link");

              favicon.setAttribute(
                "rel",
                "icon"
              );

              document.head.appendChild(
                favicon
              );
            }

            favicon.setAttribute(
              "href",
              faviconUrl
            );
          }
        }
      } catch (err) {
        console.error(
          "Website settings error:",
          err
        );
      }
    };

    fetchSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  /* =======================================================
     HOME NEWS
  ======================================================= */

  useEffect(() => {
    let isMounted = true;

    const fetchHomeNews = async () => {
      try {
        setLoading(true);

        const [
          featuredResponse,
          articlesResponse,
        ] = await Promise.all([
          API.get("articles/featured/"),
          API.get("articles/"),
        ]);

        const featured = getList(
          featuredResponse.data
        ).filter(
          (item) =>
            item.is_featured === true &&
            String(item.status).toUpperCase() ===
              "PUBLISHED"
        );

        const articles = getList(
          articlesResponse.data
        ).filter(
          (item) =>
            String(item.status).toUpperCase() ===
            "PUBLISHED"
        );

        const sortByLatest = (a, b) =>
          new Date(
            b.published_at ||
              b.created_at ||
              0
          ) -
          new Date(
            a.published_at ||
              a.created_at ||
              0
          );

        const sortedArticles = [...articles].sort(
          sortByLatest
        );

        const sortedFeatured = [
          ...featured,
        ].sort(sortByLatest);

        /* =================================================
           LATEST NEWS = 6
        ================================================= */

        const latest = sortedArticles.slice(0, 6);

        /* =================================================
           TRENDING NEWS = 5
        ================================================= */

        const trending = [...articles]
          .sort(
            (a, b) =>
              (b.views_count || 0) -
              (a.views_count || 0)
          )
          .slice(0, 5);

        if (isMounted) {
          setFeaturedNews(
            sortedFeatured
          );

          setLatestNews(latest);
          setTrendingNews(trending);
          setError("");
        }
      } catch (err) {
        console.error(
          "Homepage articles error:",
          err
        );

        if (isMounted) {
          setError(t("newsLoadError"));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchHomeNews();

    const interval = setInterval(
      fetchHomeNews,
      60000
    );

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [language, t]);

  /* =======================================================
     VIDEOS
  ======================================================= */

  const fetchVideos = async () => {
    try {
      setVideosError("");

      const response =
        await API.get("media/videos/");

      const videoList = getList(
        response.data
      );

      const validVideos = videoList
        .filter((item) => {
          const videoUrl =
            item.file_url || item.file;

          return (
            Boolean(videoUrl) &&
            String(
              item.media_type
            ).toUpperCase() === "VIDEO"
          );
        })
        .sort(
          (a, b) =>
            new Date(
              b.created_at || 0
            ) -
            new Date(
              a.created_at || 0
            )
        );

      setVideos(validVideos);
    } catch (err) {
      console.error(
        "Homepage videos error:",
        err
      );

      setVideosError(
        t("videoApiError")
      );
    } finally {
      setVideosLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();

    const interval = setInterval(
      fetchVideos,
      60000
    );

    return () =>
      clearInterval(interval);
  }, [language, t]);

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:py-12">
      {/* =====================================================
          SITE HEADER
      ===================================================== */}

      <section className="mb-10">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-[#141519] sm:p-7">
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C8102E]/5 blur-3xl" />

          <div className="relative flex items-center gap-4">
            {siteSettings.logo ? (
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-800 dark:bg-[#101114]">
                <img
                  src={getImage(
                    siteSettings.logo
                  )}
                  alt={
                    siteSettings.site_name ||
                    "Website Logo"
                  }
                  className="h-full w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display =
                      "none";
                  }}
                />
              </div>
            ) : null}

            <div>
              <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#C8102E]">
                HINDUSTAN.DIGITAL
              </p>

              <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                {siteSettings.site_name ||
                  "HINDUSTAN.DIGITAL"}
              </h1>

              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {t("tagline")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED NEWS
      ===================================================== */}

      <section>
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <span className="h-7 w-1 rounded-full bg-[#C8102E]" />

          <Star
            size={19}
            className="fill-[#C8102E] text-[#C8102E]"
          />

          <span className="text-sm font-black uppercase tracking-wider text-[#C8102E]">
            {t("featuredStories")}
          </span>

          {!loading &&
            featuredNews.length > 0 && (
              <span className="rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-bold text-[#C8102E] dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
                {featuredNews.length}{" "}
                {t("stories")}
              </span>
            )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#141519]"
              >
                <div className="h-[220px] animate-pulse bg-gray-200 dark:bg-gray-800" />

                <div className="space-y-3 p-5">
                  <div className="h-5 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                  <div className="h-5 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                  <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        ) : featuredNews.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredNews.map((news) => (
              <Link
                to={`/article/${encodeURIComponent(
                  news.slug
                )}`}
                key={news.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C8102E]/60 hover:shadow-2xl hover:shadow-red-900/10 dark:border-gray-800 dark:bg-[#141519]"
              >
                <div className="relative h-[230px] overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <NewsImage
                    src={getArticleImage(news)}
                    alt={news.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-lg bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    {news.category_name ||
                      t("featured")}
                  </span>

                  <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                    <Star
                      size={11}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    {t("topStory")}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-white/90">
                      <Clock3 size={13} />

                      {formatDate(
                        news.published_at ||
                          news.created_at,
                        language
                      )}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition group-hover:bg-[#C8102E]">
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="line-clamp-3 text-lg font-black leading-relaxed text-gray-900 transition-colors duration-300 group-hover:text-[#C8102E] dark:text-white sm:text-xl">
                    {news.title}
                  </h2>

                  {(news.excerpt ||
                    news.subtitle) && (
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {news.excerpt ||
                        news.subtitle}
                    </p>
                  )}

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-bold text-[#C8102E] dark:border-gray-800">
                    <span>
                      {t("readFullStory")}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-dashed border-gray-300 p-7 text-center text-sm text-gray-500 dark:border-gray-700">
            {t("noFeaturedNews")}
          </p>
        )}
      </section>

      {/* =====================================================
          BREAKING NEWS
      ===================================================== */}

      <BreakingNewsSection />

      {/* =====================================================
          LATEST + TRENDING
      ===================================================== */}

      <section className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="self-start lg:col-span-8">
          <SectionHeading
            title={t("latestNews")}
            subtitle={t(
              "latestNewsSubtitle"
            )}
            link="/search"
          />

          {/* =================================================
              LATEST NEWS = 6
          ================================================= */}

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-[#141519]"
                >
                  <div className="h-[135px] w-[135px] shrink-0 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800 sm:h-[165px] sm:w-[220px]" />

                  <div className="flex flex-1 flex-col justify-center gap-3">
                    <div className="h-3 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                    <div className="h-5 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                    <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                    <div className="h-3 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                  </div>
                </div>
              ))}
            </div>
          ) : latestNews.length > 0 ? (
            <div className="space-y-5">
              {latestNews
                .slice(0, 6)
                .map((news) => (
                  <Link
                    to={`/article/${encodeURIComponent(
                      news.slug
                    )}`}
                    key={news.id}
                    className="group flex min-h-[165px] gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C8102E]/50 hover:shadow-lg dark:border-gray-800 dark:bg-[#141519] dark:hover:border-[#C8102E]/50 sm:min-h-[185px] sm:gap-5 sm:p-5"
                  >
                    <div className="relative h-[135px] w-[135px] shrink-0 overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 sm:h-[165px] sm:w-[220px]">
                      <NewsImage
                        src={getArticleImage(news)}
                        alt={news.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-60" />

                      <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-[9px] font-bold text-white backdrop-blur">
                        {news.category_name ||
                          t("news")}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1 py-1 sm:py-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#C8102E]">
                          {news.category_name ||
                            t("news")}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="shrink-0 text-gray-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C8102E]"
                        />
                      </div>

                      <h3 className="mt-2 line-clamp-3 text-base font-extrabold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#C8102E] dark:text-white sm:text-xl sm:leading-7">
                        {news.title}
                      </h3>

                      <p className="mt-2 hidden text-sm leading-6 text-gray-500 dark:text-gray-400 sm:line-clamp-2">
                        {news.excerpt ||
                          news.subtitle ||
                          ""}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock3 size={13} />

                        {formatDate(
                          news.published_at ||
                            news.created_at,
                          language
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500 dark:border-gray-700">
              {t("noLatestNews")}
            </p>
          )}

          {error && (
            <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-500 dark:border-red-900/50 dark:bg-red-950/20">
              {error}
            </p>
          )}

          <Link
            to="/search"
            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3.5 text-sm font-bold text-gray-700 transition-all duration-300 hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white dark:border-gray-700 dark:bg-[#141519] dark:text-gray-300"
          >
            {t("readMoreNews")}

            <ArrowUpRight
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              size={16}
            />
          </Link>
        </div>

        {/* =================================================
            TRENDING + VIDEO
        ================================================= */}

        <aside className="self-start lg:col-span-4">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#141519]">
            <div className="border-b border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-[#18191e] sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/30">
                  <TrendingUp
                    className="text-[#C8102E]"
                    size={21}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-black text-gray-900 dark:text-white">
                    {t("trendingNews")}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {t(
                      "trendingNewsDescription"
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              {loading ? (
                <div className="space-y-5">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex gap-4"
                    >
                      <div className="h-8 w-10 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800" />

                        <div className="h-3 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : trendingNews.length > 0 ? (
                <div className="space-y-5">
                  {trendingNews.map(
                    (news, index) => (
                      <Link
                        to={`/article/${encodeURIComponent(
                          news.slug
                        )}`}
                        key={news.id}
                        className="group flex gap-4 border-b border-gray-200 pb-5 last:border-0 last:pb-0 dark:border-gray-800"
                      >
                        <span className="w-9 shrink-0 text-3xl font-black leading-none text-gray-200 transition-colors group-hover:text-[#C8102E]/30 dark:text-gray-700">
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <div className="min-w-0 flex-1">
                          <h3 className="line-clamp-2 text-sm font-bold leading-6 text-gray-800 transition-colors group-hover:text-[#C8102E] dark:text-gray-200">
                            {news.title}
                          </h3>

                          <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                            <Eye size={13} />

                            {news.views_count ||
                              0}{" "}
                            {t("views")}
                          </p>
                        </div>

                        <ChevronRight
                          size={16}
                          className="mt-1 shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-[#C8102E] dark:text-gray-700"
                        />
                      </Link>
                    )
                  )}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  {t("noTrendingNews")}
                </p>
              )}
            </div>
          </div>

          {/* =================================================
              VIDEO NEWS = 2
          ================================================= */}

          <VideoNewsSection
            videos={videos}
            loading={videosLoading}
            error={videosError}
            onRetry={() => {
              setVideosLoading(true);
              fetchVideos();
            }}
          />
        </aside>
      </section>
    </main>
  );
}

export default Home;

