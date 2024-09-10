import React, { useContext } from "react";
import { Link } from "react-router-dom";
// context
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
// icons
import { IoClose } from "react-icons/io5";

const CartItem = ({ item }) => {
  const { deleteItemFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { setShowSidebar } = useContext(SidebarContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="p-4 w-full border-b-2 border-gray-200">
      <div className="flex justify-between gap-[10px] items-center">
        <div className="flex justify-center items-center basis-[30%] shrink-0 p-2 overflow-hidden">
          <Link to={`/product/${id}`} onClick={() => setShowSidebar(false)}>
            <img className="w-full" src={image} alt={title} />
          </Link>
        </div>
        <div className="flex flex-col gap-2 basis-[70%] justify-between">
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-bold">{title}</h4>
            <button
              onClick={() => deleteItemFromCart(id)}
              className="bg-secondary p-1 font-bold text-lg text-white hover:bg-red-500 transition-all"
            >
              <IoClose />
            </button>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-green-600">
              <div>
                <span className="font-semibold text-gray-600">Unit price:</span>{" "}
                $ {price.toFixed(2)}
              </div>
              <div>
                <span className="font-semibold text-gray-600">
                  Total price:
                </span>{" "}
                $ {(price * amount).toFixed(2)}
              </div>
            </div>
            <div className="flex items-center bg-gray-200 rounded-sm border-gray-400 border-[1px]">
              <button
                className="flex-1 px-2 cursor-pointer hover:bg-gray-400 transition-all"
                onClick={() => decreaseAmount(id)}
              >
                -
              </button>
              <div className="flex-1 px-2 border-gray-400 bg-gray-100 border-r-[1px] border-l-[1px]">{`${amount}`}</div>
              <button
                className="flex-1 px-2 cursor-pointer hover:bg-gray-400 transition-all "
                onClick={() => increaseAmount(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
