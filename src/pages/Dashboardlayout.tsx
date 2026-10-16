
import { Link, Outlet } from "react-router-dom";
import "./overview.css";

export default function DashboardLayout() {
  return (
  <div className="overview-container">

  <div className="dashboard-header">
    <div className="overview-title">CRM dashboard</div>

    <nav className="dashboard-nav">
      <Link to="/overview">Overview</Link>
      <Link to="/agents">Agents</Link>
      <Link to="/deals">Deals</Link>
    </nav>
  </div>

  
    <Outlet />
  

</div>

  );
}
