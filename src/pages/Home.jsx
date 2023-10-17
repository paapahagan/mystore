import { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContext";
import { CategoryContext } from "../context/CategoryContext";
import { Link } from "react-router-dom";

function Home() {
  const { products } = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);

  return (
    <div className="container mx-auto p-16">
      {/* mini nav */}

      {/* <section className="py-10">
        <div className=" container mx-auto flex justify-around capitalize">
          {categories?.map((x) => (
            <Link
              to={`/category/${x}`}
              key={x}
              className=" px-4 hover:bg-red-300 transition duration-300 hover:cursor-pointer"
            >
              {x}
            </Link>
          ))}
        </div>
      </section> */}
      <section className="">
        <div>
          <div className=" grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {products?.map((p) => (
              <Product product={p} key={p.id} />
              //   <div
              //     key={p.id}
              //     className=" w-full h-[300px] bg-pink-200 mb-4 p-2"
              //   >
              //     {p.title}
              //   </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
