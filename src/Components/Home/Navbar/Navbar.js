import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img className="img-fluid logo" src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto item">
                        <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="#">Our Portfolio</a>
                        <a className="nav-link" href="#">Our Team</a>
                        <a className="nav-link" href="#">Contact us</a>
                        <button className="btn btn-dark px-4">Login</button>
                    </div>
                </div>
            </nav>
        </nav>
    );
};

export default Navbar;