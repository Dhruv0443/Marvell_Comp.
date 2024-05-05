import Footer from "./Footer";
import Footer1 from "./Servicess";
import Header from "./Header";
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <div className="row">
      <div className="col-12 gallery_heading  mt-5 mb-4">
        <h3>OUR GALLERY</h3>
      </div>
      <div className="col-2"></div>
      <div className="col-8 gallery_subheading mb-3 ">
        Marvell is a global leader in next-generation digital
        services and consulting. We enable clients in more
        than 56 countries to navigate their digital transformation.
        This Tech Industry has offices in more than 50 major cities
        around the world

      </div>
    </div>
  )
}