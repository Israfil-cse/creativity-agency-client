import React, { useContext, useEffect, useState } from 'react';
import './PlacedOrder.css';
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faShoppingBag, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';


const PlacedOrder = () => {

    // cetagory matching
    const { OrderInfo_id } = useParams();
    const [matchCategory, setMatchCategory] = useState({});
    useEffect(() => {
        fetch('http://localhost:4000/allServicesData')
            .then(res => res.json())
            .then(data => {
                const macthId = data.find(item => item._id === OrderInfo_id)
                setMatchCategory(macthId);
            })
    }, []);



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const user = { ...loggedInUser, matchCategory, data }
        fetch('http://localhost:4000/PlecedOrderInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order has been submitted successfully')
                }
            })
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">
                        <li><FontAwesomeIcon icon={faShoppingCart}/> Order</li>
                        <li><Link to="/ServiceList"><FontAwesomeIcon icon={faShoppingBag}/> Service list</Link></li>
                        <li><Link to="/ServicesUser"><FontAwesomeIcon icon={faShoppingBag}/> Services User</Link></li>
                        {/* <li><Link to="/addService"><FontAwesomeIcon icon={faPlus}/> Add Service</Link></li> */}
                        {/* <li><Link to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus}/> Make Admin</Link></li> */}
                    </nav>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="mt-5 ml-5">Order</h4>
                        <h4 className="mt-5 mr-5">{loggedInUser.name}</h4>
                    </div>
                    <div className="from_area">
                        <form className="pt-5 pl-5" onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" name="name" placeholder="your name/ company name" ref={register({ required: true })} />
                            {errors.name && <span>name is required</span>}

                            <br />
                            <input className="form-control" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
                            {errors.email && <span>email is required</span>}
                            <br />

                            <input className="form-control" name="course" defaultValue={matchCategory.title} ref={register({ required: true })} />
                            {errors.course && <span>course is required</span>}
                            <br />

                            <textarea className="form-control py-4" name="projectDetails" placeholder="Project details" ref={register({ required: true })} />
                            {errors.projectDetails && <span>projectDetails is required</span>}
                            <br />

                            <div className="d-flex justify-content-between">
                                <input className="form-control" name="price" placeholder="Price" ref={register({ required: true })} />
                                {errors.price && <span>price is required</span>}
                                <input className="form-control" type="file" />
                            </div>
                            <br />
                            <input className="btn btn-dark px-5" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacedOrder;