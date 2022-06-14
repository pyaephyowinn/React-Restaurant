const items = [
  {
    id: 1,
    name: 'item-1',
    price: 2000,
    description: 'Blah blah blah blah',
    category: 'fruit',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    name: 'item-2',
    price: 1500,
    Description: 'Blah blah blah blah',
    category: 'drink',
    image: 'https://www.foodiesfeed.com/wp-content/uploads/2021/05/avocado-tree-819x1024.jpg.webp'
  },
  {
    id: 3,
    name: 'item-3',
    price: 2500,
    Description: 'Blah blah blah blah',
    category: 'food'
  }
]

const orders = [
  {
    id: 1,
    address: 'ygn',
    phone: '0123123'
  },
  {
    id: 2,
    address: 'myeik',
    phone: '0123123'
  },
  {
    id: 3,
    address: 'dawei',
    phone: '0123123'
  }
]

export const getItems = () => {
  return items
}

export const getItem = id => {
  return items.find(item => item.id === id)
}

export const getOrdres = () => {
  return orders
}

export const getOrder = id => {
  return orders.find(order => order.id === id)
}