import { useState } from "react"
import { Navigate, Outlet, Route, Routes, } from "react-router-dom"

import Menu from "../../components/UI/Menu"
import classes from './Dashboard.module.css'

import Products from "./Products"
import ProductDetails from "./ProductDetails"
import NewProduct from "./NewProduct"
import EditProduct from "./EditProduct"

import Orders from "./Orders"
import OrderDetails from "./OrderDetails"

const DashboardPage = () => {
  const [noti, setNoti] = useState('')
  return (
    <div className={classes.container}>
      <div className={classes.menuBar}>
        <Menu />
      </div>
      <div className={classes.display}>
        <Outlet />
        <Routes>
          <Route path="" element ={ <Navigate to='products' />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:pid" element={<ProductDetails />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="products/:pid/edit" element={<EditProduct />} />

          <Route path="orders" element={<Orders notification={noti} close={setNoti} />} />
          <Route path="orders/:oid" element={<OrderDetails setNotification={setNoti} />} />

          <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
      </div>
    </div>
  )
}

export default DashboardPage