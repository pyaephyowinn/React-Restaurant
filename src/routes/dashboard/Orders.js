import { useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./Orders.module.css";
import { getOrders } from "../../api/OrderAPI";
import useHttp from "../../hooks/use-http";
import Notification from "../../components/UI/Notification";

const Orders = ({ notification, close }) => {
  const { sendRequest, data, status, error } = useHttp(getOrders);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const orders = data || [];

  orders.sort((a, b) => {
    if (a.status < b.status) {
      return 1;
    }
    return -1;
  });

  let inc = 1;

  return (
    <div className={classes.container}>
      <header>
        <h2>Orders</h2>
      </header>
      {notification.length > 0 && (
       <Notification text={notification} close={close} />
      )}
      <main className={classes.main}>
        {status === "sending" && <p>fetching data...</p>}
        {error}
        <table className={classes.tableOrder}>
          <thead>
            <tr>
              <th>no.</th>
              <th>Name</th>
              <th>Order-Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={"/dashboard/orders/" + order.id}>{inc++}</Link>
                </td>
                <td>{order.contact.name}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.status}</td>
                <td>
                  <Link to={"/dashboard/orders/" + order.id}>view</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Orders;
