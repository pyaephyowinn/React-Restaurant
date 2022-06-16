import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./routes/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
