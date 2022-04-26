import Image from "next/image";

import Currency from "react-currency-formatter";

import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function Product({ title, price, description, category, image, rating }) {
  // const [isSale] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col z-30 py-4 px-6 justify-around my-2 h-[350px] md:h-[400px] border rounded-lg bg-white">
      <p className="absolute top-2 right-2 z-10 cursor-pointer">
        <HeartIcon className="h-6 fill-transparent stroke-black hover:fill-mainColor focus:fill-black text-mainText" />
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="my-2">
        <h2 className="line-clamp-2">{title}</h2>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div className="flex justify-around">
          <Currency quantity={price * 51.28} currency="PHP" />
          <p className="inline-flex items-center">
            <StarIcon className="h-5 text-mainColor text-sm md:text-base" />
            {rating.rate}
            <span className="text-gray-400 text-sm md:text-base">
              ({rating.count})
            </span>
          </p>
        </div>

        {/* <div className="flex items-center space-x-2 -mt-5">
        {isSale && <p>Sale!</p>}
      </div> */}
      </div>

      <button className="hover-motion">Add to cart</button>
    </div>
  );
}

export default Product;
