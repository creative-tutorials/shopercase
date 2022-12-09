import dshstyle from "../../styles/dashboard.module.css";
import { Link } from "react-router-dom";
function AdminDashboard() {
  return (
    <div id={dshstyle.dashboard_wrapper}>
      <div className={dshstyle.wrapper_content}>
        <div id={dshstyle.dashboard_sidebar}>
          <div id={dshstyle.dshbrd_sdebr_tp_cnt}>
            <div id={dshstyle.sidebar_header}>
              <h3>Shopp'r case</h3>
            </div>
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
          </div>
          <div id={dshstyle.dshbrd_sdebr_btm_cnt}>
            <button id={dshstyle.logout_btn}>
              <i className="fa-regular fa-arrow-right-from-bracket"></i> Log out
            </button>
          </div>
        </div>
        <div id={dshstyle.dashboard_body}>
          <div id={dshstyle.dtp}>
            <h4>Products</h4>
            <div id={dshstyle.action_component}>
              <div id={dshstyle.input_}>
                <input
                  type="text"
                  name="search field"
                  id="search field"
                  placeholder="Search by product name"
                />
              </div>
              <div id={dshstyle.add_product}>
                <button data-action="Add Product">
                  <i className="fa-regular fa-plus"></i> Add Product
                </button>
              </div>
            </div>
          </div>
          <div id={dshstyle.dbt}>
            <div id={dshstyle.ch3}>
              <span>Product ID</span>
              <span>Product Name</span>
              <span>Price</span>
              <span>Actions</span>
            </div>
            <div id={dshstyle.dh4_container}>
              <div id={dshstyle.dh4}>
                <span>01234</span>
                <span>Macbook Air</span>
                <span>$200</span>
                <span>
                  <i className="fa-regular fa-trash"></i>
                </span>
              </div>
              <div id={dshstyle.dh4}>
                <span>01234</span>
                <span>Macbook Air</span>
                <span>$200</span>
                <span>
                  <i className="fa-regular fa-trash"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
