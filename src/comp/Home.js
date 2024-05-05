export default function Home() {
  return (
    <page id="Testimonials">
      <div className="row" id="testimonial">
        <div className="p-3 row3_heading">
          OUR TEAM LEADERS
          <br />
          <img src={require("../images/line.png")} />
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className=" col-sm-8 row3_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In feugiat risus sit amet dapibus fermentum. Donec
            mollis eleifend elit eget feugiat. Morbi sodales,
            risus ut lobortis ultricies, lectus augue fermentum erat,
            ac pulvinar elit arcu ac quam.
            Donec eu massa vel elit malesuada feugiat at malesuada ante.
          </div>
        </div>
        <div className="row p-4">
          <div className=" col-sm-4 pic1 p-4">
            <div className="card">
              <img src={require("../images/pic1.jpeg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Hugo Silva <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  In feugiat risus sit amet dapibus fermentum.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-sm-4 pic2 p-4">
            <div className="card">
              <img src={require("../images/pic2.jpeg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Imanol Arias <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  In feugiat risus sit amet dapibus fermentum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 pic3 p-4">
            <div className="card">
              <img src={require("../images/pic3.jpeg")} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Java Bardem<br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  In feugiat risus sit amet dapibus fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <contact id="Contact">
        <div className="row contact">
          <div className="col-12 contact_head mt-5 p-2 mb-3">
            CONTACT US
          </div>
          <div className="row">
            <div className="col-lg-2 col-sm-2"></div>
            <div className="col-lg-8 col-sm-8 contact_subhead p-4 pb-3">
              sed ut prepciatis unde omnis iste natus error sit volupetamn
              accusiatism doloreguemrne laudatntium. totam rem applierianm
            </div>
          </div>
          <form>
            <div className="row p-5 pt-2">
              <div className="col-sm-6 p-2 pb-3">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="col-sm-6 p-2">
                <select className="form-select input" required>
                  <option selected>Category</option>
                  <option value="General">General</option>
                  <option value="SC">SC</option>
                  <option value="OBC">OBc</option>
                  <option value="ST">ST</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="col-sm-6 p-2">
                <input type="text" className="form-control" placeholder="Phone" required />
              </div>
              <div className="col-sm-6 p-2 pb-3">
                <select className="form-select select input" required>
                  <option selected disabled>City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
              <div className="col-sm-12 p-2 pb-5">
                <input type="email" className="form-control" placeholder="E-mail" required />
              </div>
              <div className="col-sm-12 p-2">
                <input type="text" className="form-control msg" placeholder="Message" required />
              </div>
              <div className="col-sm-9"></div>
              <div className="col-sm-3 p-3 p-1">
                <button type="submit" className="btn btn-primary butto">Contact us</button>
              </div>
            </div>
          </form>
        </div>
      </contact>
      <about id="About">
        <div className="row mt-5 ">
          <div className="col-sm-6 pt-5 p-3">
            <img src={require("../images/banner.jpeg")} className="img-fluid aboutimg" alt="..." />
          </div>
          <div className="col-sm-6 p-3">
            <div className="row mt-5 m-3 abt_cont">
              <div className="col-sm-12 mt-3 mb-3 about">
                About Us
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm-8 mb-4">
                sed ut prepciatis unde omnis iste natus error
                sit volupetamn accusiatism doloreguemrne laudatntium.
                totam rem applierianm
              </div>
              <div className="col-sm-2">&emsp;</div>
              <div className="row ml-2 m-1">
                <div className="col-sm-4 about_pic">
                  <img src={require("../images/freindly.jpg")} className="rounded-circle a mb-4" />
                  <p className="abt_img_cont">FRIENDLY TEAM</p>
                </div>
                <div className="col-sm-4 about_pic">
                  <img src={require("../images/involved.png")} className="rounded-circle a mb-4" />
                  <p className="abt_img_cont">&emsp;INVOLVED</p>
                </div>
                <div className="col-sm-4 about_pic">
                  <img src={require("../images/24_7.png")} className="rounded-circle a mb-4" />
                  <p className="abt_img_cont">24/7 Assistance</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </about>
      <div className="row">
        <div className="col-12 gallery_heading  mt-5 mb-4">
          <h3>OUR GALLERY</h3>
        </div>
        <div className="col-2"></div>
        <div className="col-8 gallery_subheading mb-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In feugiat risus sit amet dapibus fermentum. Donec
          mollis eleifend elit eget feugiat. Morbi sodales,
          risus ut lobortis ultricies, lectus augue fermentum erat,
          ac pulvinar elit arcu ac quam.
          Donec eu massa vel elit malesuada feugiat at malesuada ante.
        </div>
      </div>
    </page>
  )
}