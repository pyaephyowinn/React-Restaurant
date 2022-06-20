import { Link } from "react-router-dom";
import classes from "./Product.module.css";
import { deleteProduct } from "../../api/ProductAPI";
import useHttp from "../../hooks/use-http";

const Product = (props) => {

  const { sendRequest } = useHttp(deleteProduct);

  const removeProductHandler = async (pid) => {
    await sendRequest(pid);
    props.refreshPage();
  };

  const { product } = props;
  const image = product.image
    ? product.image
    : "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
  return (
    <div className={classes.card}>
      <header>
        <div>
          <Link to={product.id}>
            <h3>{product.name}</h3>
          </Link>
          <span>{product.category}</span>
        </div>
        <p>MMK {product.price}</p>
      </header>
      <section>
        <img src={image} alt="product name" />
        <p>
          {product.description || "No description was added!"}
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
          onClick={removeProductHandler.bind(null, product.id)}
          className={`${classes.btn} ${classes.btnDelete}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
