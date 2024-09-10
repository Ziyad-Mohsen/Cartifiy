import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Contexts
import { ProductContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
// Components
import Loading from "../components/Loading";
import Error from "../components/Error";
// Icons
import { FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const ProductDetails = () => {
  const { id } = useParams();
  const { API_URL } = useContext(ProductContext);
  const { addItemToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [fetchingState, setFetchingState] = useState({
    isLoading: true,
    isError: false,
    errorMessage: "",
  });
  const { image, price, rating, title, description } = product;
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(API_URL + `/${id}`);
        const data = await response.json();
        setProduct(data);
        // Stop loading
        setFetchingState({ ...fetchingState, isLoading: false });
      } catch (err) {
        setFetchingState({
          ...fetchingState,
          isLoading: false,
          isError: true,
          errorMessage: err.message,
        });
      }
    }
    fetchProduct();
  }, [id]);
  return (
    <div className="container mx-auto min-h-screen flex items-center mt-[100px] lg:mt-0 mb-[100px]">
      {fetchingState.isLoading ? (
        <Loading />
      ) : fetchingState.isError ? (
        <Error />
      ) : (
        <div className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-white rounded-lg shadow-lg">
          {/* Product Image */}
          <div className="w-full lg:w-[500px] h-[400px] lg:h-[500px] rounded-lg overflow-hidden flex items-center justify-center">
            <img
              className="w-1/2 md:w-1/4 lg:w-1/2"
              src={image}
              alt={title}
              onClick={() => setShowImage(true)}
            />
          </div>
          {/* Product Details */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
            <div className="text-xl text-green-600 font-medium">${price}</div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <div className="flex gap-4 items-center mt-4">
              <button
                onClick={() => addItemToCart(product, parseInt(id))}
                className="w-fit bg-primary text-white hover:bg-secondary transition-all py-[8px] px-[12px] font-bold shadow-lg rounded-lg"
              >
                Add To Cart
              </button>
              <div className="flex md:items-center md:gap-3 text-gray-500 flex-col md:flex-row">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {rating.rate} / 5
                </div>
                <div className="flex items-center gap-1">
                  <IoPerson />
                  {rating.count} reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
