export default function Team_Leaders() {
  return (
    <div className="container">
      <div className="row" id="testimonial">
        <div className="p-3 row3_heading">
          OUR TEAM LEADERS
          <br />
          <img src={require("../images/line.png")} />
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className=" col-sm-8 row3_content">
          This Tech Industry has offices in more than 50 major cities 
          around the world including New York, Paris, Sydney, Bengaluru and Berlin — 
          but having a personable "OUR TEAM LEADERS" section helps
           give their business an accessible edge.
          </div>
        </div>
        <div className="row p-4">
          <div className=" col-sm-4 pic1 p-4">
            <div className="card">
              <img src={require("../images/pic1.jpeg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Raghav Krishnamurthi <br />
                  With over 9 years’ experience in HR, 
                  I am adept at enhancing the employee experience 
                  and developing positive workplace cultures. 
                </p>
              </div>
            </div>
          </div>
          <div className=" col-sm-4 pic2 p-4">
            <div className="card">
              <img src={require("../images/pic2.jpeg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Bhumika Roy <br />
                  Experienced content editor.
                   I’m fortunate that my career has kept me on the 
                   leading edge of content, and event strategies. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 pic3 p-4">
            <div className="card">
              <img src={require("../images/pic3.jpeg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Ajeet Oberoi <br />
                  Leading a team of Software Development Engineers 
                  in Test (SDETs) to ensure the quality and reliability of software products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}