
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowLeft,
//   Globe,
//   Mail,
//   Languages,
//   Radio,
//   MessageSquare,
//   Save,
//   RotateCcw,
//   Settings,
//   CheckCircle2,
//   Sun,
//   Moon,
//   Monitor,
//   Info,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// const DEFAULT_SETTINGS = {
//   siteName: "HINDUSTAN.DIGITAL",
//   tagline: "देश की खबर, देश की आवाज़",
//   email: "contact@hindustan.digital",
//   language: "Hindi",
//   theme: "System Default",
//   breakingNews: true,
//   comments: false,
// };

// function SectionCard({ icon: Icon, title, description, children, color = "red" }) {
//   const colors = {
//     red: "bg-red-500/10 text-[#C8102E]",
//     blue: "bg-blue-500/10 text-blue-500",
//     purple: "bg-purple-500/10 text-purple-500",
//     green: "bg-emerald-500/10 text-emerald-500",
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 14 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -2 }}
//       transition={{ duration: 0.25 }}
//       className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-white/10 dark:bg-[#15171c] dark:hover:border-white/20"
//     >
//       <div className="flex items-center gap-4 border-b border-gray-100 px-5 py-5 sm:px-7 dark:border-white/10">
//         <div className={`rounded-xl p-3 ${colors[color]}`}>
//           <Icon size={21} />
//         </div>

//         <div>
//           <h2 className="text-base font-extrabold text-gray-900 dark:text-white">
//             {title}
//           </h2>
//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       <div className="p-5 sm:p-7">{children}</div>
//     </motion.section>
//   );
// }

// function Field({ label, value, onChange, placeholder, type = "text" }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//         {label}
//       </label>

//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#C8102E] focus:bg-white focus:ring-4 focus:ring-red-500/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:focus:bg-[#101216]"
//       />
//     </div>
//   );
// }

// function Toggle({ checked, onChange }) {
//   return (
//     <button
//       type="button"
//       role="switch"
//       aria-checked={checked}
//       onClick={() => onChange(!checked)}
//       className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/15 ${
//         checked ? "bg-[#C8102E]" : "bg-gray-300 dark:bg-gray-600"
//       }`}
//     >
//       <motion.span
//         animate={{ x: checked ? 22 : 4 }}
//         transition={{ type: "spring", stiffness: 500, damping: 30 }}
//         className="absolute left-0 top-1 h-5 w-5 rounded-full bg-white shadow-md"
//       />
//     </button>
//   );
// }

// function FeatureRow({ icon: Icon, title, description, checked, onChange }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <div className="flex min-w-0 items-start gap-3">
//         <div className="mt-0.5 rounded-lg bg-gray-100 p-2.5 text-gray-600 dark:bg-white/5 dark:text-gray-300">
//           <Icon size={19} />
//         </div>

//         <div>
//           <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//             {title}
//           </h3>
//           <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       <Toggle checked={checked} onChange={onChange} />
//     </div>
//   );
// }

// function AdminSettings() {
//   const [settings, setSettings] = useState(DEFAULT_SETTINGS);
//   const [saved, setSaved] = useState(false);
//   const [showReset, setShowReset] = useState(false);

//   const updateSetting = (key, value) => {
//     setSettings((previous) => ({
//       ...previous,
//       [key]: value,
//     }));

//     setSaved(false);
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     setSaved(true);
//   };

//   const handleReset = () => {
//     setSettings({ ...DEFAULT_SETTINGS });
//     setSaved(false);
//     setShowReset(false);
//   };

//   const selectClass =
//     "w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#C8102E] focus:ring-4 focus:ring-red-500/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white";

//   return (
//     <div className="space-y-7 text-gray-900 dark:text-white">

//       {/* Page Heading */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <Link
//             to="/admin"
//             className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
//           >
//             <ArrowLeft size={16} />
//             Back to Dashboard
//           </Link>

//           <div className="flex items-center gap-3">
//             <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
//               <Settings size={23} />
//             </div>

//             <div>
//               <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                 Website Settings
//               </h1>
//               <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                 Manage your website preferences and configurations.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
//           <span className="h-2 w-2 rounded-full bg-emerald-500" />
//           Configuration Panel
//         </div>
//       </div>

//       {/* Information Banner */}
//       <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-white p-4 dark:border-red-500/15 dark:from-red-500/10 dark:to-[#15171c]">
//         <div className="rounded-lg bg-white p-2 text-[#C8102E] shadow-sm dark:bg-white/10">
//           <Sparkles size={19} />
//         </div>

//         <div>
//           <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//             Manage your digital newsroom
//           </h3>
//           <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
//             Customize your website identity, contact details, language,
//             appearance and reader experience from one place.
//           </p>
//         </div>
//       </div>

//       <form onSubmit={handleSave} className="space-y-6">

//         {/* General Settings */}
//         <SectionCard
//           icon={Globe}
//           title="General Settings"
//           description="Manage your website identity and basic information."
//           color="red"
//         >
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//             <Field
//               label="Website Name"
//               value={settings.siteName}
//               onChange={(e) => updateSetting("siteName", e.target.value)}
//               placeholder="Enter website name"
//             />

//             <Field
//               label="Website Tagline"
//               value={settings.tagline}
//               onChange={(e) => updateSetting("tagline", e.target.value)}
//               placeholder="Enter website tagline"
//             />
//           </div>

//           <div className="mt-5 flex items-center gap-2 rounded-xl bg-gray-50 p-3 dark:bg-white/5">
//             <Info size={16} className="shrink-0 text-gray-400" />
//             <p className="text-xs text-gray-500 dark:text-gray-400">
//               Your website name and tagline are currently editable demo
//               settings.
//             </p>
//           </div>
//         </SectionCard>

//         {/* Contact Settings */}
//         <SectionCard
//           icon={Mail}
//           title="Contact Information"
//           description="Manage official website communication details."
//           color="blue"
//         >
//           <Field
//             label="Official Contact Email"
//             type="email"
//             value={settings.email}
//             onChange={(e) => updateSetting("email", e.target.value)}
//             placeholder="contact@example.com"
//           />

//           <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
//             This email is intended for official website enquiries.
//           </p>
//         </SectionCard>

//         {/* Language and Appearance */}
//         <SectionCard
//           icon={Languages}
//           title="Language & Appearance"
//           description="Choose your default website language and visual theme."
//           color="purple"
//         >
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Default Language
//               </label>

//               <div className="relative">
//                 <select
//                   value={settings.language}
//                   onChange={(e) => updateSetting("language", e.target.value)}
//                   className={selectClass}
//                 >
//                   <option>Hindi</option>
//                   <option>English</option>
//                   <option>Bengali</option>
//                   <option>Urdu</option>
//                   <option>Tamil</option>
//                   <option>Telugu</option>
//                   <option>Marathi</option>
//                   <option>Gujarati</option>
//                   <option>Punjabi</option>
//                   <option>Odia</option>
//                 </select>
//                 <Languages
//                   size={17}
//                   className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Theme Preference
//               </label>

//               <div className="relative">
//                 <select
//                   value={settings.theme}
//                   onChange={(e) => updateSetting("theme", e.target.value)}
//                   className={selectClass}
//                 >
//                   <option>System Default</option>
//                   <option>Light</option>
//                   <option>Dark</option>
//                 </select>
//                 {settings.theme === "Light" ? (
//                   <Sun
//                     size={17}
//                     className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                   />
//                 ) : settings.theme === "Dark" ? (
//                   <Moon
//                     size={17}
//                     className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                   />
//                 ) : (
//                   <Monitor
//                     size={17}
//                     className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </SectionCard>

//         {/* Website Features */}
//         <SectionCard
//           icon={Settings}
//           title="Website Features"
//           description="Control the availability of reader-facing features."
//           color="green"
//         >
//           <div className="space-y-6">
//             <FeatureRow
//               icon={Radio}
//               title="Breaking News Ticker"
//               description="Display breaking news headlines on the homepage."
//               checked={settings.breakingNews}
//               onChange={(value) => updateSetting("breakingNews", value)}
//             />

//             <div className="h-px bg-gray-100 dark:bg-white/10" />

//             <FeatureRow
//               icon={MessageSquare}
//               title="Article Comments"
//               description="Allow readers to comment on published articles."
//               checked={settings.comments}
//               onChange={(value) => updateSetting("comments", value)}
//             />
//           </div>
//         </SectionCard>

//         {/* Security Note */}
//         <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-[#15171c]">
//           <ShieldCheck size={20} className="mt-0.5 shrink-0 text-emerald-500" />
//           <div>
//             <h3 className="text-sm font-bold">Settings & Security</h3>
//             <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
//               Actual website-wide changes, permanent storage and access
//               permissions will be handled securely through the Django backend.
//             </p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
//           <button
//             type="button"
//             onClick={() => setShowReset(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-600 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300 dark:hover:border-red-500/30 dark:hover:bg-red-500/10 dark:hover:text-red-400"
//           >
//             <RotateCcw size={17} />
//             Reset Defaults
//           </button>

//           <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
//             <AnimatePresence mode="wait">
//               {saved && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 5 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -5 }}
//                   className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
//                 >
//                   <CheckCircle2 size={17} />
//                   Settings saved!
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <button
//               type="submit"
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl hover:shadow-red-900/30 active:translate-y-0"
//             >
//               <Save size={18} />
//               Save Settings
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Reset Confirmation Modal */}
//       <AnimatePresence>
//         {showReset && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//             onClick={() => setShowReset(false)}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 15 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 15 }}
//               onClick={(e) => e.stopPropagation()}
//               className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//             >
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-[#C8102E]">
//                 <RotateCcw size={23} />
//               </div>

//               <h3 className="text-lg font-black text-gray-900 dark:text-white">
//                 Reset all settings?
//               </h3>

//               <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
//                 All current changes will be replaced with the default
//                 configuration. This action cannot be undone.
//               </p>

//               <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
//                 <button
//                   type="button"
//                   onClick={() => setShowReset(false)}
//                   className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="rounded-xl bg-[#C8102E] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#a50d25]"
//                 >
//                   Yes, Reset
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <p className="pb-2 text-center text-xs text-gray-400 dark:text-gray-500">
//         HINDUSTAN.DIGITAL · Admin Configuration
//       </p>
//     </div>
//   );
// }

// export default AdminSettings;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowLeft,
  Globe,
  Mail,
  Languages,
  MessageSquare,
  Save,
  RotateCcw,
  Settings,
  CheckCircle2,
  Sun,
  Moon,
  Monitor,
  Info,
  ShieldCheck,
  Sparkles,
  Search,
  Wrench,
  Loader2,
  AlertCircle,
  Upload,
  Image as ImageIcon,
  X,
} from "lucide-react";

import API from "../services/api";

/* =========================================================
   DEFAULT SETTINGS
========================================================= */

const DEFAULT_SETTINGS = {
  site_name: "HINDUSTAN.DIGITAL",
  tagline: "देश की खबर, देश की आवाज़",
  site_description:
    "HINDUSTAN.DIGITAL is a Hindi-first digital news and media platform.",

  contact_email: "contact@hindustan.digital",
  contact_phone: "9876543210",
  address: "",

  facebook_url: "https://www.facebook.com/",
  instagram_url: "https://www.instagram.com/",
  youtube_url: "https://www.youtube.com/",
  twitter_url: "https://x.com/",
  linkedin_url: "https://www.linkedin.com/",

  default_language: "hi",
  enable_comments: true,
  maintenance_mode: false,

  seo_title: "HINDUSTAN.DIGITAL | देश की खबर, देश की आवाज़",
  seo_description:
    "देश, दुनिया, राजनीति, बिजनेस, खेल और मनोरंजन की ताजा खबरें।",
  seo_keywords: "",
};

/* =========================================================
   LANGUAGES
========================================================= */

const LANGUAGES = [
  { value: "hi", label: "Hindi" },
  { value: "en", label: "English" },
  { value: "bn", label: "Bengali" },
  { value: "ur", label: "Urdu" },
  { value: "ta", label: "Tamil" },
  { value: "te", label: "Telugu" },
  { value: "mr", label: "Marathi" },
  { value: "gu", label: "Gujarati" },
  { value: "pa", label: "Punjabi" },
  { value: "or", label: "Odia" },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

/* =========================================================
   INPUT CLASS
========================================================= */

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/5 dark:border-white/10 dark:bg-[#111318] dark:text-white dark:focus:border-white/30";

/* =========================================================
   IMAGE UPLOAD CARD
========================================================= */

function ImageUploadCard({
  title,
  description,
  image,
  preview,
  inputRef,
  onSelect,
  onRemove,
  accept = "image/*",
}) {
  const displayImage = preview || image;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#111318]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
          <ImageIcon size={18} />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50 dark:border-white/10 dark:bg-black/20">
          {displayImage ? (
            <img
              src={displayImage}
              alt={title}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <ImageIcon size={26} />
              <span className="text-[10px]">No Image</span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={onSelect}
          />

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              <Upload size={15} />
              {displayImage ? "Change Image" : "Upload Image"}
            </button>

            {displayImage && (
              <button
                type="button"
                onClick={onRemove}
                className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-500/20 dark:hover:bg-red-500/10"
              >
                <X size={15} />
                Remove
              </button>
            )}
          </div>

          <p className="text-[11px] text-gray-400">
            JPG, PNG, WEBP • Maximum 5MB
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ADMIN SETTINGS
========================================================= */

function AdminSettings() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const [logo, setLogo] = useState("");
  const [favicon, setFavicon] = useState("");

  const [logoFile, setLogoFile] = useState(null);
  const [faviconFile, setFaviconFile] = useState(null);

  const [logoPreview, setLogoPreview] = useState("");
  const [faviconPreview, setFaviconPreview] = useState("");

  const [removeLogo, setRemoveLogo] = useState(false);
  const [removeFavicon, setRemoveFavicon] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [resetOpen, setResetOpen] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("admin_theme") || "system"
  );

  const logoInputRef = useRef(null);
  const faviconInputRef = useRef(null);

  /* =======================================================
     LOAD SETTINGS
  ======================================================= */

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("settings/");

      const data = response.data || {};

      setSettings({
        ...DEFAULT_SETTINGS,
        ...data,
      });

      setLogo(data.logo || "");
      setFavicon(data.favicon || "");
    } catch (err) {
      console.error("Settings fetch error:", err);

      setError(
        err?.response?.data?.detail ||
          "Unable to load website settings."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     HANDLE TEXT INPUT
  ======================================================= */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* =======================================================
     IMAGE VALIDATION
  ======================================================= */

  const validateImage = (file) => {
    if (!file) {
      return false;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB.");
      return false;
    }

    return true;
  };

  /* =======================================================
     LOGO SELECT
  ======================================================= */

  const handleLogoSelect = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!validateImage(file)) {
      e.target.value = "";
      return;
    }

    setError("");
    setMessage("");

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
    setRemoveLogo(false);
  };

  /* =======================================================
     FAVICON SELECT
  ======================================================= */

  const handleFaviconSelect = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!validateImage(file)) {
      e.target.value = "";
      return;
    }

    setError("");
    setMessage("");

    setFaviconFile(file);
    setFaviconPreview(URL.createObjectURL(file));
    setRemoveFavicon(false);
  };

  /* =======================================================
     REMOVE LOGO
  ======================================================= */

  const handleRemoveLogo = () => {
    setLogoFile(null);
    setLogoPreview("");
    setLogo("");
    setRemoveLogo(true);

    if (logoInputRef.current) {
      logoInputRef.current.value = "";
    }
  };

  /* =======================================================
     REMOVE FAVICON
  ======================================================= */

  const handleRemoveFavicon = () => {
    setFaviconFile(null);
    setFaviconPreview("");
    setFavicon("");
    setRemoveFavicon(true);

    if (faviconInputRef.current) {
      faviconInputRef.current.value = "";
    }
  };

  /* =======================================================
     THEME
  ======================================================= */

  const handleThemeChange = (value) => {
    setTheme(value);
    localStorage.setItem("admin_theme", value);

    if (value === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else if (value === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");

      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  /* =======================================================
     SAVE SETTINGS
  ======================================================= */

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");
      setMessage("");

      const formData = new FormData();

      Object.entries(settings).forEach(([key, value]) => {
        if (
          key !== "logo" &&
          key !== "favicon" &&
          value !== null &&
          value !== undefined
        ) {
          formData.append(key, value);
        }
      });

      /* Logo */

      if (logoFile) {
        formData.append("logo", logoFile);
      } else if (removeLogo) {
        formData.append("logo", "");
      }

      /* Favicon */

      if (faviconFile) {
        formData.append("favicon", faviconFile);
      } else if (removeFavicon) {
        formData.append("favicon", "");
      }

      const response = await API.patch("settings/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = response.data || {};

      setSettings({
        ...DEFAULT_SETTINGS,
        ...data,
      });

      setLogo(data.logo || "");
      setFavicon(data.favicon || "");

      setLogoFile(null);
      setFaviconFile(null);

      setLogoPreview("");
      setFaviconPreview("");

      setRemoveLogo(false);
      setRemoveFavicon(false);

      if (logoInputRef.current) {
        logoInputRef.current.value = "";
      }

      if (faviconInputRef.current) {
        faviconInputRef.current.value = "";
      }

      setMessage("Website settings saved successfully.");

      setTimeout(() => {
        setMessage("");
      }, 4000);
    } catch (err) {
      console.error("Settings save error:", err);

      const backendError = err?.response?.data;

      if (typeof backendError === "object") {
        const firstError = Object.values(backendError)?.[0];

        setError(
          Array.isArray(firstError)
            ? firstError[0]
            : firstError || "Unable to save settings."
        );
      } else {
        setError("Unable to save website settings.");
      }
    } finally {
      setSaving(false);
    }
  };

  /* =======================================================
     RESET SETTINGS
  ======================================================= */

  const handleReset = () => {
    setSettings(DEFAULT_SETTINGS);

    setLogoFile(null);
    setFaviconFile(null);

    setLogoPreview("");
    setFaviconPreview("");

    setRemoveLogo(false);
    setRemoveFavicon(false);

    setMessage("");
    setError("");

    if (logoInputRef.current) {
      logoInputRef.current.value = "";
    }

    if (faviconInputRef.current) {
      faviconInputRef.current.value = "";
    }

    setResetOpen(false);
  };

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0b0c0f]">
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2
              size={32}
              className="animate-spin text-gray-700 dark:text-white"
            />

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Loading website settings...
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     UI
  ======================================================= */

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="border-b border-gray-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#0b0c0f]/90">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Link
                to="/admin"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
              >
                <ArrowLeft size={18} />
              </Link>

              <div>
                <div className="flex items-center gap-2">
                  <Settings size={19} />

                  <h1 className="text-xl font-bold">
                    Website Settings
                  </h1>
                </div>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Manage your website configuration and preferences.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setResetOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-semibold transition hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
              >
                <RotateCcw size={15} />
                Reset
              </button>

              <button
                type="submit"
                form="settings-form"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black"
              >
                {saving ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={15} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <form
        id="settings-form"
        onSubmit={handleSave}
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        {/* SUCCESS */}

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-300"
            >
              <CheckCircle2 size={18} />
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ERROR */}

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0" />

              <div className="flex-1">
                {error}
              </div>

              <button
                type="button"
                onClick={() => setError("")}
              >
                <X size={17} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* =================================================
              MAIN SETTINGS
          ================================================= */}

          <div className="space-y-6 lg:col-span-2">
            {/* =================================================
                GENERAL
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-6 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <Globe size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    General Information
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Basic information displayed across the website.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    Site Name
                  </label>

                  <input
                    type="text"
                    name="site_name"
                    value={settings.site_name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="HINDUSTAN.DIGITAL"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    Tagline
                  </label>

                  <input
                    type="text"
                    name="tagline"
                    value={settings.tagline}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="देश की खबर, देश की आवाज़"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold">
                    Site Description
                  </label>

                  <textarea
                    name="site_description"
                    value={settings.site_description}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Describe your website..."
                  />
                </div>
              </div>
            </motion.section>

            {/* =================================================
                LOGO & FAVICON
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-6 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <ImageIcon size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Branding
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Upload your website logo and favicon.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <ImageUploadCard
                  title="Website Logo"
                  description="Main logo displayed on the website header and branding areas."
                  image={logo}
                  preview={logoPreview}
                  inputRef={logoInputRef}
                  onSelect={handleLogoSelect}
                  onRemove={handleRemoveLogo}
                />

                <ImageUploadCard
                  title="Website Favicon"
                  description="Small icon displayed in the browser tab."
                  image={favicon}
                  preview={faviconPreview}
                  inputRef={faviconInputRef}
                  onSelect={handleFaviconSelect}
                  onRemove={handleRemoveFavicon}
                />
              </div>
            </motion.section>

            {/* =================================================
                CONTACT
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-6 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <Mail size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Contact Information
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Contact details for your website.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    Contact Email
                  </label>

                  <input
                    type="email"
                    name="contact_email"
                    value={settings.contact_email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="contact@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    Contact Phone
                  </label>

                  <input
                    type="text"
                    name="contact_phone"
                    value={settings.contact_phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="9876543210"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold">
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={settings.address}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Website office address..."
                  />
                </div>
              </div>
            </motion.section>

            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-6 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <Globe size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Social Media
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Add your official social media profile links.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    Facebook URL
                  </label>

                  <input
                    type="url"
                    name="facebook_url"
                    value={settings.facebook_url}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://facebook.com/..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    Instagram URL
                  </label>

                  <input
                    type="url"
                    name="instagram_url"
                    value={settings.instagram_url}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://instagram.com/..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    YouTube URL
                  </label>

                  <input
                    type="url"
                    name="youtube_url"
                    value={settings.youtube_url}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://youtube.com/..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    X / Twitter URL
                  </label>

                  <input
                    type="url"
                    name="twitter_url"
                    value={settings.twitter_url}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://x.com/..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold">
                    LinkedIn URL
                  </label>

                  <input
                    type="url"
                    name="linkedin_url"
                    value={settings.linkedin_url}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://linkedin.com/..."
                  />
                </div>
              </div>
            </motion.section>

            {/* =================================================
                SEO
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-6 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <Search size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    SEO Settings
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Improve search engine visibility of your website.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    SEO Title
                  </label>

                  <input
                    type="text"
                    name="seo_title"
                    value={settings.seo_title}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Website SEO title"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    SEO Description
                  </label>

                  <textarea
                    name="seo_description"
                    value={settings.seo_description}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="SEO description..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold">
                    SEO Keywords
                  </label>

                  <textarea
                    name="seo_keywords"
                    value={settings.seo_keywords}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="news, india, politics, business..."
                  />
                </div>
              </div>
            </motion.section>
          </div>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <div className="space-y-6">
            {/* =================================================
                LANGUAGE
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-5 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <Languages size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Language
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Default website language.
                  </p>
                </div>
              </div>

              <select
                name="default_language"
                value={settings.default_language}
                onChange={handleChange}
                className={inputClass}
              >
                {LANGUAGES.map((language) => (
                  <option
                    key={language.value}
                    value={language.value}
                  >
                    {language.label}
                  </option>
                ))}
              </select>
            </motion.section>

            {/* =================================================
                WEBSITE OPTIONS
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-5 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <Wrench size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Website Options
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Control important website features.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Comments */}

                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 dark:border-white/10">
                  <div className="flex items-start gap-3">
                    <MessageSquare
                      size={18}
                      className="mt-0.5"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        Enable Comments
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-gray-500 dark:text-gray-400">
                        Allow users to comment on articles.
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    name="enable_comments"
                    checked={settings.enable_comments}
                    onChange={handleChange}
                    className="h-5 w-5 accent-black dark:accent-white"
                  />
                </label>

                {/* Maintenance */}

                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 dark:border-white/10">
                  <div className="flex items-start gap-3">
                    <Wrench
                      size={18}
                      className="mt-0.5"
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        Maintenance Mode
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-gray-500 dark:text-gray-400">
                        Temporarily show maintenance mode.
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    name="maintenance_mode"
                    checked={settings.maintenance_mode}
                    onChange={handleChange}
                    className="h-5 w-5 accent-black dark:accent-white"
                  />
                </label>
              </div>
            </motion.section>

            {/* =================================================
                THEME
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-5 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <Sun size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Admin Theme
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Choose dashboard appearance.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleThemeChange("light")}
                  className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3 text-xs font-semibold transition ${
                    theme === "light"
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                      : "border-gray-200 hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
                  }`}
                >
                  <Sun size={17} />
                  Light
                </button>

                <button
                  type="button"
                  onClick={() => handleThemeChange("dark")}
                  className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3 text-xs font-semibold transition ${
                    theme === "dark"
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                      : "border-gray-200 hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
                  }`}
                >
                  <Moon size={17} />
                  Dark
                </button>

                <button
                  type="button"
                  onClick={() => handleThemeChange("system")}
                  className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-3 text-xs font-semibold transition ${
                    theme === "system"
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                      : "border-gray-200 hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
                  }`}
                >
                  <Monitor size={17} />
                  System
                </button>
              </div>
            </motion.section>

            {/* =================================================
                SECURITY
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f1115]"
            >
              <div className="mb-5 flex items-start gap-3">
                <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <h2 className="font-bold">
                    Security
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Admin configuration security.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={18}
                    className="mt-0.5 shrink-0"
                  />

                  <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">
                    Website settings are protected and can be
                    updated only by authorized ADMIN or EDITOR
                    users.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* =================================================
                INFO
            ================================================= */}

            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 dark:border-white/10 dark:from-white/[0.04] dark:to-[#0f1115]"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-black p-2.5 text-white dark:bg-white dark:text-black">
                  <Sparkles size={18} />
                </div>

                <div>
                  <h2 className="font-bold">
                    HINDUSTAN.DIGITAL
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    Keep your website information, branding,
                    social profiles and SEO settings updated for
                    a better publishing experience.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* =================================================
                SAVE CARD
            ================================================= */}

            <button
              type="submit"
              disabled={saving}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-bold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black"
            >
              {saving ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Saving Settings...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Website Settings
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* =====================================================
          RESET MODAL
      ===================================================== */}

      <AnimatePresence>
        {resetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#111318]"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-gray-100 p-2.5 dark:bg-white/5">
                    <RotateCcw size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Reset Settings?
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                      This will reset the current form values
                      to the default frontend values.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setResetOpen(false)}
                  className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mb-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-500/20 dark:bg-yellow-500/10">
                <div className="flex gap-3">
                  <Info
                    size={18}
                    className="mt-0.5 shrink-0 text-yellow-600 dark:text-yellow-400"
                  />

                  <p className="text-xs leading-5 text-yellow-700 dark:text-yellow-300">
                    Existing logo and favicon files will not be
                    deleted just by resetting this form. Click
                    Save Changes only if you want to apply the
                    reset values to the server.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setResetOpen(false)}
                  className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-xs font-semibold transition hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 rounded-xl bg-black px-4 py-3 text-xs font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Reset
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminSettings;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowLeft,
//   Globe,
//   Mail,
//   Languages,
//   Radio,
//   MessageSquare,
//   Save,
//   RotateCcw,
//   Settings,
//   CheckCircle2,
//   Sun,
//   Moon,
//   Monitor,
//   Info,
//   ShieldCheck,
//   Sparkles,
//   Phone,
//   MapPin,
//   Facebook,
//   Instagram,
//   Youtube,
//   Linkedin,
//   Search,
//   Wrench,
//   Loader2,
//   AlertCircle,
// } from "lucide-react";

// import API from "../services/api";

// const DEFAULT_SETTINGS = {
//   site_name: "HINDUSTAN.DIGITAL",
//   tagline: "देश की खबर, देश की आवाज़",
//   site_description: "",
//   logo: null,
//   favicon: null,

//   contact_email: "contact@hindustan.digital",
//   contact_phone: "",
//   address: "",

//   facebook_url: "",
//   instagram_url: "",
//   youtube_url: "",
//   twitter_url: "",
//   linkedin_url: "",

//   default_language: "hi",
//   enable_comments: false,
//   maintenance_mode: false,

//   seo_title: "HINDUSTAN.DIGITAL",
//   seo_description: "",
//   seo_keywords: "",
// };

// const LANGUAGE_OPTIONS = [
//   { value: "hi", label: "Hindi" },
//   { value: "en", label: "English" },
//   { value: "bn", label: "Bengali" },
//   { value: "ur", label: "Urdu" },
//   { value: "ta", label: "Tamil" },
//   { value: "te", label: "Telugu" },
//   { value: "mr", label: "Marathi" },
//   { value: "gu", label: "Gujarati" },
//   { value: "pa", label: "Punjabi" },
//   { value: "or", label: "Odia" },
// ];

// function SectionCard({
//   icon: Icon,
//   title,
//   description,
//   children,
//   color = "red",
// }) {
//   const colors = {
//     red: "bg-red-500/10 text-[#C8102E]",
//     blue: "bg-blue-500/10 text-blue-500",
//     purple: "bg-purple-500/10 text-purple-500",
//     green: "bg-emerald-500/10 text-emerald-500",
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 14 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -2 }}
//       transition={{ duration: 0.25 }}
//       className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-white/10 dark:bg-[#15171c] dark:hover:border-white/20"
//     >
//       <div className="flex items-center gap-4 border-b border-gray-100 px-5 py-5 dark:border-white/10 sm:px-7">
//         <div className={`rounded-xl p-3 ${colors[color]}`}>
//           <Icon size={21} />
//         </div>

//         <div>
//           <h2 className="text-base font-extrabold text-gray-900 dark:text-white">
//             {title}
//           </h2>

//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       <div className="p-5 sm:p-7">{children}</div>
//     </motion.section>
//   );
// }

// function Field({
//   label,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   disabled = false,
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//         {label}
//       </label>

//       <input
//         type={type}
//         value={value ?? ""}
//         onChange={onChange}
//         placeholder={placeholder}
//         disabled={disabled}
//         className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#C8102E] focus:bg-white focus:ring-4 focus:ring-red-500/10 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:focus:bg-[#101216]"
//       />
//     </div>
//   );
// }

// function TextareaField({
//   label,
//   value,
//   onChange,
//   placeholder,
//   rows = 4,
// }) {
//   return (
//     <div>
//       <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//         {label}
//       </label>

//       <textarea
//         value={value ?? ""}
//         onChange={onChange}
//         placeholder={placeholder}
//         rows={rows}
//         className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#C8102E] focus:bg-white focus:ring-4 focus:ring-red-500/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:focus:bg-[#101216]"
//       />
//     </div>
//   );
// }

// function Toggle({ checked, onChange, disabled = false }) {
//   return (
//     <button
//       type="button"
//       role="switch"
//       aria-checked={checked}
//       disabled={disabled}
//       onClick={() => onChange(!checked)}
//       className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/15 disabled:cursor-not-allowed disabled:opacity-50 ${
//         checked ? "bg-[#C8102E]" : "bg-gray-300 dark:bg-gray-600"
//       }`}
//     >
//       <motion.span
//         animate={{ x: checked ? 22 : 4 }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 30,
//         }}
//         className="absolute left-0 top-1 h-5 w-5 rounded-full bg-white shadow-md"
//       />
//     </button>
//   );
// }

// function FeatureRow({
//   icon: Icon,
//   title,
//   description,
//   checked,
//   onChange,
//   disabled = false,
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <div className="flex min-w-0 items-start gap-3">
//         <div className="mt-0.5 rounded-lg bg-gray-100 p-2.5 text-gray-600 dark:bg-white/5 dark:text-gray-300">
//           <Icon size={19} />
//         </div>

//         <div>
//           <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//             {title}
//           </h3>

//           <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       <Toggle
//         checked={checked}
//         onChange={onChange}
//         disabled={disabled}
//       />
//     </div>
//   );
// }

// function AdminSettings() {
//   const [settings, setSettings] = useState(DEFAULT_SETTINGS);

//   const [theme, setTheme] = useState(
//     localStorage.getItem("admin_theme_preference") ||
//       "System Default"
//   );

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [saved, setSaved] = useState(false);

//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const [showReset, setShowReset] = useState(false);

//   const updateSetting = (key, value) => {
//     setSettings((previous) => ({
//       ...previous,
//       [key]: value,
//     }));

//     setSaved(false);
//     setSuccessMessage("");
//   };

//   const loadSettings = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await API.get("settings/");

//       setSettings((previous) => ({
//         ...previous,
//         ...response.data,
//       }));
//     } catch (err) {
//       console.error("Settings load error:", err);

//       setError(
//         err?.response?.data?.detail ||
//           "Unable to load website settings."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadSettings();
//   }, []);

//   const handleThemeChange = (value) => {
//     setTheme(value);

//     localStorage.setItem(
//       "admin_theme_preference",
//       value
//     );

//     setSaved(false);
//     setSuccessMessage("");
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();

//     try {
//       setSaving(true);
//       setSaved(false);
//       setError("");
//       setSuccessMessage("");

//       const payload = {
//         site_name: settings.site_name,
//         tagline: settings.tagline,
//         site_description: settings.site_description,

//         contact_email: settings.contact_email,
//         contact_phone: settings.contact_phone,
//         address: settings.address,

//         facebook_url: settings.facebook_url,
//         instagram_url: settings.instagram_url,
//         youtube_url: settings.youtube_url,
//         twitter_url: settings.twitter_url,
//         linkedin_url: settings.linkedin_url,

//         default_language: settings.default_language,
//         enable_comments: settings.enable_comments,
//         maintenance_mode: settings.maintenance_mode,

//         seo_title: settings.seo_title,
//         seo_description: settings.seo_description,
//         seo_keywords: settings.seo_keywords,
//       };

//       const response = await API.patch(
//         "settings/",
//         payload
//       );

//       setSettings((previous) => ({
//         ...previous,
//         ...response.data,
//       }));

//       setSaved(true);
//       setSuccessMessage("Settings saved successfully.");

//       setTimeout(() => {
//         setSaved(false);
//         setSuccessMessage("");
//       }, 3500);
//     } catch (err) {
//       console.error("Settings save error:", err);

//       const backendError = err?.response?.data;

//       if (backendError && typeof backendError === "object") {
//         const firstError = Object.values(backendError)
//           .flat()
//           .find(Boolean);

//         setError(
//           firstError ||
//             "Unable to save settings. Please try again."
//         );
//       } else {
//         setError(
//           "Unable to save settings. Please try again."
//         );
//       }
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleReset = async () => {
//     try {
//       setSaving(true);
//       setError("");
//       setSaved(false);
//       setSuccessMessage("");

//       const resetPayload = {
//         site_name: DEFAULT_SETTINGS.site_name,
//         tagline: DEFAULT_SETTINGS.tagline,
//         site_description: DEFAULT_SETTINGS.site_description,

//         contact_email: DEFAULT_SETTINGS.contact_email,
//         contact_phone: DEFAULT_SETTINGS.contact_phone,
//         address: DEFAULT_SETTINGS.address,

//         facebook_url: DEFAULT_SETTINGS.facebook_url,
//         instagram_url: DEFAULT_SETTINGS.instagram_url,
//         youtube_url: DEFAULT_SETTINGS.youtube_url,
//         twitter_url: DEFAULT_SETTINGS.twitter_url,
//         linkedin_url: DEFAULT_SETTINGS.linkedin_url,

//         default_language:
//           DEFAULT_SETTINGS.default_language,

//         enable_comments:
//           DEFAULT_SETTINGS.enable_comments,

//         maintenance_mode:
//           DEFAULT_SETTINGS.maintenance_mode,

//         seo_title: DEFAULT_SETTINGS.seo_title,
//         seo_description:
//           DEFAULT_SETTINGS.seo_description,
//         seo_keywords:
//           DEFAULT_SETTINGS.seo_keywords,
//       };

//       const response = await API.patch(
//         "settings/",
//         resetPayload
//       );

//       setSettings((previous) => ({
//         ...previous,
//         ...response.data,
//       }));

//       setTheme("System Default");
//       localStorage.setItem(
//         "admin_theme_preference",
//         "System Default"
//       );

//       setShowReset(false);
//       setSaved(true);
//       setSuccessMessage(
//         "Settings restored to defaults."
//       );

//       setTimeout(() => {
//         setSaved(false);
//         setSuccessMessage("");
//       }, 3500);
//     } catch (err) {
//       console.error("Settings reset error:", err);

//       setError(
//         "Unable to reset settings. Please try again."
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   const selectClass =
//     "w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#C8102E] focus:ring-4 focus:ring-red-500/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white";

//   return (
//     <div className="space-y-7 text-gray-900 dark:text-white">

//       {/* Page Heading */}
//       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <Link
//             to="/admin"
//             className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
//           >
//             <ArrowLeft size={16} />
//             Back to Dashboard
//           </Link>

//           <div className="flex items-center gap-3">
//             <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
//               <Settings size={23} />
//             </div>

//             <div>
//               <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                 Website Settings
//               </h1>

//               <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                 Manage your website preferences and configurations.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
//           <span className="h-2 w-2 rounded-full bg-emerald-500" />
//           Configuration Panel
//         </div>
//       </div>

//       {/* Loading */}
//       {loading && (
//         <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
//           <Loader2 size={18} className="animate-spin" />
//           Loading website settings...
//         </div>
//       )}

//       {/* Error */}
//       {error && (
//         <motion.div
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300"
//         >
//           <AlertCircle
//             size={19}
//             className="mt-0.5 shrink-0"
//           />

//           <div>
//             <p className="font-bold">
//               Settings Error
//             </p>

//             <p className="mt-1">
//               {error}
//             </p>
//           </div>
//         </motion.div>
//       )}

//       {/* Success */}
//       <AnimatePresence>
//         {successMessage && (
//           <motion.div
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
//           >
//             <CheckCircle2 size={19} />
//             {successMessage}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Information Banner */}
//       <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-white p-4 dark:border-red-500/15 dark:from-red-500/10 dark:to-[#15171c]">
//         <div className="rounded-lg bg-white p-2 text-[#C8102E] shadow-sm dark:bg-white/10">
//           <Sparkles size={19} />
//         </div>

//         <div>
//           <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//             Manage your digital newsroom
//           </h3>

//           <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
//             Customize your website identity, contact details,
//             language, reader experience and SEO settings from
//             one place.
//           </p>
//         </div>
//       </div>

//       <form
//         onSubmit={handleSave}
//         className="space-y-6"
//       >

//         {/* General Settings */}
//         <SectionCard
//           icon={Globe}
//           title="General Settings"
//           description="Manage your website identity and basic information."
//           color="red"
//         >
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//             <Field
//               label="Website Name"
//               value={settings.site_name}
//               onChange={(e) =>
//                 updateSetting(
//                   "site_name",
//                   e.target.value
//                 )
//               }
//               placeholder="Enter website name"
//             />

//             <Field
//               label="Website Tagline"
//               value={settings.tagline}
//               onChange={(e) =>
//                 updateSetting(
//                   "tagline",
//                   e.target.value
//                 )
//               }
//               placeholder="Enter website tagline"
//             />
//           </div>

//           <div className="mt-5">
//             <TextareaField
//               label="Website Description"
//               value={settings.site_description}
//               onChange={(e) =>
//                 updateSetting(
//                   "site_description",
//                   e.target.value
//                 )
//               }
//               placeholder="Enter a short description about your website"
//               rows={4}
//             />
//           </div>

//           <div className="mt-5 flex items-center gap-2 rounded-xl bg-gray-50 p-3 dark:bg-white/5">
//             <Info
//               size={16}
//               className="shrink-0 text-gray-400"
//             />

//             <p className="text-xs text-gray-500 dark:text-gray-400">
//               These website details are stored permanently
//               in the Django database.
//             </p>
//           </div>
//         </SectionCard>

//         {/* Contact Settings */}
//         <SectionCard
//           icon={Mail}
//           title="Contact Information"
//           description="Manage official website communication details."
//           color="blue"
//         >
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//             <Field
//               label="Official Contact Email"
//               type="email"
//               value={settings.contact_email}
//               onChange={(e) =>
//                 updateSetting(
//                   "contact_email",
//                   e.target.value
//                 )
//               }
//               placeholder="contact@example.com"
//             />

//             <Field
//               label="Contact Phone"
//               type="tel"
//               value={settings.contact_phone}
//               onChange={(e) =>
//                 updateSetting(
//                   "contact_phone",
//                   e.target.value
//                 )
//               }
//               placeholder="+91 XXXXX XXXXX"
//             />
//           </div>

//           <div className="mt-5">
//             <TextareaField
//               label="Office Address"
//               value={settings.address}
//               onChange={(e) =>
//                 updateSetting(
//                   "address",
//                   e.target.value
//                 )
//               }
//               placeholder="Enter office or registered address"
//               rows={3}
//             />
//           </div>

//           <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
//             These details can be used on the website contact
//             and footer sections.
//           </p>
//         </SectionCard>

//         {/* Social Media */}
//         <SectionCard
//           icon={Globe}
//           title="Social Media"
//           description="Add official social media profile links."
//           color="blue"
//         >
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//             <Field
//               label="Facebook URL"
//               value={settings.facebook_url}
//               onChange={(e) =>
//                 updateSetting(
//                   "facebook_url",
//                   e.target.value
//                 )
//               }
//               placeholder="https://facebook.com/..."
//             />

//             <Field
//               label="Instagram URL"
//               value={settings.instagram_url}
//               onChange={(e) =>
//                 updateSetting(
//                   "instagram_url",
//                   e.target.value
//                 )
//               }
//               placeholder="https://instagram.com/..."
//             />

//             <Field
//               label="YouTube URL"
//               value={settings.youtube_url}
//               onChange={(e) =>
//                 updateSetting(
//                   "youtube_url",
//                   e.target.value
//                 )
//               }
//               placeholder="https://youtube.com/..."
//             />

//             <Field
//               label="Twitter / X URL"
//               value={settings.twitter_url}
//               onChange={(e) =>
//                 updateSetting(
//                   "twitter_url",
//                   e.target.value
//                 )
//               }
//               placeholder="https://x.com/..."
//             />

//             <Field
//               label="LinkedIn URL"
//               value={settings.linkedin_url}
//               onChange={(e) =>
//                 updateSetting(
//                   "linkedin_url",
//                   e.target.value
//                 )
//               }
//               placeholder="https://linkedin.com/..."
//             />
//           </div>
//         </SectionCard>

//         {/* Language and Appearance */}
//         <SectionCard
//           icon={Languages}
//           title="Language & Appearance"
//           description="Choose your default website language and admin visual preference."
//           color="purple"
//         >
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Default Language
//               </label>

//               <div className="relative">
//                 <select
//                   value={
//                     settings.default_language
//                   }
//                   onChange={(e) =>
//                     updateSetting(
//                       "default_language",
//                       e.target.value
//                     )
//                   }
//                   className={selectClass}
//                 >
//                   {LANGUAGE_OPTIONS.map(
//                     (language) => (
//                       <option
//                         key={language.value}
//                         value={language.value}
//                       >
//                         {language.label}
//                       </option>
//                     )
//                   )}
//                 </select>

//                 <Languages
//                   size={17}
//                   className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
//                 Admin Theme Preference
//               </label>

//               <div className="relative">
//                 <select
//                   value={theme}
//                   onChange={(e) =>
//                     handleThemeChange(
//                       e.target.value
//                     )
//                   }
//                   className={selectClass}
//                 >
//                   <option>
//                     System Default
//                   </option>
//                   <option>Light</option>
//                   <option>Dark</option>
//                 </select>

//                 {theme === "Light" ? (
//                   <Sun
//                     size={17}
//                     className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                   />
//                 ) : theme === "Dark" ? (
//                   <Moon
//                     size={17}
//                     className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                   />
//                 ) : (
//                   <Monitor
//                     size={17}
//                     className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
//                   />
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="mt-5 flex items-start gap-2 rounded-xl bg-gray-50 p-3 dark:bg-white/5">
//             <Info
//               size={16}
//               className="mt-0.5 shrink-0 text-gray-400"
//             />

//             <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
//               Default Language is stored in the Django
//               database. Theme Preference is saved locally
//               because the current backend model does not
//               contain a theme field.
//             </p>
//           </div>
//         </SectionCard>

//         {/* Website Features */}
//         <SectionCard
//           icon={Settings}
//           title="Website Features"
//           description="Control the availability of reader-facing features."
//           color="green"
//         >
//           <div className="space-y-6">
//             <FeatureRow
//               icon={MessageSquare}
//               title="Article Comments"
//               description="Allow readers to comment on published articles."
//               checked={
//                 settings.enable_comments
//               }
//               onChange={(value) =>
//                 updateSetting(
//                   "enable_comments",
//                   value
//                 )
//               }
//               disabled={loading || saving}
//             />

//             <div className="h-px bg-gray-100 dark:bg-white/10" />

//             <FeatureRow
//               icon={Wrench}
//               title="Maintenance Mode"
//               description="Temporarily place the public website into maintenance mode."
//               checked={
//                 settings.maintenance_mode
//               }
//               onChange={(value) =>
//                 updateSetting(
//                   "maintenance_mode",
//                   value
//                 )
//               }
//               disabled={loading || saving}
//             />
//           </div>

//           <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/20 dark:bg-amber-500/10">
//             <p className="text-xs leading-relaxed text-amber-700 dark:text-amber-300">
//               Breaking News is managed separately through
//               the Breaking News management section. It is
//               not stored as a SiteSettings field in the
//               current backend model.
//             </p>
//           </div>
//         </SectionCard>

//         {/* SEO Settings */}
//         <SectionCard
//           icon={Search}
//           title="SEO Settings"
//           description="Manage search engine metadata for your website."
//           color="purple"
//         >
//           <div className="space-y-5">
//             <Field
//               label="SEO Title"
//               value={settings.seo_title}
//               onChange={(e) =>
//                 updateSetting(
//                   "seo_title",
//                   e.target.value
//                 )
//               }
//               placeholder="Enter SEO title"
//             />

//             <TextareaField
//               label="SEO Description"
//               value={settings.seo_description}
//               onChange={(e) =>
//                 updateSetting(
//                   "seo_description",
//                   e.target.value
//                 )
//               }
//               placeholder="Enter SEO description"
//               rows={4}
//             />

//             <TextareaField
//               label="SEO Keywords"
//               value={settings.seo_keywords}
//               onChange={(e) =>
//                 updateSetting(
//                   "seo_keywords",
//                   e.target.value
//                 )
//               }
//               placeholder="news, india news, latest news, hindustan digital"
//               rows={3}
//             />
//           </div>
//         </SectionCard>

//         {/* Security Note */}
//         <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-[#15171c]">
//           <ShieldCheck
//             size={20}
//             className="mt-0.5 shrink-0 text-emerald-500"
//           />

//           <div>
//             <h3 className="text-sm font-bold">
//               Settings & Security
//             </h3>

//             <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
//               Settings are protected by the Django backend.
//               Only authenticated ADMIN and EDITOR users can
//               update website configuration.
//             </p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
//           <button
//             type="button"
//             disabled={saving}
//             onClick={() => setShowReset(true)}
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-600 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-[#C8102E] disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300 dark:hover:border-red-500/30 dark:hover:bg-red-500/10 dark:hover:text-red-400"
//           >
//             <RotateCcw size={17} />
//             Reset Defaults
//           </button>

//           <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
//             <AnimatePresence mode="wait">
//               {saved && (
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     y: 5,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -5,
//                   }}
//                   className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
//                 >
//                   <CheckCircle2 size={17} />
//                   Settings saved!
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <button
//               type="submit"
//               disabled={saving || loading}
//               className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl hover:shadow-red-900/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
//             >
//               {saving ? (
//                 <>
//                   <Loader2
//                     size={18}
//                     className="animate-spin"
//                   />
//                   Saving...
//                 </>
//               ) : (
//                 <>
//                   <Save size={18} />
//                   Save Settings
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Reset Confirmation Modal */}
//       <AnimatePresence>
//         {showReset && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//             onClick={() => setShowReset(false)}
//           >
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.95,
//                 y: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 scale: 0.95,
//                 y: 15,
//               }}
//               onClick={(e) =>
//                 e.stopPropagation()
//               }
//               className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
//             >
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-[#C8102E]">
//                 <RotateCcw size={23} />
//               </div>

//               <h3 className="text-lg font-black text-gray-900 dark:text-white">
//                 Reset all settings?
//               </h3>

//               <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
//                 All current website settings will be
//                 replaced with the default configuration and
//                 saved to the database.
//               </p>

//               <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowReset(false)
//                   }
//                   disabled={saving}
//                   className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-bold text-gray-600 transition hover:bg-gray-100 disabled:opacity-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   disabled={saving}
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#a50d25] disabled:opacity-50"
//                 >
//                   {saving ? (
//                     <Loader2
//                       size={16}
//                       className="animate-spin"
//                     />
//                   ) : (
//                     <RotateCcw size={16} />
//                   )}

//                   Yes, Reset
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <p className="pb-2 text-center text-xs text-gray-400 dark:text-gray-500">
//         HINDUSTAN.DIGITAL · Admin Configuration
//       </p>
//     </div>
//   );
// }

// export default AdminSettings;