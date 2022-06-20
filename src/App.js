import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./routes/HomePage";
import ProductsPage from "./routes/ProductsPage";

const Dashboard = React.lazy(() => import("./routes/dashboard/Dashboard"));
const NotFoundPage = React.lazy(() => import("./routes/NotFoundPage"))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>loading ...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
