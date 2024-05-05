import { Fragment, useState } from 'react';
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import './sign_style.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = event => {

        event.preventDefault();
        console.log('firstName ', firstName);
        console.log('lastName ', lastName);
        console.log('Email ', email);
        console.log('Phone', Phone);
        console.log('Password', Password);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
    };

    return (
        <>
            <Fragment>
                <Header />
                <div className='container bg-image'>
                    <div className='row'>
                        <div className='col-sm-12'><br /></div>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-8'>
                        <img src={require("../images/Signup.png")}/>
                        </div>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-12'><br /><br /><br /></div>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div className="row p-5 pt-2">
                        <div className='col-sm-3'></div>
                            <div className="col-sm-6 p-2 pt-3 log pb-3">
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    className='form-control'
                                    placeholder="First Name"
                                    onChange={event => setFirstName(event.target.value)}
                                    value={firstName}
                                    required
                                />
                                <br/>
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    className='form-control'
                                    onChange={event => setLastName(event.target.value)}
                                    required
                                />
                                <br/>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className='form-control'
                                    placeholder="Email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />
                                <br/>
                                <input
                                    id="Phone"
                                    name="Phone"
                                    type="text"
                                    className='form-control'
                                    placeholder="Phone Number"
                                    value={Phone}
                                    onChange={event => setPhone(event.target.value)}
                                    required
                                /><br/>
                                <input
                                    id="Password"
                                    name="Password"
                                    type="Password"
                                    className='form-control'
                                    placeholder="Password"
                                    value={Password}
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                />
                                <br/>
                                <p>Already have an Account? <a href="/Login">Login</a></p>
                            </div>
                            
                            <div className='col-sm-3'></div>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-8'>
                                
                            </div>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-7'></div>
                            <div className='col-sm-5'>
                                <button className="butto" type="submit">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </Fragment>
        </>
    );
};

export default SignUp;
