import Image from "next/image";

import Currency from "react-currency-formatter";

import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function Product({ id, title, price, description, category, image, rating }) {
  // const [isSale] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col z-30 p-4 justify-around my-2 md:my-5 h-[350px] md:h-[400px]">
      <p className="absolute top-2 right-2 z-10">
        <HeartIcon className="h-6 text-yellow-500 hover:text-yellow-200" />
      </p>
      <Image src={image} height={150} width={150} objectFit="contain" />

      <div className="my-2">
        <h2 className="line-clamp-2">{title}</h2>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div className="inline-flex gap-4">
          <Currency quantity={price * 51.28} currency="PHP" />
          <p className="inline-flex">
            <StarIcon className="h-5 text-[#ff385c]" />
            {rating.rate}
            <span className="text-gray-400">({rating.count})</span>
          </p>
        </div>

        {/* <div className="flex items-center space-x-2 -mt-5">
        {isSale && <p>Sale!</p>}
      </div> */}
      </div>

      <button className="button">Add to cart</button>
    </div>
  );
}

export default Product;
