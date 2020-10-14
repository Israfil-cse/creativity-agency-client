import React, { useContext, useEffect, useState } from 'react';
import './ServiceList.css';
import logo from '../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import ServiceListDetails from './ServiceListDetails';
import { Link } from 'react-router-dom';

const ServiceList = () => {

    // order summary
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [exactOrder, setExactOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/exactUserOrder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setExactOrder(data));
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">
                        <li>Order</li>
                        <li>Service list</li>
                        <li><Link to="/Review">Review</Link></li>
                    </nav>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="mt-5 ml-5">Order</h4>
                        <h4 className="mt-5 mr-5">name</h4>
                    </div>
                    <div className="from_area">
                        <div className="row">
                            {
                                exactOrder.map(exctOd => <ServiceListDetails exctOd={exctOd}></ServiceListDetails>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;