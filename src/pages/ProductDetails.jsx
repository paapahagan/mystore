import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function ProductDetails() {
  // get url of products by id
  const { id } = useParams();

  //get state of products
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section>Loading..</section>;
  }

  console.log(product);
  // details about products
  const { image, title, description, price } = product;

  return (
    <section className=" pt-32 pb-12 lg:py-12 h-screen flex items-center">
      <div className=" container mx-auto">
        {/* wrapper */}
        <div className=" flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className=" flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className=" max-w-[200px] lg:max-w-sm" src={image} alt="/" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450] mx-auto">
              {title}
            </h1>
            <div className=" text-xl font-medium mb-6 text-red-500">
              $ {price}
            </div>
            <p className=" mb-8">{description}</p>
            <button
              //   onClick={() => addToCart(product, product.id)}
              className=" py-2 px-8 bg-gray-800 text-white  hover:bg-slate-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

// <div className=" container mx-auto  ">
//   <div className="flex justify-center pt-32 ">Product details</div>
//   <div className=" flex justify-center items-center py-12">
//     <section className="md:flex lg:flex items-center gap-10">
//       <div className="flex justify-center items-center">
//         <img className=" w-[300px] md:w-[500] lg:w-[500px]" src={image} />
//       </div>
//       <div className="text-center mt-4 md:text-left lg:text-left lg:mt-0 ">
//         <div className="text-xl lg:text-3xl font-bold max-w-[450] mx-auto">
//           {title}
//         </div>
//         <br />

//         <div className=" text-red-500 font-bold">$ {price}</div>
//         <br />

//         <div className="">{description}</div>
//         <br />
//         <div className=" justify-center">
//           <button className="px-6 py-2 bg-slate-700 text-white hover:shadow-lg hover:bg-slate-600">
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </section>
//   </div>
// </div>
