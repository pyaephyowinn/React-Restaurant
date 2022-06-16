const firebase_DOMAIN =
  "https://reactorderfood-5b0e4-default-rtdb.asia-southeast1.firebasedatabase.app";

export const addProduct = async (product) => {
  const res = await fetch(`${firebase_DOMAIN}/products.json`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not add new product");
  }

  return data.name;
};

export const getProducts = async () => {
  const res = await fetch(`${firebase_DOMAIN}/products.json`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not fetch Products");
  }

  const formattedProducts = [];
  for (const pid in data) {
    const product = {
      id: pid,
      ...data[pid],
    };
    formattedProducts.push(product);
  }
  return formattedProducts;
};

export const getProduct = async (pid) => {
  const res = await fetch(`${firebase_DOMAIN}/products/${pid}.json`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not fetch Product");
  }
  return { id: pid, ...data };
};

export const updateProduct = async (updateProduct, pid) => {
  const res = await fetch(`${firebase_DOMAIN}/products/${pid}.json`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateProduct),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Could not update!");
  }

  return data;
};

export const deleteProduct = async (pid) => {
  const res = await fetch(`${firebase_DOMAIN}/products/${pid}.json`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not delete!");
  }
};
