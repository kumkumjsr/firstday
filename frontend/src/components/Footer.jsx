import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const footerLinks = [
  { key: "home", hindi: "होम" },
  { key: "country", hindi: "देश" },
  { key: "world", hindi: "दुनिया" },
  { key: "politics", hindi: "राजनीति" },
  { key: "business", hindi: "बिजनेस" },
  { key: "sports", hindi: "खेल" },
  { key: "entertainment", hindi: "मनोरंजन" },
  { key: "technology", hindi: "टेक्नोलॉजी" },
  { key: "education", hindi: "शिक्षा" },
  { key: "video", hindi: "वीडियो" },
];

function Footer() {
  const { t } = useLanguage();

  const getCategoryPath = (item) => {
    if (item.hindi === "होम") return "/";
    if (item.hindi === "वीडियो") return "/videos";

    return `/category/${encodeURIComponent(item.hindi)}`;
  };

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#101114]">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

        {/* =====================================================
            MAIN FOOTER CONTENT
        ====================================================== */}

        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">

          {/* =====================================================
              BRAND SECTION
          ====================================================== */}

          <div className="min-w-0 lg:col-span-2">
            <Link
              to="/"
              className="inline-block max-w-full"
              aria-label="Hindustan Digital Home"
            >
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                <span className="text-[#C8102E]">
                  HINDUSTAN
                </span>

                <span className="text-gray-900 dark:text-white">
                  .DIGITAL
                </span>
              </h2>
            </Link>

            {/* Tagline */}
            <p className="mt-3 max-w-full text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400">
              {t("tagline")}
            </p>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 dark:text-gray-400">
              {t("footerDescription")}
            </p>

            {/* =================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                {
                  name: "Facebook",
                  symbol: "f",
                },
                {
                  name: "Instagram",
                  symbol: "◎",
                },
                {
                  name: "YouTube",
                  symbol: "▶",
                },
                {
                  name: "X",
                  symbol: "𝕏",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-gray-200
                    text-lg font-bold
                    text-gray-600
                    transition-all duration-200
                    hover:border-[#C8102E]
                    hover:bg-[#C8102E]
                    hover:text-white
                    dark:border-gray-700
                    dark:text-gray-300
                  "
                >
                  {social.symbol}
                </a>
              ))}
            </div>
          </div>

          {/* =====================================================
              NEWS CATEGORIES
          ====================================================== */}

          <div className="min-w-0">
            <h3 className="text-base font-black text-gray-900 dark:text-white">
              {t("newsCategories")}
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 sm:gap-x-8">
              {footerLinks.map((item) => (
                <Link
                  to={getCategoryPath(item)}
                  key={item.key}
                  className="
                    min-w-0
                    text-sm
                    leading-6
                    text-gray-500
                    transition-colors
                    hover:text-[#C8102E]
                    dark:text-gray-400
                  "
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>

            {/* =================================================
                ADMIN LOGIN
            ================================================== */}

            <div className="mt-7">
              <Link
                to="/admin-login"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-gray-700
                  transition-all
                  duration-200
                  hover:border-[#C8102E]
                  hover:bg-[#C8102E]
                  hover:text-white
                  sm:w-auto
                  dark:border-gray-700
                  dark:bg-[#17181c]
                  dark:text-gray-300
                  dark:hover:border-[#C8102E]
                  dark:hover:bg-[#C8102E]
                  dark:hover:text-white
                "
              >
                {t("adminLogin")}
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-gray-200
            pt-6
            text-xs
            text-gray-500
            dark:border-gray-800
            dark:text-gray-400
            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-4
          "
        >
          <p className="leading-5">
            © {new Date().getFullYear()} HINDUSTAN.DIGITAL.{" "}
            {t("allRightsReserved")}
          </p>

          <p className="leading-5 sm:text-right">
            {t("madeWithCare")}
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;