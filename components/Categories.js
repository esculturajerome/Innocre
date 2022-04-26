import {
  CameraIcon,
  ChipIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
} from "@heroicons/react/solid";
import SmallCard from "./SmallCard";

function Categories() {
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
      text: "Electronic",
      icon: ChipIcon,
    },
    {
      id: 4,
      text: "Camera",
      icon: CameraIcon,
    },
  ];
  return (
    <div className="overflow-y-hidden overflow-x-scroll scroll-hidden">
      <div className="inline-flex space-x-6 ml-1">
        {categories.map((category) => (
          <SmallCard
            key={category.id}
            category={category.text}
            Icon={category.icon}
          />
          // <button
          //   key={category}
          //   className="border md:bg-[#f2f2f2] hover:border-black rounded-full px-4 md:py-1  focus:bg-[#222222] text-[#222222] focus:text-white"
          // >
          //   <span className="text-sm tracking-wider">{category}</span>
          // </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
