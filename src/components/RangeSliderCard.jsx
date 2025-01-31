import React, { useState } from "react";

const RangeSliderCard = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  return (
    <div className=" flex p-6 w-[400px]  flex-col gap-10">
      {/* upper value */}
      <p>$0</p>

      <div className=" w-full relative ">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full cursor-pointer bg-transparent  "
        /> 
        {/* dot-1 */}
        <div className=" w-4 h-4 rounded-full bg-red-500 absolute top-[1px] left-10 -z-40"></div>
        {/* dot-2*/}
        <div></div>
        {/* dot-3 */}
        <div></div>
        {/* dot-4 */}
        <div></div>
      </div>
      {/* Lower value */}
      <p>{sliderValue}</p>
    </div>
  );
};

export default RangeSliderCard;
