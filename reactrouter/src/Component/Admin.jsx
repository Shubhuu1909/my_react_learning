import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <nav>
        Admin Navigation
      </nav>

      <Outlet />
    </div>
  );
}

export default Admin;