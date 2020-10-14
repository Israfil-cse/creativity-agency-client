import React from 'react';
import './ProviderCompany.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflex from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const ProviderCompany = () => {
    return (
        <div className="provider-container">
            <div className="container d-flex justify-content-between my-5 ">
                <img src={slack} alt="" />
                <img src={google} alt="" />
                <img src={uber} alt="" />
                <img src={netflex} alt="" />
                <img src={airbnb} alt="" />
            </div>
        </div>
    );
};

export default ProviderCompany;