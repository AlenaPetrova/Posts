import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="width-container">
      <Outlet />
    </div>
  );
};

export default Layout;
