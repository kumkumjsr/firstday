
// import { Radio } from "lucide-react";

// function BreakingNews() {
//   return (
//     <div className="bg-[#C8102E] text-white">
//       <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6">
//         <div className="flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-wider">
//           <Radio size={17} />
//           <span>Breaking News</span>
//         </div>

//         <div className="h-5 w-px bg-white/40" />

//         <p className="truncate text-sm font-medium">
//           HINDUSTAN.DIGITAL पर आपका स्वागत है — देश और दुनिया की खबरों के लिए जुड़े रहें।
//         </p>
//       </div>
//     </div>
//   );
// }

// export default BreakingNews;



import { useEffect, useState } from "react";
import { Radio } from "lucide-react";
import API from "../services/api";

function BreakingNews() {
  const [headline, setHeadline] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchBreakingNews = async () => {
      try {
        const response = await API.get("breaking-news/");

        const newsList = Array.isArray(response.data)
          ? response.data
          : response.data?.results || [];

        const activeNews = newsList.find(
          (news) => news.is_active === true
        );

        if (isMounted) {
          setHeadline(activeNews?.title || "");
        }
      } catch (error) {
        console.error("Breaking News fetch error:", error);

        if (isMounted) {
          setHeadline("");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBreakingNews();

    // Refresh breaking news every 30 seconds
    const interval = setInterval(fetchBreakingNews, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading || !headline) {
    return null;
  }

  return (
    <div className="bg-[#C8102E] text-white">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6">
        <div className="flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-wider">
          <Radio size={17} className="animate-pulse" />
          <span>Breaking News</span>
        </div>

        <div className="h-5 w-px shrink-0 bg-white/40" />

        <div className="min-w-0 flex-1 overflow-hidden">
          <p className="truncate text-sm font-medium">
            {headline}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BreakingNews;

