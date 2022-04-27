import Image from "next/image";

import Currency from "react-currency-formatter";

import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function Product({ title, price, description, category, image, rating }) {
  // const [isSale] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col z-30 py-4 px-3 justify-around h-[280px] md:h-[300px]  rounded-sm bg-white  sm:max-w-[200px]">
      <button className="absolute top-2 right-2 z-10 cursor-pointer">
        <HeartIcon className="h-6 fill-transparent stroke-black hover:fill-mainColor focus:fill-black text-mainText" />
      </button>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <p className="inline-flex items-center gap-1">
        <StarIcon className="h-5 text-mainColor text-sm md:text-base" />
        {rating.rate}
        <span className="text-gray-400 text-sm md:text-base">
          ({rating.count})
        </span>
      </p>
      <div className="my-2">
        <h2 className="line-clamp-2 text-sm hover:underline focus:underline">
          {title}
        </h2>
        {/* <p className="text-sm my-2 line-clamp-2">{description}</p> */}

        {/* <div className="flex items-center space-x-2 -mt-5">
        {isSale && <p>Sale!</p>}
      </div> */}
      </div>
      <button className="flex bg-secondaryColor text-xs justify-around p-2 rounded-md">
        <div className="uppercase">Add to bag</div>
        <Currency quantity={price * 51.28} currency="PHP" />
      </button>
    </div>
  );
}

export default Product;
