import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/Dashboardlayout";
import Overview from "./pages/Overview";
import Agents from "./pages/Agents";
import Deals from "./pages/Deals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="agents" element={<Agents />} />
        <Route path="deals" element={<Deals />} />
      </Route>
    </Routes>
  );
}

export default App;
