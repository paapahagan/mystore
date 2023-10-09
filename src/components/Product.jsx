function Product({ product }) {
  const { id, title, image, category, price } = product;
  //   console.log(product);
  return (
    <div>
      {/* image */}
      <section className=" border h-[300px] ">
        <div className=" w-full h-full flex items-center">
          <div className=" mx-auto">
            <img
              src={image}
              className=" max-h-48 group hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </section>
      {/* description */}
      <div className="grid justify-items-center text-center m-2">
        <div className="text-sm capitalize">{category}</div>
        <p className=" font-semibold">{title}</p>
        <p className=" font-semibold">${price}</p>
      </div>
    </div>
  );
}

export default Product;
