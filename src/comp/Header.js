import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className=' container'>
      <div className="row sticky-top">
        <nav className="navbar navbar-expand-lg navigation ">
          <div className="container top">
            <a className=" head">
              MARVELL
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item p-2">
                  <Link to='/' className="nav-link">HOME</Link>
                </li>
                <li className="nav-item p-2">
                  <Link to='/About' className="nav-link" >ABOUT</Link>
                </li>
                
                <li className="nav-item p-2">
                  <Link to='/Team' className="nav-link">TEAM LEADERS</Link>
                </li>
                <li className="nav-item p-2">
                  <Link to='/Contact' className="nav-link" >CONTACTS</Link>
                </li>
                <li className="nav-item p-2">
                  <Link to='/Login' className="nav-link" >LOGIN</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
