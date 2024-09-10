import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
// icons
import { BiSolidRightArrowAlt, BiTrashAlt } from "react-icons/bi";

const SideBar = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const { cartItems, setCartItems, totalPrice, totalItems } =
    useContext(CartContext);
  return (
    <div
      className={`${
        showSidebar ? "right-0" : "-right-full"
      } fixed top-0 w-full md:w-[50vw]  h-[100vh] bg-white z-10 shadow-xl transition-all duration-300 px-3 py-1 flex flex-col`}
    >
      <div className="flex justify-between items-center border-b-2 border-[#eee] uppercase font-bold py-4">
        <div>Shopping Bag {`(${totalItems()})`}</div>
        <div
          className="text-3xl cursor-pointer mr-1 hover:m-0 transition-all"
          onClick={() => setShowSidebar(false)}
        >
          <BiSolidRightArrowAlt />
        </div>
      </div>
      <div className="max-w-[calc(100vh - 65px - 70px)] overflow-y-auto">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="mt-auto flex flex-col">
        <div className="flex justify-between items-center py-3 text-xl">
          <div className="flex items-center gap-3">
            <span className="font-bold translate-y-[-1.3px]">Total:</span>
            <span className="text-primary font-bold">
              ${`${totalPrice().toFixed(2)}`}
            </span>
          </div>
          <button
            className="text-xl bg-red-500 p-3 text-white hover:bg-red-700 transition-all"
            onClick={() => setCartItems([])}
          >
            <BiTrashAlt />
          </button>
        </div>
        <div>
          <button className="bg-secondary w-full text-center text-white py-3 text-lg font-bold mb-1">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
