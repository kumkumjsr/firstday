import { Link, useParams } from "react-router-dom";
import {
  Clock3,
  CalendarDays,
  UserRound,
  Share2,
  Bookmark,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

const article = {
  category: "देश",
  title: "भारत में डिजिटल तकनीक और विकास की नई संभावनाएं",
  summary:
    "डिजिटल इंडिया की दिशा में तकनीक, शिक्षा और आधुनिक सेवाओं की भूमिका लगातार बढ़ रही है। जानिए इससे देश और आम लोगों को क्या फायदे मिल सकते हैं।",
  author: "HINDUSTAN DIGITAL DESK",
  date: "2 नवंबर 2026",
  readTime: "5 मिनट पढ़ने का समय",
  image:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  content: [
    {
      heading: "डिजिटल बदलाव की नई शुरुआत",
      text: "भारत में डिजिटल तकनीक का उपयोग लगातार बढ़ रहा है। शिक्षा, स्वास्थ्य, व्यापार और सरकारी सेवाओं में तकनीक की मदद से कई काम पहले से आसान हुए हैं। डिजिटल सेवाएं आम नागरिकों तक जानकारी और सुविधाएं पहुंचाने में महत्वपूर्ण भूमिका निभा रही हैं।",
    },
    {
      heading: "शिक्षा और रोजगार में तकनीक",
      text: "ऑनलाइन शिक्षा, डिजिटल प्लेटफॉर्म और नई तकनीकी स्किल्स ने युवाओं के लिए सीखने और रोजगार के नए अवसर खोले हैं। तकनीकी ज्ञान आज के समय में करियर बनाने का एक महत्वपूर्ण हिस्सा बन गया है।",
    },
    {
      heading: "आगे क्या संभावनाएं हैं?",
      text: "आने वाले समय में आर्टिफिशियल इंटेलिजेंस, डिजिटल सेवाओं और आधुनिक तकनीक का उपयोग और बढ़ सकता है। इसके साथ ही डिजिटल सुरक्षा और सही जानकारी की उपलब्धता पर ध्यान देना भी जरूरी होगा।",
    },
  ],
};

const relatedNews = [
  {
    title: "भारत में शिक्षा और रोजगार के नए अवसर",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    slug: "education-and-jobs",
  },
  {
    title: "डिजिटल दुनिया में तेजी से बदलती तकनीक",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    slug: "digital-technology",
  },
];

function ArticleDetails() {
  const { slug } = useParams();

  const handleShare = async () => {
    const shareData = {
      title: article.title,
      text: article.summary,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Article link copied!");
      }
    } catch (error) {
      console.log("Sharing cancelled");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c0f] dark:text-white">

      <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="transition hover:text-[#C8102E]">
            Home
          </Link>

          <span>/</span>

          <span className="text-[#C8102E]">{article.category}</span>

          <span>/</span>

          <span className="max-w-[180px] truncate">{slug}</span>
        </div>

        {/* Category */}
        <div className="mb-5">
          <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
            {article.category}
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-[900px] text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        {/* Summary */}
        <p className="mt-5 max-w-[850px] text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
          {article.summary}
        </p>

        {/* Author Details */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-y border-gray-200 py-5 dark:border-white/10">

          <div className="flex flex-wrap items-center gap-5">

            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E]/10 text-[#C8102E]">
                <UserRound size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">Published by</p>
                <p className="text-sm font-bold">{article.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CalendarDays size={15} />
              {article.date}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock3 size={15} />
              {article.readTime}
            </div>

          </div>

          <div className="flex items-center gap-2">

            <button
              onClick={handleShare}
              aria-label="Share article"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
            >
              <Share2 size={17} />
            </button>

            <button
              aria-label="Bookmark article"
              onClick={() => alert("Bookmark feature will be available soon!")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
            >
              <Bookmark size={17} />
            </button>

          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="max-h-[550px] w-full object-cover"
          />
        </div>

        <p className="mt-3 text-xs text-gray-500">
          सांकेतिक तस्वीर | HINDUSTAN.DIGITAL
        </p>

        {/* Article Content */}
        <div className="mx-auto mt-10 max-w-[760px]">

          <div className="mb-8 border-l-4 border-[#C8102E] pl-5">
            <p className="text-lg font-semibold leading-8 text-gray-700 dark:text-gray-300">
              {article.summary}
            </p>
          </div>

          {article.content.map((section, index) => (
            <section key={index} className="mb-9">

              <h2 className="mb-4 text-2xl font-black">
                {section.heading}
              </h2>

              <p className="text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg">
                {section.text}
              </p>

            </section>
          ))}

          {/* Article Footer */}
          <div className="mt-10 border-y border-gray-200 py-6 dark:border-white/10">
            <p className="text-sm font-bold">
              Tags
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {["भारत", "डिजिटल इंडिया", "टेक्नोलॉजी", "विकास"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-600 dark:border-white/10 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Related News */}
        <section className="mt-16">

          <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
            <h2 className="text-2xl font-black">
              Related News
            </h2>

            <Link
              to="/"
              className="flex items-center gap-1 text-sm font-bold text-[#C8102E]"
            >
              View All <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            {relatedNews.map((news) => (
              <Link
                to={`/article/${news.slug}`}
                key={news.slug}
                className="group overflow-hidden rounded-xl border border-gray-200 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-5">
                  <h3 className="text-lg font-bold leading-snug transition group-hover:text-[#C8102E]">
                    {news.title}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#C8102E]">
                    Read Article <ArrowUpRight size={15} />
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </section>

        <Link
          to="/"
          className="mt-12 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-bold transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

      </div>
    </main>
  );
}

export default ArticleDetails;