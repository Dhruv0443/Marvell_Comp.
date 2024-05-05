export default function Statistics() {
  return (
    <>
      <div className="container">
        <div className="row statistics p-3 pt-5">
          <div className="col-lg-3 col-sm-3 num">
            <p>
              2500
            </p>
            <p className="text-white">
              HAPPY CLIENTS
            </p>
          </div>
          <div className="col-lg-3 col-sm-3 num">
            <p>
              300
            </p>
            <p className="text-white">
              FULL NOTEBOOKS
            </p>
          </div>
          <div className="col-lg-3 col-sm-3 num">
            <p>
              120
            </p>
            <p className="text-white">
              TEAMMATES
            </p>
          </div>
          <div className="col-lg-3 col-sm-3 num">
            <p>
              30
            </p>
            <p className="text-white">
              STORES
            </p>
          </div>
        </div>
        <div className="row">
          <img src={require("../images/main_bg.jpg")} className="img-fluid" alt="..." />
        </div>
      </div>
    </>
  )
}