import Highlight from "./Highlight";
import Product from "./Product";

function ProductFeed({ products, query }) {
  const highlights = [
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "Camera",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 },
    },
  ];
  return (
    <>
      {query === "" && (
        <>
          <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-[90%] mx-auto">
            <div className="col-span-full">
              <h2 className="w-full md:my-2 text-xl font-bold mt-6 uppercase">
                For Work From Home Setup
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisi cing elit. Sequi
                nemo voluptatum voluptatibus.
              </p>
            </div>
            {products.slice(0, products.length).map((item) => (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
          <div className="w-[90%] mx-auto my-8 md:my-10">
            <h2 className="w-full my-3 text-xl font-bold">
              Starting in the next 6 hours
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisi cing elit. Sequi
              nemo voluptatum voluptatibus.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              {highlights.slice(0, 2).map((item) => (
                <Highlight
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {query !== "" && (
        <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3  w-[90%] mx-auto">
          <div className="col-span-full">
            <h2 className="w-full md:my-2 text-xl font-bold">
              Results for {query}{" "}
              <span className="text-gray-400">({products.length})</span>
            </h2>
          </div>
          {products.slice(0, products.length).map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductFeed;

// Scroll Row
{
  /* <div className="w-[90%] mx-auto py-2">
<h2 className=" md:my-2 text-xl font-bold">Flash Deals!</h2>
<div className="overflow-y-hidden overflow-x-scroll scroll-hidden">
  <div className="inline-flex space-x-3 ml-1">
    {products.slice(0, 7).map((item) => (
      <Product
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
        rating={item.rating}
      />
    ))}
  </div>
</div>
</div> */
}
