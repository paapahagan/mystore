import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsEyeFill, BsPlus } from "react-icons/bs";

function CategoryPage() {
  const { categoryId } = useParams();
  const { id } = useParams();
  const [cats, setCats] = useState([]);

  const getCategoryId = async (categoryId) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryId}`
    );
    const data = await response.json();
    setCats(data);
  };
  useEffect(() => {
    if (categoryId) {
      getCategoryId(categoryId);
    }
  }, [categoryId]);

  return (
    <div className=" container mx-auto py-16">
      <div className="py-5 capitalize text-5xl flex justify-center">
        {categoryId}
      </div>
      <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {cats.map((cat) => {
          return (
            <div key={cat.id} className="">
              <section className="border h-[300px] relative overflow-hidden group transition-all">
                <div className="w-full h-full flex items-center ">
                  <div className=" mx-auto">
                    <img
                      src={cat.image}
                      alt="Product Image"
                      className=" max-h-48 group hover:scale-110 transition duration-500"
                    />
                  </div>
                </div>
                <div
                  className="border p-1 absolute top-3 right-10 flex flex-col justify-center
                         gap-y-2 group-hover:right-5 group-hover:opacity-100 opacity-0 transition-all duration-500"
                >
                  <button className=" bg-red-400">
                    <BsPlus className="text-3xl" />
                  </button>
                  <Link to={`/product/${id}`}>
                    <BsEyeFill className="text-3xl" />
                  </Link>
                </div>
              </section>
              <div>
                <div className=" text-center mt-4 mb-4">
                  <h1>{cat.title}</h1>
                  <p>${cat.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryPage;
