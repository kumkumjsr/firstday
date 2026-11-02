import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, Clock3 } from "lucide-react";

const categoryData = {
  desh: {
    title: "देश की खबरें",
    subtitle: "भारत की हर बड़ी खबर और जरूरी अपडेट",
  },
  duniya: {
    title: "दुनिया की खबरें",
    subtitle: "दुनिया भर की ताजा और महत्वपूर्ण खबरें",
  },
  politics: {
    title: "राजनीति",
    subtitle: "राजनीतिक घटनाक्रम और देश की सियासत",
  },
  business: {
    title: "बिजनेस",
    subtitle: "बाजार, अर्थव्यवस्था और कारोबार की खबरें",
  },
  sports: {
    title: "खेल",
    subtitle: "खेल जगत की ताजा खबरें और अपडेट",
  },
  entertainment: {
    title: "मनोरंजन",
    subtitle: "फिल्म, टीवी और मनोरंजन की दुनिया",
  },
  technology: {
    title: "टेक्नोलॉजी",
    subtitle: "टेक्नोलॉजी और डिजिटल दुनिया की खबरें",
  },
};

const demoNews = [
  {
    title: "भारत में तकनीक और डिजिटल सेवाओं को लेकर नई पहल",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    time: "10 मिनट पहले",
  },
  {
    title: "देश की अर्थव्यवस्था और विकास पर नई रिपोर्ट जारी",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    time: "25 मिनट पहले",
  },
  {
    title: "युवाओं के लिए शिक्षा और रोजगार के नए अवसर",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    time: "40 मिनट पहले",
  },
];

function CategoryPage() {
  const { category } = useParams();
  const currentCategory = categoryData[category];

  if (!currentCategory) {
    return (
      <main className="min-h-[60vh] px-4 py-20 text-center">
        <h1 className="text-3xl font-black">Category Not Found</h1>
        <Link to="/" className="mt-5 inline-block text-[#C8102E]">
          वापस होम पर जाएं
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mb-10 border-b border-gray-200 pb-6 dark:border-white/10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
          HINDUSTAN.DIGITAL / NEWS
        </p>

        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          {currentCategory.title}
        </h1>

        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          {currentCategory.subtitle}
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {demoNews.map((news, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#141519]"
          >
            <div className="overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <span className="text-xs font-bold text-[#C8102E]">
                {currentCategory.title}
              </span>

              <h2 className="mt-3 text-xl font-bold leading-snug">
                {news.title}
              </h2>

              <div className="mt-5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <Clock3 size={14} />
                  {news.time}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-[#C8102E] transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default CategoryPage;