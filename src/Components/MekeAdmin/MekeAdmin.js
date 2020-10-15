import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';

const MekeAdmin = () => {
    return (
        <div>
        <div className="row">
            <div className="col-md-3">
                <figure className="mt-5 pl-5">
                    <img style={{ height: '50px' }} src={logo} alt="" />
                </figure>
                <nav className="pl-5 mt-5">
                     <li><Link to="/ServicesUser">Services User</Link></li>
                    <li><Link to="/addService">Add Service</Link></li>
                    <li><Link to="/mekeAdmin">Make Admin</Link></li>
                </nav>
            </div>
            <div className="col-md-9">
                <div className="d-flex justify-content-between">
                    <h4 className="mt-5 ml-5">Order</h4>
                    <h4 className="mt-5 mr-5">name</h4>
                </div>
                <div className="from_area">
                
                </div>
            </div>
        </div>
    </div>
    );
};

export default MekeAdmin;