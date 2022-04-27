import Image from "next/image";

import Currency from "react-currency-formatter";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function Highlight({ id, title, price, description, category, image, rating }) {
  return (
    <div className="grid grid-cols-highlights 1fr] gap-2 border rounded-lg relative p-1 md:p-3 items-center text-left w-full h-[230px] bg-[#f2f2f2]">
      <p className="absolute top-2 right-2 z-10 cursor-pointer">
        <HeartIcon className="h-6 fill-transparent stroke-black hover:fill-mainColor focus:fill-black " />
      </p>
      <Image src={image} height={150} width={150} objectFit="contain" />
      <div className="flex flex-col justify-center pr-2">
        <p className="inline-flex text-sm">
          <StarIcon className="h-5 text-yellow-400" />
          {rating.rate}
          <span className="text-gray-400 ">({rating.count})</span>
        </p>
        <h2 className="mr-6 my-2 tracking-normal leading-5 line-clamp-2">
          {title}
        </h2>
        {/* <p className="text-xs my-1 line-clamp-2">{description}</p> */}
        {/* <div className="inline-flex gap-4 text-sm items-center">
          <Currency quantity={price * 51.28} currency="PHP" />
        
        </div> */}

        <button className="flex bg-white text-xs justify-around p-2 rounded-md">
          <div className="uppercase">Add to bag</div>
          <Currency quantity={price * 51.28} currency="PHP" />
        </button>
      </div>
    </div>
  );
}

export default Highlight;
