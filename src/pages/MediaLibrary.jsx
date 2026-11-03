
// import { useEffect, useMemo, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   Upload,
//   Image as ImageIcon,
//   Trash2,
//   Search,
//   FileImage,
//   X,
//   Copy,
//   Check,
//   HardDrive,
//   Images,
//   AlertTriangle,
//   CloudUpload,
//   Eye,
//   File,
//   RefreshCw,
// } from "lucide-react";

// const initialMedia = [
//   {
//     id: 1,
//     name: "technology-news.jpg",
//     url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
//     type: "Image",
//     format: "JPG",
//     size: "External",
//   },
//   {
//     id: 2,
//     name: "business-news.jpg",
//     url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
//     type: "Image",
//     format: "JPG",
//     size: "External",
//   },
//   {
//     id: 3,
//     name: "education-news.jpg",
//     url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
//     type: "Image",
//     format: "JPG",
//     size: "External",
//   },
// ];

// const MAX_FILE_SIZE = 10 * 1024 * 1024;

// function formatSize(bytes) {
//   if (bytes < 1024 * 1024) {
//     return `${(bytes / 1024).toFixed(1)} KB`;
//   }

//   return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
// }

// function getFormat(name) {
//   const extension = name.split(".").pop();
//   return extension ? extension.toUpperCase() : "IMAGE";
// }

// function StatCard({ title, value, subtitle, icon: Icon, color }) {
//   return (
//     <motion.div
//       whileHover={{ y: -4 }}
//       transition={{ duration: 0.2 }}
//       className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-red-900/5 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-[#C8102E]/50"
//     >
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
//             {title}
//           </p>
//           <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
//             {value}
//           </h2>
//           <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
//             {subtitle}
//           </p>
//         </div>

//         <div className={`rounded-xl p-3 ${color}`}>
//           <Icon size={22} />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function DeleteModal({ item, onClose, onConfirm }) {
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.94 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.94 }}
//         className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//       >
//         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
//           <AlertTriangle size={27} />
//         </div>

//         <h2 className="mt-5 text-center text-xl font-black text-gray-900 dark:text-white">
//           Delete Image?
//         </h2>

//         <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
//           Are you sure you want to delete{" "}
//           <span className="font-bold text-gray-900 dark:text-white">
//             {item?.name}
//           </span>
//           ?
//         </p>

//         <div className="mt-6 flex gap-3">
//           <button
//             onClick={onClose}
//             className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={onConfirm}
//             className="flex-1 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a50d25]"
//           >
//             Delete
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function PreviewModal({ item, onClose, onCopy, copied }) {
//   if (!item) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
//       onMouseDown={(e) => {
//         if (e.target === e.currentTarget) onClose();
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 15 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.95, y: 15 }}
//         className="my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl dark:bg-[#17191f]"
//       >
//         <div className="flex items-center justify-between gap-3 border-b border-gray-100 p-4 dark:border-white/10">
//           <div className="min-w-0">
//             <h2 className="truncate text-sm font-black text-gray-900 dark:text-white">
//               {item.name}
//             </h2>
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               Image Preview
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="shrink-0 rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500 hover:text-[#C8102E] dark:border-white/10"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         <div className="flex max-h-[65vh] items-center justify-center bg-gray-100 p-3 dark:bg-black">
//           <img
//             src={item.url}
//             alt={item.name}
//             className="max-h-[60vh] max-w-full object-contain"
//           />
//         </div>

//         <div className="space-y-4 p-5">
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
//             <div className="rounded-xl bg-gray-50 p-3 dark:bg-white/5">
//               <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
//                 Format
//               </p>
//               <p className="mt-1 text-sm font-bold text-gray-800 dark:text-white">
//                 {item.format}
//               </p>
//             </div>

//             <div className="rounded-xl bg-gray-50 p-3 dark:bg-white/5">
//               <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
//                 File Size
//               </p>
//               <p className="mt-1 text-sm font-bold text-gray-800 dark:text-white">
//                 {item.size}
//               </p>
//             </div>

//             <div className="col-span-2 rounded-xl bg-gray-50 p-3 dark:col-span-1 dark:bg-white/5">
//               <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
//                 Media Type
//               </p>
//               <p className="mt-1 text-sm font-bold text-gray-800 dark:text-white">
//                 {item.type}
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-3 sm:flex-row">
//             <button
//               onClick={() => onCopy(item.url)}
//               className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a50d25]"
//             >
//               {copied ? <Check size={17} /> : <Copy size={17} />}
//               {copied ? "Copied!" : "Copy Image URL"}
//             </button>

//             <button
//               onClick={onClose}
//               className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//             >
//               Close Preview
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function MediaLibrary() {
//   const [media, setMedia] = useState(initialMedia);
//   const [search, setSearch] = useState("");
//   const [preview, setPreview] = useState(null);
//   const [deletingItem, setDeletingItem] = useState(null);
//   const [copied, setCopied] = useState(false);
//   const [error, setError] = useState("");
//   const [dragActive, setDragActive] = useState(false);

//   const fileInputRef = useRef(null);
//   const objectUrlsRef = useRef([]);

//   useEffect(() => {
//     return () => {
//       objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
//     };
//   }, []);

//   const imageCount = media.filter((item) => item.type === "Image").length;

//   const filteredMedia = useMemo(() => {
//     return media.filter((item) =>
//       item.name.toLowerCase().includes(search.toLowerCase().trim())
//     );
//   }, [media, search]);

//   const totalLocalSize = media.reduce(
//     (total, item) => total + (item.bytes || 0),
//     0
//   );

//   const handleUpload = (fileList) => {
//     const files = Array.from(fileList || []);
//     const imageFiles = files.filter((file) => file.type.startsWith("image/"));
//     const invalidCount = files.length - imageFiles.length;

//     if (files.length === 0) return;

//     const validFiles = imageFiles.filter((file) => file.size <= MAX_FILE_SIZE);
//     const oversizedCount = imageFiles.length - validFiles.length;

//     if (invalidCount || oversizedCount) {
//       const messages = [];
//       if (invalidCount) messages.push(`${invalidCount} non-image file(s) skipped`);
//       if (oversizedCount) messages.push(`${oversizedCount} file(s) exceeded 10 MB`);
//       setError(messages.join(". ") + ".");
//     } else {
//       setError("");
//     }

//     const newMedia = validFiles.map((file) => {
//       const url = URL.createObjectURL(file);
//       objectUrlsRef.current.push(url);

//       return {
//         id: `${Date.now()}-${Math.random()}`,
//         name: file.name,
//         url,
//         type: "Image",
//         format: getFormat(file.name),
//         size: formatSize(file.size),
//         bytes: file.size,
//       };
//     });

//     if (newMedia.length) {
//       setMedia((previous) => [...newMedia, ...previous]);
//     }

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const handleDelete = () => {
//     if (!deletingItem) return;

//     if (deletingItem.url.startsWith("blob:")) {
//       URL.revokeObjectURL(deletingItem.url);
//       objectUrlsRef.current = objectUrlsRef.current.filter(
//         (url) => url !== deletingItem.url
//       );
//     }

//     setMedia((previous) =>
//       previous.filter((item) => item.id !== deletingItem.id)
//     );

//     if (preview?.id === deletingItem.id) {
//       setPreview(null);
//     }

//     setDeletingItem(null);
//   };

//   const handleCopy = async (url) => {
//     try {
//       await navigator.clipboard.writeText(url);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch {
//       setError("Unable to copy URL. Please copy it manually.");
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragActive(false);
//     handleUpload(e.dataTransfer.files);
//   };

//   return (
//     <div className="w-full text-gray-900 dark:text-white">
//       {/* Header */}
//       <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
//         <div>
//           <Link
//             to="/admin"
//             className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
//           >
//             <ArrowLeft size={16} />
//             Back to Dashboard
//           </Link>

//           <div className="flex items-center gap-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
//               <Images size={24} />
//             </div>

//             <div>
//               <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                 Media Library
//               </h1>
//               <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                 Organize and manage your website images.
//               </p>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={() => fileInputRef.current?.click()}
//           className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl"
//         >
//           <Upload size={18} />
//           Upload Images
//         </button>

//         <input
//           ref={fileInputRef}
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={(e) => handleUpload(e.target.files)}
//           className="hidden"
//         />
//       </div>

//       {/* Statistics */}
//       <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
//         <StatCard
//           title="Total Media"
//           value={media.length}
//           subtitle="Images in your demo library"
//           icon={FileImage}
//           color="bg-[#C8102E]/10 text-[#C8102E]"
//         />

//         <StatCard
//           title="Image Files"
//           value={imageCount}
//           subtitle="Available image assets"
//           icon={ImageIcon}
//           color="bg-blue-500/10 text-blue-500"
//         />

//         <StatCard
//           title="Local Upload Size"
//           value={formatSize(totalLocalSize)}
//           subtitle="Total size of selected local files"
//           icon={HardDrive}
//           color="bg-green-500/10 text-green-500"
//         />
//       </div>

//       {/* Upload Zone */}
//       <div
//         onDragOver={(e) => {
//           e.preventDefault();
//           setDragActive(true);
//         }}
//         onDragLeave={(e) => {
//           if (!e.currentTarget.contains(e.relatedTarget)) {
//             setDragActive(false);
//           }
//         }}
//         onDrop={handleDrop}
//         className={`mb-7 rounded-2xl border-2 border-dashed p-7 text-center transition-all duration-300 sm:p-10 ${
//           dragActive
//             ? "border-[#C8102E] bg-[#C8102E]/10"
//             : "border-gray-300 bg-white hover:border-[#C8102E]/60 dark:border-white/15 dark:bg-[#15171c] dark:hover:border-[#C8102E]/50"
//         }`}
//       >
//         <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
//           <CloudUpload size={31} />
//         </div>

//         <h3 className="text-lg font-black text-gray-900 dark:text-white">
//           {dragActive ? "Drop your images here" : "Upload your images"}
//         </h3>

//         <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
//           Drag and drop images here or select files from your computer.
//         </p>

//         <button
//           type="button"
//           onClick={() => fileInputRef.current?.click()}
//           className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#C8102E]/30 bg-[#C8102E]/5 px-5 py-2.5 text-sm font-bold text-[#C8102E] transition hover:bg-[#C8102E] hover:text-white"
//         >
//           <Upload size={16} />
//           Browse Files
//         </button>

//         <p className="mt-4 text-[11px] text-gray-400">
//           Supported image formats · Maximum 10 MB per image
//         </p>
//       </div>

//       {/* Upload Error */}
//       {error && (
//         <div className="mb-6 flex items-start justify-between gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-500">
//           <div className="flex items-start gap-2">
//             <AlertTriangle size={17} className="mt-0.5 shrink-0" />
//             <p>{error}</p>
//           </div>
//           <button onClick={() => setError("")}>
//             <X size={17} />
//           </button>
//         </div>
//       )}

//       {/* Search and Gallery Heading */}
//       <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//         <div>
//           <h2 className="text-lg font-black">All Media Files</h2>
//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             {filteredMedia.length} files available
//           </p>
//         </div>

//         <div className="relative w-full sm:max-w-xs">
//           <Search
//             size={18}
//             className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
//           />

//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search media files..."
//             className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#15171c] dark:text-white"
//           />

//           {search && (
//             <button
//               onClick={() => setSearch("")}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C8102E]"
//             >
//               <X size={16} />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {filteredMedia.map((item, index) => (
//           <motion.div
//             layout
//             key={item.id}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.04 }}
//             className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-xl hover:shadow-red-900/5 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-[#C8102E]/40"
//           >
//             <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-[#22252b]">
//               <img
//                 src={item.url}
//                 alt={item.name}
//                 loading="lazy"
//                 onError={(e) => {
//                   e.currentTarget.src =
//                     "https://placehold.co/600x400?text=Image+Unavailable";
//                 }}
//                 className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
//                 <button
//                   onClick={() => {
//                     setPreview(item);
//                     setCopied(false);
//                   }}
//                   className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-gray-900 shadow-lg transition hover:scale-105"
//                 >
//                   <Eye size={16} />
//                   Preview Image
//                 </button>
//               </div>

//               <span className="absolute left-3 top-3 rounded-lg border border-white/20 bg-black/50 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
//                 {item.format}
//               </span>
//             </div>

//             <div className="p-4">
//               <p className="truncate text-sm font-bold text-gray-900 dark:text-white">
//                 {item.name}
//               </p>

//               <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
//                 <span className="flex items-center gap-1.5">
//                   <File size={13} />
//                   {item.type}
//                 </span>
//                 <span>{item.size}</span>
//               </div>

//               <div className="mt-4 flex gap-2 border-t border-gray-100 pt-3 dark:border-white/10">
//                 <button
//                   onClick={() => handleCopy(item.url)}
//                   className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-xs font-bold text-gray-500 transition hover:border-blue-500/40 hover:text-blue-500 dark:border-white/10 dark:text-gray-400"
//                 >
//                   <Copy size={14} />
//                   Copy URL
//                 </button>

//                 <button
//                   onClick={() => {
//                     setPreview(item);
//                     setCopied(false);
//                   }}
//                   title="Preview"
//                   className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-blue-500/40 hover:text-blue-500 dark:border-white/10"
//                 >
//                   <Eye size={15} />
//                 </button>

//                 <button
//                   onClick={() => setDeletingItem(item)}
//                   title="Delete image"
//                   className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500/40 hover:bg-red-500/5 hover:text-red-500 dark:border-white/10"
//                 >
//                   <Trash2 size={15} />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}

//         {filteredMedia.length === 0 && (
//           <div className="col-span-full rounded-2xl border border-gray-200 bg-white px-5 py-16 text-center dark:border-white/10 dark:bg-[#15171c]">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
//               <ImageIcon size={26} />
//             </div>

//             <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
//               No media files found
//             </h3>

//             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//               Try another search or upload some images.
//             </p>

//             <button
//               onClick={() => setSearch("")}
//               className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] hover:underline"
//             >
//               <RefreshCw size={14} />
//               Clear Search
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Information */}
//       <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-5">
//         <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-500">
//           <HardDrive size={20} />
//         </div>

//         <div>
//           <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//             Media Storage Information
//           </h3>
//           <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
//             Uploaded files currently use temporary browser storage. Images
//             added from your computer will disappear after refreshing the page.
//             Permanent image hosting and database integration will be connected
//             through the Django backend later.
//           </p>
//         </div>
//       </div>

//       {/* Modals */}
//       <AnimatePresence>
//         {preview && (
//           <PreviewModal
//             item={preview}
//             onClose={() => setPreview(null)}
//             onCopy={handleCopy}
//             copied={copied}
//           />
//         )}

//         {deletingItem && (
//           <DeleteModal
//             item={deletingItem}
//             onClose={() => setDeletingItem(null)}
//             onConfirm={handleDelete}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default MediaLibrary;




import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import API from "../services/api";
import {
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  Trash2,
  Search,
  FileImage,
  X,
  Copy,
  Check,
  HardDrive,
  Images,
  AlertTriangle,
  CloudUpload,
  Eye,
  File,
  RefreshCw,
  Video,
  FileText,
  Film,
  Filter,
} from "lucide-react";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

const ALLOWED_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".mp4",
  ".webm",
  ".pdf",
];

function formatSize(bytes) {
  if (!bytes) return "0 KB";

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function getExtension(name = "") {
  return name.includes(".")
    ? `.${name.split(".").pop().toLowerCase()}`
    : "";
}

function getFileName(item) {
  return (
    item.title ||
    item.file?.split("/").pop() ||
    `Media-${item.id}`
  );
}

function getMediaType(type) {
  return (type || "OTHER").toUpperCase();
}

function getMediaIcon(type) {
  switch (getMediaType(type)) {
    case "IMAGE":
      return ImageIcon;
    case "VIDEO":
      return Video;
    case "DOCUMENT":
      return FileText;
    default:
      return File;
  }
}

function getErrorMessage(error) {
  const data = error?.response?.data;

  if (!data) {
    return error?.message || "Something went wrong. Please try again.";
  }

  if (typeof data === "string") return data;

  return Object.entries(data)
    .map(([key, value]) => {
      const message = Array.isArray(value)
        ? value.join(", ")
        : typeof value === "object"
          ? JSON.stringify(value)
          : value;

      return `${key}: ${message}`;
    })
    .join(" | ");
}

function StatCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#C8102E]/40 hover:shadow-lg hover:shadow-red-900/5 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-[#C8102E]/50"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            {value}
          </h2>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            {subtitle}
          </p>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={22} />
        </div>
      </div>
    </motion.div>
  );
}

function DeleteModal({ item, onClose, onConfirm, deleting }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
          <AlertTriangle size={27} />
        </div>

        <h2 className="mt-5 text-center text-xl font-black text-gray-900 dark:text-white">
          Delete Media?
        </h2>

        <p className="mt-2 break-words text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
          Are you sure you want to delete{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {item ? getFileName(item) : ""}
          </span>
          ?
        </p>

        <p className="mt-2 text-center text-xs text-red-500">
          This action cannot be undone.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            disabled={deleting}
            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 disabled:opacity-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={deleting}
            className="flex-1 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a50d25] disabled:opacity-60"
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function PreviewModal({ item, onClose, onCopy, copied }) {
  if (!item) return null;

  const type = getMediaType(item.media_type);
  const name = getFileName(item);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl dark:bg-[#17191f]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-gray-100 p-4 dark:border-white/10">
          <div className="min-w-0">
            <h2 className="truncate text-sm font-black text-gray-900 dark:text-white">
              {name}
            </h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {type} Preview
            </p>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500 hover:text-[#C8102E] dark:border-white/10"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex max-h-[65vh] min-h-[220px] items-center justify-center overflow-hidden bg-gray-100 p-3 dark:bg-black">
          {type === "IMAGE" && (
            <img
              src={item.file_url}
              alt={item.alt_text || name}
              className="max-h-[60vh] max-w-full object-contain"
            />
          )}

          {type === "VIDEO" && (
            <video
              src={item.file_url}
              controls
              autoPlay={false}
              className="max-h-[60vh] max-w-full"
            >
              Your browser does not support video playback.
            </video>
          )}

          {type === "DOCUMENT" && (
            <iframe
              src={item.file_url}
              title={name}
              className="h-[60vh] w-full rounded-lg bg-white"
            />
          )}

          {type === "OTHER" && (
            <div className="p-8 text-center">
              <File size={48} className="mx-auto text-gray-400" />
              <p className="mt-3 text-sm text-gray-500">
                Preview is not available for this file.
              </p>
              <a
                href={item.file_url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-bold text-[#C8102E]"
              >
                Open File
              </a>
            </div>
          )}
        </div>

        <div className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-3 dark:bg-white/5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Media Type
              </p>
              <p className="mt-1 text-sm font-bold text-gray-800 dark:text-white">
                {type}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3 dark:bg-white/5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                File Size
              </p>
              <p className="mt-1 text-sm font-bold text-gray-800 dark:text-white">
                {formatSize(item.file_size)}
              </p>
            </div>

            <div className="col-span-2 rounded-xl bg-gray-50 p-3 dark:col-span-1 dark:bg-white/5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Uploaded By
              </p>
              <p className="mt-1 truncate text-sm font-bold text-gray-800 dark:text-white">
                {item.uploaded_by_name || "Admin"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => onCopy(item.file_url)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#a50d25]"
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Copied!" : "Copy File URL"}
            </button>

            <a
              href={item.file_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
            >
              <Eye size={16} />
              Open File
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MediaLibrary() {
  const [media, setMedia] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [preview, setPreview] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);
  const [copied, setCopied] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);

  // Load media from Django API
  const fetchMedia = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await API.get("media/");
      const data = response.data;

      setMedia(Array.isArray(data) ? data : data.results || []);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  // Media statistics
  const imageCount = media.filter(
    (item) => getMediaType(item.media_type) === "IMAGE"
  ).length;

  const videoCount = media.filter(
    (item) => getMediaType(item.media_type) === "VIDEO"
  ).length;

  const documentCount = media.filter(
    (item) => getMediaType(item.media_type) === "DOCUMENT"
  ).length;

  const totalSize = media.reduce(
    (total, item) => total + Number(item.file_size || 0),
    0
  );

  // Search and filter
  const filteredMedia = useMemo(() => {
    return media.filter((item) => {
      const name = getFileName(item).toLowerCase();
      const matchesSearch = name.includes(search.toLowerCase().trim());

      const matchesFilter =
        filter === "ALL" ||
        getMediaType(item.media_type) === filter;

      return matchesSearch && matchesFilter;
    });
  }, [media, search, filter]);

  // Upload files to Django
  const handleUpload = async (fileList) => {
    const files = Array.from(fileList || []);

    if (!files.length) return;

    setError("");
    setSuccess("");

    const validFiles = [];
    const skipped = [];

    files.forEach((file) => {
      const extension = getExtension(file.name);

      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        skipped.push(`${file.name}: unsupported format`);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        skipped.push(`${file.name}: exceeds 20 MB`);
        return;
      }

      validFiles.push(file);
    });

    if (!validFiles.length) {
      setError(
        skipped.length
          ? skipped.join(" | ")
          : "No valid files selected."
      );

      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setUploading(true);

    let uploadedCount = 0;
    const failedFiles = [];

    for (const file of validFiles) {
      const formData = new FormData();

      const title = file.name.replace(/\.[^/.]+$/, "");

      formData.append("file", file);
      formData.append("title", title);
      formData.append("alt_text", "");

      try {
        await API.post("media/", formData, {
          headers: {
            "Content-Type": undefined,
          },
        });

        uploadedCount += 1;
      } catch (err) {
        failedFiles.push(
          `${file.name}: ${getErrorMessage(err)}`
        );
      }
    }

    setUploading(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    await fetchMedia();

    if (uploadedCount > 0) {
      setSuccess(`${uploadedCount} file(s) uploaded successfully.`);
    }

    const allErrors = [...skipped, ...failedFiles];

    if (allErrors.length) {
      setError(allErrors.join(" | "));
    }
  };

  // Delete media from Django
  const handleDelete = async () => {
    if (!deletingItem) return;

    setDeleting(true);
    setError("");
    setSuccess("");

    try {
      await API.delete(`media/${deletingItem.id}/`);

      setMedia((previous) =>
        previous.filter((item) => item.id !== deletingItem.id)
      );

      if (preview?.id === deletingItem.id) {
        setPreview(null);
      }

      setDeletingItem(null);
      setSuccess("Media deleted successfully.");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setDeleting(false);
    }
  };

  // Copy file URL
  const handleCopy = async (url) => {
    if (!url) {
      setError("File URL is not available.");
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => setCopied(false), 1800);
    } catch {
      setError("Unable to copy URL. Please copy it manually.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleUpload(e.dataTransfer.files);
  };

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  return (
    <div className="w-full text-gray-900 dark:text-white">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <Link
            to="/admin"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
              <Images size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                Media Library
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Upload and manage your website images, videos and documents.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
        >
          {uploading ? (
            <RefreshCw size={18} className="animate-spin" />
          ) : (
            <Upload size={18} />
          )}
          {uploading ? "Uploading..." : "Upload Media"}
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,application/pdf"
          multiple
          onChange={(e) => handleUpload(e.target.files)}
          className="hidden"
        />
      </div>

      {/* Statistics */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Media"
          value={media.length}
          subtitle="Files saved in your library"
          icon={FileImage}
          color="bg-[#C8102E]/10 text-[#C8102E]"
        />

        <StatCard
          title="Images"
          value={imageCount}
          subtitle="Available image assets"
          icon={ImageIcon}
          color="bg-blue-500/10 text-blue-500"
        />

        <StatCard
          title="Videos"
          value={videoCount}
          subtitle="Uploaded video files"
          icon={Film}
          color="bg-purple-500/10 text-purple-500"
        />

        <StatCard
          title="Storage Used"
          value={formatSize(totalSize)}
          subtitle={`${documentCount} document(s) included`}
          icon={HardDrive}
          color="bg-green-500/10 text-green-500"
        />
      </div>

      {/* Upload Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setDragActive(false);
          }
        }}
        onDrop={handleDrop}
        className={`mb-7 rounded-2xl border-2 border-dashed p-7 text-center transition-all duration-300 sm:p-10 ${
          dragActive
            ? "border-[#C8102E] bg-[#C8102E]/10"
            : "border-gray-300 bg-white hover:border-[#C8102E]/60 dark:border-white/15 dark:bg-[#15171c] dark:hover:border-[#C8102E]/50"
        }`}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C8102E]/10 text-[#C8102E]">
          <CloudUpload size={31} />
        </div>

        <h3 className="text-lg font-black text-gray-900 dark:text-white">
          {dragActive ? "Drop your files here" : "Upload your media"}
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
          Drag and drop images, videos or PDF documents here, or select files
          from your computer.
        </p>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#C8102E]/30 bg-[#C8102E]/5 px-5 py-2.5 text-sm font-bold text-[#C8102E] transition hover:bg-[#C8102E] hover:text-white disabled:opacity-50"
        >
          <Upload size={16} />
          Browse Files
        </button>

        <p className="mt-4 text-[11px] text-gray-400">
          JPG, JPEG, PNG, WEBP, GIF, MP4, WEBM, PDF · Maximum 20 MB per file
        </p>
      </div>

      {/* Upload Progress */}
      {uploading && (
        <div className="mb-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
          <div className="flex items-center gap-3 text-sm font-semibold text-blue-500">
            <RefreshCw size={17} className="animate-spin" />
            Uploading files to the server. Please wait...
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-blue-500/10">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-500" />
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-6 flex items-start justify-between gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-500">
          <div className="flex items-start gap-2">
            <AlertTriangle size={17} className="mt-0.5 shrink-0" />
            <p className="break-words">{error}</p>
          </div>
          <button onClick={clearMessages}>
            <X size={17} />
          </button>
        </div>
      )}

      {/* Success */}
      {success && (
        <div className="mb-6 flex items-start justify-between gap-3 rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-sm text-green-600 dark:text-green-400">
          <div className="flex items-center gap-2">
            <Check size={17} className="shrink-0" />
            <p>{success}</p>
          </div>
          <button onClick={clearMessages}>
            <X size={17} />
          </button>
        </div>
      )}

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-lg font-black">All Media Files</h2>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {filteredMedia.length} of {media.length} files
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <div className="relative w-full sm:max-w-xs">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search media files..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 dark:border-white/10 dark:bg-[#15171c] dark:text-white"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C8102E]"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="relative w-full sm:w-48">
            <Filter
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm font-semibold outline-none focus:border-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-white"
            >
              <option value="ALL">All Media</option>
              <option value="IMAGE">Images</option>
              <option value="VIDEO">Videos</option>
              <option value="DOCUMENT">Documents</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <button
            onClick={fetchMedia}
            disabled={loading}
            title="Refresh media"
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] disabled:opacity-50 dark:border-white/10 dark:text-gray-300"
          >
            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>
      </div>

      {/* Gallery */}
      {loading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-72 animate-pulse rounded-2xl border border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-[#15171c]"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMedia.map((item, index) => {
            const type = getMediaType(item.media_type);
            const name = getFileName(item);
            const Icon = getMediaIcon(type);

            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/40 hover:shadow-xl hover:shadow-red-900/5 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-[#C8102E]/40"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gray-100 dark:bg-[#22252b]">
                  {type === "IMAGE" && item.file_url ? (
                    <img
                      src={item.file_url}
                      alt={item.alt_text || name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : type === "VIDEO" && item.file_url ? (
                    <video
                      src={item.file_url}
                      muted
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
                      <Icon size={45} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {type}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                    <button
                      onClick={() => {
                        setPreview(item);
                        setCopied(false);
                      }}
                      className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-gray-900 shadow-lg transition hover:scale-105"
                    >
                      <Eye size={16} />
                      Preview
                    </button>
                  </div>

                  {type === "VIDEO" && (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-black/60 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                      <Video size={12} />
                      VIDEO
                    </span>
                  )}

                  <span className="absolute left-3 top-3 rounded-lg border border-white/20 bg-black/50 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
                    {type}
                  </span>
                </div>

                <div className="p-4">
                  <p className="truncate text-sm font-bold text-gray-900 dark:text-white">
                    {name}
                  </p>

                  <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <File size={13} />
                      {type}
                    </span>
                    <span>{formatSize(item.file_size)}</span>
                  </div>

                  <div className="mt-4 flex gap-2 border-t border-gray-100 pt-3 dark:border-white/10">
                    <button
                      onClick={() => handleCopy(item.file_url)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-xs font-bold text-gray-500 transition hover:border-blue-500/40 hover:text-blue-500 dark:border-white/10 dark:text-gray-400"
                    >
                      <Copy size={14} />
                      Copy URL
                    </button>

                    <button
                      onClick={() => {
                        setPreview(item);
                        setCopied(false);
                      }}
                      title="Preview"
                      className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-blue-500/40 hover:text-blue-500 dark:border-white/10"
                    >
                      <Eye size={15} />
                    </button>

                    <button
                      onClick={() => setDeletingItem(item)}
                      title="Delete media"
                      className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-red-500/40 hover:bg-red-500/5 hover:text-red-500 dark:border-white/10"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {filteredMedia.length === 0 && (
            <div className="col-span-full rounded-2xl border border-gray-200 bg-white px-5 py-16 text-center dark:border-white/10 dark:bg-[#15171c]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-white/5">
                <ImageIcon size={26} />
              </div>

              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                {media.length === 0
                  ? "Your media library is empty"
                  : "No media files found"}
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {media.length === 0
                  ? "Upload your first image, video or document."
                  : "Try another search or change the media filter."}
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setFilter("ALL");
                }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] hover:underline"
              >
                <RefreshCw size={14} />
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Information */}
      <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-5">
        <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-500">
          <HardDrive size={20} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            Media Storage Information
          </h3>
          <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
            Files are uploaded through your Django Media API. The database
            stores file details and the server returns the file URL. For
            permanent production storage, configure persistent media storage
            on your hosting provider.
          </p>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {preview && (
          <PreviewModal
            item={preview}
            onClose={() => setPreview(null)}
            onCopy={handleCopy}
            copied={copied}
          />
        )}

        {deletingItem && (
          <DeleteModal
            item={deletingItem}
            onClose={() => setDeletingItem(null)}
            onConfirm={handleDelete}
            deleting={deleting}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default MediaLibrary;
