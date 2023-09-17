import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

const CartItem = ({ id, name, image, price, quantity }) => {
  const { addItem, removeItem } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      addItem({ id, name, price, image }, newQuantity - quantity);
    } else {
      removeItem(id);
    }
  };

  const handleRemoveClick = () => {
    removeItem(id);
  };

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{name}</span>
          <button
            className="rounded-full w-1/2 text-sm border border-[#ebecee] py-1 px-1 font-semibold text-body-color transition hover:border-white hover:bg-black hover:text-white"
            onClick={handleRemoveClick}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={() => handleQuantityChange(quantity - 1)}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33-32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={quantity}
          readOnly
        />

        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={() => handleQuantityChange(quantity + 1)}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{price} $</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {price * quantity} $
      </span>
    </div>
  );
};

export default CartItem;