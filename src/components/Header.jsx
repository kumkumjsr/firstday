
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Sun,
  Moon,
} from "lucide-react";

const categories = [
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

function Header() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header className="border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-[#101114] dark:text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">

        <div className="flex min-h-[88px] items-center justify-between gap-4">

          <button
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <Link to="/" className="min-w-0">
            <div className="text-2xl font-black tracking-tight sm:text-3xl">
              <span className="text-[#C8102E]">HINDUSTAN</span>
              <span className="text-gray-900 dark:text-white">.DIGITAL</span>
            </div>

            <p className="mt-1 text-[10px] font-semibold tracking-[2px] text-gray-500 sm:text-xs">
              देश की खबर, देश की आवाज़
            </p>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">

            <span className="text-sm text-gray-500 dark:text-gray-400">
              देश की हर खबर, सबसे पहले
            </span>

            <div className="h-7 w-px bg-gray-200 dark:bg-gray-700" />

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="rounded-full p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleTheme}
              className="rounded-full border border-gray-200 p-2.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

          </div>

          <div className="flex items-center gap-1 lg:hidden">

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-gray-200 py-3 dark:border-gray-800">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-700">
              <Search size={19} className="text-gray-400" />
              <input
                type="text"
                placeholder="खबरें खोजें..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        )}

        <nav className="hidden items-center justify-between border-t border-gray-200 lg:flex dark:border-gray-800">
          {categories.map((item) => (
            <Link
              key={item}
              to={
                item === "होम"
                  ? "/"
                  : `/category/${encodeURIComponent(item)}`
              }
              className="border-b-2 border-transparent px-2 py-4 text-sm font-semibold transition hover:border-[#C8102E] hover:text-[#C8102E]"
            >
              {item}
            </Link>
          ))}
        </nav>

        {menuOpen && (
          <nav className="grid grid-cols-2 gap-2 border-t border-gray-200 py-4 dark:border-gray-800 lg:hidden">

            {categories.map((item) => (
              <Link
                key={item}
                to={
                  item === "होम"
                    ? "/"
                    : `/category/${encodeURIComponent(item)}`
                }
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item}
              </Link>
            ))}

          </nav>
        )}

      </div>
    </header>
  );
}

export default Header;
