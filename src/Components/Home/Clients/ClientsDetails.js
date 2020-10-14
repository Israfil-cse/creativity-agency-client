import React from 'react';
import './Clients.css';

const ClientsDetails = ({client}) => {
    return (
        <div className="col-md-4 mt-5">
            <div className="clientItemStyle">
                <img className="clientImg" src={client.image} alt=""/>
                 <div className="title">
                 <h4 className="mt-3">{client.name}</h4>
                 <h6>{client.surName}</h6>
                 </div>
                <p className="mt-5">{client.discription}</p>
            </div>
        </div>
    );
};

export default ClientsDetails;