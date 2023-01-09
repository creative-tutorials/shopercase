import { Sidebar } from "../components/class/Sidebar";
import { FetchProductsFromAPI } from "../functions/fetchproducts";
import "../styles/home.css";
import { CheckIfDeviceIsSupported } from "../functions/CheckDeviceSupport";
import { useState, useEffect } from "react";
import { Filter } from "../components/class/filter/Filter";
import { Header } from "../components/class/col-header/Header";
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const [active, setactive] = useState(false);
  const [dropdwnActive, setdropdwnActive] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  let [limit, setlimit] = useState(0);
  const navigate = useNavigate();
  const setSidebarActive = () => {
    setactive(true);
  };
  useEffect(() => {
    setlimit(limit++);
    limit > 1
      ? null
      : [
          FetchProductsFromAPI(),
          CheckIfUserIsLoggedIn(),
          CheckIfDeviceIsSupported(),
        ];
  }, []);

  const CheckIfUserIsLoggedIn = () => {
    const userAuthState = localStorage.getItem("auth-session");
    userAuthState ? setisLoggedIn(true) : setisLoggedIn(false);
  };
  const HandleLogout = () => {
    localStorage.removeItem("auth-session");
    setTimeout(() => {
     navigate('/')
    }, 2000);
  };
  const ShowDropDwnMenu = () => {
      setdropdwnActive(true);
    },
    HideDropDwnMenu = () => {
      setdropdwnActive(false);
    };
  return (
    <div className="HomePage">
      <Header
        isLoggedIn={isLoggedIn}
        ShowDropDwnMenu={ShowDropDwnMenu}
        dropdwnActive={dropdwnActive}
        HideDropDwnMenu={HideDropDwnMenu}
        HandleLogout={HandleLogout}
        setSidebarActive={setSidebarActive}
      />
      <div
        id="page-body"
        className={dropdwnActive ? "pg-active" : "pg-inactive"}
      >
        <Filter />
        <div id="products"></div>
      </div>
      <Sidebar active={active} setactive={setactive} />
    </div>
  );
}
export default HomePage;
