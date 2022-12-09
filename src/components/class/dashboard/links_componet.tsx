import { Link } from "react-router-dom";
export function LinksComponent({ dshstyle }: any) {
  return (
    <div id={dshstyle.sidebar_links}>
      <Link to="/">
        <i className="fa-regular fa-grid-2"></i> Dashboard
      </Link>
      <Link to="/">
        <i className="fa-regular fa-bag-shopping"></i> Products
      </Link>
      <Link to="/">
        <i className="fa-regular fa-bell"></i> Notifications
      </Link>
      <Link to="/">
        <i className="fa-regular fa-compass"></i> Orders
      </Link>
      <Link to="/">
        <i className="fa-regular fa-user"></i> Profile
      </Link>
      <Link to="/">
        <i className="fa-regular fa-user-group"></i> Customers
      </Link>
    </div>
  );
}
