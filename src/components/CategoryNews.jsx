
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    title: "देश की खबरें",
    category: "देश",
    stories: [
      {
        title: "देशभर की महत्वपूर्ण घटनाओं और फैसलों की जानकारी",
        image:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700",
      },
      {
        title: "भारत के विकास और नई योजनाओं से जुड़ी अपडेट्स",
        image:
          "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=700",
      },
      {
        title: "राष्ट्रीय मुद्दों पर एक नजर",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700",
      },
    ],
  },
  {
    title: "बिजनेस और अर्थव्यवस्था",
    category: "बिजनेस",
    stories: [
      {
        title: "बाजार और अर्थव्यवस्था से जुड़ी महत्वपूर्ण जानकारी",
        image:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700",
      },
      {
        title: "नए बिजनेस और स्टार्टअप की दुनिया",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700",
      },
      {
        title: "भारत में बदलते व्यापारिक अवसर",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
      },
    ],
  },
  {
    title: "टेक्नोलॉजी",
    category: "टेक्नोलॉजी",
    stories: [
      {
        title: "आर्टिफिशियल इंटेलिजेंस की दुनिया में नई संभावनाएं",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700",
      },
      {
        title: "डिजिटल दुनिया में तेजी से बदलती तकनीक",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700",
      },
      {
        title: "साइंस और इनोवेशन की नई जानकारी",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700",
      },
    ],
  },
];

function CategoryNews() {
  return (
    <section className="mx-auto max-w-[1440px] space-y-12 px-4 py-12 sm:px-6">

      {sections.map((section) => (
        <div key={section.category}>

          <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-[#C8102E]" />

              <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                {section.title}
              </h2>
            </div>

            <button className="flex items-center gap-1 text-sm font-bold text-[#C8102E] hover:gap-2">
              और पढ़ें <ArrowUpRight size={17} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {section.stories.map((story, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-[#C8102E]/50 dark:border-gray-800 dark:bg-[#141519]"
              >
                <div className="h-[210px] overflow-hidden">
                  <img
                    src={story.image}
                    alt={section.category}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                    {section.category}
                  </span>

                  <h3 className="mt-3 text-lg font-extrabold leading-7 text-gray-900 transition group-hover:text-[#C8102E] dark:text-white">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-xs font-medium text-gray-400">
                    HINDUSTAN.DIGITAL
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>
      ))}

    </section>
  );
}

export default CategoryNews;
