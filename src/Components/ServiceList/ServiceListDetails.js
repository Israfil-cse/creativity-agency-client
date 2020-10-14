import React from 'react';

const ServiceListDetails = (props) => {
    const {name, image, discription} = props.exctOd.matchCategory;
    console.log(props);
    return (
        <div>
            <div className="col-md-6">
                <img src={image} alt=""/>
                <h2>{name}</h2>
                <p>{discription}</p>
            </div>
        </div>
    );
};

export default ServiceListDetails;