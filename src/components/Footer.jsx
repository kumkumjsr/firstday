
import { Link } from "react-router-dom";
import { ArrowUpRight, UserRound } from "lucide-react";

const footerLinks = [
  "होम",
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

const importantLinks = [
  "हमारे बारे में",
  "संपर्क करें",
  "गोपनीयता नीति",
  "नियम एवं शर्तें",
];

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#101114]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-black tracking-tight">
                <span className="text-[#C8102E]">HINDUSTAN</span>
                <span className="text-gray-900 dark:text-white">.DIGITAL</span>
              </h2>
            </Link>

            <p className="mt-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
              देश की खबर, देश की आवाज़
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400">
              HINDUSTAN.DIGITAL पर देश, दुनिया, राजनीति, बिजनेस,
              खेल और टेक्नोलॉजी से जुड़ी खबरों के लिए जुड़े रहें।
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { name: "Facebook", symbol: "f" },
                { name: "Instagram", symbol: "◎" },
                { name: "YouTube", symbol: "▶" },
                { name: "X", symbol: "𝕏" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-lg font-bold text-gray-600 transition hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white dark:border-gray-700 dark:text-gray-300"
                >
                  {social.symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-base font-black text-gray-900 dark:text-white">
              महत्वपूर्ण लिंक
            </h3>

            <div className="mt-5 space-y-3">
              {importantLinks.map((item) => (
                <a
                  href="#"
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
                >
                  <ArrowUpRight size={14} />
                  {item}
                </a>
              ))}
            </div>

            {/* Admin Login */}
            <div className="mt-6 border-t border-gray-200 pt-5 dark:border-gray-800">
              <Link
                to="/admin-login"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#C8102E]/30 bg-[#C8102E]/5 px-4 py-3 text-sm font-bold text-[#C8102E] transition duration-300 hover:border-[#C8102E] hover:bg-[#C8102E] hover:text-white dark:border-[#C8102E]/40 dark:bg-[#C8102E]/10"
              >
                <UserRound size={17} />
                Admin Login
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* News Categories */}
          <div>
            <h3 className="text-base font-black text-gray-900 dark:text-white">
              न्यूज़ कैटेगरी
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((item) => (
                <Link
                  to={
                    item === "होम"
                      ? "/"
                      : `/category/${encodeURIComponent(item)}`
                  }
                  key={item}
                  className="text-sm text-gray-500 transition hover:text-[#C8102E] dark:text-gray-400"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} HINDUSTAN.DIGITAL. All rights reserved.
          </p>

          <p>Made with care for readers across India.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

