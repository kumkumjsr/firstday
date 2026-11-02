
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Clock3, ArrowUpRight, X } from "lucide-react";

const demoNews = [
  {
    id: 1,
    title: "भारत में डिजिटल तकनीक और विकास की नई संभावनाएं",
    category: "टेक्नोलॉजी",
    slug: "digital-india",
    time: "10 मिनट पहले",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    id: 2,
    title: "भारत की अर्थव्यवस्था और बाजार से जुड़ी बड़ी खबरें",
    category: "बिजनेस",
    slug: "indian-economy",
    time: "25 मिनट पहले",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: 3,
    title: "युवाओं के लिए शिक्षा और रोजगार के नए अवसर",
    category: "शिक्षा",
    slug: "education-and-jobs",
    time: "40 मिनट पहले",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    id: 4,
    title: "दुनिया में तकनीक और आर्टिफिशियल इंटेलिजेंस का बढ़ता प्रभाव",
    category: "दुनिया",
    slug: "artificial-intelligence",
    time: "1 घंटा पहले",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);

  const filteredNews = demoNews.filter((news) => {
    const searchText = query.trim().toLowerCase();

    return (
      news.title.toLowerCase().includes(searchText) ||
      news.category.toLowerCase().includes(searchText)
    );
  });

  const handleSearch = (event) => {
    event.preventDefault();

    if (query.trim()) {
      setSearchParams({ q: query.trim() });
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

        <form
          onSubmit={handleSearch}
          className="mx-auto flex max-w-[750px] items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-2 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#15161b]"
        >
          <Search className="ml-3 shrink-0 text-gray-400" size={22} />

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
              className="rounded-full p-2 text-gray-400 hover:text-[#C8102E]"
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

        <div className="mt-12">
          <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
            <h2 className="text-xl font-black">
              {query.trim() ? "Search Results" : "Latest News"}
            </h2>

            <span className="text-xs text-gray-500">
              {filteredNews.length} Results
            </span>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/article/${news.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#141519]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-bold text-[#C8102E]">
                      {news.category}
                    </span>

                    <h3 className="mt-3 text-lg font-bold leading-snug transition group-hover:text-[#C8102E]">
                      {news.title}
                    </h3>

                    <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-2">
                        <Clock3 size={14} />
                        {news.time}
                      </span>

                      <ArrowUpRight size={18} className="text-[#C8102E]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 px-5 py-16 text-center dark:border-white/20">
              <Search className="mx-auto text-gray-400" size={35} />

              <h3 className="mt-5 text-xl font-bold">
                कोई खबर नहीं मिली
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                कोई दूसरा शब्द लिखकर फिर से खोजें।
              </p>

              <button
                onClick={clearSearch}
                className="mt-6 rounded-lg bg-[#C8102E] px-5 py-3 text-sm font-bold text-white"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
