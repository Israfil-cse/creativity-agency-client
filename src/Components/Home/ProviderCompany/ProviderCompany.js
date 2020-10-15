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

            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-6">
                        <img src={slack} alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={google} alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={uber} alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={netflex} alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={airbnb} alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={airbnb} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProviderCompany;