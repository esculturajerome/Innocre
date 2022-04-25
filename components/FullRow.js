import Image from "next/image";

function FullRow() {
  return (
    <div className="grid md:grid-cols-fullRow my-12 w-full items-center">
      <div className="ml-[5%] md:ml-[20%]">
        <h2 className="text-3xl lg:text-5xl">
          Shop Airbnb <br />
          gift cards
        </h2>
        <button className="bg-[#222222] text-white hover:bg-black py-4 px-6 rounded-lg mt-6">
          Learn More
        </button>
      </div>
      <div className="hidden md:inline-block text-right">
        <Image
          src="/images/cards.webp"
          width={1000}
          height={500}
          objectFit="contain"
        />
      </div>
      <div className="md:hidden text-right">
        <Image
          src="/images/cards-mobile.webp"
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default FullRow;
