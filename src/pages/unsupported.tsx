import "../styles/unsupport-page.css";
function UnsupportedPage() {
  return (
    <div className="uns">
      <div className="image-holder">
        <img src="device-error.gif" alt="error" loading="lazy" />
      </div>
      <div className="content">
        <h1>Sorry, this device is not supported.</h1>
        <p>
          Sorry for the incoviences, we don't currently support your device at
          the moment, But we are scaling and loking forward to see you on mobile
          device soon
        </p>
      </div>
    </div>
  );
}
export default UnsupportedPage;
