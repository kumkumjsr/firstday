
// import { useState } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import { Search, Clock3, ArrowUpRight, X } from "lucide-react";

// const demoNews = [
//   {
//     id: 1,
//     title: "भारत में डिजिटल तकनीक और विकास की नई संभावनाएं",
//     category: "टेक्नोलॉजी",
//     slug: "digital-india",
//     time: "10 मिनट पहले",
//     image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//   },
//   {
//     id: 2,
//     title: "भारत की अर्थव्यवस्था और बाजार से जुड़ी बड़ी खबरें",
//     category: "बिजनेस",
//     slug: "indian-economy",
//     time: "25 मिनट पहले",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//   },
//   {
//     id: 3,
//     title: "युवाओं के लिए शिक्षा और रोजगार के नए अवसर",
//     category: "शिक्षा",
//     slug: "education-and-jobs",
//     time: "40 मिनट पहले",
//     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
//   },
//   {
//     id: 4,
//     title: "दुनिया में तकनीक और आर्टिफिशियल इंटेलिजेंस का बढ़ता प्रभाव",
//     category: "दुनिया",
//     slug: "artificial-intelligence",
//     time: "1 घंटा पहले",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//   },
// ];

// function SearchPage() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialQuery = searchParams.get("q") || "";

//   const [query, setQuery] = useState(initialQuery);

//   const filteredNews = demoNews.filter((news) => {
//     const searchText = query.trim().toLowerCase();

//     return (
//       news.title.toLowerCase().includes(searchText) ||
//       news.category.toLowerCase().includes(searchText)
//     );
//   });

//   const handleSearch = (event) => {
//     event.preventDefault();

//     if (query.trim()) {
//       setSearchParams({ q: query.trim() });
//     } else {
//       setSearchParams({});
//     }
//   };

//   const clearSearch = () => {
//     setQuery("");
//     setSearchParams({});
//   };

//   return (
//     <main className="min-h-screen bg-white px-4 py-12 text-gray-900 dark:bg-[#0b0c0f] dark:text-white sm:px-6 lg:px-10">
//       <div className="mx-auto max-w-[1100px]">

//         <div className="mb-10 text-center">
//           <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#C8102E]">
//             HINDUSTAN.DIGITAL
//           </p>

//           <h1 className="text-4xl font-black sm:text-5xl">
//             खबरें खोजें
//           </h1>

//           <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
//             देश और दुनिया की खबरें एक जगह खोजें।
//           </p>
//         </div>

//         <form
//           onSubmit={handleSearch}
//           className="mx-auto flex max-w-[750px] items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-2 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#15161b]"
//         >
//           <Search className="ml-3 shrink-0 text-gray-400" size={22} />

//           <input
//             type="text"
//             value={query}
//             onChange={(event) => setQuery(event.target.value)}
//             placeholder="खबर खोजें... जैसे भारत, राजनीति, खेल"
//             className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-gray-400 sm:text-base"
//           />

//           {query && (
//             <button
//               type="button"
//               onClick={clearSearch}
//               aria-label="Clear search"
//               className="rounded-full p-2 text-gray-400 hover:text-[#C8102E]"
//             >
//               <X size={18} />
//             </button>
//           )}

//           <button
//             type="submit"
//             className="rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a90d27]"
//           >
//             Search
//           </button>
//         </form>

//         <div className="mt-12">
//           <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
//             <h2 className="text-xl font-black">
//               {query.trim() ? "Search Results" : "Latest News"}
//             </h2>

//             <span className="text-xs text-gray-500">
//               {filteredNews.length} Results
//             </span>
//           </div>

//           {filteredNews.length > 0 ? (
//             <div className="grid gap-6 sm:grid-cols-2">
//               {filteredNews.map((news) => (
//                 <Link
//                   key={news.id}
//                   to={`/article/${news.slug}`}
//                   className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#141519]"
//                 >
//                   <div className="overflow-hidden">
//                     <img
//                       src={news.image}
//                       alt={news.title}
//                       className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
//                     />
//                   </div>

//                   <div className="flex flex-1 flex-col p-5">
//                     <span className="text-xs font-bold text-[#C8102E]">
//                       {news.category}
//                     </span>

//                     <h3 className="mt-3 text-lg font-bold leading-snug transition group-hover:text-[#C8102E]">
//                       {news.title}
//                     </h3>

//                     <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
//                       <span className="flex items-center gap-2">
//                         <Clock3 size={14} />
//                         {news.time}
//                       </span>

//                       <ArrowUpRight size={18} className="text-[#C8102E]" />
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="rounded-2xl border border-dashed border-gray-300 px-5 py-16 text-center dark:border-white/20">
//               <Search className="mx-auto text-gray-400" size={35} />

//               <h3 className="mt-5 text-xl font-bold">
//                 कोई खबर नहीं मिली
//               </h3>

//               <p className="mt-2 text-sm text-gray-500">
//                 कोई दूसरा शब्द लिखकर फिर से खोजें।
//               </p>

//               <button
//                 onClick={clearSearch}
//                 className="mt-6 rounded-lg bg-[#C8102E] px-5 py-3 text-sm font-bold text-white"
//               >
//                 Clear Search
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

// export default SearchPage;




import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Search,
  Clock3,
  ArrowUpRight,
  X,
  Newspaper,
  RefreshCw,
} from "lucide-react";

import API from "../services/api";

function getList(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.results)) return data.results;
  return [];
}

function getImage(image) {
  if (!image) return null;

  try {
    return new URL(image, API.defaults.baseURL).href;
  } catch {
    return image;
  }
}

function formatDate(date) {
  if (!date) return "हाल ही में";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "हाल ही में";

  return parsedDate.toLocaleDateString("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch actual published news from backend
  useEffect(() => {
    let isMounted = true;

    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await API.get("articles/");
        const articleList = getList(response.data);

        if (!isMounted) return;

        // Only published articles
        const publishedArticles = articleList.filter(
          (article) =>
            article.status?.toUpperCase() === "PUBLISHED"
        );

        setArticles(publishedArticles);
      } catch (err) {
        console.error("Search articles error:", err);

        if (isMounted) {
          setError(
            "खबरें लोड नहीं हो सकीं। कृपया दोबारा कोशिश करें।"
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  // Keep search input synced with URL query
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  // Search by title, category, excerpt and content
  const filteredNews = useMemo(() => {
    const searchText = query.trim().toLowerCase();

    if (!searchText) return articles;

    return articles.filter((news) => {
      const searchableText = [
        news.title,
        news.subtitle,
        news.excerpt,
        news.content,
        news.category_name,
        news.author_name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchText);
    });
  }, [articles, query]);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchText = query.trim();

    if (searchText) {
      setSearchParams({ q: searchText });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSearchParams({});
  };

  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900 dark:bg-[#0b0c0f] dark:text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1100px]">

        {/* PAGE HEADER */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#C8102E]">
            HINDUSTAN.DIGITAL
          </p>

          <h1 className="text-4xl font-black sm:text-5xl">
            खबरें खोजें
          </h1>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            देश और दुनिया की खबरें एक जगह खोजें।
          </p>
        </div>

        {/* SEARCH FORM */}
        <form
          onSubmit={handleSearch}
          className="mx-auto flex max-w-[750px] items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-2 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#15161b]"
        >
          <Search
            className="ml-3 shrink-0 text-gray-400"
            size={22}
          />

          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="खबर खोजें... जैसे भारत, राजनीति, खेल"
            className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-gray-400 sm:text-base"
          />

          {query && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear search"
              className="rounded-full p-2 text-gray-400 transition hover:text-[#C8102E]"
            >
              <X size={18} />
            </button>
          )}

          <button
            type="submit"
            className="rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a90d27]"
          >
            Search
          </button>
        </form>

        {/* RESULTS HEADER */}
        <div className="mt-12">
          <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
            <h2 className="text-xl font-black">
              {query.trim() ? "Search Results" : "Latest News"}
            </h2>

            {!loading && !error && (
              <span className="text-xs text-gray-500">
                {filteredNews.length} Results
              </span>
            )}
          </div>

          {/* LOADING */}
          {loading && (
            <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10"
                >
                  <div className="h-52 bg-gray-200 dark:bg-white/10" />

                  <div className="space-y-4 p-5">
                    <div className="h-3 w-24 rounded bg-gray-200 dark:bg-white/10" />
                    <div className="h-5 w-full rounded bg-gray-200 dark:bg-white/10" />
                    <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-12 text-center dark:border-red-500/20 dark:bg-red-500/5">
              <p className="font-semibold text-red-600 dark:text-red-400">
                {error}
              </p>

              <button
                onClick={() => window.location.reload()}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white"
              >
                <RefreshCw size={16} />
                Retry
              </button>
            </div>
          )}

          {/* NEWS RESULTS */}
          {!loading && !error && filteredNews.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/article/${news.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#141519]"
                >
                  {/* NEWS IMAGE */}
                  <div className="h-52 overflow-hidden bg-gray-100 dark:bg-[#202127]">
                    {news.featured_image ? (
                      <img
                        src={getImage(news.featured_image)}
                        alt={news.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Newspaper
                          size={42}
                          className="text-gray-400"
                        />
                      </div>
                    )}
                  </div>

                  {/* NEWS DETAILS */}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-bold text-[#C8102E]">
                      {news.category_name || "News"}
                    </span>

                    <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug transition group-hover:text-[#C8102E]">
                      {news.title}
                    </h3>

                    {news.excerpt && (
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        {news.excerpt}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-5 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-2">
                        <Clock3 size={14} />
                        {formatDate(
                          news.published_at || news.created_at
                        )}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-[#C8102E] transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && !error && filteredNews.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 px-5 py-16 text-center dark:border-white/20">
              <Search
                className="mx-auto text-gray-400"
                size={35}
              />

              <h3 className="mt-5 text-xl font-bold">
                कोई खबर नहीं मिली
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {query.trim()
                  ? "कोई दूसरा शब्द लिखकर फिर से खोजें।"
                  : "अभी कोई प्रकाशित खबर उपलब्ध नहीं है।"}
              </p>

              {query && (
                <button
                  onClick={clearSearch}
                  className="mt-6 rounded-lg bg-[#C8102E] px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
