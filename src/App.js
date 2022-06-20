import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./routes/HomePage";
import ProductsPage from "./routes/ProductsPage";
import Dashboard from "./routes/dashboard/Dashboard";
import NotFoundPage from "./routes/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
