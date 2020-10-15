import React, { useEffect, useState } from 'react';
import './ServicesUser.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesUser = () => {

    const [ServicesUserList, setServicesUserList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/servicesUserList')
            .then(res => res.json())
            .then(data => setServicesUserList(data))
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">
                        <li>Services User</li>
                        <li><Link to="/addService"><FontAwesomeIcon icon={faPlus}/> Add Service</Link></li>
                        <li><Link to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus}/> Make Admin</Link></li>
                        

                        

                    </nav>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="mt-5 ml-5">Order</h4>
                        <h4 className="mt-5 mr-5">name</h4>
                    </div>
                    <div className="from_area">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email</th>
                                    <th className="text-secondary" scope="col">Service</th>
                                    <th className="text-secondary" scope="col">Project details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ServicesUserList.map((service, index) =>

                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{service.data.name}</td>
                                            <td>{service.email}</td>
                                            <td>{service.matchCategory.name}</td>
                                            <td>{service.data.projectDetails}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesUser;