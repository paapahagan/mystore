import { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { SideBarContext } from "../context/SideBarContext";
import { CategoryContext } from "../context/CategoryContext";
import { Link } from "react-router-dom";

function Header() {
  const { categories } = useContext(CategoryContext);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  return (
    <header className="container mx-auto fixed z-10 bg-white shadow-2xl">
      <div className=" flex justify-between p-2">
        <div>
          <BsBag className=" cursor-pointer text-3xl" />
        </div>
        <section className="hidden md:block">
          <div className="flex justify-around capitalize">
            {categories?.map((x) => (
              <Link
                to={`/category/${x}`}
                key={x}
                className=" px-4 text-xl hover:bg-red-300 transition duration-300 hover:cursor-pointer"
              >
                {x}
              </Link>
            ))}
          </div>
        </section>

        <div onClick={() => setIsOpen(!isOpen)}>
          <BsBag className=" cursor-pointer text-3xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
