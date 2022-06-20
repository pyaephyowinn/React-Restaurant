import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import classes from "./OrderDetails.module.css";
import { getOrder, updateOrder } from "../../api/OrderAPI";
import useHttp from "../../hooks/use-http";

const OrderDetails = ({ setNotification }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { oid } = params;

  const { sendRequest, data, status, error } = useHttp(getOrder);

  useEffect(() => {
    sendRequest(oid);
  }, [sendRequest, oid]);

  const initialOrder = {
    id: "o",
    products: [],
    status: "pending",
    amount: 0,
    contact: {
      name: "",
      phone: "",
      address: "",
    },
  };

  const order = data || initialOrder;

  const productList = order.products?.map((product) => {
    return (
      <div className={classes["product-box"]} key={product.id}>
        <div>
          <p>
            <Link to={"/dashboard/products/" + product.id}>
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

  const {
    sendRequest: editOrder,
    error: updateError,
    status: updateStatus,
  } = useHttp(updateOrder);

  const toggleStatusHandler = async () => {
    await editOrder(
      {
        ...order,
        status: order.status === "pending" ? "completed" : "pending",
      },
      order.id
    );
    navigate("/dashboard/orders");
    setNotification("save changes");
  };

  const actionText =
    order.status === "completed" ? "Mark as pending" : "Mark as completed";

  return (
    <div className={classes.container}>
      <header>
        <h2>Order Details</h2>
      </header>
      {data === -1 && <p>Order is not found.</p>}
      {data !== -1 && (
        <div className={classes.card}>
          {status === "sending" && <p>fetching the order</p>}
          {updateStatus === "sending" && <p>updating</p>}
          {updateError}
          {error}
          {!error && (
            <>
              <div className={classes.date}>
                <span className={classes.time}>
                  {new Date(order.date).toLocaleString()}
                </span>
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
                <button onClick={toggleStatusHandler}>{actionText}</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
