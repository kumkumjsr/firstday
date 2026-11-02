
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ImagePlus,
  Save,
  Send,
  FileText,
  X,
  Eye,
  PenLine,
  Clock3,
  Languages,
  FolderOpen,
  UserRound,
  CheckCircle2,
  AlignLeft,
  ArrowUpRight,
  Newspaper,
  Type,
} from "lucide-react";

const categories = [
  "देश",
  "दुनिया",
  "राजनीति",
  "बिजनेस",
  "खेल",
  "मनोरंजन",
  "टेक्नोलॉजी",
  "शिक्षा",
  "वीडियो",
];

const languages = [
  "Hindi",
  "English",
  "Bengali",
  "Urdu",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Punjabi",
  "Odia",
];

function FieldLabel({ children, required }) {
  return (
    <label className="mb-2 block text-sm font-bold text-gray-800 dark:text-gray-200">
      {children}
      {required && <span className="ml-1 text-[#C8102E]">*</span>}
    </label>
  );
}

function EditorCard({ icon: Icon, title, description, children }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-white/20">
      <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 dark:border-white/[0.07] sm:px-6">
        <div className="rounded-xl border border-[#C8102E]/10 bg-[#C8102E]/[0.07] p-3 text-[#C8102E]">
          <Icon size={20} />
        </div>
        <div>
          <h2 className="text-sm font-black text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        {children}
      </div>
    </section>
  );
}

function InputField({ label, required, ...props }) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        {...props}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:hover:border-white/20"
      />
    </div>
  );
}

function SelectField({ label, children, ...props }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select
        {...props}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
      >
        {children}
      </select>
    </div>
  );
}

function CreateArticle() {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    category: "",
    author: "",
    language: "Hindi",
    image: "",
    content: "",
  });

  const [preview, setPreview] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [notice, setNotice] = useState("");

  const wordCount = useMemo(() => {
    return formData.content.trim()
      ? formData.content.trim().split(/\s+/).length
      : 0;
  }, [formData.content]);

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (name === "image") {
      setImageError(false);
    }

    setNotice("");
  };

  const handleSubmit = (event, status) => {
    event.preventDefault();
    setNotice("");

    if (!formData.title.trim()) {
      setNotice("Please enter an article headline.");
      return;
    }

    if (status === "Published") {
      if (!formData.category) {
        setNotice("Please select an article category before publishing.");
        return;
      }

      if (!formData.content.trim()) {
        setNotice("Please write article content before publishing.");
        return;
      }
    }

    alert(
      status === "Draft"
        ? "Draft action selected. Backend connection is pending. Your article has not been saved yet."
        : "Publish action selected. Backend connection is pending. Your article has not been published yet."
    );
  };

  const previewImageValid = formData.image.trim() && !imageError;

  return (
    <main className="min-h-screen bg-gray-50/80 px-3 py-5 text-gray-900 dark:bg-[#0b0c0f] dark:text-white sm:px-5 sm:py-7 lg:px-7">

      <div className="mx-auto max-w-[1450px]">

        {/* Page Header */}
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Link
              to="/admin"
              className="mb-5 inline-flex items-center gap-2 text-xs font-bold text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
            >
              <ArrowLeft size={15} />
              Back to Overview
            </Link>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#C8102E] p-3 text-white shadow-lg shadow-[#C8102E]/20">
                <PenLine size={22} />
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Create New Article
                </h1>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                  Create, review and prepare your next news story.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setPreview(!preview);
              setNotice("");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-200"
          >
            {preview ? <PenLine size={17} /> : <Eye size={17} />}
            {preview ? "Back to Editor" : "Preview Article"}
          </button>
        </div>

        {/* Editor Stats */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              label: "Words Written",
              value: wordCount,
              icon: Type,
            },
            {
              label: "Characters",
              value: formData.content.length,
              icon: AlignLeft,
            },
            {
              label: "Reading Time",
              value: `${readingTime} min`,
              icon: Clock3,
            },
            {
              label: "Article Language",
              value: formData.language,
              icon: Languages,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#15171c]"
              >
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Icon size={15} className="text-[#C8102E]" />
                  <span className="text-[10px] font-semibold sm:text-xs">
                    {item.label}
                  </span>
                </div>

                <p className="mt-2 text-lg font-black text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Notice */}
        {notice && (
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
            <X size={17} className="mt-0.5 shrink-0" />
            {notice}
          </div>
        )}

        {preview ? (

          /* Article Preview */
          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/10 sm:px-8">
              <div className="flex items-center gap-2">
                <Eye size={17} className="text-[#C8102E]" />
                <span className="text-sm font-black">Article Preview</span>
              </div>

              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                Preview Mode
              </span>
            </div>

            <article className="mx-auto max-w-[850px] px-5 py-8 sm:px-10 sm:py-12">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
                  {formData.category || "Category"}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formData.language}
                </span>
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {formData.title || "Your article headline will appear here"}
              </h1>

              <p className="mt-5 text-base leading-8 text-gray-500 dark:text-gray-400 sm:text-lg">
                {formData.summary || "Your article summary will appear here."}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-gray-100 py-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
                <span className="flex items-center gap-1.5 font-bold text-gray-800 dark:text-gray-200">
                  <UserRound size={14} />
                  {formData.author || "Author"}
                </span>
                <span>·</span>
                <span>{wordCount} words</span>
                <span>·</span>
                <span>{readingTime} min read</span>
              </div>

              {previewImageValid && (
                <img
                  src={formData.image}
                  alt="Article cover"
                  className="mt-8 max-h-[480px] w-full rounded-2xl object-cover"
                />
              )}

              <div className="mt-8 whitespace-pre-wrap text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg">
                {formData.content || "Your complete article content will appear here."}
              </div>

              <div className="mt-10 border-t border-gray-100 pt-5 dark:border-white/10">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  HINDUSTAN.DIGITAL · देश की खबर, देश की आवाज़
                </p>
              </div>
            </article>
          </section>

        ) : (

          <form
            onSubmit={(event) => handleSubmit(event, "Published")}
            className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_330px]"
          >

            {/* Main Editor Column */}
            <div className="space-y-6">

              {/* Article Information */}
              <EditorCard
                icon={FileText}
                title="Article Information"
                description="Add your headline and the complete news story."
              >
                <InputField
                  label="Article Headline"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Write a clear and engaging news headline..."
                />

                <div>
                  <FieldLabel>Short Description</FieldLabel>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    rows={3}
                    maxLength={300}
                    placeholder="Write a short summary that explains the main story..."
                    className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
                  />
                  <p className="mt-2 text-right text-[10px] text-gray-400">
                    {formData.summary.length}/300 characters
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <FieldLabel required>Article Content</FieldLabel>
                    <span className="text-[10px] font-medium text-gray-400">
                      {wordCount} words · {readingTime} min read
                    </span>
                  </div>

                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={18}
                    placeholder="Start writing your complete news article here...

Write an engaging introduction.

Add the important facts and details of the story.

Keep paragraphs clear and easy to read."
                    className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm leading-8 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
                  />
                </div>
              </EditorCard>

              {/* Featured Image */}
              <EditorCard
                icon={ImagePlus}
                title="Featured Image"
                description="Add the main visual for your news article."
              >
                <div>
                  <FieldLabel>Image URL</FieldLabel>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/news-image.jpg"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
                  />
                  <p className="mt-2 text-[11px] text-gray-400">
                    Enter a publicly accessible image URL.
                  </p>
                </div>

                {formData.image && (
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">
                    {!imageError ? (
                      <img
                        src={formData.image}
                        alt="Featured article"
                        onError={() => setImageError(true)}
                        className="max-h-[350px] w-full object-cover"
                      />
                    ) : (
                      <div className="flex min-h-36 flex-col items-center justify-center gap-2 bg-gray-50 text-center dark:bg-[#0d0f13]">
                        <ImagePlus size={25} className="text-gray-400" />
                        <p className="text-xs font-semibold text-gray-500">
                          Image could not be loaded. Check the URL.
                        </p>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setFormData((previous) => ({
                          ...previous,
                          image: "",
                        }));
                        setImageError(false);
                      }}
                      className="absolute right-3 top-3 rounded-lg bg-black/75 p-2 text-white transition hover:bg-red-600"
                      aria-label="Remove image"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </EditorCard>
            </div>

            {/* Publishing Sidebar */}
            <aside className="space-y-6 xl:sticky xl:top-6">

              {/* Publishing Details */}
              <EditorCard
                icon={Newspaper}
                title="Publishing Details"
                description="Organize your article."
              >
                <SelectField
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </SelectField>

                <InputField
                  label="Author Name"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Enter author name"
                />

                <SelectField
                  label="Article Language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                >
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </SelectField>
              </EditorCard>

              {/* Publish Actions */}
              <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#15171c]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
                    <Send size={19} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black">Publish Article</h2>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Review before publishing.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(event) => handleSubmit(event, "Draft")}
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/50 hover:bg-[#C8102E]/[0.04] hover:text-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-gray-200"
                >
                  <Save size={17} />
                  Save as Draft
                </button>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/15 transition hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-[#C8102E]/25"
                >
                  <Send size={17} />
                  Publish Article
                  <ArrowUpRight size={15} />
                </button>

                <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-500/[0.07] p-3">
                  <Clock3 size={14} className="mt-0.5 shrink-0 text-amber-500" />
                  <p className="text-[10px] leading-5 text-gray-500 dark:text-gray-400">
                    Saving and publishing will become functional after Django backend integration.
                  </p>
                </div>
              </section>

              {/* Writing Checklist */}
              <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c]">
                <h3 className="mb-4 text-sm font-black">
                  Writing Checklist
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      label: "Headline added",
                      done: Boolean(formData.title.trim()),
                    },
                    {
                      label: "Category selected",
                      done: Boolean(formData.category),
                    },
                    {
                      label: "Summary written",
                      done: Boolean(formData.summary.trim()),
                    },
                    {
                      label: "Article content added",
                      done: Boolean(formData.content.trim()),
                    },
                    {
                      label: "Featured image added",
                      done: Boolean(previewImageValid),
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2
                        size={16}
                        className={
                          item.done
                            ? "text-emerald-500"
                            : "text-gray-300 dark:text-gray-600"
                        }
                      />
                      <span
                        className={`text-xs ${
                          item.done
                            ? "font-semibold text-gray-800 dark:text-gray-200"
                            : "text-gray-400"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <Link
                to="/admin/articles"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
              >
                <FolderOpen size={15} />
                View All Articles
              </Link>

            </aside>
          </form>
        )}

        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500">
          <CheckCircle2 size={13} />
          HINDUSTAN.DIGITAL · Newsroom Editor
        </div>
      </div>
    </main>
  );
}

export default CreateArticle;
