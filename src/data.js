const items = [
  {
    id: 'p1',
    name: "item-1",
    price: 2000,
    description: "Blah blah blah blah",
    category: "fruit",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 'p2',
    name: "item-2",
    price: 1500,
    Description: "Blah blah blah blah",
    category: "drink",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2021/05/avocado-tree-819x1024.jpg.webp",
  },
  {
    id: 'p',
    name: "item-3",
    price: 2500,
    Description: "Blah blah blah blah",
    category: "food",
  },
  {
    id: 4,
    name: "item-4",
    price: 1500,
    Description: "Blah blah blah blah",
    category: "drink",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2021/05/avocado-tree-819x1024.jpg.webp",
  },
];

const orders = [
  {
    id: "o1",
    products: [
      {
        name: "Fresh Coconut!",
        price: 3500,
        quantity: 2,
        id: "p1",
      },
      {
        name: "Fried Salmon",
        quantity: 1,
        price: 5000,
        id: "p2",
      },
    ],
    amount: 12_000,
    date: new Date("June 1, 2022").getTime(),
    contact: {
      name: "alice",
      address: "ygn",
      phone: "0123123",
    },
    status: "pending",
  },
  {
    id: "o2",
    products: [
      {
        name: "Fresh Coconut!",
        price: 3500,
        quantity: 1,
        id: "p1",
      },
      {
        name: "Tiramisu Sweet",
        quantity: 1,
        price: 5000,
        id: "p2",
      },
    ],
    amount: 8000,
    date: new Date("June 2, 2022").getTime(),
    contact: {
      name: "eugeo",
      address: "dawei",
      phone: "0123123",
    },
    status: "completed",
  },
  {
    id: "o3",
    products: [
      {
        name: "Delicious Shakshouka",
        price: 7500,
        quantity: 2,
        id: "p1",
      },
      {
        name: "Fried Salmon",
        quantity: 1,
        price: 5000,
        id: "p2",
      },
    ],
    amount: 20_000,
    date: new Date("Jun 12, 2022").getTime(),
    contact: {
      name: "john",
      address: "ygn",
      phone: "0123123",
    },
    status: "pending",
  },
  {
    id: "o4",
    products: [
      {
        name: "Delicious Shakshouka",
        price: 7500,
        quantity: 2,
        id: "p1",
      },
      {
        name: "Fried Salmon",
        quantity: 1,
        price: 5000,
        id: "p2",
      },
    ],
    amount: 20_000,
    date: new Date("May 30, 2022").getTime(),
    contact: {
      name: "mike",
      address: "ygn",
      phone: "0123123",
    },
    status: "completed",
  },
];

export const getItems = () => {
  return items;
};

export const getItem = (id) => {
  return items.find((item) => item.id === id);
};

export const getOrders = () => {
  return orders;
};

export const getOrder = (id) => {
  return orders.find((order) => order.id === id);
};
