import React from 'react';
import './Clients.css';

const ClientsDetails = ({review}) => {
    return (
        <div className="col-md-4 mt-5">
            <div className="clientItemStyle">
                <img className="clientImg" src={review.image} alt=""/>
                 <div className="title">
                 <h4 className="mt-3">{review.name}</h4>
                 <h6>{review.surName}</h6>
                 </div>
                <p className="mt-5">{review.discription}</p>
            </div>

        </div>
    );
};

export default ClientsDetails;