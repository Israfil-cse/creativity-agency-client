import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img class="img-fluid logo" src={logo} alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto item">
                        <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-link" href="#">Our Portfolio</a>
                        <a class="nav-link" href="#">Our Team</a>
                        <a class="nav-link" href="#">Contact us</a>
                        <button class="btn btn-dark px-4">Login</button>
                    </div>
                </div>
            </nav>
        </nav>
    );
};

export default Navbar;