import React, { useContext, useState } from "react";
// Context
import { ProductContext } from "../contexts/ProductsContext";
// Commponents
import Hero from "../components/Hero";
import Product from "../components/Product";
import Loading from "../components/Loading";

const Home = () => {
  const { products, categories, isLoading, isError } =
    useContext(ProductContext);
  const [myCategory, setMyCategory] = useState("all");

  const filterdProducts = products.filter((item) => {
    return myCategory !== "all" ? Boolean(item.category === myCategory) : true;
  });

  return (
    <div>
      <Hero />
      <div className="container mx-auto py-5 my-5">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          <div
            id="shopping-section"
            className="flex flex-col gap-5 scroll-m-[100px]"
          >
            {/* Categories */}
            <div>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="categories"
                  className="text-lg font-medium text-secondary"
                >
                  Category:{" "}
                </label>
                <select
                  name="categories"
                  id="categories"
                  value={myCategory}
                  onChange={() => setMyCategory(event.target.value)}
                  className="bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 text-gray-700 p-2 cursor-pointer"
                >
                  {["all", ...categories].map((cat, index) => {
                    return (
                      <option key={index} value={cat}>
                        {cat}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[2rem] overflow-hidden">
              {filterdProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
