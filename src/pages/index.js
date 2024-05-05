import React, { Fragment } from "react";
import Header from "../comp/Header";
import Main from "../comp/Main";
import Testimonial from "../comp/Team_Leaders";
import Statistics from "../comp/Statistics";
import Aboutus from "../comp/Aboutus";
import Gallery from "../comp/Gallery";
import OwlDemo from "../owldemo";
import Owldemo1 from "../Owldemo1";
import Footer from "../comp/Footer";
import Contactus from "../comp/Contactus";
function Index() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <Main />
        <Statistics />
        <Gallery />
        <Owldemo1 />
        <Footer />
      </div>
    </Fragment>
  );
}
export default Index;
