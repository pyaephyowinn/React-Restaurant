import { Link } from "react-router-dom";

import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const removeProductHandler = () => {};

  const { product } = props;
  const image = product.image
    ? product.image
    : "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
  return (
    <div className={classes.card}>
      <header>
        <h3>{product.name}</h3>
        <p>MMK {product.price}</p>
        <span>category: {product.category}</span>
      </header>
      <section>
        <img src={image} alt="product name" />
        <p>
          {product.description || 'No description was added!'}
          {product.description}
        </p>
      </section>
      <div className={classes.btnGroup}>
        <Link
          to={"/dashboard/products/" + product.id + "/edit"}
          state={product}
          className={`${classes.btn} ${classes.btnEdit}`}
        >
          Edit
        </Link>
        <button
          onClick={removeProductHandler}
          className={`${classes.btn} ${classes.btnDelete}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
