import { useContext } from "react";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// eslint-disable-next-line react/prop-types
function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  // eslint-disable-next-line react/prop-types
  const { id, title, image, category, price } = product;
  //   console.log(product);
  return (
    <div className="container mx-auto ">
      {/* image */}
      <section className=" border h-[300px] relative overflow-hidden group transition-all ">
        <div className=" w-full h-full flex items-center">
          <div className=" mx-auto">
            <img
              src={image}
              className=" max-h-48 group hover:scale-110 transition duration-500"
            />
          </div>
        </div>
        {/* button */}
        <div
          className=" border p-1 absolute top-3 right-10 flex flex-col justify-center
         gap-y-2 group-hover:right-5 group-hover:opacity-100 opacity-0 transition-all duration-500"
        >
          {/* add to cart */}
          <button onClick={() => addToCart(product, id)}>
            <div className=" border bg-red-400">
              <BsPlus className="text-3xl" />
            </div>
          </button>

          {/* link */}
          <Link to={`/product/${id}`}>
            <BsEyeFill className="text-3xl" />
          </Link>
        </div>
      </section>
      {/* description */}
      <div className="grid ">
        <div className="text-sm text-gray-500 capitalize">{category}</div>
        <p className="text-sm">{title}</p>
        <p className=" font-semibold text-gray-500">${price}</p>
      </div>
    </div>
  );
}

export default Product;
