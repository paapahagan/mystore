import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";

function CartItem({ item }) {
  const { id, image, title, price } = item;
  return (
    <div>
      <div className="w-full h-[150px] flex items-center gap-x-2">
        {/* image */}
        <Link to={`product/${id}`}>
          <img src={image} className=" max-w-[80px]" />
        </Link>
        <div className=" w-full flex flex-col text-sm">
          <div className="flex justify-between ">
            {/* title */}
            <div>{title}</div>
            {/* remove icon */}
            <div>
              <IoMdClose className=" text-xl" />
            </div>
          </div>
          {/* price and quantity */}
          <div>
            {/* amount count */}
            <div className=" flex">
              <div className="flex items-center border">
                <div>
                  <IoMdRemove />
                </div>
                {/* amount */}
                <div></div>
                <div>
                  <IoMdAdd />
                </div>
              </div>
              <div>{price}</div>
            </div>
            {/* total after count */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
