import Image from "next/image";

function Card({ category, subText, url, imageLink }) {
  return (
    <div className="relative w-[400px] sm:w-[450px] md:w-[500px] lg:w-[600px]">
      <Image
        src={imageLink}
        objectFit="cover"
        width={700}
        height={400}
        className="rounded-lg"
      />
      <div className="absolute top-0 left-0  h-full flex flex-col justify-between ml-6">
        <div className="mt-6 w-[180px]">
          <p className="text-sm">{category}</p>
          <h2 className="text-lg leading-5">{subText}</h2>
        </div>
        <button className=" w-[100px]  mb-6 p-2 bg-white text-[#222222] rounded-lg hover-motion">
          Show All
        </button>
      </div>
    </div>
  );
}

export default Card;
