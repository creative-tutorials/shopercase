import { LinksComponent } from "./links_componet";
export function Dashboard_sidebar({ dshstyle }: any) {
  return (
    <div id={dshstyle.dashboard_sidebar}>
      <div id={dshstyle.dshbrd_sdebr_tp_cnt}>
        <div id={dshstyle.sidebar_header}>
          <h3>Shoper case</h3>
        </div>
        <LinksComponent dshstyle={dshstyle} />
      </div>
      <div id={dshstyle.dshbrd_sdebr_btm_cnt}>
        <button id={dshstyle.logout_btn}>
          <i className="fa-regular fa-arrow-right-from-bracket"></i> Log out
        </button>
      </div>
    </div>
  );
}
