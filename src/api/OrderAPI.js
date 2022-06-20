const firebase_DOMAIN =
  "https://reactorderfood-5b0e4-default-rtdb.asia-southeast1.firebasedatabase.app";

export const sendOrder = async (order) => {
  const res = await fetch(`${firebase_DOMAIN}/orders.json`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    }
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || "Could not send order");
  }

  return data.name
}

export const getOrders = async () => {
  const res = await fetch(`${firebase_DOMAIN}/orders.json`);
  const data = await res.json()

  if(!res.ok) {
    throw new Error(data.message || 'Could not fetch the orders')
  }

  const formattedOrders = [];
  for (const oid in data) {
    const order = {
      id: oid,
      ...data[oid],
    };
    formattedOrders.push(order);
  }
  return formattedOrders
}

export const getOrder = async (oid) => {
  const res = await fetch(`${firebase_DOMAIN}/orders/${oid}.json`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not fetch the order");
  }

  if(!data) return -1
  return { id: oid, ...data };
};

export const updateOrder = async (updateOrder, oid) => {
  const res = await fetch(`${firebase_DOMAIN}/orders/${oid}.json`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateOrder),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Could not update!");
  }

  return data;
};