import React from 'react';
import './ServiceList.css'

const ServiceListDetails = (props) => {
    const {title, image, discription} = props.exctOd.matchCategory;
    console.log(props);
    return (
        <div className="col-md-6 d-flex justify-content-center">
            <div className="reviewItemStyle">
                <img className="img-fluid reviewImg" src={`data:image/png;base64,${image.img}`} alt="" />
                <h2 className="text-center">{title}</h2>
                <p className="text-center">{discription}</p>
            </div>
        </div>
    );
};

export default ServiceListDetails;