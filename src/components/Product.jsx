import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
// icons
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
  const { id, category, rating, title, price, image } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="border border-gray-200 group relative overflow-hidden select-none shadow-lg rounded-md">
      {/* Image */}
      <div className="flex items-center justify-center h-[300px]">
        <div className="h-1/2 max-w-[160px] group-hover:scale-110 transition-all transition-duration-300">
          <img className="h-full" src={image} alt={title} />
        </div>
        {/* Buttons */}
        <div className="absolute top-[20px] right-[-55px] text-2xl group-hover:right-5 transition-all transition-duration-300 flex justify-center gap-5 flex-col">
          <div
            onClick={() => addItemToCart(product, id)}
            className="cursor-pointer flex justify-center items-center w-[40px] h-[40px] bg-primary text-white shadow-lg"
          >
            <BsPlus />
          </div>
          <Link to={`/product/${id}`}>
            <div className="flex justify-center items-center w-[40px] h-[40px] shadow-lg bg-white">
              <BsEyeFill />
            </div>
          </Link>
        </div>
      </div>
      {/* Title & Price */}
      <Link to={`/product/${id}`}>
        <div className="p-3 overflow-hidden">
          <div className="text-gray-400 font-semibold">{category}</div>
          <div className="relative text-scroll-animation overflow-hidden mb-1">
            <h2 className="whitespace-nowrap">{title}</h2>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-green-500 font-semibold">${price}</span>
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-300" />
              {rating.rate} / 5
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
