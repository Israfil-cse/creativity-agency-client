import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const ServicesDetails = (props) => {
    const {_id, name, image, discription} = props.service;
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="serviceItemStyle text-dark">
                <Link to={`/OrderInfo/${_id}`}>
                    <img className="servicImg" src={image} alt="" />
                    <h4>{name}</h4>
                    <p>{discription}</p>
                </Link>
            </div>

        </div>
    );
};

export default ServicesDetails;