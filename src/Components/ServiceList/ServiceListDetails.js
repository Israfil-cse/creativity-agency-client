import React from 'react';
import './ServiceList.css'

const ServiceListDetails = (props) => {
    const {name, image, discription} = props.exctOd.matchCategory;
    return (
        <div className="col-md-6 d-flex justify-content-center">
            <div className="reviewItemStyle">
                <img className="img-fluid reviewImg" src={image} alt="" />
                <h2 className="text-center">{name}</h2>
                <p className="text-center">{discription}</p>
            </div>
        </div>
    );
};

export default ServiceListDetails;