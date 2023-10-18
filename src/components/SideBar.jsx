import { useContext } from "react";
import { SideBarContext } from "../context/SideBarContext";
import { IoMdFastforward } from "react-icons/io";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function SideBar() {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart } = useContext(CartContext);
  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"}
       bg-white fixed top-0 h-full md:w-[36vw] lg:w-[35vw] xl:max-w[38vw] 
       transition-all duration-300 z-20 w-full shadow-2xl p-6`}
    >
      <div className="flex justify-between border-b py-4 ">
        <div className="" onClick={handleClose}>
          <IoMdFastforward className="text-3xl cursor-pointer" />
        </div>
        <h1>Shopping Cart(0)</h1>
      </div>

      <div className="mt-2">
        <div>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SideBar;
