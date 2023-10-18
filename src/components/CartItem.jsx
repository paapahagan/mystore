import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { id, image, title, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div>
      <div className="w-full h-[150px] flex items-center gap-x-2 border-b">
        {/* image */}
        <Link to={`product/${id}`}>
          <img src={image} className=" max-w-[80px]" />
        </Link>
        <div className=" w-full flex flex-col text-sm">
          <div className="flex justify-between mb-4">
            {/* title */}
            <div className="uppercase">{title}</div>
            {/* remove icon */}
            <div className=" cursor-pointer" onClick={() => removeFromCart(id)}>
              <IoMdClose className=" text-xl" />
            </div>
          </div>
          {/* price and quantity */}
          <div>
            {/* amount count */}
            <div className=" flex h-[36px]">
              <div className="flex gap-x-4 items-center border max-w-[100px] h-full ">
                {/* reduce */}
                <div
                  className="flex flex-1 p-2 cursor-pointer"
                  onClick={() => decreaseAmount(id)}
                >
                  <IoMdRemove />
                </div>
                {/* amount */}
                <div>{amount}</div>
                {/* increase */}
                <div
                  className="flex flex-1 p-2 cursor-pointer"
                  onClick={() => increaseAmount(id)}
                >
                  <IoMdAdd />
                </div>
              </div>
              <div className="flex  justify-around items-center">{price}</div>
              {/* total after count */}
              <div className="flex flex-1 items-center justify-end">
                {price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
