import { useParams } from "react-router-dom"

import { getOrder } from "../../data"

const OrderDetails = () => {
  const params = useParams()
  const { oid } = params
  const order = getOrder(+oid);

  return (
    <div>
      <h2>Order Details</h2>
      <ul>
        <li>{order.phone}</li>
        <li>{order.address}</li>
      </ul>
    </div>
  )
}

export default OrderDetails