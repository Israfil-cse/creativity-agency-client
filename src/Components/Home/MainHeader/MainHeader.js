import React from 'react';
import './MainHeader.css';
import baner from '../../../images/logos/Frame.png';

const MainHeader = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae sint provident, error quo porro ea corporis deleniti laudantium, eius dolorum voluptatum, eveniet saepe adipisci! Nihil excepturi obcaecati facere laudantium?</p>
                <button className=" btn btn-dark px-5">Hire Us</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid baner" src={baner} alt="" />
                </div>
        </div>
    </div >
    );
}

export default MainHeader;