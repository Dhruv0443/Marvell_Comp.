import {Link} from 'react-router-dom';
export default function Servicess()
{
    return(
        <div className='container'>
        <services id="Services">
        <div className="row footer1 p-5 pb-4">
            <div className="col-sm-2 footer1">
                <p>CONTENT</p>
                <p>PRODUCTS</p>
                <p>HISTORY</p>
            </div>
            <div className="col-sm-2">
                <p>INFORMATION</p>
                <p>TERMS</p>
                <p> WHO WE ARE</p>
            </div>
            <div className="col-sm-2">
                <p>LEGAL</p>
                <p>ACCOUNT</p>
                <p>EMPLOYEE</p>
            </div>
            <div className="col-sm-2">
                <p>HELP</p>
                <p>SERVICES</p>
                <p>SOLUTIONS</p>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-3 right">
                <ul>
                    <li><img src={require("../images/phone.png")}/></li>
                    <li>8265968128</li>
                </ul>
                <ul>
                    <li><img src={require("../images/location.png")}/></li>
                    <li>4460, D.C Road<br/>&emsp;&emsp;Ambala, Haryana</li>
                </ul><br/>
            </div>
        </div>
        </services></div>
    );
}