// import { Link, useParams } from "react-router-dom";
// import {
//   Clock3,
//   CalendarDays,
//   UserRound,
//   Share2,
//   Bookmark,
//   ArrowLeft,
//   ArrowUpRight,
// } from "lucide-react";

// const article = {
//   category: "देश",
//   title: "भारत में डिजिटल तकनीक और विकास की नई संभावनाएं",
//   summary:
//     "डिजिटल इंडिया की दिशा में तकनीक, शिक्षा और आधुनिक सेवाओं की भूमिका लगातार बढ़ रही है। जानिए इससे देश और आम लोगों को क्या फायदे मिल सकते हैं।",
//   author: "HINDUSTAN DIGITAL DESK",
//   date: "2 नवंबर 2026",
//   readTime: "5 मिनट पढ़ने का समय",
//   image:
//     "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//   content: [
//     {
//       heading: "डिजिटल बदलाव की नई शुरुआत",
//       text: "भारत में डिजिटल तकनीक का उपयोग लगातार बढ़ रहा है। शिक्षा, स्वास्थ्य, व्यापार और सरकारी सेवाओं में तकनीक की मदद से कई काम पहले से आसान हुए हैं। डिजिटल सेवाएं आम नागरिकों तक जानकारी और सुविधाएं पहुंचाने में महत्वपूर्ण भूमिका निभा रही हैं।",
//     },
//     {
//       heading: "शिक्षा और रोजगार में तकनीक",
//       text: "ऑनलाइन शिक्षा, डिजिटल प्लेटफॉर्म और नई तकनीकी स्किल्स ने युवाओं के लिए सीखने और रोजगार के नए अवसर खोले हैं। तकनीकी ज्ञान आज के समय में करियर बनाने का एक महत्वपूर्ण हिस्सा बन गया है।",
//     },
//     {
//       heading: "आगे क्या संभावनाएं हैं?",
//       text: "आने वाले समय में आर्टिफिशियल इंटेलिजेंस, डिजिटल सेवाओं और आधुनिक तकनीक का उपयोग और बढ़ सकता है। इसके साथ ही डिजिटल सुरक्षा और सही जानकारी की उपलब्धता पर ध्यान देना भी जरूरी होगा।",
//     },
//   ],
// };

// const relatedNews = [
//   {
//     title: "भारत में शिक्षा और रोजगार के नए अवसर",
//     image:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
//     slug: "education-and-jobs",
//   },
//   {
//     title: "डिजिटल दुनिया में तेजी से बदलती तकनीक",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//     slug: "digital-technology",
//   },
// ];

// function ArticleDetails() {
//   const { slug } = useParams();

//   const handleShare = async () => {
//     const shareData = {
//       title: article.title,
//       text: article.summary,
//       url: window.location.href,
//     };

//     try {
//       if (navigator.share) {
//         await navigator.share(shareData);
//       } else {
//         await navigator.clipboard.writeText(window.location.href);
//         alert("Article link copied!");
//       }
//     } catch (error) {
//       console.log("Sharing cancelled");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c0f] dark:text-white">

//       <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">

//         {/* Breadcrumb */}
//         <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-500">
//           <Link to="/" className="transition hover:text-[#C8102E]">
//             Home
//           </Link>

//           <span>/</span>

//           <span className="text-[#C8102E]">{article.category}</span>

//           <span>/</span>

//           <span className="max-w-[180px] truncate">{slug}</span>
//         </div>

//         {/* Category */}
//         <div className="mb-5">
//           <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
//             {article.category}
//           </span>
//         </div>

//         {/* Headline */}
//         <h1 className="max-w-[900px] text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//           {article.title}
//         </h1>

//         {/* Summary */}
//         <p className="mt-5 max-w-[850px] text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
//           {article.summary}
//         </p>

//         {/* Author Details */}
//         <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-y border-gray-200 py-5 dark:border-white/10">

//           <div className="flex flex-wrap items-center gap-5">

//             <div className="flex items-center gap-2">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E]/10 text-[#C8102E]">
//                 <UserRound size={20} />
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">Published by</p>
//                 <p className="text-sm font-bold">{article.author}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <CalendarDays size={15} />
//               {article.date}
//             </div>

//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <Clock3 size={15} />
//               {article.readTime}
//             </div>

//           </div>

//           <div className="flex items-center gap-2">

//             <button
//               onClick={handleShare}
//               aria-label="Share article"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
//             >
//               <Share2 size={17} />
//             </button>

//             <button
//               aria-label="Bookmark article"
//               onClick={() => alert("Bookmark feature will be available soon!")}
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
//             >
//               <Bookmark size={17} />
//             </button>

//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="mt-8 overflow-hidden rounded-2xl">
//           <img
//             src={article.image}
//             alt={article.title}
//             className="max-h-[550px] w-full object-cover"
//           />
//         </div>

//         <p className="mt-3 text-xs text-gray-500">
//           सांकेतिक तस्वीर | HINDUSTAN.DIGITAL
//         </p>

//         {/* Article Content */}
//         <div className="mx-auto mt-10 max-w-[760px]">

//           <div className="mb-8 border-l-4 border-[#C8102E] pl-5">
//             <p className="text-lg font-semibold leading-8 text-gray-700 dark:text-gray-300">
//               {article.summary}
//             </p>
//           </div>

//           {article.content.map((section, index) => (
//             <section key={index} className="mb-9">

//               <h2 className="mb-4 text-2xl font-black">
//                 {section.heading}
//               </h2>

//               <p className="text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg">
//                 {section.text}
//               </p>

//             </section>
//           ))}

//           {/* Article Footer */}
//           <div className="mt-10 border-y border-gray-200 py-6 dark:border-white/10">
//             <p className="text-sm font-bold">
//               Tags
//             </p>

//             <div className="mt-3 flex flex-wrap gap-2">
//               {["भारत", "डिजिटल इंडिया", "टेक्नोलॉजी", "विकास"].map((tag) => (
//                 <span
//                   key={tag}
//                   className="rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-600 dark:border-white/10 dark:text-gray-300"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* Related News */}
//         <section className="mt-16">

//           <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
//             <h2 className="text-2xl font-black">
//               Related News
//             </h2>

//             <Link
//               to="/"
//               className="flex items-center gap-1 text-sm font-bold text-[#C8102E]"
//             >
//               View All <ArrowUpRight size={16} />
//             </Link>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2">

//             {relatedNews.map((news) => (
//               <Link
//                 to={`/article/${news.slug}`}
//                 key={news.slug}
//                 className="group overflow-hidden rounded-xl border border-gray-200 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
//               >
//                 <img
//                   src={news.image}
//                   alt={news.title}
//                   className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
//                 />

//                 <div className="p-5">
//                   <h3 className="text-lg font-bold leading-snug transition group-hover:text-[#C8102E]">
//                     {news.title}
//                   </h3>

//                   <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#C8102E]">
//                     Read Article <ArrowUpRight size={15} />
//                   </p>
//                 </div>
//               </Link>
//             ))}

//           </div>
//         </section>

//         <Link
//           to="/"
//           className="mt-12 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-bold transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
//         >
//           <ArrowLeft size={17} />
//           Back to Home
//         </Link>

//       </div>
//     </main>
//   );
// }

// export default ArticleDetails;





// import { useEffect, useMemo, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import {
//   Clock3,
//   CalendarDays,
//   UserRound,
//   Share2,
//   Bookmark,
//   ArrowLeft,
//   ArrowUpRight,
//   Newspaper,
//   RefreshCw,
// } from "lucide-react";

// import API from "../services/api";

// function getList(data) {
//   if (Array.isArray(data)) return data;
//   if (Array.isArray(data?.results)) return data.results;
//   return [];
// }

// function getImage(image) {
//   if (!image) return null;

//   try {
//     return new URL(image, API.defaults.baseURL).href;
//   } catch {
//     return image;
//   }
// }

// function formatDate(date) {
//   if (!date) return "हाल ही में";

//   const parsedDate = new Date(date);

//   if (Number.isNaN(parsedDate.getTime())) return "हाल ही में";

//   return parsedDate.toLocaleDateString("hi-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }

// function getContentParagraphs(content) {
//   if (!content) return [];

//   return content
//     .split(/\n+/)
//     .map((paragraph) => paragraph.trim())
//     .filter(Boolean);
// }

// function getReadTime(content) {
//   const words = content?.trim().split(/\s+/).filter(Boolean).length || 0;
//   const minutes = Math.max(1, Math.ceil(words / 200));

//   return `${minutes} मिनट पढ़ने का समय`;
// }

// function ArticleDetails() {
//   const { slug } = useParams();

//   const [article, setArticle] = useState(null);
//   const [relatedNews, setRelatedNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [bookmarked, setBookmarked] = useState(false);

//   // Fetch article and related news
//   useEffect(() => {
//     let isMounted = true;

//     const fetchArticle = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         setArticle(null);
//         setRelatedNews([]);

//         const response = await API.get(
//           `articles/${encodeURIComponent(slug)}/`
//         );

//         if (!isMounted) return;

//         const articleData = response.data;
//         setArticle(articleData);

//         // Fetch related published articles
//         try {
//           const relatedResponse = await API.get("articles/");
//           const articleList = getList(relatedResponse.data);

//           const currentCategoryId =
//             typeof articleData.category === "object"
//               ? articleData.category?.id
//               : articleData.category;

//           const related = articleList
//             .filter((item) => {
//               if (String(item.id) === String(articleData.id)) {
//                 return false;
//               }

//               if (item.status?.toUpperCase() !== "PUBLISHED") {
//                 return false;
//               }

//               const itemCategoryId =
//                 typeof item.category === "object"
//                   ? item.category?.id
//                   : item.category;

//               return (
//                 String(itemCategoryId) === String(currentCategoryId)
//               );
//             })
//             .slice(0, 4);

//           if (isMounted) setRelatedNews(related);
//         } catch (relatedError) {
//           console.error("Related news error:", relatedError);
//         }
//       } catch (err) {
//         console.error("Article details error:", err);

//         if (isMounted) {
//           setError(
//             err.response?.status === 404
//               ? "यह खबर उपलब्ध नहीं है या हटा दी गई है।"
//               : "खबर लोड नहीं हो सकी। कृपया दोबारा कोशिश करें।"
//           );
//         }
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     };

//     if (slug) fetchArticle();

//     return () => {
//       isMounted = false;
//     };
//   }, [slug]);

//   // Load bookmark state
//   useEffect(() => {
//     if (!article?.id) return;

//     try {
//       const saved = JSON.parse(
//         localStorage.getItem("hindustan_bookmarks") || "[]"
//       );

//       setBookmarked(
//         saved.some((item) => String(item.id) === String(article.id))
//       );
//     } catch {
//       setBookmarked(false);
//     }
//   }, [article?.id]);

//   const paragraphs = useMemo(
//     () => getContentParagraphs(article?.content),
//     [article?.content]
//   );

//   const handleShare = async () => {
//     if (!article) return;

//     const shareData = {
//       title: article.title,
//       text: article.excerpt || article.subtitle || article.title,
//       url: window.location.href,
//     };

//     try {
//       if (navigator.share) {
//         await navigator.share(shareData);
//       } else {
//         await navigator.clipboard.writeText(window.location.href);
//         alert("Article link copied!");
//       }
//     } catch (error) {
//       if (error.name !== "AbortError") {
//         console.error("Share error:", error);
//       }
//     }
//   };

//   const handleBookmark = () => {
//     if (!article) return;

//     try {
//       const saved = JSON.parse(
//         localStorage.getItem("hindustan_bookmarks") || "[]"
//       );

//       const exists = saved.some(
//         (item) => String(item.id) === String(article.id)
//       );

//       let updated;

//       if (exists) {
//         updated = saved.filter(
//           (item) => String(item.id) !== String(article.id)
//         );
//         setBookmarked(false);
//       } else {
//         updated = [
//           ...saved,
//           {
//             id: article.id,
//             slug: article.slug,
//             title: article.title,
//             image: article.featured_image || "",
//           },
//         ];
//         setBookmarked(true);
//       }

//       localStorage.setItem(
//         "hindustan_bookmarks",
//         JSON.stringify(updated)
//       );
//     } catch (error) {
//       console.error("Bookmark error:", error);
//       alert("Bookmark save nahi ho paya.");
//     }
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <main className="min-h-screen bg-white px-4 py-20 dark:bg-[#0b0c0f]">
//         <div className="mx-auto max-w-[850px] animate-pulse space-y-7">
//           <div className="h-4 w-40 rounded bg-gray-200 dark:bg-white/10" />
//           <div className="h-12 w-full rounded bg-gray-200 dark:bg-white/10" />
//           <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-white/10" />
//           <div className="h-72 rounded-2xl bg-gray-200 dark:bg-white/10" />
//           <div className="h-5 w-full rounded bg-gray-200 dark:bg-white/10" />
//           <div className="h-5 w-5/6 rounded bg-gray-200 dark:bg-white/10" />
//         </div>
//       </main>
//     );
//   }

//   // Error state
//   if (error || !article) {
//     return (
//       <main className="flex min-h-[65vh] items-center justify-center bg-white px-4 py-16 text-center text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
//         <div className="max-w-md">
//           <Newspaper
//             size={48}
//             className="mx-auto mb-5 text-[#C8102E]"
//           />

//           <h1 className="text-2xl font-black">
//             खबर उपलब्ध नहीं है
//           </h1>

//           <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
//             {error || "यह खबर अभी उपलब्ध नहीं है।"}
//           </p>

//           <button
//             onClick={() => window.location.reload()}
//             className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white"
//           >
//             <RefreshCw size={16} />
//             Retry
//           </button>

//           <div>
//             <Link
//               to="/"
//               className="mt-5 inline-flex items-center gap-2 font-bold text-[#C8102E]"
//             >
//               <ArrowLeft size={17} />
//               Back to Home
//             </Link>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   const categoryName =
//     article.category_name ||
//     article.category?.name ||
//     "News";

//   const summary =
//     article.excerpt ||
//     article.subtitle ||
//     "";

//   const author =
//     article.author_name ||
//     "HINDUSTAN DIGITAL DESK";

//   const articleDate = formatDate(
//     article.published_at || article.created_at
//   );

//   const imageUrl = getImage(article.featured_image);

//   return (
//     <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c0f] dark:text-white">

//       <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">

//         {/* BREADCRUMB */}
//         <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-500">
//           <Link
//             to="/"
//             className="transition hover:text-[#C8102E]"
//           >
//             Home
//           </Link>

//           <span>/</span>

//           <Link
//             to={`/category/${article.category?.slug || ""}`}
//             className="text-[#C8102E] hover:underline"
//           >
//             {categoryName}
//           </Link>

//           <span>/</span>

//           <span className="max-w-[180px] truncate">
//             {article.title}
//           </span>
//         </div>

//         {/* CATEGORY */}
//         <div className="mb-5">
//           <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
//             {categoryName}
//           </span>

//           {article.is_featured && (
//             <span className="ml-2 rounded-md border border-[#C8102E]/30 px-3 py-1.5 text-xs font-bold text-[#C8102E]">
//               Featured
//             </span>
//           )}
//         </div>

//         {/* HEADLINE */}
//         <h1 className="max-w-[900px] text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//           {article.title}
//         </h1>

//         {/* SUMMARY */}
//         {summary && (
//           <p className="mt-5 max-w-[850px] text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
//             {summary}
//           </p>
//         )}

//         {/* AUTHOR DETAILS */}
//         <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-y border-gray-200 py-5 dark:border-white/10">

//           <div className="flex flex-wrap items-center gap-5">

//             <div className="flex items-center gap-2">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E]/10 text-[#C8102E]">
//                 <UserRound size={20} />
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">
//                   Published by
//                 </p>

//                 <p className="text-sm font-bold">
//                   {author}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <CalendarDays size={15} />
//               {articleDate}
//             </div>

//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <Clock3 size={15} />
//               {getReadTime(article.content)}
//             </div>

//           </div>

//           {/* SHARE AND BOOKMARK */}
//           <div className="flex items-center gap-2">

//             <button
//               onClick={handleShare}
//               aria-label="Share article"
//               title="Share article"
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
//             >
//               <Share2 size={17} />
//             </button>

//             <button
//               onClick={handleBookmark}
//               aria-label="Bookmark article"
//               title={bookmarked ? "Remove bookmark" : "Save bookmark"}
//               className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
//                 bookmarked
//                   ? "border-[#C8102E] bg-[#C8102E]/10 text-[#C8102E]"
//                   : "border-gray-200 hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
//               }`}
//             >
//               <Bookmark
//                 size={17}
//                 fill={bookmarked ? "currentColor" : "none"}
//               />
//             </button>

//           </div>
//         </div>

//         {/* HERO IMAGE */}
//         {imageUrl && (
//           <>
//             <div className="mt-8 overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#18191e]">
//               <img
//                 src={imageUrl}
//                 alt={article.title}
//                 className="max-h-[550px] w-full object-cover"
//               />
//             </div>

//             <p className="mt-3 text-xs text-gray-500">
//               HINDUSTAN.DIGITAL
//             </p>
//           </>
//         )}

//         {/* ARTICLE CONTENT */}
//         <div className="mx-auto mt-10 max-w-[760px]">

//           {summary && (
//             <div className="mb-8 border-l-4 border-[#C8102E] pl-5">
//               <p className="text-lg font-semibold leading-8 text-gray-700 dark:text-gray-300">
//                 {summary}
//               </p>
//             </div>
//           )}

//           {paragraphs.length > 0 ? (
//             <div className="space-y-7">
//               {paragraphs.map((paragraph, index) => (
//                 <p
//                   key={index}
//                   className="text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg"
//                 >
//                   {paragraph}
//                 </p>
//               ))}
//             </div>
//           ) : (
//             <p className="text-base leading-9 text-gray-500 dark:text-gray-400">
//               इस खबर का पूरा विवरण अभी उपलब्ध नहीं है।
//             </p>
//           )}

//           {/* ARTICLE FOOTER */}
//           <div className="mt-10 border-y border-gray-200 py-6 dark:border-white/10">
//             <p className="text-sm font-bold">
//               Category
//             </p>

//             <div className="mt-3 flex flex-wrap gap-2">
//               <Link
//                 to={`/category/${article.category?.slug || ""}`}
//                 className="rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-600 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10 dark:text-gray-300"
//               >
//                 {categoryName}
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* RELATED NEWS */}
//         {relatedNews.length > 0 && (
//           <section className="mt-16">

//             <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
//               <h2 className="text-2xl font-black">
//                 Related News
//               </h2>

//               <Link
//                 to="/"
//                 className="flex items-center gap-1 text-sm font-bold text-[#C8102E]"
//               >
//                 View All
//                 <ArrowUpRight size={16} />
//               </Link>
//             </div>

//             <div className="grid gap-6 sm:grid-cols-2">

//               {relatedNews.map((news) => (
//                 <Link
//                   to={`/article/${news.slug}`}
//                   key={news.id}
//                   className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#141519]"
//                 >
//                   <div className="h-48 overflow-hidden bg-gray-100 dark:bg-[#202127]">
//                     {news.featured_image ? (
//                       <img
//                         src={getImage(news.featured_image)}
//                         alt={news.title}
//                         loading="lazy"
//                         className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="flex h-full items-center justify-center">
//                         <Newspaper
//                           size={40}
//                           className="text-gray-400"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-5">
//                     <span className="text-xs font-bold text-[#C8102E]">
//                       {news.category_name || categoryName}
//                     </span>

//                     <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug transition group-hover:text-[#C8102E]">
//                       {news.title}
//                     </h3>

//                     <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#C8102E]">
//                       Read Article
//                       <ArrowUpRight size={15} />
//                     </p>
//                   </div>
//                 </Link>
//               ))}

//             </div>
//           </section>
//         )}

//         {/* BACK TO HOME */}
//         <Link
//           to="/"
//           className="mt-12 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-bold transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
//         >
//           <ArrowLeft size={17} />
//           Back to Home
//         </Link>

//       </div>
//     </main>
//   );
// }

// export default ArticleDetails;





import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Clock3,
  CalendarDays,
  UserRound,
  Share2,
  Bookmark,
  ArrowLeft,
  ArrowUpRight,
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

  if (/^https?:\/\//i.test(image)) return image;

  const apiBase = API.defaults.baseURL || "";
  const serverBase = apiBase.replace(/\/api\/?$/, "");

  return image.startsWith("/")
    ? `${serverBase}${image}`
    : `${serverBase}/${image}`;
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

function getReadTime(content) {
  const words = content?.trim().split(/\s+/).filter(Boolean).length || 0;
  return `${Math.max(1, Math.ceil(words / 200))} मिनट पढ़ने का समय`;
}

function getContentParagraphs(content) {
  if (!content) return [];

  return content
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function ArticleDetails() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchArticle = async () => {
      setLoading(true);
      setError("");
      setArticle(null);
      setRelatedNews([]);

      try {
        let articleData = null;

        // First try: Fetch article directly using slug
        try {
          const response = await API.get(
            `articles/${encodeURIComponent(slug)}/`
          );

          articleData = response.data;
        } catch (detailError) {
          console.warn(
            "Direct article fetch failed. Trying articles list:",
            detailError
          );
        }

        // Fallback: Search article in published articles list
        if (!articleData) {
          const listResponse = await API.get("articles/");
          const articleList = getList(listResponse.data);

          articleData = articleList.find(
            (item) =>
              decodeURIComponent(String(item.slug || "")) ===
              decodeURIComponent(String(slug || ""))
          );
        }

        if (!articleData) {
          throw new Error("ARTICLE_NOT_FOUND");
        }

        if (!isMounted) return;

        setArticle(articleData);

        // Fetch related published news
        try {
          const relatedResponse = await API.get("articles/");
          const articleList = getList(relatedResponse.data);

          const currentCategoryId =
            typeof articleData.category === "object"
              ? articleData.category?.id
              : articleData.category;

          const related = articleList
            .filter((item) => {
              if (String(item.id) === String(articleData.id)) {
                return false;
              }

              if (
                String(item.status).toUpperCase() !== "PUBLISHED"
              ) {
                return false;
              }

              const itemCategoryId =
                typeof item.category === "object"
                  ? item.category?.id
                  : item.category;

              return (
                currentCategoryId &&
                String(itemCategoryId) === String(currentCategoryId)
              );
            })
            .slice(0, 4);

          if (isMounted) setRelatedNews(related);
        } catch (relatedError) {
          console.error("Related news error:", relatedError);
        }
      } catch (err) {
        console.error("Article details error:", err);

        if (isMounted) {
          setError(
            err.message === "ARTICLE_NOT_FOUND" ||
              err.response?.status === 404
              ? "यह खबर उपलब्ध नहीं है या हटा दी गई है।"
              : "खबर लोड नहीं हो सकी। कृपया दोबारा कोशिश करें।"
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (slug) fetchArticle();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Bookmark state
  useEffect(() => {
    if (!article?.id) return;

    try {
      const saved = JSON.parse(
        localStorage.getItem("hindustan_bookmarks") || "[]"
      );

      setBookmarked(
        saved.some((item) => String(item.id) === String(article.id))
      );
    } catch {
      setBookmarked(false);
    }
  }, [article?.id]);

  const paragraphs = useMemo(
    () => getContentParagraphs(article?.content),
    [article?.content]
  );

  const handleShare = async () => {
    if (!article) return;

    const shareData = {
      title: article.title,
      text: article.excerpt || article.subtitle || article.title,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Article link copied!");
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Share error:", err);
      }
    }
  };

  const handleBookmark = () => {
    if (!article) return;

    try {
      const saved = JSON.parse(
        localStorage.getItem("hindustan_bookmarks") || "[]"
      );

      const exists = saved.some(
        (item) => String(item.id) === String(article.id)
      );

      const updated = exists
        ? saved.filter((item) => String(item.id) !== String(article.id))
        : [
            ...saved,
            {
              id: article.id,
              slug: article.slug,
              title: article.title,
              image: article.featured_image || "",
            },
          ];

      localStorage.setItem(
        "hindustan_bookmarks",
        JSON.stringify(updated)
      );

      setBookmarked(!exists);
    } catch (err) {
      console.error("Bookmark error:", err);
      alert("Bookmark save nahi ho paya.");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white px-4 py-20 dark:bg-[#0b0c0f]">
        <div className="mx-auto max-w-[850px] animate-pulse space-y-7">
          <div className="h-4 w-40 rounded bg-gray-200 dark:bg-white/10" />
          <div className="h-12 w-full rounded bg-gray-200 dark:bg-white/10" />
          <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-white/10" />
          <div className="h-72 rounded-2xl bg-gray-200 dark:bg-white/10" />
          <div className="h-5 w-full rounded bg-gray-200 dark:bg-white/10" />
          <div className="h-5 w-5/6 rounded bg-gray-200 dark:bg-white/10" />
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-white px-4 py-16 text-center text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
        <div className="max-w-md">
          <Newspaper
            size={48}
            className="mx-auto mb-5 text-[#C8102E]"
          />

          <h1 className="text-2xl font-black">
            खबर उपलब्ध नहीं है
          </h1>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            {error || "यह खबर अभी उपलब्ध नहीं है।"}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white"
          >
            <RefreshCw size={16} />
            Retry
          </button>

          <div>
            <Link
              to="/"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#C8102E]"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const categoryName =
    article.category_name || article.category?.name || "News";

  const categorySlug =
    article.category_slug || article.category?.slug || "";

  const summary = article.excerpt || article.subtitle || "";

  const author =
    article.author_name ||
    article.author?.username ||
    "HINDUSTAN DIGITAL DESK";

  const articleDate = formatDate(
    article.published_at || article.created_at
  );

  const imageUrl = getImage(article.featured_image);

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
      <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">

        {/* Breadcrumb */}
        <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="transition hover:text-[#C8102E]">
            Home
          </Link>

          <span>/</span>

          {categorySlug ? (
            <Link
              to={`/category/${encodeURIComponent(categorySlug)}`}
              className="text-[#C8102E] hover:underline"
            >
              {categoryName}
            </Link>
          ) : (
            <span className="text-[#C8102E]">{categoryName}</span>
          )}

          <span>/</span>

          <span className="max-w-[180px] truncate">
            {article.title}
          </span>
        </div>

        {/* Category */}
        <div className="mb-5">
          <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
            {categoryName}
          </span>

          {article.is_featured && (
            <span className="ml-2 rounded-md border border-[#C8102E]/30 px-3 py-1.5 text-xs font-bold text-[#C8102E]">
              Featured
            </span>
          )}
        </div>

        {/* Headline */}
        <h1 className="max-w-[900px] text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        {/* Summary */}
        {summary && (
          <p className="mt-5 max-w-[850px] text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            {summary}
          </p>
        )}

        {/* Author Details */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-y border-gray-200 py-5 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-5">

            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E]/10 text-[#C8102E]">
                <UserRound size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Published by
                </p>

                <p className="text-sm font-bold">
                  {author}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CalendarDays size={15} />
              {articleDate}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock3 size={15} />
              {getReadTime(article.content)}
            </div>
          </div>

          {/* Share and Bookmark */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              aria-label="Share article"
              title="Share article"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
            >
              <Share2 size={17} />
            </button>

            <button
              onClick={handleBookmark}
              aria-label="Bookmark article"
              title={bookmarked ? "Remove bookmark" : "Save bookmark"}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                bookmarked
                  ? "border-[#C8102E] bg-[#C8102E]/10 text-[#C8102E]"
                  : "border-gray-200 hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10"
              }`}
            >
              <Bookmark
                size={17}
                fill={bookmarked ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        {imageUrl && (
          <>
            <div className="mt-8 overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#18191e]">
              <img
                src={imageUrl}
                alt={article.title}
                className="max-h-[550px] w-full object-cover"
              />
            </div>

            <p className="mt-3 text-xs text-gray-500">
              HINDUSTAN.DIGITAL
            </p>
          </>
        )}

        {/* Full Article Content */}
        <div className="mx-auto mt-10 max-w-[760px]">

          {summary && (
            <div className="mb-8 border-l-4 border-[#C8102E] pl-5">
              <p className="text-lg font-semibold leading-8 text-gray-700 dark:text-gray-300">
                {summary}
              </p>
            </div>
          )}

          {paragraphs.length > 0 ? (
            <div className="space-y-7">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-base leading-9 text-gray-500 dark:text-gray-400">
              इस खबर का पूरा विवरण अभी उपलब्ध नहीं है।
            </p>
          )}

          {/* Article Category */}
          <div className="mt-10 border-y border-gray-200 py-6 dark:border-white/10">
            <p className="text-sm font-bold">Category</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {categorySlug ? (
                <Link
                  to={`/category/${encodeURIComponent(categorySlug)}`}
                  className="rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-600 transition hover:border-[#C8102E] hover:text-[#C8102E] dark:border-white/10 dark:text-gray-300"
                >
                  {categoryName}
                </Link>
              ) : (
                <span className="rounded-full border border-gray-200 px-4 py-2 text-xs dark:border-white/10">
                  {categoryName}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <section className="mt-16">
            <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
              <h2 className="text-2xl font-black">
                Related News
              </h2>

              <Link
                to="/search"
                className="flex items-center gap-1 text-sm font-bold text-[#C8102E]"
              >
                View All
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedNews.map((news) => (
                <Link
                  to={`/article/${encodeURIComponent(news.slug)}`}
                  key={news.id}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#141519]"
                >
                  <div className="h-48 overflow-hidden bg-gray-100 dark:bg-[#202127]">
                    {news.featured_image ? (
                      <img
                        src={getImage(news.featured_image)}
                        alt={news.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Newspaper size={40} className="text-gray-400" />
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-bold text-[#C8102E]">
                      {news.category_name || categoryName}
                    </span>

                    <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug transition group-hover:text-[#C8102E]">
                      {news.title}
                    </h3>

                    <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#C8102E]">
                      पूरी खबर पढ़ें
                      <ArrowUpRight size={15} />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Home */}
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
