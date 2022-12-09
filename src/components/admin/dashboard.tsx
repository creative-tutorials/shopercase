import { BodyComponent } from "../class/dashboard/bodyComponent";
import { Dashboard_sidebar } from "../class/dashboard/dashboard_sidebar";
import { SliderForm } from "../class/dashboard/sliderForm";
import dshstyle from "../../styles/dashboard.module.css";
import { useState } from 'react';
function AdminDashboard() {
  const [SliderFormActive, setSliderFormActive] = useState(false);
  return (
    <div id={dshstyle.dashboard_wrapper}>
      <div className={dshstyle.wrapper_content}>
        <Dashboard_sidebar dshstyle={dshstyle} />
        <BodyComponent dshstyle={dshstyle} setSliderFormActive={setSliderFormActive} />
      </div>
      <SliderForm SliderFormActive={SliderFormActive} setSliderFormActive={setSliderFormActive} />
    </div>
  );
}
export default AdminDashboard;
