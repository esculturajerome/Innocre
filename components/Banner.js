import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]">
      <Image
        src="/images/full-banner-2.jpg"
        objectFit="cover"
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
