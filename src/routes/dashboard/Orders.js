import { Link } from "react-router-dom";

import { getOrdres } from "../../data";

const Orders = () => {
  const orders = getOrdres();

  return (
    <div>
      <h2>Orders</h2>
      <table>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
              <td><Link to={"/dashboard/orders/" + order.id}>Views</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
