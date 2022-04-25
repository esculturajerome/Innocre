import Image from "next/image";

function Card({ category, subText, url, imageLink }) {
  return (
    <div className="relative w-[300px] md:w-[500px] lg:w-[600px]">
      <div>
        <Image
          src={imageLink}
          objectFit="cover"
          width={700}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-0 left-0  h-full flex flex-col justify-between ml-6">
        <div className="mt-6 w-[180px]">
          <p className="text-sm">{category}</p>
          <h2 className="text-lg leading-5">{subText}</h2>
        </div>
        <button className="bg-white text-[#222222] rounded-md  w-[100px] text-sm mb-6 p-2">
          Show All
        </button>
      </div>
    </div>
  );
}

export default Card;
