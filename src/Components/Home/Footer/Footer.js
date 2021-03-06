import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="container">
                <div className="mt-5 pt-5 row">
                    <div className="col-md-6">
                        <h3>Let us handle your <br /> project,professionally.</h3>
                        <p>with well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>

                    </div>
                    <div className="col-md-6">
                        <form className="formStyle">
                            <input className="form-control" type="text" placeholder="Your email address" />
                            <br />
                            <input className="form-control" type="text" placeholder="Your name/ company" />
                            <br />
                            <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Drop your messaage"></textarea>
                            <br />
                            <button className="btn btn-dark px-5">Send</button>
                        </form>
                        
                    </div>
                </div>
            </div>
            <p className="text-center mt-5 pt-5 pb-5">All rights reserved israfil-cse</p>
        </footer>
    );
};

export default Footer;