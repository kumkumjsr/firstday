import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

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
  LoaderCircle,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

import API from "../services/api";


/* =========================================================
   LANGUAGES
========================================================= */

const languages = [
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Bengali",
    value: "bn",
  },
  {
    label: "Urdu",
    value: "ur",
  },
  {
    label: "Tamil",
    value: "ta",
  },
  {
    label: "Telugu",
    value: "te",
  },
  {
    label: "Marathi",
    value: "mr",
  },
  {
    label: "Gujarati",
    value: "gu",
  },
  {
    label: "Punjabi",
    value: "pa",
  },
  {
    label: "Odia",
    value: "or",
  },
];


/* =========================================================
   INITIAL FORM
========================================================= */

const initialForm = {
  title: "",
  summary: "",
  category: "",
  language: "hi",
  content: "",
  is_featured: false,
  is_breaking: false,
};


/* =========================================================
   FIELD LABEL
========================================================= */

function FieldLabel({
  children,
  required,
}) {
  return (
    <label className="mb-2 block text-sm font-bold text-gray-800 dark:text-gray-200">
      {children}

      {required && (
        <span className="ml-1 text-[#C8102E]">
          *
        </span>
      )}
    </label>
  );
}


/* =========================================================
   EDITOR CARD
========================================================= */

function EditorCard({
  icon: Icon,
  title,
  description,
  children,
}) {
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


/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  required,
  ...props
}) {
  return (
    <div>

      <FieldLabel required={required}>
        {label}
      </FieldLabel>

      <input
        {...props}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:hover:border-white/20"
      />

    </div>
  );
}


/* =========================================================
   SELECT FIELD
========================================================= */

function SelectField({
  label,
  children,
  ...props
}) {
  return (
    <div>

      <FieldLabel>
        {label}
      </FieldLabel>

      <select
        {...props}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
      >
        {children}
      </select>

    </div>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

function CreateArticle() {

  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const editId =
    searchParams.get("edit");

  const isEditMode =
    Boolean(editId);


  /* =======================================================
     FORM STATE
  ======================================================= */

  const [formData, setFormData] =
    useState(initialForm);


  /* =======================================================
     CATEGORY STATE
  ======================================================= */

  const [categories, setCategories] =
    useState([]);

  const [categoryLoading, setCategoryLoading] =
    useState(true);

  const [categoryError, setCategoryError] =
    useState("");


  /* =======================================================
     IMAGE STATE
  ======================================================= */

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [existingImage, setExistingImage] =
    useState("");

  const [imagePreview, setImagePreview] =
    useState("");

  const [imageUrl, setImageUrl] =
    useState("");


  /* =======================================================
     PAGE STATE
  ======================================================= */

  const [preview, setPreview] =
    useState(false);

  const [notice, setNotice] =
    useState("");

  const [noticeType, setNoticeType] =
    useState("error");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);


  /* =======================================================
     WORD COUNT
  ======================================================= */

  const wordCount = useMemo(() => {

    return formData.content.trim()
      ? formData.content
          .trim()
          .split(/\s+/)
          .length
      : 0;

  }, [
    formData.content,
  ]);


  const readingTime =
    Math.max(
      1,
      Math.ceil(wordCount / 200)
    );


  /* =======================================================
     LOAD CATEGORIES
  ======================================================= */

  const loadCategories =
    useCallback(
      async (
        currentArticleCategory = ""
      ) => {

        try {

          setCategoryLoading(true);

          setCategoryError("");

          const response =
            await API.get(
              "categories/"
            );

          const responseData =
            response.data;

          const categoryList =
            Array.isArray(responseData)
              ? responseData
              : Array.isArray(
                    responseData?.results
                )
                ? responseData.results
                : [];

          const filteredCategories =
            categoryList.filter(
              (category) =>
                category.is_active !== false ||
                String(category.id) ===
                  String(
                    currentArticleCategory
                  )
            );

          setCategories(
            filteredCategories
          );

        } catch (error) {

          console.error(
            "Category loading error:",
            error
          );

          setCategoryError(
            error.response?.data?.detail ||
              "Unable to load categories. Please try again."
          );

          setCategories([]);

        } finally {

          setCategoryLoading(false);

        }

      },
      []
    );


  /* =======================================================
     LOAD ARTICLE
  ======================================================= */

  const loadArticle =
    useCallback(
      async () => {

        if (!isEditMode) {
          return null;
        }

        try {

          const response =
            await API.get(
              `articles/${editId}/`
            );

          const article =
            response.data;

          setFormData({
            title:
              article.title || "",

            summary:
              article.excerpt ||
              article.subtitle ||
              "",

            category:
              String(
                article.category || ""
              ),

            language:
              article.language || "hi",

            content:
              article.content || "",

            is_featured:
              Boolean(
                article.is_featured
              ),

            is_breaking:
              Boolean(
                article.is_breaking
              ),
          });


          const articleImage =
            article.featured_image ||
            "";


          setExistingImage(
            articleImage
          );

          setImagePreview(
            articleImage
          );


          if (
            articleImage &&
            typeof articleImage ===
              "string" &&
            /^https?:\/\//i.test(
              articleImage
            )
          ) {

            setImageUrl(
              articleImage
            );

          } else {

            setImageUrl("");

          }


          return article;

        } catch (error) {

          console.error(
            "Article loading error:",
            error
          );

          throw new Error(
            error.response?.data?.detail ||
              "Unable to load article. Please refresh the page."
          );

        }

      },
      [
        editId,
        isEditMode,
      ]
    );


  /* =======================================================
     LOAD EDITOR DATA
  ======================================================= */

  const loadEditorData =
    useCallback(
      async () => {

        setLoading(true);

        setNotice("");

        try {

          const article =
            await loadArticle();

          await loadCategories(
            article?.category || ""
          );

        } catch (error) {

          setNotice(
            error.message
          );

          setNoticeType(
            "error"
          );

          await loadCategories();

        } finally {

          setLoading(false);

        }

      },
      [
        loadArticle,
        loadCategories,
      ]
    );


  useEffect(() => {

    loadEditorData();

  }, [
    loadEditorData,
  ]);


  /* =======================================================
     CLEANUP IMAGE PREVIEW
  ======================================================= */

  useEffect(() => {

    return () => {

      if (
        imagePreview?.startsWith(
          "blob:"
        )
      ) {

        URL.revokeObjectURL(
          imagePreview
        );

      }

    };

  }, [
    imagePreview,
  ]);


  /* =======================================================
     HANDLE FORM CHANGE
  ======================================================= */

  const handleChange =
    (event) => {

      const {
        name,
        value,
        type,
        checked,
      } = event.target;

      setFormData(
        (previous) => ({
          ...previous,

          [name]:
            type === "checkbox"
              ? checked
              : value,
        })
      );

      setNotice("");

    };


  /* =======================================================
     IMAGE FILE CHANGE
  ======================================================= */

  const handleImageChange =
    (event) => {

      const file =
        event.target.files?.[0];

      if (!file) {
        return;
      }


      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
      ];


      if (
        !allowedTypes.includes(
          file.type
        )
      ) {

        setNotice(
          "Please select a JPG, PNG, WEBP or GIF image."
        );

        setNoticeType(
          "error"
        );

        event.target.value = "";

        return;
      }


      if (
        file.size >
        20 * 1024 * 1024
      ) {

        setNotice(
          "Image size must be less than 20 MB."
        );

        setNoticeType(
          "error"
        );

        event.target.value = "";

        return;
      }


      /* Remove URL */

      setImageUrl("");

      setExistingImage("");


      /* Store file */

      setSelectedImage(
        file
      );


      /* Preview */

      const previewUrl =
        URL.createObjectURL(
          file
        );

      setImagePreview(
        previewUrl
      );

      setNotice("");

    };


  /* =======================================================
     IMAGE URL CHANGE
  ======================================================= */

  const handleImageUrlChange =
    (event) => {

      const value =
        event.target.value;


      setImageUrl(
        value
      );


      /* URL entered means file is removed */

      setSelectedImage(
        null
      );

      setExistingImage("");


      if (!value.trim()) {

        setImagePreview("");

        setNotice("");

        return;
      }


      if (
        !/^https?:\/\/.+/i.test(
          value.trim()
        )
      ) {

        setImagePreview("");

        setNotice(
          "Please enter a valid image URL starting with http:// or https://"
        );

        setNoticeType(
          "error"
        );

        return;
      }


      setImagePreview(
        value.trim()
      );

      setNotice("");

    };


  /* =======================================================
     REMOVE IMAGE
  ======================================================= */

  const removeImage =
    () => {

      setSelectedImage(
        null
      );

      setExistingImage(
        ""
      );

      setImagePreview(
        ""
      );

      setImageUrl(
        ""
      );

      setNotice("");

    };


  /* =======================================================
     SUBMIT ARTICLE
  ======================================================= */

  const handleSubmit =
    async (
      event,
      status
    ) => {

      event.preventDefault();


      if (saving) {
        return;
      }


      setNotice("");


      /* =====================================================
         VALIDATION
      ===================================================== */

      if (
        !formData.title.trim()
      ) {

        setNotice(
          "Please enter an article headline."
        );

        setNoticeType(
          "error"
        );

        return;
      }


      if (
        !formData.category
      ) {

        setNotice(
          "Please select an article category."
        );

        setNoticeType(
          "error"
        );

        return;
      }


      if (
        !formData.content.trim()
      ) {

        setNotice(
          "Please write article content."
        );

        setNoticeType(
          "error"
        );

        return;
      }


      if (
        imageUrl.trim() &&
        !/^https?:\/\/.+/i.test(
          imageUrl.trim()
        )
      ) {

        setNotice(
          "Please enter a valid image URL starting with http:// or https://"
        );

        setNoticeType(
          "error"
        );

        return;
      }


      try {

        setSaving(true);


        /* =================================================
           COMMON DATA
        ================================================= */

        const articleData = {
          title:
            formData.title.trim(),

          excerpt:
            formData.summary.trim(),

          subtitle:
            formData.summary.trim(),

          content:
            formData.content,

          category:
            formData.category,

          language:
            formData.language,

          status:
            status,

          is_featured:
            formData.is_featured,

          is_breaking:
            formData.is_breaking,
        };


        let response;


        /* =================================================
           LOCAL FILE
           
           Use multipart/form-data
        ================================================= */

        if (
          selectedImage instanceof File
        ) {

          const formPayload =
            new FormData();


          Object.entries(
            articleData
          ).forEach(
            ([key, value]) => {

              formPayload.append(
                key,
                String(value)
              );

            }
          );


          formPayload.append(
            "featured_image",
            selectedImage
          );


          if (isEditMode) {

            console.log(
              "PATCH:",
              `articles/${editId}/`
            );

            response =
              await API.patch(
                `articles/${editId}/`,
                formPayload
              );

          } else {

            console.log(
              "POST:",
              "articles/"
            );

            response =
              await API.post(
                "articles/",
                formPayload
              );

          }

        }

        /* =================================================
           EXTERNAL IMAGE URL / NO IMAGE
           
           Use JSON
        ================================================= */

        else {

          const jsonPayload = {
            ...articleData,
          };


          if (
            imageUrl.trim()
          ) {

            jsonPayload.featured_image =
              imageUrl.trim();

          }


          if (isEditMode) {

            console.log(
              "PATCH:",
              `articles/${editId}/`
            );

            console.log(
              "Payload:",
              jsonPayload
            );

            response =
              await API.patch(
                `articles/${editId}/`,
                jsonPayload
              );

          } else {

            console.log(
              "POST:",
              "articles/"
            );

            console.log(
              "Payload:",
              jsonPayload
            );

            response =
              await API.post(
                "articles/",
                jsonPayload
              );

          }

        }


        /* =================================================
           SUCCESS
        ================================================= */

        console.log(
          "Article saved:",
          response.data
        );


        setNoticeType(
          "success"
        );


        setNotice(
          status === "DRAFT"
            ? "Article saved as draft successfully!"
            : isEditMode
              ? "Article updated and published successfully!"
              : "Article published successfully!"
        );


        setTimeout(() => {

          navigate(
            "/admin/articles"
          );

        }, 900);


      } catch (error) {

        console.error(
          "========== ARTICLE SAVE ERROR =========="
        );

        console.error(
          "Status:",
          error.response?.status
        );

        console.error(
          "URL:",
          error.config?.url
        );

        console.error(
          "Method:",
          error.config?.method
        );

        console.error(
          "Response:",
          error.response?.data
        );

        console.error(
          "Full Error:",
          error
        );


        const responseData =
          error.response?.data;


        let message =
          "Unable to save article. Please try again.";


        /* =================================================
           404
        ================================================= */

        if (
          error.response?.status ===
          404
        ) {

          message =
            `API endpoint not found: ${
              error.config?.method
                ?.toUpperCase() || ""
            } ${
              error.config?.url || ""
            }`;

        }


        /* =================================================
           DETAIL ERROR
        ================================================= */

        else if (
          responseData?.detail
        ) {

          message =
            responseData.detail;

        }


        /* =================================================
           FIELD ERROR
        ================================================= */

        else if (
          responseData &&
          typeof responseData ===
            "object"
        ) {

          const firstError =
            Object.entries(
              responseData
            )[0];


          if (firstError) {

            const [
              field,
              value,
            ] = firstError;


            message =
              `${field}: ${
                Array.isArray(value)
                  ? value.join(
                      ", "
                    )
                  : String(value)
              }`;

          }

        }


        setNotice(
          message
        );

        setNoticeType(
          "error"
        );

      } finally {

        setSaving(false);

      }

    };


  /* =======================================================
     SELECTED CATEGORY
  ======================================================= */

  const selectedCategory =
    categories.find(
      (category) =>
        String(category.id) ===
        String(
          formData.category
        )
    );


  /* =======================================================
     SELECTED LANGUAGE
  ======================================================= */

  const selectedLanguage =
    languages.find(
      (item) =>
        item.value ===
        formData.language
    );


  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {

    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 text-gray-900 dark:bg-[#0b0c0f] dark:text-white">

        <div className="text-center">

          <LoaderCircle
            size={35}
            className="mx-auto animate-spin text-[#C8102E]"
          />

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Loading article editor...
          </p>

        </div>

      </main>
    );
  }


  /* =======================================================
     MAIN UI
  ======================================================= */

  return (
    <main className="min-h-screen bg-gray-50/80 px-3 py-5 text-gray-900 dark:bg-[#0b0c0f] dark:text-white sm:px-5 sm:py-7 lg:px-7">

      <div className="mx-auto max-w-[1450px]">

        {/* =================================================
            HEADER
        ================================================= */}

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
                  {isEditMode
                    ? "Edit Article"
                    : "Create New Article"}
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

              setPreview(
                !preview
              );

              setNotice("");

            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-200"
          >

            {preview ? (
              <PenLine size={17} />
            ) : (
              <Eye size={17} />
            )}

            {preview
              ? "Back to Editor"
              : "Preview Article"}

          </button>

        </div>


        {/* =================================================
            STATS
        ================================================= */}

        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

          {[
            {
              label: "Words Written",
              value: wordCount,
              icon: Type,
            },
            {
              label: "Characters",
              value:
                formData.content.length,
              icon: AlignLeft,
            },
            {
              label: "Reading Time",
              value:
                `${readingTime} min`,
              icon: Clock3,
            },
            {
              label: "Article Language",
              value:
                selectedLanguage?.label ||
                "Hindi",
              icon: Languages,
            },
          ].map((item) => {

            const Icon =
              item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#15171c]"
              >

                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">

                  <Icon
                    size={15}
                    className="text-[#C8102E]"
                  />

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


        {/* =================================================
            NOTICE
        ================================================= */}

        {notice && (
          <div
            className={`mb-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
              noticeType === "success"
                ? "border-green-500/20 bg-green-500/[0.06] text-green-600 dark:text-green-400"
                : "border-red-500/20 bg-red-500/[0.06] text-red-600 dark:text-red-400"
            }`}
          >

            {noticeType ===
            "success" ? (
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0"
              />
            ) : (
              <AlertCircle
                size={17}
                className="mt-0.5 shrink-0"
              />
            )}

            <span>
              {notice}
            </span>

          </div>
        )}


        {/* =================================================
            CATEGORY ERROR
        ================================================= */}

        {categoryError && (
          <div className="mb-5 flex flex-col gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-3 text-amber-700 dark:text-amber-400">

              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0"
              />

              <div>

                <p className="text-sm font-bold">
                  Category loading problem
                </p>

                <p className="mt-1 text-xs">
                  {categoryError}
                </p>

              </div>

            </div>


            <button
              type="button"
              onClick={() =>
                loadCategories(
                  formData.category
                )
              }
              disabled={
                categoryLoading
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-amber-500/30 px-4 py-2 text-xs font-bold text-amber-700 transition hover:bg-amber-500/10 disabled:opacity-50 dark:text-amber-400"
            >

              {categoryLoading ? (
                <LoaderCircle
                  size={14}
                  className="animate-spin"
                />
              ) : (
                <RefreshCw
                  size={14}
                />
              )}

              Retry

            </button>

          </div>
        )}


        {/* =================================================
            PREVIEW
        ================================================= */}

        {preview ? (

          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">

            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/10 sm:px-8">

              <div className="flex items-center gap-2">

                <Eye
                  size={17}
                  className="text-[#C8102E]"
                />

                <span className="text-sm font-black">
                  Article Preview
                </span>

              </div>


              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                Preview Mode
              </span>

            </div>


            <article className="mx-auto max-w-[850px] px-5 py-8 sm:px-10 sm:py-12">

              <div className="mb-5 flex flex-wrap items-center gap-3">

                <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
                  {selectedCategory?.name ||
                    "Category"}
                </span>


                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {selectedLanguage?.label ||
                    "Hindi"}
                </span>

              </div>


              <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {formData.title ||
                  "Your article headline will appear here"}
              </h1>


              <p className="mt-5 text-base leading-8 text-gray-500 dark:text-gray-400 sm:text-lg">
                {formData.summary ||
                  "Your article summary will appear here."}
              </p>


              <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-gray-100 py-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">

                <span className="flex items-center gap-1.5 font-bold text-gray-800 dark:text-gray-200">

                  <UserRound
                    size={14}
                  />

                  Logged-in Author

                </span>

                <span>
                  ·
                </span>

                <span>
                  {wordCount} words
                </span>

                <span>
                  ·
                </span>

                <span>
                  {readingTime} min read
                </span>

              </div>


              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Article cover"
                  className="mt-8 max-h-[480px] w-full rounded-2xl object-cover"
                />
              )}


              <div className="mt-8 whitespace-pre-wrap text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg">
                {formData.content ||
                  "Your complete article content will appear here."}
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
            onSubmit={(event) =>
              handleSubmit(
                event,
                "PUBLISHED"
              )
            }
            className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_330px]"
          >

            {/* =================================================
                MAIN COLUMN
            ================================================= */}

            <div className="space-y-6">

              {/* ARTICLE INFORMATION */}

              <EditorCard
                icon={FileText}
                title="Article Information"
                description="Add your headline and the complete news story."
              >

                <InputField
                  label="Article Headline"
                  name="title"
                  value={
                    formData.title
                  }
                  onChange={
                    handleChange
                  }
                  required
                  placeholder="Write a clear and engaging news headline..."
                />


                <div>

                  <FieldLabel>
                    Short Description
                  </FieldLabel>


                  <textarea
                    name="summary"
                    value={
                      formData.summary
                    }
                    onChange={
                      handleChange
                    }
                    rows={3}
                    maxLength={300}
                    placeholder="Write a short summary that explains the main story..."
                    className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
                  />


                  <p className="mt-2 text-right text-[10px] text-gray-400">
                    {
                      formData.summary.length
                    }
                    /300 characters
                  </p>

                </div>


                <div>

                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">

                    <FieldLabel required>
                      Article Content
                    </FieldLabel>


                    <span className="text-[10px] font-medium text-gray-400">
                      {wordCount} words ·{" "}
                      {readingTime} min read
                    </span>

                  </div>


                  <textarea
                    name="content"
                    value={
                      formData.content
                    }
                    onChange={
                      handleChange
                    }
                    rows={18}
                    required
                    placeholder={`Start writing your complete news article here...

Write an engaging introduction.

Add the important facts and details of the story.

Keep paragraphs clear and easy to read.`}
                    className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm leading-8 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
                  />

                </div>

              </EditorCard>


              {/* =================================================
                  FEATURED IMAGE
              ================================================= */}

              <EditorCard
                icon={ImagePlus}
                title="Featured Image"
                description="Upload the main visual or use an external image URL."
              >

                <div className="space-y-5">

                  {/* IMAGE URL */}

                  <div>

                    <FieldLabel>
                      Image URL
                    </FieldLabel>


                    <input
                      type="url"
                      value={
                        imageUrl
                      }
                      onChange={
                        handleImageUrlChange
                      }
                      placeholder="https://example.com/news-image.jpg"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:hover:border-white/20"
                    />


                    <p className="mt-2 text-[11px] leading-5 text-gray-400">
                      Paste a direct image URL starting with http:// or https://
                    </p>

                  </div>


                  {/* DIVIDER */}

                  <div className="flex items-center gap-3">

                    <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />

                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      OR
                    </span>

                    <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />

                  </div>


                  {/* UPLOAD */}

                  <div>

                    <FieldLabel>
                      Upload Image
                    </FieldLabel>


                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-9 text-center transition hover:border-[#C8102E]/50 hover:bg-[#C8102E]/[0.03] dark:border-white/10 dark:bg-[#0d0f13] dark:hover:border-[#C8102E]/50">

                      <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
                        <ImagePlus
                          size={25}
                        />
                      </div>


                      <p className="mt-3 text-sm font-bold text-gray-800 dark:text-gray-200">
                        Click to upload an image
                      </p>


                      <p className="mt-1 text-xs text-gray-400">
                        JPG, PNG, WEBP or GIF · Maximum 20 MB
                      </p>


                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={
                          handleImageChange
                        }
                        className="hidden"
                      />

                    </label>

                  </div>


                  {/* IMAGE PREVIEW */}

                  {imagePreview && (

                    <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">

                      <img
                        src={
                          imagePreview
                        }
                        alt="Featured article"
                        className="max-h-[350px] w-full object-cover"
                        onError={() => {

                          setNotice(
                            "Unable to load this image. Please check the image URL."
                          );

                          setNoticeType(
                            "error"
                          );

                        }}
                      />


                      <button
                        type="button"
                        onClick={
                          removeImage
                        }
                        className="absolute right-3 top-3 rounded-lg bg-black/75 p-2 text-white transition hover:bg-red-600"
                        aria-label="Remove image"
                      >
                        <X size={16} />
                      </button>


                      <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2 text-xs text-white">

                        {selectedImage
                          ? selectedImage.name
                          : imageUrl
                            ? "External image URL"
                            : "Current featured image"}

                      </div>

                    </div>

                  )}

                </div>

              </EditorCard>

            </div>


            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="space-y-6 xl:sticky xl:top-6">

              {/* PUBLISHING DETAILS */}

              <EditorCard
                icon={Newspaper}
                title="Publishing Details"
                description="Organize your article."
              >

                {/* CATEGORY */}

                <div>

                  <div className="mb-2 flex items-center justify-between gap-2">

                    <FieldLabel>
                      Category
                    </FieldLabel>


                    <button
                      type="button"
                      onClick={() =>
                        loadCategories(
                          formData.category
                        )
                      }
                      disabled={
                        categoryLoading
                      }
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C8102E] transition hover:underline disabled:opacity-50"
                    >

                      {categoryLoading ? (
                        <LoaderCircle
                          size={12}
                          className="animate-spin"
                        />
                      ) : (
                        <RefreshCw
                          size={12}
                        />
                      )}

                      Refresh

                    </button>

                  </div>


                  <select
                    name="category"
                    value={
                      formData.category
                    }
                    onChange={
                      handleChange
                    }
                    disabled={
                      categoryLoading &&
                      categories.length ===
                        0
                    }
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
                  >

                    <option value="">
                      {categoryLoading
                        ? "Loading categories..."
                        : categories.length ===
                            0
                          ? "No categories available"
                          : "Select Category"}
                    </option>


                    {categories.map(
                      (
                        category
                      ) => (

                        <option
                          key={
                            category.id
                          }
                          value={String(
                            category.id
                          )}
                        >
                          {
                            category.name
                          }
                        </option>

                      )
                    )}

                  </select>


                  {categoryError && (
                    <p className="mt-2 text-[11px] text-red-500">
                      {
                        categoryError
                      }
                    </p>
                  )}


                  {!categoryLoading &&
                    !categoryError &&
                    categories.length ===
                      0 && (
                      <p className="mt-2 text-[11px] text-gray-400">
                        Please create a category from Manage Categories.
                      </p>
                    )}

                </div>


                {/* LANGUAGE */}

                <SelectField
                  label="Article Language"
                  name="language"
                  value={
                    formData.language
                  }
                  onChange={
                    handleChange
                  }
                >

                  {languages.map(
                    (
                      language
                    ) => (

                      <option
                        key={
                          language.value
                        }
                        value={
                          language.value
                        }
                      >
                        {
                          language.label
                        }
                      </option>

                    )
                  )}

                </SelectField>


                {/* OPTIONS */}

                <div className="space-y-3">

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-[#C8102E]/40 dark:border-white/10">

                    <input
                      type="checkbox"
                      name="is_featured"
                      checked={
                        formData.is_featured
                      }
                      onChange={
                        handleChange
                      }
                      className="h-4 w-4 accent-[#C8102E]"
                    />

                    <span className="text-xs font-semibold">
                      Featured Article
                    </span>

                  </label>


                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-[#C8102E]/40 dark:border-white/10">

                    <input
                      type="checkbox"
                      name="is_breaking"
                      checked={
                        formData.is_breaking
                      }
                      onChange={
                        handleChange
                      }
                      className="h-4 w-4 accent-[#C8102E]"
                    />

                    <span className="text-xs font-semibold">
                      Breaking News
                    </span>

                  </label>

                </div>

              </EditorCard>


              {/* =================================================
                  PUBLISH ACTIONS
              ================================================= */}

              <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#15171c]">

                <div className="mb-5 flex items-center gap-3">

                  <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
                    <Send size={19} />
                  </div>


                  <div>

                    <h2 className="text-sm font-black">
                      {isEditMode
                        ? "Update Article"
                        : "Publish Article"}
                    </h2>


                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Save your changes to the database.
                    </p>

                  </div>

                </div>


                {/* DRAFT */}

                <button
                  type="button"
                  disabled={
                    saving
                  }
                  onClick={(
                    event
                  ) =>
                    handleSubmit(
                      event,
                      "DRAFT"
                    )
                  }
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/50 hover:bg-[#C8102E]/[0.04] hover:text-[#C8102E] disabled:opacity-50 dark:border-white/10 dark:bg-[#0d0f13] dark:text-gray-200"
                >

                  {saving ? (
                    <LoaderCircle
                      size={17}
                      className="animate-spin"
                    />
                  ) : (
                    <Save
                      size={17}
                    />
                  )}

                  Save as Draft

                </button>


                {/* PUBLISH */}

                <button
                  type="submit"
                  disabled={
                    saving
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/15 transition hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-[#C8102E]/25 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {saving ? (
                    <LoaderCircle
                      size={17}
                      className="animate-spin"
                    />
                  ) : (
                    <Send
                      size={17}
                    />
                  )}


                  {saving
                    ? "Saving..."
                    : isEditMode
                      ? "Update & Publish"
                      : "Publish Article"}


                  {!saving && (
                    <ArrowUpRight
                      size={15}
                    />
                  )}

                </button>


                <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-500/[0.07] p-3">

                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />

                  <p className="text-[10px] leading-5 text-gray-500 dark:text-gray-400">
                    Your article will be saved directly to the newsroom database.
                  </p>

                </div>

              </section>


              {/* =================================================
                  CHECKLIST
              ================================================= */}

              <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c]">

                <h3 className="mb-4 text-sm font-black">
                  Writing Checklist
                </h3>


                <div className="space-y-3">

                  {[
                    {
                      label:
                        "Headline added",

                      done:
                        Boolean(
                          formData.title.trim()
                        ),
                    },

                    {
                      label:
                        "Category selected",

                      done:
                        Boolean(
                          formData.category
                        ),
                    },

                    {
                      label:
                        "Summary written",

                      done:
                        Boolean(
                          formData.summary.trim()
                        ),
                    },

                    {
                      label:
                        "Article content added",

                      done:
                        Boolean(
                          formData.content.trim()
                        ),
                    },

                    {
                      label:
                        "Featured image added",

                      done:
                        Boolean(
                          imagePreview
                        ),
                    },

                  ].map(
                    (item) => (

                      <div
                        key={
                          item.label
                        }
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
                          {
                            item.label
                          }
                        </span>

                      </div>

                    )
                  )}

                </div>

              </section>


              {/* VIEW ARTICLES */}

              <Link
                to="/admin/articles"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
              >

                <FolderOpen
                  size={15}
                />

                View All Articles

              </Link>

            </aside>

          </form>

        )}


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500">

          <CheckCircle2
            size={13}
          />

          HINDUSTAN.DIGITAL · Newsroom Editor

        </div>

      </div>

    </main>
  );
}


export default CreateArticle;





// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   ImagePlus,
//   Save,
//   Send,
//   FileText,
//   X,
//   Eye,
//   PenLine,
//   Clock3,
//   Languages,
//   FolderOpen,
//   UserRound,
//   CheckCircle2,
//   AlignLeft,
//   ArrowUpRight,
//   Newspaper,
//   Type,
// } from "lucide-react";

// const categories = [
//   "देश",
//   "दुनिया",
//   "राजनीति",
//   "बिजनेस",
//   "खेल",
//   "मनोरंजन",
//   "टेक्नोलॉजी",
//   "शिक्षा",
//   "वीडियो",
// ];

// const languages = [
//   "Hindi",
//   "English",
//   "Bengali",
//   "Urdu",
//   "Tamil",
//   "Telugu",
//   "Marathi",
//   "Gujarati",
//   "Punjabi",
//   "Odia",
// ];

// function FieldLabel({ children, required }) {
//   return (
//     <label className="mb-2 block text-sm font-bold text-gray-800 dark:text-gray-200">
//       {children}
//       {required && <span className="ml-1 text-[#C8102E]">*</span>}
//     </label>
//   );
// }

// function EditorCard({ icon: Icon, title, description, children }) {
//   return (
//     <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-white/20">
//       <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 dark:border-white/[0.07] sm:px-6">
//         <div className="rounded-xl border border-[#C8102E]/10 bg-[#C8102E]/[0.07] p-3 text-[#C8102E]">
//           <Icon size={20} />
//         </div>
//         <div>
//           <h2 className="text-sm font-black text-gray-900 dark:text-white">
//             {title}
//           </h2>
//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       <div className="space-y-5 p-5 sm:p-6">
//         {children}
//       </div>
//     </section>
//   );
// }

// function InputField({ label, required, ...props }) {
//   return (
//     <div>
//       <FieldLabel required={required}>{label}</FieldLabel>
//       <input
//         {...props}
//         required={required}
//         className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:hover:border-white/20"
//       />
//     </div>
//   );
// }

// function SelectField({ label, children, ...props }) {
//   return (
//     <div>
//       <FieldLabel>{label}</FieldLabel>
//       <select
//         {...props}
//         className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//       >
//         {children}
//       </select>
//     </div>
//   );
// }

// function CreateArticle() {
//   const [formData, setFormData] = useState({
//     title: "",
//     summary: "",
//     category: "",
//     author: "",
//     language: "Hindi",
//     image: "",
//     content: "",
//   });

//   const [preview, setPreview] = useState(false);
//   const [imageError, setImageError] = useState(false);
//   const [notice, setNotice] = useState("");

//   const wordCount = useMemo(() => {
//     return formData.content.trim()
//       ? formData.content.trim().split(/\s+/).length
//       : 0;
//   }, [formData.content]);

//   const readingTime = Math.max(1, Math.ceil(wordCount / 200));

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     if (name === "image") {
//       setImageError(false);
//     }

//     setNotice("");
//   };

//   const handleSubmit = (event, status) => {
//     event.preventDefault();
//     setNotice("");

//     if (!formData.title.trim()) {
//       setNotice("Please enter an article headline.");
//       return;
//     }

//     if (status === "Published") {
//       if (!formData.category) {
//         setNotice("Please select an article category before publishing.");
//         return;
//       }

//       if (!formData.content.trim()) {
//         setNotice("Please write article content before publishing.");
//         return;
//       }
//     }

//     alert(
//       status === "Draft"
//         ? "Draft action selected. Backend connection is pending. Your article has not been saved yet."
//         : "Publish action selected. Backend connection is pending. Your article has not been published yet."
//     );
//   };

//   const previewImageValid = formData.image.trim() && !imageError;

//   return (
//     <main className="min-h-screen bg-gray-50/80 px-3 py-5 text-gray-900 dark:bg-[#0b0c0f] dark:text-white sm:px-5 sm:py-7 lg:px-7">

//       <div className="mx-auto max-w-[1450px]">

//         {/* Page Header */}
//         <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//           <div>
//             <Link
//               to="/admin"
//               className="mb-5 inline-flex items-center gap-2 text-xs font-bold text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
//             >
//               <ArrowLeft size={15} />
//               Back to Overview
//             </Link>

//             <div className="flex items-center gap-3">
//               <div className="rounded-xl bg-[#C8102E] p-3 text-white shadow-lg shadow-[#C8102E]/20">
//                 <PenLine size={22} />
//               </div>

//               <div>
//                 <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                   Create New Article
//                 </h1>
//                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
//                   Create, review and prepare your next news story.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={() => {
//               setPreview(!preview);
//               setNotice("");
//             }}
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-200"
//           >
//             {preview ? <PenLine size={17} /> : <Eye size={17} />}
//             {preview ? "Back to Editor" : "Preview Article"}
//           </button>
//         </div>

//         {/* Editor Stats */}
//         <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
//           {[
//             {
//               label: "Words Written",
//               value: wordCount,
//               icon: Type,
//             },
//             {
//               label: "Characters",
//               value: formData.content.length,
//               icon: AlignLeft,
//             },
//             {
//               label: "Reading Time",
//               value: `${readingTime} min`,
//               icon: Clock3,
//             },
//             {
//               label: "Article Language",
//               value: formData.language,
//               icon: Languages,
//             },
//           ].map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.label}
//                 className="rounded-xl border border-gray-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#15171c]"
//               >
//                 <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
//                   <Icon size={15} className="text-[#C8102E]" />
//                   <span className="text-[10px] font-semibold sm:text-xs">
//                     {item.label}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-lg font-black text-gray-900 dark:text-white">
//                   {item.value}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Notice */}
//         {notice && (
//           <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400">
//             <X size={17} className="mt-0.5 shrink-0" />
//             {notice}
//           </div>
//         )}

//         {preview ? (

//           /* Article Preview */
//           <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
//             <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/10 sm:px-8">
//               <div className="flex items-center gap-2">
//                 <Eye size={17} className="text-[#C8102E]" />
//                 <span className="text-sm font-black">Article Preview</span>
//               </div>

//               <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold text-amber-600 dark:text-amber-400">
//                 Preview Mode
//               </span>
//             </div>

//             <article className="mx-auto max-w-[850px] px-5 py-8 sm:px-10 sm:py-12">
//               <div className="mb-5 flex flex-wrap items-center gap-3">
//                 <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
//                   {formData.category || "Category"}
//                 </span>
//                 <span className="text-xs text-gray-500 dark:text-gray-400">
//                   {formData.language}
//                 </span>
//               </div>

//               <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
//                 {formData.title || "Your article headline will appear here"}
//               </h1>

//               <p className="mt-5 text-base leading-8 text-gray-500 dark:text-gray-400 sm:text-lg">
//                 {formData.summary || "Your article summary will appear here."}
//               </p>

//               <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-gray-100 py-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
//                 <span className="flex items-center gap-1.5 font-bold text-gray-800 dark:text-gray-200">
//                   <UserRound size={14} />
//                   {formData.author || "Author"}
//                 </span>
//                 <span>·</span>
//                 <span>{wordCount} words</span>
//                 <span>·</span>
//                 <span>{readingTime} min read</span>
//               </div>

//               {previewImageValid && (
//                 <img
//                   src={formData.image}
//                   alt="Article cover"
//                   className="mt-8 max-h-[480px] w-full rounded-2xl object-cover"
//                 />
//               )}

//               <div className="mt-8 whitespace-pre-wrap text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg">
//                 {formData.content || "Your complete article content will appear here."}
//               </div>

//               <div className="mt-10 border-t border-gray-100 pt-5 dark:border-white/10">
//                 <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
//                   HINDUSTAN.DIGITAL · देश की खबर, देश की आवाज़
//                 </p>
//               </div>
//             </article>
//           </section>

//         ) : (

//           <form
//             onSubmit={(event) => handleSubmit(event, "Published")}
//             className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_330px]"
//           >

//             {/* Main Editor Column */}
//             <div className="space-y-6">

//               {/* Article Information */}
//               <EditorCard
//                 icon={FileText}
//                 title="Article Information"
//                 description="Add your headline and the complete news story."
//               >
//                 <InputField
//                   label="Article Headline"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   placeholder="Write a clear and engaging news headline..."
//                 />

//                 <div>
//                   <FieldLabel>Short Description</FieldLabel>
//                   <textarea
//                     name="summary"
//                     value={formData.summary}
//                     onChange={handleChange}
//                     rows={3}
//                     maxLength={300}
//                     placeholder="Write a short summary that explains the main story..."
//                     className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   />
//                   <p className="mt-2 text-right text-[10px] text-gray-400">
//                     {formData.summary.length}/300 characters
//                   </p>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
//                     <FieldLabel required>Article Content</FieldLabel>
//                     <span className="text-[10px] font-medium text-gray-400">
//                       {wordCount} words · {readingTime} min read
//                     </span>
//                   </div>

//                   <textarea
//                     name="content"
//                     value={formData.content}
//                     onChange={handleChange}
//                     rows={18}
//                     placeholder="Start writing your complete news article here...

// Write an engaging introduction.

// Add the important facts and details of the story.

// Keep paragraphs clear and easy to read."
//                     className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm leading-8 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   />
//                 </div>
//               </EditorCard>

//               {/* Featured Image */}
//               <EditorCard
//                 icon={ImagePlus}
//                 title="Featured Image"
//                 description="Add the main visual for your news article."
//               >
//                 <div>
//                   <FieldLabel>Image URL</FieldLabel>
//                   <input
//                     type="url"
//                     name="image"
//                     value={formData.image}
//                     onChange={handleChange}
//                     placeholder="https://example.com/news-image.jpg"
//                     className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   />
//                   <p className="mt-2 text-[11px] text-gray-400">
//                     Enter a publicly accessible image URL.
//                   </p>
//                 </div>

//                 {formData.image && (
//                   <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">
//                     {!imageError ? (
//                       <img
//                         src={formData.image}
//                         alt="Featured article"
//                         onError={() => setImageError(true)}
//                         className="max-h-[350px] w-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex min-h-36 flex-col items-center justify-center gap-2 bg-gray-50 text-center dark:bg-[#0d0f13]">
//                         <ImagePlus size={25} className="text-gray-400" />
//                         <p className="text-xs font-semibold text-gray-500">
//                           Image could not be loaded. Check the URL.
//                         </p>
//                       </div>
//                     )}

//                     <button
//                       type="button"
//                       onClick={() => {
//                         setFormData((previous) => ({
//                           ...previous,
//                           image: "",
//                         }));
//                         setImageError(false);
//                       }}
//                       className="absolute right-3 top-3 rounded-lg bg-black/75 p-2 text-white transition hover:bg-red-600"
//                       aria-label="Remove image"
//                     >
//                       <X size={16} />
//                     </button>
//                   </div>
//                 )}
//               </EditorCard>
//             </div>

//             {/* Publishing Sidebar */}
//             <aside className="space-y-6 xl:sticky xl:top-6">

//               {/* Publishing Details */}
//               <EditorCard
//                 icon={Newspaper}
//                 title="Publishing Details"
//                 description="Organize your article."
//               >
//                 <SelectField
//                   label="Category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </SelectField>

//                 <InputField
//                   label="Author Name"
//                   name="author"
//                   value={formData.author}
//                   onChange={handleChange}
//                   placeholder="Enter author name"
//                 />

//                 <SelectField
//                   label="Article Language"
//                   name="language"
//                   value={formData.language}
//                   onChange={handleChange}
//                 >
//                   {languages.map((language) => (
//                     <option key={language} value={language}>
//                       {language}
//                     </option>
//                   ))}
//                 </SelectField>
//               </EditorCard>

//               {/* Publish Actions */}
//               <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#15171c]">
//                 <div className="mb-5 flex items-center gap-3">
//                   <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
//                     <Send size={19} />
//                   </div>
//                   <div>
//                     <h2 className="text-sm font-black">Publish Article</h2>
//                     <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                       Review before publishing.
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={(event) => handleSubmit(event, "Draft")}
//                   className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/50 hover:bg-[#C8102E]/[0.04] hover:text-[#C8102E] dark:border-white/10 dark:bg-[#0d0f13] dark:text-gray-200"
//                 >
//                   <Save size={17} />
//                   Save as Draft
//                 </button>

//                 <button
//                   type="submit"
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/15 transition hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-[#C8102E]/25"
//                 >
//                   <Send size={17} />
//                   Publish Article
//                   <ArrowUpRight size={15} />
//                 </button>

//                 <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-500/[0.07] p-3">
//                   <Clock3 size={14} className="mt-0.5 shrink-0 text-amber-500" />
//                   <p className="text-[10px] leading-5 text-gray-500 dark:text-gray-400">
//                     Saving and publishing will become functional after Django backend integration.
//                   </p>
//                 </div>
//               </section>

//               {/* Writing Checklist */}
//               <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c]">
//                 <h3 className="mb-4 text-sm font-black">
//                   Writing Checklist
//                 </h3>

//                 <div className="space-y-3">
//                   {[
//                     {
//                       label: "Headline added",
//                       done: Boolean(formData.title.trim()),
//                     },
//                     {
//                       label: "Category selected",
//                       done: Boolean(formData.category),
//                     },
//                     {
//                       label: "Summary written",
//                       done: Boolean(formData.summary.trim()),
//                     },
//                     {
//                       label: "Article content added",
//                       done: Boolean(formData.content.trim()),
//                     },
//                     {
//                       label: "Featured image added",
//                       done: Boolean(previewImageValid),
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.label}
//                       className="flex items-center gap-2.5"
//                     >
//                       <CheckCircle2
//                         size={16}
//                         className={
//                           item.done
//                             ? "text-emerald-500"
//                             : "text-gray-300 dark:text-gray-600"
//                         }
//                       />
//                       <span
//                         className={`text-xs ${
//                           item.done
//                             ? "font-semibold text-gray-800 dark:text-gray-200"
//                             : "text-gray-400"
//                         }`}
//                       >
//                         {item.label}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               <Link
//                 to="/admin/articles"
//                 className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
//               >
//                 <FolderOpen size={15} />
//                 View All Articles
//               </Link>

//             </aside>
//           </form>
//         )}

//         <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500">
//           <CheckCircle2 size={13} />
//           HINDUSTAN.DIGITAL · Newsroom Editor
//         </div>
//       </div>
//     </main>
//   );
// }

// export default CreateArticle;

// import { useCallback, useEffect, useMemo, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import {
//   ArrowLeft,
//   ImagePlus,
//   Save,
//   Send,
//   FileText,
//   X,
//   Eye,
//   PenLine,
//   Clock3,
//   Languages,
//   FolderOpen,
//   UserRound,
//   CheckCircle2,
//   AlignLeft,
//   ArrowUpRight,
//   Newspaper,
//   Type,
//   LoaderCircle,
//   AlertCircle,
//   RefreshCw,
// } from "lucide-react";

// import API from "../services/api";

// const languages = [
//   { label: "Hindi", value: "hi" },
//   { label: "English", value: "en" },
//   { label: "Bengali", value: "bn" },
//   { label: "Urdu", value: "ur" },
//   { label: "Tamil", value: "ta" },
//   { label: "Telugu", value: "te" },
//   { label: "Marathi", value: "mr" },
//   { label: "Gujarati", value: "gu" },
//   { label: "Punjabi", value: "pa" },
//   { label: "Odia", value: "or" },
// ];

// const initialForm = {
//   title: "",
//   summary: "",
//   category: "",
//   language: "hi",
//   content: "",
//   is_featured: false,
//   is_breaking: false,
// };

// function FieldLabel({ children, required }) {
//   return (
//     <label className="mb-2 block text-sm font-bold text-gray-800 dark:text-gray-200">
//       {children}
//       {required && <span className="ml-1 text-[#C8102E]">*</span>}
//     </label>
//   );
// }

// function EditorCard({ icon: Icon, title, description, children }) {
//   return (
//     <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-white/20">
//       <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 dark:border-white/[0.07] sm:px-6">
//         <div className="rounded-xl border border-[#C8102E]/10 bg-[#C8102E]/[0.07] p-3 text-[#C8102E]">
//           <Icon size={20} />
//         </div>

//         <div>
//           <h2 className="text-sm font-black text-gray-900 dark:text-white">
//             {title}
//           </h2>

//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       <div className="space-y-5 p-5 sm:p-6">{children}</div>
//     </section>
//   );
// }

// function InputField({ label, required, ...props }) {
//   return (
//     <div>
//       <FieldLabel required={required}>{label}</FieldLabel>

//       <input
//         {...props}
//         required={required}
//         className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:hover:border-white/20"
//       />
//     </div>
//   );
// }

// function SelectField({ label, children, ...props }) {
//   return (
//     <div>
//       <FieldLabel>{label}</FieldLabel>

//       <select
//         {...props}
//         className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//       >
//         {children}
//       </select>
//     </div>
//   );
// }

// function CreateArticle() {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const editId = searchParams.get("edit");
//   const isEditMode = Boolean(editId);

//   const [formData, setFormData] = useState(initialForm);

//   const [categories, setCategories] = useState([]);
//   const [categoryLoading, setCategoryLoading] = useState(true);
//   const [categoryError, setCategoryError] = useState("");

//   // Image states
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [existingImage, setExistingImage] = useState("");
//   const [imagePreview, setImagePreview] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   const [preview, setPreview] = useState(false);
//   const [notice, setNotice] = useState("");
//   const [noticeType, setNoticeType] = useState("error");

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const wordCount = useMemo(() => {
//     return formData.content.trim()
//       ? formData.content.trim().split(/\s+/).length
//       : 0;
//   }, [formData.content]);

//   const readingTime = Math.max(1, Math.ceil(wordCount / 200));

//   // =========================================================
//   // LOAD CATEGORIES
//   // =========================================================

//   const loadCategories = useCallback(
//     async (currentArticleCategory = "") => {
//       try {
//         setCategoryLoading(true);
//         setCategoryError("");

//         const response = await API.get("categories/");

//         const responseData = response.data;

//         const categoryList = Array.isArray(responseData)
//           ? responseData
//           : Array.isArray(responseData?.results)
//             ? responseData.results
//             : [];

//         const filteredCategories = categoryList.filter(
//           (category) =>
//             category.is_active !== false ||
//             String(category.id) === String(currentArticleCategory)
//         );

//         setCategories(filteredCategories);
//       } catch (error) {
//         console.error("Category loading error:", error);

//         setCategoryError(
//           error.response?.data?.detail ||
//             "Unable to load categories. Please try again."
//         );

//         setCategories([]);
//       } finally {
//         setCategoryLoading(false);
//       }
//     },
//     []
//   );

//   // =========================================================
//   // LOAD ARTICLE FOR EDIT
//   // =========================================================

//   const loadArticle = useCallback(async () => {
//     if (!isEditMode) return null;

//     try {
//       const response = await API.get(`articles/${editId}/`);

//       const article = response.data;

//       setFormData({
//         title: article.title || "",
//         summary: article.excerpt || article.subtitle || "",
//         category: String(article.category || ""),
//         language: article.language || "hi",
//         content: article.content || "",
//         is_featured: Boolean(article.is_featured),
//         is_breaking: Boolean(article.is_breaking),
//       });

//       const articleImage = article.featured_image || "";

//       setExistingImage(articleImage);
//       setImagePreview(articleImage);

//       // If backend returns an external URL directly,
//       // also put it inside the Image URL field.
//       if (
//         articleImage &&
//         typeof articleImage === "string" &&
//         /^https?:\/\//i.test(articleImage)
//       ) {
//         setImageUrl(articleImage);
//       } else {
//         setImageUrl("");
//       }

//       return article;
//     } catch (error) {
//       console.error("Article loading error:", error);

//       throw new Error(
//         error.response?.data?.detail ||
//           "Unable to load article. Please refresh the page."
//       );
//     }
//   }, [editId, isEditMode]);

//   // =========================================================
//   // LOAD EDITOR DATA
//   // =========================================================

//   const loadEditorData = useCallback(async () => {
//     setLoading(true);
//     setNotice("");

//     try {
//       const article = await loadArticle();

//       await loadCategories(article?.category || "");
//     } catch (error) {
//       setNotice(error.message);
//       setNoticeType("error");

//       await loadCategories();
//     } finally {
//       setLoading(false);
//     }
//   }, [loadArticle, loadCategories]);

//   useEffect(() => {
//     loadEditorData();
//   }, [loadEditorData]);

//   // =========================================================
//   // CLEANUP BLOB URL
//   // =========================================================

//   useEffect(() => {
//     return () => {
//       if (imagePreview?.startsWith("blob:")) {
//         URL.revokeObjectURL(imagePreview);
//       }
//     };
//   }, [imagePreview]);

//   // =========================================================
//   // GENERAL FORM CHANGE
//   // =========================================================

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     setNotice("");
//   };

//   // =========================================================
//   // LOCAL IMAGE UPLOAD
//   // =========================================================

//   const handleImageChange = (event) => {
//     const file = event.target.files?.[0];

//     if (!file) return;

//     const allowedTypes = [
//       "image/jpeg",
//       "image/png",
//       "image/webp",
//       "image/gif",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       setNotice("Please select a JPG, PNG, WEBP or GIF image.");
//       setNoticeType("error");

//       event.target.value = "";
//       return;
//     }

//     if (file.size > 20 * 1024 * 1024) {
//       setNotice("Image size must be less than 20 MB.");
//       setNoticeType("error");

//       event.target.value = "";
//       return;
//     }

//     // Remove URL when local file is selected
//     setImageUrl("");
//     setExistingImage("");

//     setSelectedImage(file);

//     const previewUrl = URL.createObjectURL(file);
//     setImagePreview(previewUrl);

//     setNotice("");
//   };

//   // =========================================================
//   // IMAGE URL CHANGE
//   // =========================================================

//   const handleImageUrlChange = (event) => {
//     const value = event.target.value.trim();

//     setImageUrl(value);

//     // Remove local file when URL is entered
//     setSelectedImage(null);
//     setExistingImage("");

//     if (!value) {
//       setImagePreview("");
//       setNotice("");
//       return;
//     }

//     if (!/^https?:\/\/.+/i.test(value)) {
//       setImagePreview("");

//       setNotice(
//         "Please enter a valid image URL starting with http:// or https://"
//       );

//       setNoticeType("error");
//       return;
//     }

//     setImagePreview(value);
//     setNotice("");
//   };

//   // =========================================================
//   // REMOVE IMAGE
//   // =========================================================

//   const removeImage = () => {
//     setSelectedImage(null);
//     setExistingImage("");
//     setImagePreview("");
//     setImageUrl("");
//     setNotice("");
//   };

//   // =========================================================
//   // SUBMIT ARTICLE
//   // =========================================================

//   const handleSubmit = async (event, status) => {
//     event.preventDefault();

//     if (saving) return;

//     setNotice("");

//     // Validate title
//     if (!formData.title.trim()) {
//       setNotice("Please enter an article headline.");
//       setNoticeType("error");
//       return;
//     }

//     // Validate category
//     if (!formData.category) {
//       setNotice("Please select an article category.");
//       setNoticeType("error");
//       return;
//     }

//     // Validate content
//     if (!formData.content.trim()) {
//       setNotice("Please write article content.");
//       setNoticeType("error");
//       return;
//     }

//     // Validate image URL if entered
//     if (imageUrl.trim() && !/^https?:\/\/.+/i.test(imageUrl.trim())) {
//       setNotice(
//         "Please enter a valid image URL starting with http:// or https://"
//       );
//       setNoticeType("error");
//       return;
//     }

//     try {
//       setSaving(true);

//       const payload = new FormData();

//       payload.append("title", formData.title.trim());
//       payload.append("excerpt", formData.summary.trim());
//       payload.append("subtitle", formData.summary.trim());
//       payload.append("content", formData.content);
//       payload.append("category", formData.category);
//       payload.append("language", formData.language);
//       payload.append("status", status);
//       payload.append("is_featured", String(formData.is_featured));
//       payload.append("is_breaking", String(formData.is_breaking));

//       // =====================================================
//       // IMAGE
//       // =====================================================

//       if (selectedImage instanceof File) {
//         // Local uploaded file
//         payload.append("featured_image", selectedImage);
//       } else if (imageUrl.trim()) {
//         // External image URL
//         payload.append("featured_image", imageUrl.trim());
//       } else if (isEditMode && !existingImage) {
//         // Remove existing image
//         payload.append("featured_image", "");
//       }

//       const uploadConfig = {
//         headers: {
//           "Content-Type": undefined,
//         },
//       };

//       if (isEditMode) {
//         await API.patch(
//           `articles/${editId}/`,
//           payload,
//           uploadConfig
//         );
//       } else {
//         await API.post(
//           "articles/",
//           payload,
//           uploadConfig
//         );
//       }

//       setNoticeType("success");

//       setNotice(
//         status === "DRAFT"
//           ? "Article saved as draft successfully!"
//           : "Article published successfully!"
//       );

//       setTimeout(() => {
//         navigate("/admin/articles");
//       }, 900);
//     } catch (error) {
//       console.error("Article save error:", error);

//       const responseData = error.response?.data;

//       let message = "Unable to save article. Please try again.";

//       if (responseData?.detail) {
//         message = responseData.detail;
//       } else if (
//         responseData &&
//         typeof responseData === "object"
//       ) {
//         const firstError = Object.entries(responseData)[0];

//         if (firstError) {
//           const [field, value] = firstError;

//           message = `${field}: ${
//             Array.isArray(value)
//               ? value.join(", ")
//               : String(value)
//           }`;
//         }
//       }

//       setNotice(message);
//       setNoticeType("error");
//     } finally {
//       setSaving(false);
//     }
//   };

//   // =========================================================
//   // SELECTED CATEGORY / LANGUAGE
//   // =========================================================

//   const selectedCategory = categories.find(
//     (category) =>
//       String(category.id) === String(formData.category)
//   );

//   const selectedLanguage = languages.find(
//     (item) => item.value === formData.language
//   );

//   // =========================================================
//   // LOADING
//   // =========================================================

//   if (loading) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-gray-50 text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
//         <div className="text-center">
//           <LoaderCircle
//             size={35}
//             className="mx-auto animate-spin text-[#C8102E]"
//           />

//           <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
//             Loading article editor...
//           </p>
//         </div>
//       </main>
//     );
//   }

//   // =========================================================
//   // UI
//   // =========================================================

//   return (
//     <main className="min-h-screen bg-gray-50/80 px-3 py-5 text-gray-900 dark:bg-[#0b0c0f] dark:text-white sm:px-5 sm:py-7 lg:px-7">
//       <div className="mx-auto max-w-[1450px]">

//         {/* =====================================================
//             PAGE HEADER
//         ===================================================== */}

//         <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//           <div>
//             <Link
//               to="/admin"
//               className="mb-5 inline-flex items-center gap-2 text-xs font-bold text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
//             >
//               <ArrowLeft size={15} />
//               Back to Overview
//             </Link>

//             <div className="flex items-center gap-3">
//               <div className="rounded-xl bg-[#C8102E] p-3 text-white shadow-lg shadow-[#C8102E]/20">
//                 <PenLine size={22} />
//               </div>

//               <div>
//                 <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                   {isEditMode
//                     ? "Edit Article"
//                     : "Create New Article"}
//                 </h1>

//                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
//                   Create, review and prepare your next news story.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={() => {
//               setPreview(!preview);
//               setNotice("");
//             }}
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-200"
//           >
//             {preview ? (
//               <PenLine size={17} />
//             ) : (
//               <Eye size={17} />
//             )}

//             {preview
//               ? "Back to Editor"
//               : "Preview Article"}
//           </button>
//         </div>

//         {/* =====================================================
//             STATS
//         ===================================================== */}

//         <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
//           {[
//             {
//               label: "Words Written",
//               value: wordCount,
//               icon: Type,
//             },
//             {
//               label: "Characters",
//               value: formData.content.length,
//               icon: AlignLeft,
//             },
//             {
//               label: "Reading Time",
//               value: `${readingTime} min`,
//               icon: Clock3,
//             },
//             {
//               label: "Article Language",
//               value: selectedLanguage?.label || "Hindi",
//               icon: Languages,
//             },
//           ].map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.label}
//                 className="rounded-xl border border-gray-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#15171c]"
//               >
//                 <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
//                   <Icon
//                     size={15}
//                     className="text-[#C8102E]"
//                   />

//                   <span className="text-[10px] font-semibold sm:text-xs">
//                     {item.label}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-lg font-black text-gray-900 dark:text-white">
//                   {item.value}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* =====================================================
//             NOTICE
//         ===================================================== */}

//         {notice && (
//           <div
//             className={`mb-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
//               noticeType === "success"
//                 ? "border-green-500/20 bg-green-500/[0.06] text-green-600 dark:text-green-400"
//                 : "border-red-500/20 bg-red-500/[0.06] text-red-600 dark:text-red-400"
//             }`}
//           >
//             {noticeType === "success" ? (
//               <CheckCircle2
//                 size={17}
//                 className="mt-0.5 shrink-0"
//               />
//             ) : (
//               <AlertCircle
//                 size={17}
//                 className="mt-0.5 shrink-0"
//               />
//             )}

//             <span>{notice}</span>
//           </div>
//         )}

//         {/* =====================================================
//             CATEGORY API WARNING
//         ===================================================== */}

//         {categoryError && (
//           <div className="mb-5 flex flex-col gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-start gap-3 text-amber-700 dark:text-amber-400">
//               <AlertCircle
//                 size={18}
//                 className="mt-0.5 shrink-0"
//               />

//               <div>
//                 <p className="text-sm font-bold">
//                   Category loading problem
//                 </p>

//                 <p className="mt-1 text-xs">
//                   {categoryError}
//                 </p>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={() =>
//                 loadCategories(formData.category)
//               }
//               disabled={categoryLoading}
//               className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-amber-500/30 px-4 py-2 text-xs font-bold text-amber-700 transition hover:bg-amber-500/10 disabled:opacity-50 dark:text-amber-400"
//             >
//               {categoryLoading ? (
//                 <LoaderCircle
//                   size={14}
//                   className="animate-spin"
//                 />
//               ) : (
//                 <RefreshCw size={14} />
//               )}

//               Retry
//             </button>
//           </div>
//         )}

//         {/* =====================================================
//             PREVIEW MODE
//         ===================================================== */}

//         {preview ? (
//           <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
//             <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/10 sm:px-8">
//               <div className="flex items-center gap-2">
//                 <Eye
//                   size={17}
//                   className="text-[#C8102E]"
//                 />

//                 <span className="text-sm font-black">
//                   Article Preview
//                 </span>
//               </div>

//               <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold text-amber-600 dark:text-amber-400">
//                 Preview Mode
//               </span>
//             </div>

//             <article className="mx-auto max-w-[850px] px-5 py-8 sm:px-10 sm:py-12">

//               <div className="mb-5 flex flex-wrap items-center gap-3">
//                 <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
//                   {selectedCategory?.name ||
//                     "Category"}
//                 </span>

//                 <span className="text-xs text-gray-500 dark:text-gray-400">
//                   {selectedLanguage?.label ||
//                     "Hindi"}
//                 </span>
//               </div>

//               <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
//                 {formData.title ||
//                   "Your article headline will appear here"}
//               </h1>

//               <p className="mt-5 text-base leading-8 text-gray-500 dark:text-gray-400 sm:text-lg">
//                 {formData.summary ||
//                   "Your article summary will appear here."}
//               </p>

//               <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-gray-100 py-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
//                 <span className="flex items-center gap-1.5 font-bold text-gray-800 dark:text-gray-200">
//                   <UserRound size={14} />
//                   Logged-in Author
//                 </span>

//                 <span>·</span>

//                 <span>{wordCount} words</span>

//                 <span>·</span>

//                 <span>{readingTime} min read</span>
//               </div>

//               {imagePreview && (
//                 <img
//                   src={imagePreview}
//                   alt="Article cover"
//                   className="mt-8 max-h-[480px] w-full rounded-2xl object-cover"
//                 />
//               )}

//               <div className="mt-8 whitespace-pre-wrap text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg">
//                 {formData.content ||
//                   "Your complete article content will appear here."}
//               </div>

//               <div className="mt-10 border-t border-gray-100 pt-5 dark:border-white/10">
//                 <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
//                   HINDUSTAN.DIGITAL · देश की खबर, देश की आवाज़
//                 </p>
//               </div>
//             </article>
//           </section>
//         ) : (
//           <form
//             onSubmit={(event) =>
//               handleSubmit(event, "PUBLISHED")
//             }
//             className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_330px]"
//           >

//             {/* =================================================
//                 MAIN COLUMN
//             ================================================= */}

//             <div className="space-y-6">

//               {/* ARTICLE INFORMATION */}

//               <EditorCard
//                 icon={FileText}
//                 title="Article Information"
//                 description="Add your headline and the complete news story."
//               >
//                 <InputField
//                   label="Article Headline"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   placeholder="Write a clear and engaging news headline..."
//                 />

//                 <div>
//                   <FieldLabel>
//                     Short Description
//                   </FieldLabel>

//                   <textarea
//                     name="summary"
//                     value={formData.summary}
//                     onChange={handleChange}
//                     rows={3}
//                     maxLength={300}
//                     placeholder="Write a short summary that explains the main story..."
//                     className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   />

//                   <p className="mt-2 text-right text-[10px] text-gray-400">
//                     {formData.summary.length}/300
//                     characters
//                   </p>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
//                     <FieldLabel required>
//                       Article Content
//                     </FieldLabel>

//                     <span className="text-[10px] font-medium text-gray-400">
//                       {wordCount} words · {readingTime} min
//                       read
//                     </span>
//                   </div>

//                   <textarea
//                     name="content"
//                     value={formData.content}
//                     onChange={handleChange}
//                     rows={18}
//                     required
//                     placeholder={`Start writing your complete news article here...

// Write an engaging introduction.

// Add the important facts and details of the story.

// Keep paragraphs clear and easy to read.`}
//                     className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm leading-8 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   />
//                 </div>
//               </EditorCard>

//               {/* =================================================
//                   FEATURED IMAGE
//               ================================================= */}

//               <EditorCard
//                 icon={ImagePlus}
//                 title="Featured Image"
//                 description="Upload the main visual or use an external image URL."
//               >
//                 <div className="space-y-5">

//                   {/* IMAGE URL */}

//                   <div>
//                     <FieldLabel>
//                       Image URL
//                     </FieldLabel>

//                     <input
//                       type="url"
//                       value={imageUrl}
//                       onChange={handleImageUrlChange}
//                       placeholder="https://example.com/news-image.jpg"
//                       className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:hover:border-white/20"
//                     />

//                     <p className="mt-2 text-[11px] leading-5 text-gray-400">
//                       Paste a direct image URL starting
//                       with http:// or https://
//                     </p>
//                   </div>

//                   {/* DIVIDER */}

//                   <div className="flex items-center gap-3">
//                     <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />

//                     <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
//                       OR
//                     </span>

//                     <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
//                   </div>

//                   {/* UPLOAD */}

//                   <div>
//                     <FieldLabel>
//                       Upload Image
//                     </FieldLabel>

//                     <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-9 text-center transition hover:border-[#C8102E]/50 hover:bg-[#C8102E]/[0.03] dark:border-white/10 dark:bg-[#0d0f13] dark:hover:border-[#C8102E]/50">

//                       <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
//                         <ImagePlus size={25} />
//                       </div>

//                       <p className="mt-3 text-sm font-bold text-gray-800 dark:text-gray-200">
//                         Click to upload an image
//                       </p>

//                       <p className="mt-1 text-xs text-gray-400">
//                         JPG, PNG, WEBP or GIF · Maximum
//                         20 MB
//                       </p>

//                       <input
//                         type="file"
//                         accept="image/jpeg,image/png,image/webp,image/gif"
//                         onChange={handleImageChange}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>

//                   {/* IMAGE PREVIEW */}

//                   {imagePreview && (
//                     <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">

//                       <img
//                         src={imagePreview}
//                         alt="Featured article"
//                         className="max-h-[350px] w-full object-cover"
//                         onError={() => {
//                           setNotice(
//                             "Unable to load this image. Please check the image URL."
//                           );
//                           setNoticeType("error");
//                         }}
//                       />

//                       <button
//                         type="button"
//                         onClick={removeImage}
//                         className="absolute right-3 top-3 rounded-lg bg-black/75 p-2 text-white transition hover:bg-red-600"
//                         aria-label="Remove image"
//                       >
//                         <X size={16} />
//                       </button>

//                       <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2 text-xs text-white">
//                         {selectedImage
//                           ? selectedImage.name
//                           : imageUrl
//                             ? "External image URL"
//                             : "Current featured image"}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </EditorCard>
//             </div>

//             {/* =================================================
//                 SIDEBAR
//             ================================================= */}

//             <aside className="space-y-6 xl:sticky xl:top-6">

//               {/* PUBLISHING DETAILS */}

//               <EditorCard
//                 icon={Newspaper}
//                 title="Publishing Details"
//                 description="Organize your article."
//               >

//                 {/* CATEGORY */}

//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <FieldLabel>
//                       Category
//                     </FieldLabel>

//                     <button
//                       type="button"
//                       onClick={() =>
//                         loadCategories(formData.category)
//                       }
//                       disabled={categoryLoading}
//                       className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C8102E] transition hover:underline disabled:opacity-50"
//                     >
//                       {categoryLoading ? (
//                         <LoaderCircle
//                           size={12}
//                           className="animate-spin"
//                         />
//                       ) : (
//                         <RefreshCw size={12} />
//                       )}

//                       Refresh
//                     </button>
//                   </div>

//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     disabled={
//                       categoryLoading &&
//                       categories.length === 0
//                     }
//                     className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   >
//                     <option value="">
//                       {categoryLoading
//                         ? "Loading categories..."
//                         : categories.length === 0
//                           ? "No categories available"
//                           : "Select Category"}
//                     </option>

//                     {categories.map((category) => (
//                       <option
//                         key={category.id}
//                         value={String(category.id)}
//                       >
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>

//                   {categoryError && (
//                     <p className="mt-2 text-[11px] text-red-500">
//                       {categoryError}
//                     </p>
//                   )}

//                   {!categoryLoading &&
//                     !categoryError &&
//                     categories.length === 0 && (
//                       <p className="mt-2 text-[11px] text-gray-400">
//                         Please create a category from Manage
//                         Categories.
//                       </p>
//                     )}
//                 </div>

//                 {/* LANGUAGE */}

//                 <SelectField
//                   label="Article Language"
//                   name="language"
//                   value={formData.language}
//                   onChange={handleChange}
//                 >
//                   {languages.map((language) => (
//                     <option
//                       key={language.value}
//                       value={language.value}
//                     >
//                       {language.label}
//                     </option>
//                   ))}
//                 </SelectField>

//                 {/* OPTIONS */}

//                 <div className="space-y-3">
//                   <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-[#C8102E]/40 dark:border-white/10">
//                     <input
//                       type="checkbox"
//                       name="is_featured"
//                       checked={formData.is_featured}
//                       onChange={handleChange}
//                       className="h-4 w-4 accent-[#C8102E]"
//                     />

//                     <span className="text-xs font-semibold">
//                       Featured Article
//                     </span>
//                   </label>

//                   <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-[#C8102E]/40 dark:border-white/10">
//                     <input
//                       type="checkbox"
//                       name="is_breaking"
//                       checked={formData.is_breaking}
//                       onChange={handleChange}
//                       className="h-4 w-4 accent-[#C8102E]"
//                     />

//                     <span className="text-xs font-semibold">
//                       Breaking News
//                     </span>
//                   </label>
//                 </div>
//               </EditorCard>

//               {/* =================================================
//                   PUBLISH ACTIONS
//               ================================================= */}

//               <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#15171c]">

//                 <div className="mb-5 flex items-center gap-3">
//                   <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
//                     <Send size={19} />
//                   </div>

//                   <div>
//                     <h2 className="text-sm font-black">
//                       {isEditMode
//                         ? "Update Article"
//                         : "Publish Article"}
//                     </h2>

//                     <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                       Save your changes to the database.
//                     </p>
//                   </div>
//                 </div>

//                 {/* DRAFT */}

//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={(event) =>
//                     handleSubmit(event, "DRAFT")
//                   }
//                   className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/50 hover:bg-[#C8102E]/[0.04] hover:text-[#C8102E] disabled:opacity-50 dark:border-white/10 dark:bg-[#0d0f13] dark:text-gray-200"
//                 >
//                   {saving ? (
//                     <LoaderCircle
//                       size={17}
//                       className="animate-spin"
//                     />
//                   ) : (
//                     <Save size={17} />
//                   )}

//                   Save as Draft
//                 </button>

//                 {/* PUBLISH */}

//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/15 transition hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-[#C8102E]/25 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {saving ? (
//                     <LoaderCircle
//                       size={17}
//                       className="animate-spin"
//                     />
//                   ) : (
//                     <Send size={17} />
//                   )}

//                   {saving
//                     ? "Saving..."
//                     : isEditMode
//                       ? "Update & Publish"
//                       : "Publish Article"}

//                   {!saving && (
//                     <ArrowUpRight size={15} />
//                   )}
//                 </button>

//                 <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-500/[0.07] p-3">
//                   <CheckCircle2
//                     size={14}
//                     className="mt-0.5 shrink-0 text-emerald-500"
//                   />

//                   <p className="text-[10px] leading-5 text-gray-500 dark:text-gray-400">
//                     Your article will be saved directly to
//                     the newsroom database.
//                   </p>
//                 </div>
//               </section>

//               {/* =================================================
//                   CHECKLIST
//               ================================================= */}

//               <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c]">
//                 <h3 className="mb-4 text-sm font-black">
//                   Writing Checklist
//                 </h3>

//                 <div className="space-y-3">
//                   {[
//                     {
//                       label: "Headline added",
//                       done: Boolean(
//                         formData.title.trim()
//                       ),
//                     },
//                     {
//                       label: "Category selected",
//                       done: Boolean(formData.category),
//                     },
//                     {
//                       label: "Summary written",
//                       done: Boolean(
//                         formData.summary.trim()
//                       ),
//                     },
//                     {
//                       label: "Article content added",
//                       done: Boolean(
//                         formData.content.trim()
//                       ),
//                     },
//                     {
//                       label: "Featured image added",
//                       done: Boolean(imagePreview),
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.label}
//                       className="flex items-center gap-2.5"
//                     >
//                       <CheckCircle2
//                         size={16}
//                         className={
//                           item.done
//                             ? "text-emerald-500"
//                             : "text-gray-300 dark:text-gray-600"
//                         }
//                       />

//                       <span
//                         className={`text-xs ${
//                           item.done
//                             ? "font-semibold text-gray-800 dark:text-gray-200"
//                             : "text-gray-400"
//                         }`}
//                       >
//                         {item.label}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* VIEW ARTICLES */}

//               <Link
//                 to="/admin/articles"
//                 className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
//               >
//                 <FolderOpen size={15} />
//                 View All Articles
//               </Link>
//             </aside>
//           </form>
//         )}

//         {/* =====================================================
//             FOOTER
//         ===================================================== */}

//         <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500">
//           <CheckCircle2 size={13} />
//           HINDUSTAN.DIGITAL · Newsroom Editor
//         </div>
//       </div>
//     </main>
//   );
// }

// export default CreateArticle;







// import { useCallback, useEffect, useMemo, useState } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import {
//   ArrowLeft,
//   ImagePlus,
//   Save,
//   Send,
//   FileText,
//   X,
//   Eye,
//   PenLine,
//   Clock3,
//   Languages,
//   FolderOpen,
//   UserRound,
//   CheckCircle2,
//   AlignLeft,
//   ArrowUpRight,
//   Newspaper,
//   Type,
//   LoaderCircle,
//   AlertCircle,
//   RefreshCw,
// } from "lucide-react";

// import API from "../services/api";

// const languages = [
//   { label: "Hindi", value: "hi" },
//   { label: "English", value: "en" },
//   { label: "Bengali", value: "bn" },
//   { label: "Urdu", value: "ur" },
//   { label: "Tamil", value: "ta" },
//   { label: "Telugu", value: "te" },
//   { label: "Marathi", value: "mr" },
//   { label: "Gujarati", value: "gu" },
//   { label: "Punjabi", value: "pa" },
//   { label: "Odia", value: "or" },
// ];

// const initialForm = {
//   title: "",
//   summary: "",
//   category: "",
//   language: "hi",
//   content: "",
//   is_featured: false,
//   is_breaking: false,
// };

// function FieldLabel({ children, required }) {
//   return (
//     <label className="mb-2 block text-sm font-bold text-gray-800 dark:text-gray-200">
//       {children}
//       {required && <span className="ml-1 text-[#C8102E]">*</span>}
//     </label>
//   );
// }

// function EditorCard({ icon: Icon, title, description, children }) {
//   return (
//     <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 dark:border-white/10 dark:bg-[#15171c] dark:hover:border-white/20">
//       <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 dark:border-white/[0.07] sm:px-6">
//         <div className="rounded-xl border border-[#C8102E]/10 bg-[#C8102E]/[0.07] p-3 text-[#C8102E]">
//           <Icon size={20} />
//         </div>

//         <div>
//           <h2 className="text-sm font-black text-gray-900 dark:text-white">
//             {title}
//           </h2>

//           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//             {description}
//           </p>
//         </div>
//       </div>

//       <div className="space-y-5 p-5 sm:p-6">{children}</div>
//     </section>
//   );
// }

// function InputField({ label, required, ...props }) {
//   return (
//     <div>
//       <FieldLabel required={required}>{label}</FieldLabel>

//       <input
//         {...props}
//         required={required}
//         className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white dark:hover:border-white/20"
//       />
//     </div>
//   );
// }

// function SelectField({ label, children, ...props }) {
//   return (
//     <div>
//       <FieldLabel>{label}</FieldLabel>

//       <select
//         {...props}
//         className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//       >
//         {children}
//       </select>
//     </div>
//   );
// }

// function CreateArticle() {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const editId = searchParams.get("edit");
//   const isEditMode = Boolean(editId);

//   const [formData, setFormData] = useState(initialForm);

//   const [categories, setCategories] = useState([]);
//   const [categoryLoading, setCategoryLoading] = useState(true);
//   const [categoryError, setCategoryError] = useState("");

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [existingImage, setExistingImage] = useState("");
//   const [imagePreview, setImagePreview] = useState("");

//   const [preview, setPreview] = useState(false);
//   const [notice, setNotice] = useState("");
//   const [noticeType, setNoticeType] = useState("error");

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const wordCount = useMemo(() => {
//     return formData.content.trim()
//       ? formData.content.trim().split(/\s+/).length
//       : 0;
//   }, [formData.content]);

//   const readingTime = Math.max(1, Math.ceil(wordCount / 200));

//   // Load categories independently.
//   const loadCategories = useCallback(async (currentArticleCategory = "") => {
//     try {
//       setCategoryLoading(true);
//       setCategoryError("");

//       const response = await API.get("categories/");

//       const responseData = response.data;

//       const categoryList = Array.isArray(responseData)
//         ? responseData
//         : Array.isArray(responseData?.results)
//           ? responseData.results
//           : [];

//       // Active categories are displayed.
//       // Keep the currently selected category even if it is inactive.
//       const filteredCategories = categoryList.filter(
//         (category) =>
//           category.is_active !== false ||
//           String(category.id) === String(currentArticleCategory)
//       );

//       setCategories(filteredCategories);
//     } catch (error) {
//       console.error("Category loading error:", error);

//       setCategoryError(
//         error.response?.data?.detail ||
//           "Unable to load categories. Please try again."
//       );

//       setCategories([]);
//     } finally {
//       setCategoryLoading(false);
//     }
//   }, []);

//   // Load article independently.
//   const loadArticle = useCallback(async () => {
//     if (!isEditMode) return;

//     try {
//       const response = await API.get(`articles/${editId}/`);

//       const article = response.data;

//       setFormData({
//         title: article.title || "",
//         summary: article.excerpt || article.subtitle || "",
//         category: String(article.category || ""),
//         language: article.language || "hi",
//         content: article.content || "",
//         is_featured: Boolean(article.is_featured),
//         is_breaking: Boolean(article.is_breaking),
//       });

//       setExistingImage(article.featured_image || "");
//       setImagePreview(article.featured_image || "");

//       return article;
//     } catch (error) {
//       console.error("Article loading error:", error);

//       throw new Error(
//         error.response?.data?.detail ||
//           "Unable to load article. Please refresh the page."
//       );
//     }
//   }, [editId, isEditMode]);

//   const loadEditorData = useCallback(async () => {
//     setLoading(true);
//     setNotice("");

//     try {
//       const article = await loadArticle();

//       await loadCategories(article?.category || "");
//     } catch (error) {
//       setNotice(error.message);
//       setNoticeType("error");

//       // Still attempt to load categories.
//       await loadCategories();
//     } finally {
//       setLoading(false);
//     }
//   }, [loadArticle, loadCategories]);

//   useEffect(() => {
//     loadEditorData();
//   }, [loadEditorData]);

//   // Release temporary image preview URLs.
//   useEffect(() => {
//     return () => {
//       if (imagePreview?.startsWith("blob:")) {
//         URL.revokeObjectURL(imagePreview);
//       }
//     };
//   }, [imagePreview]);

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     setNotice("");
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files?.[0];

//     if (!file) return;

//     const allowedTypes = [
//       "image/jpeg",
//       "image/png",
//       "image/webp",
//       "image/gif",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       setNotice("Please select a JPG, PNG, WEBP or GIF image.");
//       setNoticeType("error");
//       event.target.value = "";
//       return;
//     }

//     if (file.size > 20 * 1024 * 1024) {
//       setNotice("Image size must be less than 20 MB.");
//       setNoticeType("error");
//       event.target.value = "";
//       return;
//     }

//     setSelectedImage(file);
//     setImagePreview(URL.createObjectURL(file));
//     setNotice("");
//   };

//   const removeImage = () => {
//     setSelectedImage(null);
//     setExistingImage("");
//     setImagePreview("");
//     setNotice("");
//   };

//   const handleSubmit = async (event, status) => {
//     event.preventDefault();

//     if (saving) return;

//     setNotice("");

//     if (!formData.title.trim()) {
//       setNotice("Please enter an article headline.");
//       setNoticeType("error");
//       return;
//     }

//     if (!formData.category) {
//       setNotice("Please select an article category.");
//       setNoticeType("error");
//       return;
//     }

//     if (!formData.content.trim()) {
//       setNotice("Please write article content.");
//       setNoticeType("error");
//       return;
//     }

//     try {
//       setSaving(true);

//       const payload = new FormData();

//       payload.append("title", formData.title.trim());
//       payload.append("excerpt", formData.summary.trim());
//       payload.append("subtitle", formData.summary.trim());
//       payload.append("content", formData.content);
//       payload.append("category", formData.category);
//       payload.append("language", formData.language);
//       payload.append("status", status);
//       payload.append("is_featured", String(formData.is_featured));
//       payload.append("is_breaking", String(formData.is_breaking));

//       if (selectedImage instanceof File) {
//         payload.append("featured_image", selectedImage);
//       } else if (isEditMode && !existingImage) {
//         payload.append("featured_image", "");
//       }

//       const uploadConfig = {
//         headers: {
//           "Content-Type": undefined,
//         },
//       };

//       if (isEditMode) {
//         await API.patch(
//           `articles/${editId}/`,
//           payload,
//           uploadConfig
//         );
//       } else {
//         await API.post(
//           "articles/",
//           payload,
//           uploadConfig
//         );
//       }

//       setNoticeType("success");

//       setNotice(
//         status === "DRAFT"
//           ? "Article saved as draft successfully!"
//           : "Article published successfully!"
//       );

//       setTimeout(() => {
//         navigate("/admin/articles");
//       }, 900);
//     } catch (error) {
//       console.error("Article save error:", error);

//       const responseData = error.response?.data;

//       let message = "Unable to save article. Please try again.";

//       if (responseData?.detail) {
//         message = responseData.detail;
//       } else if (
//         responseData &&
//         typeof responseData === "object"
//       ) {
//         const firstError = Object.entries(responseData)[0];

//         if (firstError) {
//           const [field, value] = firstError;

//           message = `${field}: ${
//             Array.isArray(value)
//               ? value.join(", ")
//               : String(value)
//           }`;
//         }
//       }

//       setNotice(message);
//       setNoticeType("error");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const selectedCategory = categories.find(
//     (category) =>
//       String(category.id) === String(formData.category)
//   );

//   const selectedLanguage = languages.find(
//     (item) => item.value === formData.language
//   );

//   if (loading) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-gray-50 text-gray-900 dark:bg-[#0b0c0f] dark:text-white">
//         <div className="text-center">
//           <LoaderCircle
//             size={35}
//             className="mx-auto animate-spin text-[#C8102E]"
//           />

//           <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
//             Loading article editor...
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50/80 px-3 py-5 text-gray-900 dark:bg-[#0b0c0f] dark:text-white sm:px-5 sm:py-7 lg:px-7">
//       <div className="mx-auto max-w-[1450px]">

//         {/* Page Header */}
//         <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//           <div>
//             <Link
//               to="/admin"
//               className="mb-5 inline-flex items-center gap-2 text-xs font-bold text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
//             >
//               <ArrowLeft size={15} />
//               Back to Overview
//             </Link>

//             <div className="flex items-center gap-3">
//               <div className="rounded-xl bg-[#C8102E] p-3 text-white shadow-lg shadow-[#C8102E]/20">
//                 <PenLine size={22} />
//               </div>

//               <div>
//                 <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
//                   {isEditMode ? "Edit Article" : "Create New Article"}
//                 </h1>

//                 <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
//                   Create, review and prepare your next news story.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button
//             type="button"
//             onClick={() => {
//               setPreview(!preview);
//               setNotice("");
//             }}
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-200"
//           >
//             {preview ? <PenLine size={17} /> : <Eye size={17} />}
//             {preview ? "Back to Editor" : "Preview Article"}
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
//           {[
//             {
//               label: "Words Written",
//               value: wordCount,
//               icon: Type,
//             },
//             {
//               label: "Characters",
//               value: formData.content.length,
//               icon: AlignLeft,
//             },
//             {
//               label: "Reading Time",
//               value: `${readingTime} min`,
//               icon: Clock3,
//             },
//             {
//               label: "Article Language",
//               value: selectedLanguage?.label || "Hindi",
//               icon: Languages,
//             },
//           ].map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.label}
//                 className="rounded-xl border border-gray-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#15171c]"
//               >
//                 <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
//                   <Icon size={15} className="text-[#C8102E]" />

//                   <span className="text-[10px] font-semibold sm:text-xs">
//                     {item.label}
//                   </span>
//                 </div>

//                 <p className="mt-2 text-lg font-black text-gray-900 dark:text-white">
//                   {item.value}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Notice */}
//         {notice && (
//           <div
//             className={`mb-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
//               noticeType === "success"
//                 ? "border-green-500/20 bg-green-500/[0.06] text-green-600 dark:text-green-400"
//                 : "border-red-500/20 bg-red-500/[0.06] text-red-600 dark:text-red-400"
//             }`}
//           >
//             {noticeType === "success" ? (
//               <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
//             ) : (
//               <AlertCircle size={17} className="mt-0.5 shrink-0" />
//             )}

//             <span>{notice}</span>
//           </div>
//         )}

//         {/* Category API Warning */}
//         {categoryError && (
//           <div className="mb-5 flex flex-col gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex items-start gap-3 text-amber-700 dark:text-amber-400">
//               <AlertCircle size={18} className="mt-0.5 shrink-0" />

//               <div>
//                 <p className="text-sm font-bold">
//                   Category loading problem
//                 </p>

//                 <p className="mt-1 text-xs">
//                   {categoryError}
//                 </p>
//               </div>
//             </div>

//             <button
//               type="button"
//               onClick={() => loadCategories(formData.category)}
//               disabled={categoryLoading}
//               className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-amber-500/30 px-4 py-2 text-xs font-bold text-amber-700 transition hover:bg-amber-500/10 disabled:opacity-50 dark:text-amber-400"
//             >
//               {categoryLoading ? (
//                 <LoaderCircle size={14} className="animate-spin" />
//               ) : (
//                 <RefreshCw size={14} />
//               )}

//               Retry
//             </button>
//           </div>
//         )}

//         {/* Preview Mode */}
//         {preview ? (
//           <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#15171c]">
//             <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/10 sm:px-8">
//               <div className="flex items-center gap-2">
//                 <Eye size={17} className="text-[#C8102E]" />

//                 <span className="text-sm font-black">
//                   Article Preview
//                 </span>
//               </div>

//               <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold text-amber-600 dark:text-amber-400">
//                 Preview Mode
//               </span>
//             </div>

//             <article className="mx-auto max-w-[850px] px-5 py-8 sm:px-10 sm:py-12">
//               <div className="mb-5 flex flex-wrap items-center gap-3">
//                 <span className="rounded-md bg-[#C8102E] px-3 py-1.5 text-xs font-bold text-white">
//                   {selectedCategory?.name || "Category"}
//                 </span>

//                 <span className="text-xs text-gray-500 dark:text-gray-400">
//                   {selectedLanguage?.label || "Hindi"}
//                 </span>
//               </div>

//               <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
//                 {formData.title || "Your article headline will appear here"}
//               </h1>

//               <p className="mt-5 text-base leading-8 text-gray-500 dark:text-gray-400 sm:text-lg">
//                 {formData.summary || "Your article summary will appear here."}
//               </p>

//               <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-gray-100 py-4 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
//                 <span className="flex items-center gap-1.5 font-bold text-gray-800 dark:text-gray-200">
//                   <UserRound size={14} />
//                   Logged-in Author
//                 </span>

//                 <span>·</span>
//                 <span>{wordCount} words</span>
//                 <span>·</span>
//                 <span>{readingTime} min read</span>
//               </div>

//               {imagePreview && (
//                 <img
//                   src={imagePreview}
//                   alt="Article cover"
//                   className="mt-8 max-h-[480px] w-full rounded-2xl object-cover"
//                 />
//               )}

//               <div className="mt-8 whitespace-pre-wrap text-base leading-9 text-gray-700 dark:text-gray-300 sm:text-lg">
//                 {formData.content ||
//                   "Your complete article content will appear here."}
//               </div>

//               <div className="mt-10 border-t border-gray-100 pt-5 dark:border-white/10">
//                 <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
//                   HINDUSTAN.DIGITAL · देश की खबर, देश की आवाज़
//                 </p>
//               </div>
//             </article>
//           </section>
//         ) : (
//           <form
//             onSubmit={(event) => handleSubmit(event, "PUBLISHED")}
//             className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_330px]"
//           >
//             {/* Main Column */}
//             <div className="space-y-6">
//               <EditorCard
//                 icon={FileText}
//                 title="Article Information"
//                 description="Add your headline and the complete news story."
//               >
//                 <InputField
//                   label="Article Headline"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   placeholder="Write a clear and engaging news headline..."
//                 />

//                 <div>
//                   <FieldLabel>Short Description</FieldLabel>

//                   <textarea
//                     name="summary"
//                     value={formData.summary}
//                     onChange={handleChange}
//                     rows={3}
//                     maxLength={300}
//                     placeholder="Write a short summary that explains the main story..."
//                     className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   />

//                   <p className="mt-2 text-right text-[10px] text-gray-400">
//                     {formData.summary.length}/300 characters
//                   </p>
//                 </div>

//                 <div>
//                   <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
//                     <FieldLabel required>Article Content</FieldLabel>

//                     <span className="text-[10px] font-medium text-gray-400">
//                       {wordCount} words · {readingTime} min read
//                     </span>
//                   </div>

//                   <textarea
//                     name="content"
//                     value={formData.content}
//                     onChange={handleChange}
//                     rows={18}
//                     required
//                     placeholder={`Start writing your complete news article here...

// Write an engaging introduction.

// Add the important facts and details of the story.

// Keep paragraphs clear and easy to read.`}
//                     className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm leading-8 text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   />
//                 </div>
//               </EditorCard>

//               {/* Featured Image */}
//               <EditorCard
//                 icon={ImagePlus}
//                 title="Featured Image"
//                 description="Upload the main visual for your news article."
//               >
//                 <div>
//                   <FieldLabel>Choose Image</FieldLabel>

//                   <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-9 text-center transition hover:border-[#C8102E]/50 hover:bg-[#C8102E]/[0.03] dark:border-white/10 dark:bg-[#0d0f13] dark:hover:border-[#C8102E]/50">
//                     <div className="rounded-xl bg-[#C8102E]/10 p-3 text-[#C8102E]">
//                       <ImagePlus size={25} />
//                     </div>

//                     <p className="mt-3 text-sm font-bold text-gray-800 dark:text-gray-200">
//                       Click to upload an image
//                     </p>

//                     <p className="mt-1 text-xs text-gray-400">
//                       JPG, PNG, WEBP or GIF · Maximum 20 MB
//                     </p>

//                     <input
//                       type="file"
//                       accept="image/jpeg,image/png,image/webp,image/gif"
//                       onChange={handleImageChange}
//                       className="hidden"
//                     />
//                   </label>
//                 </div>

//                 {imagePreview && (
//                   <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">
//                     <img
//                       src={imagePreview}
//                       alt="Featured article"
//                       className="max-h-[350px] w-full object-cover"
//                     />

//                     <button
//                       type="button"
//                       onClick={removeImage}
//                       className="absolute right-3 top-3 rounded-lg bg-black/75 p-2 text-white transition hover:bg-red-600"
//                       aria-label="Remove image"
//                     >
//                       <X size={16} />
//                     </button>

//                     <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2 text-xs text-white">
//                       {selectedImage
//                         ? selectedImage.name
//                         : "Current featured image"}
//                     </div>
//                   </div>
//                 )}
//               </EditorCard>
//             </div>

//             {/* Sidebar */}
//             <aside className="space-y-6 xl:sticky xl:top-6">
//               <EditorCard
//                 icon={Newspaper}
//                 title="Publishing Details"
//                 description="Organize your article."
//               >
//                 {/* Category Dropdown */}
//                 <div>
//                   <div className="mb-2 flex items-center justify-between gap-2">
//                     <FieldLabel>Category</FieldLabel>

//                     <button
//                       type="button"
//                       onClick={() => loadCategories(formData.category)}
//                       disabled={categoryLoading}
//                       className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C8102E] transition hover:underline disabled:opacity-50"
//                     >
//                       {categoryLoading ? (
//                         <LoaderCircle size={12} className="animate-spin" />
//                       ) : (
//                         <RefreshCw size={12} />
//                       )}
//                       Refresh
//                     </button>
//                   </div>

//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     disabled={categoryLoading && categories.length === 0}
//                     className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition hover:border-gray-300 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/[0.07] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0d0f13] dark:text-white"
//                   >
//                     <option value="">
//                       {categoryLoading
//                         ? "Loading categories..."
//                         : categories.length === 0
//                           ? "No categories available"
//                           : "Select Category"}
//                     </option>

//                     {categories.map((category) => (
//                       <option
//                         key={category.id}
//                         value={String(category.id)}
//                       >
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>

//                   {categoryError && (
//                     <p className="mt-2 text-[11px] text-red-500">
//                       {categoryError}
//                     </p>
//                   )}

//                   {!categoryLoading &&
//                     !categoryError &&
//                     categories.length === 0 && (
//                       <p className="mt-2 text-[11px] text-gray-400">
//                         Please create a category from Manage Categories.
//                       </p>
//                     )}
//                 </div>

//                 <SelectField
//                   label="Article Language"
//                   name="language"
//                   value={formData.language}
//                   onChange={handleChange}
//                 >
//                   {languages.map((language) => (
//                     <option
//                       key={language.value}
//                       value={language.value}
//                     >
//                       {language.label}
//                     </option>
//                   ))}
//                 </SelectField>

//                 <div className="space-y-3">
//                   <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-[#C8102E]/40 dark:border-white/10">
//                     <input
//                       type="checkbox"
//                       name="is_featured"
//                       checked={formData.is_featured}
//                       onChange={handleChange}
//                       className="h-4 w-4 accent-[#C8102E]"
//                     />

//                     <span className="text-xs font-semibold">
//                       Featured Article
//                     </span>
//                   </label>

//                   <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 transition hover:border-[#C8102E]/40 dark:border-white/10">
//                     <input
//                       type="checkbox"
//                       name="is_breaking"
//                       checked={formData.is_breaking}
//                       onChange={handleChange}
//                       className="h-4 w-4 accent-[#C8102E]"
//                     />

//                     <span className="text-xs font-semibold">
//                       Breaking News
//                     </span>
//                   </label>
//                 </div>
//               </EditorCard>

//               {/* Publish Actions */}
//               <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#15171c]">
//                 <div className="mb-5 flex items-center gap-3">
//                   <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
//                     <Send size={19} />
//                   </div>

//                   <div>
//                     <h2 className="text-sm font-black">
//                       {isEditMode ? "Update Article" : "Publish Article"}
//                     </h2>

//                     <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//                       Save your changes to the database.
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   disabled={saving}
//                   onClick={(event) => handleSubmit(event, "DRAFT")}
//                   className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-bold text-gray-700 transition hover:border-[#C8102E]/50 hover:bg-[#C8102E]/[0.04] hover:text-[#C8102E] disabled:opacity-50 dark:border-white/10 dark:bg-[#0d0f13] dark:text-gray-200"
//                 >
//                   {saving ? (
//                     <LoaderCircle size={17} className="animate-spin" />
//                   ) : (
//                     <Save size={17} />
//                   )}

//                   Save as Draft
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/15 transition hover:-translate-y-0.5 hover:bg-[#a50d25] hover:shadow-[#C8102E]/25 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {saving ? (
//                     <LoaderCircle size={17} className="animate-spin" />
//                   ) : (
//                     <Send size={17} />
//                   )}

//                   {saving
//                     ? "Saving..."
//                     : isEditMode
//                       ? "Update & Publish"
//                       : "Publish Article"}

//                   {!saving && <ArrowUpRight size={15} />}
//                 </button>

//                 <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-500/[0.07] p-3">
//                   <CheckCircle2
//                     size={14}
//                     className="mt-0.5 shrink-0 text-emerald-500"
//                   />

//                   <p className="text-[10px] leading-5 text-gray-500 dark:text-gray-400">
//                     Your article will be saved directly to the newsroom database.
//                   </p>
//                 </div>
//               </section>

//               {/* Checklist */}
//               <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#15171c]">
//                 <h3 className="mb-4 text-sm font-black">
//                   Writing Checklist
//                 </h3>

//                 <div className="space-y-3">
//                   {[
//                     {
//                       label: "Headline added",
//                       done: Boolean(formData.title.trim()),
//                     },
//                     {
//                       label: "Category selected",
//                       done: Boolean(formData.category),
//                     },
//                     {
//                       label: "Summary written",
//                       done: Boolean(formData.summary.trim()),
//                     },
//                     {
//                       label: "Article content added",
//                       done: Boolean(formData.content.trim()),
//                     },
//                     {
//                       label: "Featured image added",
//                       done: Boolean(imagePreview),
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.label}
//                       className="flex items-center gap-2.5"
//                     >
//                       <CheckCircle2
//                         size={16}
//                         className={
//                           item.done
//                             ? "text-emerald-500"
//                             : "text-gray-300 dark:text-gray-600"
//                         }
//                       />

//                       <span
//                         className={`text-xs ${
//                           item.done
//                             ? "font-semibold text-gray-800 dark:text-gray-200"
//                             : "text-gray-400"
//                         }`}
//                       >
//                         {item.label}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               <Link
//                 to="/admin/articles"
//                 className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs font-bold text-gray-600 transition hover:border-[#C8102E]/40 hover:text-[#C8102E] dark:border-white/10 dark:bg-[#15171c] dark:text-gray-300"
//               >
//                 <FolderOpen size={15} />
//                 View All Articles
//               </Link>
//             </aside>
//           </form>
//         )}

//         <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500">
//           <CheckCircle2 size={13} />
//           HINDUSTAN.DIGITAL · Newsroom Editor
//         </div>
//       </div>
//     </main>
//   );
// }

// export default CreateArticle;
