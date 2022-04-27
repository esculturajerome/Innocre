import Image from "next/image";

function RowBanners() {
  return (
    <div className="md:flex gap-2 hidden justify-around">
      <Image
        src="/images/small-banner-1.jpg"
        objectFit="contain"
        height={200}
        width={600}
        objectPosition="center"
      />
      <Image
        src="/images/small-banner-2.png"
        objectFit="contain"
        height={200}
        width={600}
        objectPosition="center"
      />
      <div className="hidden lg:inline">
        <Image
          src="/images/small-banner-3.jpg"
          objectFit="contain"
          height={200}
          width={600}
          objectPosition="center"
        />
      </div>
    </div>
  );
}

export default RowBanners;
