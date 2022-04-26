import Highlight from "./Highlight";
import Product from "./Product";

function ProductFeed({ products, query }) {
  return (
    <>
      {query === "" && (
        <>
          <div className="w-[90%] mx-auto py-2">
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
          </div>
          <div className="w-[90%] mx-auto my-2 md:my-10">
            <h2 className="w-full my-3 text-xl font-bold">
              Starting in the next 6 hours
            </h2>
            <div className="overflow-y-hidden overflow-x-scroll scrollbar-hide my-4 scroll-hidden">
              <div className="inline-flex space-x-2">
                {/* <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4"> */}
                {products.slice(2, 4).map((item) => (
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
          </div>
          <div className="w-[90%] mx-auto py-2">
            <h2 className=" md:my-2 text-xl font-bold">
              For your Travel Needs
            </h2>
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
