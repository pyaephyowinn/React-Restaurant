import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./routes/dashboard/Dashboard";
import Products from "./routes/dashboard/Products";
import ProductDetails from "./routes/dashboard/ProductDetails";
import OrderDetails from "./components/orders/OrderDetails";
import NewProduct from "./routes/dashboard/NewProduct";
import EditProduct from "./routes/dashboard/EditProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element ={<p>select a option</p>} />
          <Route path="orders/:oid" element={<OrderDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="products/:pid" element={<ProductDetails />} />
          <Route path="products/:pid/edit" element={<EditProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
