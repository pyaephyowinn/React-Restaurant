import { Outlet, Route, Routes } from "react-router-dom"

import Menu from "../../components/UI/Menu"
import classes from './Dashboard.module.css'
import Orders from "./Orders"

const DashboardPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.menuBar}>
        <Menu />
      </div>
      <div className={classes.display}>
        <Outlet />
        <Routes>
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default DashboardPage