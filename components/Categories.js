import { useState, useEffect } from "react";
import {
  CameraIcon,
  ChipIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  XIcon,
} from "@heroicons/react/solid";
import SmallCard from "./SmallCard";

function Categories({ handleClick }) {
  const [onClear, setOnClear] = useState(false);
  const categories = [
    {
      id: 1,
      text: "Desktop",
      icon: DesktopComputerIcon,
    },
    {
      id: 2,
      text: "Smartphone",
      icon: DeviceMobileIcon,
    },
    {
      id: 3,
      text: "Electronics",
      icon: ChipIcon,
    },
    {
      id: 4,
      text: "Camera",
      icon: CameraIcon,
    },
  ];

  const handleOnClick = (value) => {
    handleClick(value);
    setOnClear(true);
  };

  const handleOnClear = () => {
    handleClick("");
    setOnClear(false);
  };

  return (
    <section className="w-[90%] mx-auto mt-6">
      <div className="overflow-y-hidden overflow-x-scroll scroll-hidden">
        <div className="inline-flex space-x-2 md:space-x-4 ml-1">
          {onClear && (
            <button
              className="border bg-red-200 hover:border-black rounded-full px-4 md:py-1  focus:bg-mainText text-mainText focus:text-white"
              onClick={handleOnClear}
            >
              <span className="text-sm tracking-wider">X</span>
            </button>
          )}
          {categories.map((category) => (
            // <SmallCard
            //   key={category.id}
            //   category={category.text}
            //   Icon={category.icon}
            // />
            <button
              key={category.id}
              className="border md:bg-[#f2f2f2] hover:border-black rounded-full px-4 md:py-1  focus:bg-mainText text-mainText focus:text-white"
              onClick={() => handleOnClick(category.text)}
            >
              <span className="text-sm tracking-wider">{category.text}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
