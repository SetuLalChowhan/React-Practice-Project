import React, { useState } from "react";
import RotatingText from "@/components/common/RotatingText";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RangeSliderCard from "@/components/RangeSliderCard";
import { MarqueeDemoVertical } from "./MarqueeDemoVertical";

const About = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleMouseEnter = () => setIsPopoverOpen(true);
  const handleMouseLeave = () => setIsPopoverOpen(false);

  return (
    <div className="w-full flex justify-center items-center mt-10">
      {/* <div className="flex gap-20 text-[62px] items-center">
        <span className="text-blue-500">WE ARE</span> <RotatingText />
      </div> */}
<RangeSliderCard/>
{/* 
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <button
            className="relative bg-black text-lg p-4 text-white group"
            onMouseEnter={handleMouseEnter} // Open on hover
            onMouseLeave={handleMouseLeave} // Close on hover out
          >
            <span>Hover me</span>
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="center"
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-3 py-1 bg-black text-white text-sm rounded z-50 opacity-100"
        >
          <span>Nice bro</span>
        </PopoverContent>
      </Popover> */}
<MarqueeDemoVertical/>
      
    </div>
  );
};

export default About;
