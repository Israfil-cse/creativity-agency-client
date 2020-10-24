import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, } from '@fortawesome/free-solid-svg-icons'

import { Link,} from 'react-router-dom';
import { UserContext } from '../../App';
import ServicesUser from '../ServicesUser/ServicesUser';
import WrongAdmin from './WrongAdmin';


const DashBoard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [admin, setAdmin] = useState();


    useEffect(() => {
        fetch(`https://frozen-beyond-82990.herokuapp.com/checkAdmin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.admin === true) {
                    setAdmin(true);
                    console.log("isadmin");
                }
                if (data.admin === false) {
                    setAdmin(false);
                    console.log("not admin");
                }
            })
    })


    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">

                        {
                            admin === true ?
                                <li>Services User</li>
                                : ""
                        }
                        {
                            admin === true ?
                                <li><Link to="/addService"><FontAwesomeIcon icon={faPlus} /> Add Service</Link></li>
                                : ""
                        }
                        {
                            admin === true ?
                                <li><Link to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link></li>
                                : ""
                        }
                    </nav>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="mt-5 mr-5">{loggedInUser.name}</h4>
                    </div>

                    <div className="from_area">



                        {
                            admin === true ?
                                <ServicesUser></ServicesUser>
                                : ""
                        }


                        {   
                            admin === false ?
                            <WrongAdmin></WrongAdmin>
                             : ""   
                        }

                    </div>

                </div>
                </div>
            </div>
    );
};

export default DashBoard;