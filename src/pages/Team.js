import React, { Fragment } from "react";
import Header from "../comp/Header";
import Team_Leaders from "../comp/Team_Leaders";
import Footer from "../comp/Footer";
function Team() {
  return (
    <Fragment>
      <Header />
      <Team_Leaders />
      <Footer />
    </Fragment>
  );
}
export default Team;
