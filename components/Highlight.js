import Image from "next/image";

import Currency from "react-currency-formatter";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function Highlight({ id, title, price, description, category, image, rating }) {
  return (
    <>
      <button className="grid grid-cols-highlights 1fr] gap-2 border rounded-lg relative p-1 md:p-3 items-center text-left w-full">
        <p className="absolute top-2 right-2 z-10 cursor-pointer">
          <HeartIcon className="h-6 fill-transparent stroke-black hover:fill-[#ff385c] focus:fill-black " />
        </p>
        <div className="bg-white">
          <Image src={image} height={150} width={150} objectFit="contain" />
        </div>
        <div className="flex flex-col justify-center pr-2">
          <p className="text-sm mr-6 tracking-tight leading-4 line-clamp-2">
            {title}
          </p>
          <p className="text-xs my-1 line-clamp-2">{description}</p>
          <div className="inline-flex gap-4 text-sm items-center">
            <Currency quantity={price * 51.28} currency="PHP" />
            <p className="inline-flex text-xs items-center">
              <StarIcon className="h-5 text-[#ff385c]" />
              {rating.rate}
              <span className="text-gray-400 ">({rating.count})</span>
            </p>
          </div>

          <div className="border rounded-md p-2 px-1 w-[80px] text-center text-xs mt-3">
            Add to cart
          </div>
        </div>
      </button>
    </>
  );
}

export default Highlight;
