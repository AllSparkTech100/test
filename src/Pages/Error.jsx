import "./pages.scss";

function Error() {
  return (
    <div>
      <div className="carrier_error">
    <div className="error_inner">
    <h4 className="text-black text-capitalize">Ohh! Sorry</h4>
        <p className="mt-4">the requested URL was not found on this server</p>
        <button className="buttons btn_primary">
          <a href="/" className="">
            Go Home
          </a>
        </button>
    </div>
      </div>
    </div>
  );
}

export default Error;
