import Image from "next/image";

function Banner({ imageLink }) {
  return (
    <div className="relative h-[150px] sm:h-[300px] md:h-[300px] lg:h-[450px] xl:h-[600] 2xl:h-[700px]">
      <Image
        src={`/images/${imageLink}`}
        objectFit="contain"
        layout="fill"
        objectPosition="center"
      />
      <div className="absolute top-1/2 text-center w-full">
        {/* <p className="text-sm text-white">Not sure where to go?</p> */}
        {/* <button className="button">Show All</button> */}
      </div>
    </div>
  );
}

export default Banner;
