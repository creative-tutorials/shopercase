import { Link } from "react-router-dom";
import "../../styles/not-found.css";
export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="missing-wrapper">
        <div className="missingImage">
          <img src="/404 UFO.gif" alt="" loading="lazy" />
        </div>
        <div className="missing-content">
          <h1>404</h1>
          <h3>Oops! We couldn't find what you were looking for"</h3>
          <div className="link-button">
            <Link to={"/"}><i className="fa-solid fa-house"></i> Home Sweet Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
