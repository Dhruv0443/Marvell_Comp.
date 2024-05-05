import React, { Fragment }  from "react";
import Header from "../comp/Header";
import Servicess from "../comp/Servicess";
import Footer from "../comp/Footer";
function Service(){
    return(
        <Fragment>
            <Header/>
            <Servicess/>
            <Footer/>
        </Fragment>
    )
}
export default Service;