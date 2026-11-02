
import {
  ArrowUpRight,
  Clock3,
  TrendingUp,
  ChevronRight,
  PlayCircle,
  Eye,
} from "lucide-react";

const featuredNews = [
  {
    category: "देश",
    title: "देश की बड़ी खबरों पर रहेगी अब आपकी पहली नजर",
    description:
      "देशभर की महत्वपूर्ण घटनाओं, सरकारी फैसलों और नई अपडेट्स की पूरी जानकारी एक ही जगह।",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200",
    time: "10 मिनट पहले",
    featured: true,
  },
  {
    category: "बिजनेस",
    title: "भारतीय अर्थव्यवस्था और बाजार की बड़ी अपडेट्स",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    time: "25 मिनट पहले",
  },
  {
    category: "टेक्नोलॉजी",
    title: "तकनीक की दुनिया में तेजी से बदल रहा है भारत",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    time: "40 मिनट पहले",
  },
];

const latestNews = [
  {
    category: "राजनीति",
    title: "संसद में आज कई महत्वपूर्ण मुद्दों पर हो सकती है चर्चा",
    description:
      "देश की राजनीति से जुड़ी प्रमुख गतिविधियों और महत्वपूर्ण अपडेट्स पर एक नजर।",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600",
    time: "15 मिनट पहले",
  },
  {
    category: "शिक्षा",
    title: "छात्रों के लिए शिक्षा और करियर से जुड़ी जरूरी जानकारी",
    description:
      "नई शिक्षा नीतियों, परीक्षाओं और रोजगार के अवसरों से जुड़े अपडेट्स।",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
    time: "35 मिनट पहले",
  },
  {
    category: "खेल",
    title: "खेल जगत की बड़ी खबरें और आज के महत्वपूर्ण मुकाबले",
    description:
      "खिलाड़ियों के प्रदर्शन और खेल प्रतियोगिताओं की ताजा जानकारी।",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600",
    time: "50 मिनट पहले",
  },
  {
    category: "दुनिया",
    title: "दुनियाभर की प्रमुख घटनाओं पर एक नजर",
    description:
      "अंतरराष्ट्रीय घटनाओं और वैश्विक मामलों की महत्वपूर्ण जानकारी।",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600",
    time: "1 घंटा पहले",
  },
];

const trendingNews = [
  "आज की प्रमुख राष्ट्रीय खबरें",
  "बाजार और अर्थव्यवस्था की अपडेट",
  "शिक्षा और रोजगार से जुड़ी खबरें",
  "टेक्नोलॉजी की नई जानकारी",
  "खेल जगत की बड़ी खबरें",
];

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-3">
      <div>
        <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      <button className="flex shrink-0 items-center gap-1 text-sm font-bold text-[#C8102E] transition hover:gap-2">
        सभी देखें <ChevronRight size={17} />
      </button>
    </div>
  );
}

function Home() {
  return (
    <main className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:py-10">

      {/* Featured News */}
      <section>
        <div className="mb-5 flex items-center gap-2">
          <span className="h-6 w-1 rounded-full bg-[#C8102E]" />
          <span className="text-sm font-black uppercase tracking-wider text-[#C8102E]">
            Top Stories
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

          {/* Main Featured Story */}
          <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#141519] lg:col-span-7">
            <div className="relative h-[260px] overflow-hidden sm:h-[380px]">
              <img
                src={featuredNews[0].image}
                alt="Featured news"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <span className="absolute left-5 top-5 rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
                {featuredNews[0].category}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <h1 className="max-w-2xl text-2xl font-black leading-tight text-white sm:text-4xl">
                  {featuredNews[0].title}
                </h1>

                <p className="mt-3 hidden max-w-xl text-sm leading-6 text-gray-200 sm:block">
                  {featuredNews[0].description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-300">
                  <Clock3 size={14} />
                  {featuredNews[0].time}
                  <ArrowUpRight size={17} className="ml-2" />
                </div>
              </div>
            </div>
          </article>

          {/* Secondary Featured Stories */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {featuredNews.slice(1).map((news, index) => (
              <article
                key={index}
                className="group flex min-h-[170px] overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#141519]"
              >
                <div className="relative w-[40%] shrink-0 overflow-hidden sm:w-[42%]">
                  <img
                    src={news.image}
                    alt={news.category}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
                  <span className="mb-2 text-xs font-bold text-[#C8102E]">
                    {news.category}
                  </span>

                  <h3 className="line-clamp-3 text-base font-extrabold leading-snug text-gray-900 dark:text-white sm:text-lg">
                    {news.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <Clock3 size={13} />
                    {news.time}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News + Trending */}
      <section className="mt-12 grid grid-cols-1 gap-9 lg:grid-cols-12">

        {/* Latest News */}
        <div className="lg:col-span-8">
          <SectionHeading
            title="ताज़ा खबरें"
            subtitle="देश और दुनिया की नई अपडेट्स"
          />

          <div className="space-y-5">
            {latestNews.map((news, index) => (
              <article
                key={index}
                className="group flex gap-4 overflow-hidden rounded-xl border border-gray-200 bg-white p-3 transition hover:border-[#C8102E]/50 dark:border-gray-800 dark:bg-[#141519] dark:hover:border-[#C8102E]/50 sm:gap-5 sm:p-4"
              >
                <div className="h-[120px] w-[120px] shrink-0 overflow-hidden rounded-lg sm:h-[150px] sm:w-[210px]">
                  <img
                    src={news.image}
                    alt={news.category}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <span className="mb-2 text-xs font-bold text-[#C8102E]">
                    {news.category}
                  </span>

                  <h3 className="line-clamp-2 text-base font-extrabold leading-snug text-gray-900 transition group-hover:text-[#C8102E] dark:text-white sm:text-xl">
                    {news.title}
                  </h3>

                  <p className="mt-2 hidden text-sm leading-6 text-gray-500 dark:text-gray-400 sm:line-clamp-2">
                    {news.description}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock3 size={13} />
                    {news.time}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="mt-6 w-full rounded-xl border border-gray-300 py-3 text-sm font-bold text-gray-700 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-gray-700 dark:text-gray-300">
            और खबरें पढ़ें <ArrowUpRight className="ml-1 inline" size={16} />
          </button>
        </div>

        {/* Trending Sidebar */}
        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-[#141519] sm:p-6">
            <div className="mb-6 flex items-center gap-2">
              <TrendingUp className="text-[#C8102E]" size={22} />
              <h2 className="text-xl font-black text-gray-900 dark:text-white">
                ट्रेंडिंग खबरें
              </h2>
            </div>

            <div className="space-y-5">
              {trendingNews.map((news, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-gray-200 pb-4 last:border-0 last:pb-0 dark:border-gray-800"
                >
                  <span className="text-3xl font-black text-gray-300 dark:text-gray-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="pt-1 text-sm font-bold leading-6 text-gray-800 transition hover:text-[#C8102E] dark:text-gray-200">
                    {news}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Video Card */}
          <div className="group relative mt-6 h-[250px] overflow-hidden rounded-2xl bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800"
              alt="News video"
              className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <PlayCircle size={19} />
                Video News
              </div>

              <h3 className="text-xl font-black text-white">
                खबरें अब वीडियो के साथ
              </h3>

              <p className="mt-2 flex items-center gap-2 text-xs text-gray-300">
                <Eye size={14} />
                वीडियो सेक्शन जल्द देखें
              </p>
            </div>
          </div>
        </aside>
      </section>

    </main>
  );
}

export default Home;
