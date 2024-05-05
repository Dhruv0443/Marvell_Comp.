import React, { Fragment } from "react";
import { useState } from "react";
import Header from "../comp/Header";
import "../style.css";
import Footer from "../comp/Footer";
const Contact=() =>{
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Message, setMessage] = useState('');
  
    const Contantinput = event => {
        event.preventDefault();
        console.log('Name ', Name);
        console.log('Email ', email);
        console.log('Phone', Phone);
        console.log('Message', Message);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };
    return (
        <>
            <Header />
            <contact id="Contact" >
                <div className="container">
                    <div className="row contact">
                        <div className="col-12 contact_head mt-5 p-2 mb-3">
                            CONTACT US
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-sm-2"></div>
                            <div className="col-lg-8 col-sm-8 contact_subhead p-4 pb-3">
                                Want to get in touch?<br/>
                                We would love to hear from you.Here's how you can reach us....
                            </div>
                        </div>
                        <form onSubmit={Contantinput}>
                            <div className="row p-5 pt-2">
                                <div className="col-sm-6 p-2 pb-3">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className='form-control'
                                    placeholder="Name"
                                    onChange={event => setName(event.target.value)}
                                    value={Name}
                                    required
                                />
                                </div>
                                <div className="col-sm-6 p-2">
                                    <select className="form-select select input" required>
                                        <option selected>Category</option>
                                        <option value="General">General</option>
                                        <option value="SC">SC</option>
                                        <option value="OBC">OBc</option>
                                        <option value="ST">ST</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="col-sm-6 p-2">
                                    <input type="text" className="form-control" placeholder="Phone" onChange={event => setPhone(event.target.value)}
                                    value={Phone} required />
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
                                    <input type="email" className="form-control" placeholder="E-mail" onChange={event => setEmail(event.target.value)} value={email} required />
                                </div>
                                <div className="col-sm-12 p-2">
                                    <input type="text" className="form-control msg" placeholder="Message" onChange={event => setMessage(event.target.value)} value={Message} required />
                                </div>
                                <div className="col-sm-9"></div>
                                <div className="col-sm-3 p-3 p-1">
                                    <button type="submit" className="butto">Contact us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </contact>
            <Footer />
        </>

    )
}
export default Contact;