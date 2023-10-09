import { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div className="">
      <section className="py-16">
        <div className="container mx-auto ">
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
