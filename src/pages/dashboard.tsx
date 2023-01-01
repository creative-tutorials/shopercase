import { BodyComponent } from "../components/class/dashboard/bodyComponent";
import { Dashboard_sidebar } from "../components/class/dashboard/dashboard_sidebar";
import { SliderForm } from "../components/class/dashboard/sliderForm";
import dshstyle from "../styles/dashboard.module.css";
import { useState, useEffect } from "react";
import { CheckIfDeviceIsSupported } from "../functions/CheckDeviceSupport";
function AdminDashboard() {
  let [limit, setlimit] = useState(0);
  useEffect(() => {
    setlimit(limit++);
    limit > 1 ? null : CheckIfDeviceIsSupported();
  }, []);

  const [SliderFormActive, setSliderFormActive] = useState(false);
  return (
    <div id={dshstyle.dashboard_wrapper}>
      <div className={dshstyle.wrapper_content}>
        <Dashboard_sidebar dshstyle={dshstyle} />
        <BodyComponent
          dshstyle={dshstyle}
          setSliderFormActive={setSliderFormActive}
        />
      </div>
      <SliderForm
        SliderFormActive={SliderFormActive}
        setSliderFormActive={setSliderFormActive}
      />
    </div>
  );
}
export default AdminDashboard;
