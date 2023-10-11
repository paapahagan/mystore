import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function ProductDetails() {
  // get url of products by id
  const { id } = useParams();

  //get state of products
  const { products } = useContext(ProductContext);

  // details about products
  const { image, title, description, price } = products;

  const product = products.find((item) => {
    return item.id === parseFloat(id);
  });

  console.log(product);

  return (
    <div className=" container mx-auto">
      <div>Product details</div>
      <section>
        <div>
          <img src={image} />
        </div>
        <h1>{title}</h1>
        <br />
        <p>{description}</p>
        <br />
        <span>${price.toFixed(2)}</span>
        {/* <button type='submit' onClick={() => addToCartHandler({...product})}>Add to Cart</button> */}
      </section>
    </div>
  );
}

export default ProductDetails;
