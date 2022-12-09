import { Link } from "react-router-dom";
export function DropDownActive({ HideDropDwnMenu, HandleLogout }:any) {
  return (
    <div className="dropdwn active">
      <i className="fa-regular fa-xmark" onClick={HideDropDwnMenu}></i>
      <span id="clickable_list">
        <span
          id="login"
          style={{
            cursor: "pointer",
          }}
          onClick={HandleLogout}
        >
          Logout
        </span>
        <span
          id="dashboard"
          style={{
            cursor: "pointer",
          }}
        >
          <Link to="/dashboard">Dashboard</Link>
        </span>
        <span
          id="profile"
          style={{
            cursor: "pointer",
          }}
        >
          <Link to="/profile">Profile</Link>
        </span>
      </span>
    </div>
  );
}
