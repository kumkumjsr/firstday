
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowLeft,
  Newspaper,
  ShieldCheck,
} from "lucide-react";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Backend authentication will be connected soon!");
  };

  return (
    <main className="flex min-h-[85vh] items-center justify-center bg-gray-50 px-4 py-12 dark:bg-[#0b0c0f]">
      <div className="w-full max-w-[440px]">

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#C8102E]"
        >
          <ArrowLeft size={17} />
          Back to Website
        </Link>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#141519]">

          <div className="bg-[#C8102E] px-7 py-9 text-center text-white">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Newspaper size={32} />
            </div>

            <h1 className="mt-5 text-2xl font-black tracking-tight">
              HINDUSTAN.DIGITAL
            </h1>

            <p className="mt-2 text-sm text-white/80">
              News Management Portal
            </p>
          </div>

          <div className="p-7 sm:p-9">

            <div className="mb-8">
              <h2 className="text-2xl font-black">
                Admin Login
              </h2>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Sign in to manage your news platform.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f]">
                  <Mail size={18} className="shrink-0 text-gray-400" />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="admin@example.com"
                    required
                    className="w-full bg-transparent py-3.5 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#C8102E] dark:border-white/10 dark:bg-[#0b0c0f]">
                  <LockKeyhole size={18} className="shrink-0 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full bg-transparent py-3.5 text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                    className="text-gray-400 transition hover:text-[#C8102E]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition hover:bg-[#a90d27]"
              >
                <LockKeyhole size={17} />
                Sign In to Dashboard
              </button>

            </form>

            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={16} className="text-green-600" />
              Authorized administrators only
            </div>

          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} HINDUSTAN.DIGITAL. All rights reserved.
        </p>

      </div>
    </main>
  );
}

export default AdminLogin;
