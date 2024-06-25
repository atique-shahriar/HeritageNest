import { useState } from "react";
import RangeSlider from "react-range-slider-input";

import "react-range-slider-input/dist/style.css";

const BidPropertyection = () => {
  const [value, setValue] = useState([290, 300]);
  const [tooltipValues, setTooltipValues] = useState([290, 300]);

  const handleInput = (newValue) => {
    setValue(newValue);
    setTooltipValues(newValue.map((val) => Math.round(val)));
  };
  return (
    <div className=" bg-[#ecf5ff] rounded-lg p-6 mb-6">
      <p className="text-[#6B7280] text-lg">Property Value</p>
      <h3 className="text-[#252323] font-bold text-2xl mt-1 mb-3">$ 300k -$ 310k</h3>
      <p className="text-[#6B7280] text-lg font-medium leading-tight mb-8">Your bid can not be than 10% of the property Minimum value.</p>
      <form>
        <div>
          <label>Min</label>
          <input
            type="text"
            className=" rounded-md w-full py-3 px-4 mt-1"
            placeholder="Write minimum value"
            defaultValue="$ 280k"
          />
        </div>
        <div className="mt-2">
          <label>Max</label>
          <input
            type="text"
            className=" rounded-md w-full py-3 px-4 mt-1"
            placeholder="Write minimum value"
            defaultValue="$ 305k"
          />
        </div>
        <div className="mt-6 relative">
          <RangeSlider
            id="range-slider-yellow"
            className="h-6 rounded-xl"
            step={"any"}
            min={280}
            max={305}
            value={value}
            onInput={handleInput}
          />
          <div className="absolute -bottom-7 transform -translate-x-1/2 text-black text-md font-medium left-6">$ {tooltipValues[0]}k</div>
          <div className="absolute -bottom-7 transform -translate-x-1/2 text-black text-md font-medium -right-6">$ {tooltipValues[1]}k</div>
        </div>
        <div className="w-full flex items-center">
          <button className="mt-12 rounded-md mx-auto bg-[#0059b1] text-white font-medium px-6 py-3">Bid Property</button>
        </div>
      </form>
    </div>
  );
};

export default BidPropertyection;
