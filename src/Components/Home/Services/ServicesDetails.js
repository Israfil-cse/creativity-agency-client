import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const ServicesDetails = (props) => {
    const { _id, title, discription } = props.service;
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="serviceItemStyle">
                <Link to={`/OrderInfo/${_id}`}>
                    <img className="servicImg" src={`data:image/png;base64,${props.service.image.img}`} alt="" />
                    <h4 className="text-dark">{title}</h4>
                    <p className="text-dark">{discription}</p>
                </Link>
            </div>

        </div>
    );
};

export default ServicesDetails;