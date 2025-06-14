import {Link} from 'react-router-dom';
export default function Footer()
{
    return( <>
        <footer>
        <div className='container'>
        <div className="row footer">
            <div className="col-lg-9 col-sm-9  pt-3">
              Copyright &copy; 2019. Marvell All rights reserved
            </div>
            <div className="col-lg-3 col-sm-3 icons pt-3">
              <ul className="p-1">
                <li><Link to="https://mail.google.com/mail/u/0/#inbox"><img src={require("../images/google+.png")}/></Link></li>
                <li><Link to="https://twitter.com/"><img src={require("../images/twitter.png")}/></Link></li>
                <li><Link to="https://www.instagram.com/accounts/login/?source=auth_switcher"><img src={require("../images/instagram.png")}/></Link></li>
                <li><Link to="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjk4MzM0NDk3LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"><img src={require("../images/facebook (2).png")}/></Link></li>                
              </ul>
            </div>
        </div>
        <div className='row'>
            <div className='name col-sm-12'>
                 By : SANIYA AHUJA (2210990787)
            </div>
        </div></div></footer></>
    );
}
