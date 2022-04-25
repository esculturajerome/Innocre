import React from "react";
import Highlight from "./Highlight";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <>
      <h2 className="w-full mt-8 md:mt-14 text-lg">
        Plan a trip with help from local Hosts around the world
      </h2>
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {products.slice(0, 4).map((item) => (
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
        <div className="my-8 md:mt-12 col-span-full">
          <h2 className="w-full my-3 text-lg">Starting in the next 6 hours</h2>
          <div className="overflow-y-hidden overflow-x-scroll scrollbar-hide my-4 scroll-hidden">
            <div className="inline-flex space-x-2">
              {/* <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4"> */}
              {products.slice(4, 7).map((item) => (
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
        <div className="col-span-full">
          <h2 className="w-full mt-8 md:mt-14 text-lg">
            Plan a trip with help from local Hosts around the world
          </h2>
        </div>
        {products.slice(7, products.length).map((item) => (
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
    </>
  );
}

export default ProductFeed;
