import React, { Fragment } from "react";
import "../style.css";
import Header from "../comp/Header";
import Aboutus from "../comp/Aboutus";
import Footer from "../comp/Footer";
function About() {
  return (
    <>
      <Header />
      <about id="About">
        <div className="container">
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
                  Marvell is a global leader in next-generation digital
                  services and consulting. We enable clients in more
                  than 56 countries to navigate their digital transformation.
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
          <row className="row m-2 p-2">
            <div className="col-sm-12"></div>
          </row>
        </div>
      </about>
      <Footer />
    </>
  )
}
export default About;