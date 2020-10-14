import React, { useState } from 'react';
import './Review.css';
import logo from '../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const Review = () => {

    // review data insert
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4000/customarReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Review has been submitted successfully')
                }
                history.push('/')
            })
    }


    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">
                        <li>Order</li>
                        <li>Service list</li>
                        <li>Review</li>
                    </nav>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="mt-5 ml-5">Order</h4>
                        <h4 className="mt-5 mr-5">name</h4>
                    </div>
                    <div className="from_area">
                        <form className="pt-5 pl-5" onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" name="name" placeholder="your name" ref={register({ required: true })} />
                            {errors.name && <span>name is required</span>}

                            <br />
                            <input className="form-control" name="surName" placeholder="comphanys name designation" ref={register({ required: true })} />
                            {errors.surName && <span>ComphanyName is required</span>}
                            <br />

                            <textarea className="form-control py-4" name="discription" placeholder="Discription" ref={register({ required: true })} />
                            {errors.discription && <span>Discription is required</span>}
                            <br />
                            <br />
                            <input className="btn btn-dark px-5" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;