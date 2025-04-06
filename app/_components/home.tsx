import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="overflow-hidden bg-[#034833] relative mr-30 ml-30 rounded-4xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-8 md:p-12 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Visa Made Easy
              <br />
              Dreams Made
              <br />
              Possible
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 group rounded-full"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 flex items-center rounded-full"
              >
                <Play className=" fill-white rounded-full w-full h-full" />
                Watch Our Videos
              </Button>
            </div>
          </div>

          {/* Right Content - Placeholder */}

          {/* Background Elements */}
          <div className="absolute left-0 bottom-0 opacity-95 z-0">
            <Image
              src="/assets/images/eiffel_tower.png"
              width={300}
              height={300}
              alt=""
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          {/* Green Circle Element */}
          {/* Right Content - Placeholder with green circle behind it */}
          <div className="relative">
            {/* Green Circle Element - positioned behind the placeholder */}
            <div className="absolute right-0 top-[300px] w-[280px] h-[300px] bg-[#83CD20] rounded-full translate-x-1/3 -translate-y-1/2 z-0">
              <div className="absolute right-0 bottom-12 opacity-95 z-0">
                <Image
                  src="/assets/images/eiffel_tower1.png"
                  width={300}
                  height={300}
                  alt=""
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Placeholder area */}
            <div className="w-[470px] h-full mt-20 relative z-10">
              <img src="/assets/images/tourist.jpg" alt="tourist" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
