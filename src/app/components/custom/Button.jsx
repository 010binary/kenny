import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Buttons({ text, textcolor, textweight }) {
  return (
    <>
      <div className="flex items-center">
        <Button className="bg-[#E7F0F2] rounded-full p-1.5 hover:bg-slate-400">
          <ArrowRight className="text-[#02365C] w-7 h-7" />
        </Button>
        <span
          className={`${textweight ? `font-${textweight}` : "font-normal"} ${
            textcolor ? `text-${textcolor}` : "text-[#02365C]"
          } pl-2 text-2xl`}
        >
          {text}
        </span>
      </div>
    </>
  );
}
