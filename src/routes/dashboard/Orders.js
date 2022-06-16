import { Link } from "react-router-dom";

import { getOrders } from "../../data";
import classes from "./Orders.module.css";

const Orders = () => {
  const orders = getOrders();

  orders.sort( (a,b) => {
     if( a.status < b.status) {
      return 1
     }
     return -1
    })

  let inc = 1;

  return (
    <div className={classes.container}>
      <header>
        <h2>Orders</h2>
      </header>
      <main className={classes.main}>
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
