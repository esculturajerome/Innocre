import Image from "next/image";

import Currency from "react-currency-formatter";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function Highlight({ id, title, price, description, category, image, rating }) {
  return (
    <div className="grid grid-cols-highlights 1fr] gap-2 border rounded-lg relative p-1 md:p-3 items-center text-left w-full h-[230px]">
      <p className="absolute top-2 right-2 z-10 cursor-pointer">
        <HeartIcon className="h-6 fill-transparent stroke-black hover:fill-mainColor focus:fill-black " />
      </p>
      <div className="bg-white">
        <Image src={image} height={150} width={150} objectFit="contain" />
      </div>
      <div className="flex flex-col justify-center pr-2">
        <h2 className="mr-6 tracking-tight leading-4 line-clamp-2">{title}</h2>
        <p className="text-xs my-1 line-clamp-2">{description}</p>
        <div className="inline-flex gap-4 text-sm items-center">
          <Currency quantity={price * 51.28} currency="PHP" />
          <p className="inline-flex text-sm items-center">
            <StarIcon className="h-5 text-mainColor" />
            {rating.rate}
            <span className="text-gray-400 ">({rating.count})</span>
          </p>
        </div>

        <button className="simple-btn mt-3">Add to cart</button>
      </div>
    </div>
  );
}

export default Highlight;
