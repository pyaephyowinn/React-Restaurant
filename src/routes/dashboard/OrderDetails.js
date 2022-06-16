import { useParams, Link } from "react-router-dom";

import { getOrder } from "../../data";
import classes from "./OrderDetails.module.css";

const OrderDetails = () => {
  const params = useParams();
  const { oid } = params;
  const order = getOrder(oid);

  const productList = order.products.map((product) => {
    return (
      <div className={classes["product-box"]} key={product.pid}>
        <div>
          <p>
            <Link to={"/dashboard/products/" + product.pid}>
              {product.name}{" "}
            </Link>
          </p>
          <div className={classes.summary}>
            <span className={classes["product-price"]}>
              MMK {product.price}
            </span>
            <span className={classes["product-quantity"]}>
              x{product.quantity}
            </span>
          </div>
        </div>
        <div className={classes["product-amount"]}>
          {product.price * product.quantity} MMK
        </div>
      </div>
    );
  });

  const clickCompleteHandler = () => {};

  const actionText =
    order.status === "completed" ? "Mark as pending" : "Mark as completed";

  return (
    <div className={classes.container}>
      <header>
        <h2>Order Details</h2>
      </header>

      <div className={classes.card}>
        <div className={classes.date}>
          <span className={classes.time}>{new Date(order.date).toLocaleString()}</span>
        </div>
        <div className={classes.productBoxes}>
          {productList}
          <div className={classes.totalAmount}>
            <span>Total Amount</span>
            <span>{order.amount} MMK</span>
          </div>
        </div>
        <div className={classes.contact}>
          <h3>Contact</h3>
          <ul>
            <li>Customer Name - {order.contact.name}</li>
            <li>Phone Number - {order.contact.phone}</li>
            <li>Address - {order.contact.address}</li>
          </ul>
        </div>

        <div className={classes.actions}>
          <button onClick={clickCompleteHandler}>{actionText}</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
