
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  Mail,
  Languages,
  Radio,
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
} from "lucide-react";

const DEFAULT_SETTINGS = {
  siteName: "HINDUSTAN.DIGITAL",
  tagline: "देश की खबर, देश की आवाज़",
  email: "contact@hindustan.digital",
  language: "Hindi",
  theme: "System Default",
  breakingNews: true,
  comments: false,
};

function SectionCard({ icon: Icon, title, description, children, color = "red" }) {
  const colors = {
    red: "bg-red-500/10 text-[#C8102E]",
    blue: "bg-blue-500/10 text-blue-500",
    purple: "bg-purple-500/10 text-purple-500",
    green: "bg-emerald-500/10 text-emerald-500",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-white/10 dark:bg-[#15171c] dark:hover:border-white/20"
    >
      <div className="flex items-center gap-4 border-b border-gray-100 px-5 py-5 sm:px-7 dark:border-white/10">
        <div className={`rounded-xl p-3 ${colors[color]}`}>
          <Icon size={21} />
        </div>

        <div>
          <h2 className="text-base font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-7">{children}</div>
    </motion.section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#C8102E] focus:bg-white focus:ring-4 focus:ring-red-500/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:focus:bg-[#101216]"
      />
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/15 ${
        checked ? "bg-[#C8102E]" : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <motion.span
        animate={{ x: checked ? 22 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute left-0 top-1 h-5 w-5 rounded-full bg-white shadow-md"
      />
    </button>
  );
}

function FeatureRow({ icon: Icon, title, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-start gap-3">
        <div className="mt-0.5 rounded-lg bg-gray-100 p-2.5 text-gray-600 dark:bg-white/5 dark:text-gray-300">
          <Icon size={19} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
}

function AdminSettings() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [saved, setSaved] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const updateSetting = (key, value) => {
    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));

    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  const handleReset = () => {
    setSettings({ ...DEFAULT_SETTINGS });
    setSaved(false);
    setShowReset(false);
  };

  const selectClass =
    "w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-[#C8102E] focus:ring-4 focus:ring-red-500/10 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white";

  return (
    <div className="space-y-7 text-gray-900 dark:text-white">

      {/* Page Heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            to="/admin"
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
              <Settings size={23} />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                Website Settings
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage your website preferences and configurations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Configuration Panel
        </div>
      </div>

      {/* Information Banner */}
      <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-white p-4 dark:border-red-500/15 dark:from-red-500/10 dark:to-[#15171c]">
        <div className="rounded-lg bg-white p-2 text-[#C8102E] shadow-sm dark:bg-white/10">
          <Sparkles size={19} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            Manage your digital newsroom
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
            Customize your website identity, contact details, language,
            appearance and reader experience from one place.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">

        {/* General Settings */}
        <SectionCard
          icon={Globe}
          title="General Settings"
          description="Manage your website identity and basic information."
          color="red"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              label="Website Name"
              value={settings.siteName}
              onChange={(e) => updateSetting("siteName", e.target.value)}
              placeholder="Enter website name"
            />

            <Field
              label="Website Tagline"
              value={settings.tagline}
              onChange={(e) => updateSetting("tagline", e.target.value)}
              placeholder="Enter website tagline"
            />
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-xl bg-gray-50 p-3 dark:bg-white/5">
            <Info size={16} className="shrink-0 text-gray-400" />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your website name and tagline are currently editable demo
              settings.
            </p>
          </div>
        </SectionCard>

        {/* Contact Settings */}
        <SectionCard
          icon={Mail}
          title="Contact Information"
          description="Manage official website communication details."
          color="blue"
        >
          <Field
            label="Official Contact Email"
            type="email"
            value={settings.email}
            onChange={(e) => updateSetting("email", e.target.value)}
            placeholder="contact@example.com"
          />

          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            This email is intended for official website enquiries.
          </p>
        </SectionCard>

        {/* Language and Appearance */}
        <SectionCard
          icon={Languages}
          title="Language & Appearance"
          description="Choose your default website language and visual theme."
          color="purple"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
                Default Language
              </label>

              <div className="relative">
                <select
                  value={settings.language}
                  onChange={(e) => updateSetting("language", e.target.value)}
                  className={selectClass}
                >
                  <option>Hindi</option>
                  <option>English</option>
                  <option>Bengali</option>
                  <option>Urdu</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Marathi</option>
                  <option>Gujarati</option>
                  <option>Punjabi</option>
                  <option>Odia</option>
                </select>
                <Languages
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
                Theme Preference
              </label>

              <div className="relative">
                <select
                  value={settings.theme}
                  onChange={(e) => updateSetting("theme", e.target.value)}
                  className={selectClass}
                >
                  <option>System Default</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
                {settings.theme === "Light" ? (
                  <Sun
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                ) : settings.theme === "Dark" ? (
                  <Moon
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                ) : (
                  <Monitor
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                )}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Website Features */}
        <SectionCard
          icon={Settings}
          title="Website Features"
          description="Control the availability of reader-facing features."
          color="green"
        >
          <div className="space-y-6">
            <FeatureRow
              icon={Radio}
              title="Breaking News Ticker"
              description="Display breaking news headlines on the homepage."
              checked={settings.breakingNews}
              onChange={(value) => updateSetting("breakingNews", value)}
            />

            <div className="h-px bg-gray-100 dark:bg-white/10" />

            <FeatureRow
              icon={MessageSquare}
              title="Article Comments"
              description="Allow readers to comment on published articles."
              checked={settings.comments}
              onChange={(value) => updateSetting("comments", value)}
            />
          </div>
        </SectionCard>

        {/* Security Note */}
        <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-[#15171c]">
          <ShieldCheck size={20} className="mt-0.5 shrink-0 text-emerald-500" />
          <div>
            <h3 className="text-sm font-bold">Settings & Security</h3>
            <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              Actual website-wide changes, permanent storage and access
              permissions will be handled securely through the Django backend.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <button
            type="button"
            onClick={() => setShowReset(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-600 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300 dark:hover:border-red-500/30 dark:hover:bg-red-500/10 dark:hover:text-red-400"
          >
            <RotateCcw size={17} />
            Reset Defaults
          </button>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <AnimatePresence mode="wait">
              {saved && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 size={17} />
                  Settings saved!
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-xl hover:shadow-red-900/30 active:translate-y-0"
            >
              <Save size={18} />
              Save Settings
            </button>
          </div>
        </div>
      </form>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {showReset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setShowReset(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#17191f]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-[#C8102E]">
                <RotateCcw size={23} />
              </div>

              <h3 className="text-lg font-black text-gray-900 dark:text-white">
                Reset all settings?
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                All current changes will be replaced with the default
                configuration. This action cannot be undone.
              </p>

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowReset(false)}
                  className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-bold text-gray-600 transition hover:bg-gray-100 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl bg-[#C8102E] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#a50d25]"
                >
                  Yes, Reset
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="pb-2 text-center text-xs text-gray-400 dark:text-gray-500">
        HINDUSTAN.DIGITAL · Admin Configuration
      </p>
    </div>
  );
}

export default AdminSettings;
