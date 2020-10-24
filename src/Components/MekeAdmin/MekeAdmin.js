import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import { useForm } from "react-hook-form";

const MekeAdmin = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://frozen-beyond-82990.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin added');
                    history.push('/')
                }
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
                        <li>Make Admin</li>
                    </nav>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="mt-5 ml-5">Order</h4>
                        <h4 className="mt-5 mr-5">name</h4>
                    </div>
                    <div className="from_area">
                        <h2 className="ml-5 pt-5">New Admin Email</h2>
                        <form style={{width:'50%', marginLeft: '50px'}} onSubmit={handleSubmit(onSubmit)}>                  
                            <input className="form-control"name="email" placeholder="israfil121@gmail.com" ref={register({ required: true })} />
                            {errors.email && <span>email is required</span>}
                            <br/>
                            <input className="btn btn-success px-5" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MekeAdmin;