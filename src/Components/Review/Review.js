import React, { useContext, useState } from 'react';
import './Review.css';
import logo from '../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const [fileStorage, setFileStorage] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFileStorage(newFile)
    }

    // review data insert
    const history = useHistory();

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', fileStorage);
        formData.append('name', info.name);
        formData.append('surName', info.surName);
        formData.append('discription', info.discription);

        fetch('https://frozen-beyond-82990.herokuapp.com/customarReview', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
            })
            .catch(error => {
                console.error(error)
            })
            alert('Your Review has been submitted successfully');
            history.push('/')
    }


    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <figure className="mt-5 pl-5">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </figure>
                    <nav className="pl-5 mt-5">
                        
                    </nav>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="mt-5 ml-5">Order</h4>
                        <h4 className="mt-5 mr-5">{loggedInUser.name}</h4>
                    </div>
                    <div className="from_area">
                        <form className="pt-5 pl-5" onSubmit={handleSubmit}>
                            <input onBlur={handleBlur} className="form-control newInput" name="name" placeholder="your name" required />
                            <br />
                            <br />
                            <input onBlur={handleBlur} className="form-control newInput" name="surName" placeholder="comphanys name designation" required />
                            <br />
                            <br />
                            <textarea onBlur={handleBlur} className="form-control py-4 newInput" name="discription" placeholder="Discription" required />
                            <br />
                            <br />
                            <input onChange={handleFileChange} type="file" />
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