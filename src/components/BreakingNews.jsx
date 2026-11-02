
import { Radio } from "lucide-react";

function BreakingNews() {
  return (
    <div className="bg-[#C8102E] text-white">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 sm:px-6">
        <div className="flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-wider">
          <Radio size={17} />
          <span>Breaking News</span>
        </div>

        <div className="h-5 w-px bg-white/40" />

        <p className="truncate text-sm font-medium">
          HINDUSTAN.DIGITAL पर आपका स्वागत है — देश और दुनिया की खबरों के लिए जुड़े रहें।
        </p>
      </div>
    </div>
  );
}

export default BreakingNews;
