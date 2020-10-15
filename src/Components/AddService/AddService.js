import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logos/logo.png';

const AddService = () => {

     // service insert
    const history = useHistory();

    const [serviceinfo, setServiceInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...serviceinfo };
        newInfo[e.target.name] = e.target.value;
        setServiceInfo(newInfo);
    };

    const [fileStorage, setFileStorage] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFileStorage(newFile)
    }

   

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', fileStorage);
        formData.append('title', serviceinfo.title);
        formData.append('discription', serviceinfo.discription);

        fetch('http://localhost:4000/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
            })
            .catch(error => {
                console.error(error)
            })
            alert('Your service has been added successfully');
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
                    <li><Link to="/ServicesUser">Services User</Link></li>
                        <li>Add Service</li>
                        <li><Link to="/mekeAdmin">Make Admin</Link></li>
                    </nav>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="mt-5 ml-5">Order</h4>
                        <h4 className="mt-5 mr-5">name</h4>
                    </div>
                    <div className="from_area">
                    <form className="pt-5 pl-5" onSubmit={handleSubmit}>
                            <h3>Service Title</h3>
                            <input onBlur={handleBlur} className="form-control" name="title" placeholder="your name" required />
                            <br />
                            <br />
                            <h3>Service Discription</h3>
                            <textarea onBlur={handleBlur} className="form-control py-4" name="discription" placeholder="Discription" required />
                            <br />
                            <br />
                            <h3>Upload Icon</h3>
                            <input onChange={handleFileChange} type="file" />
                            <br />
                            <br />
                            <input className="btn btn-dark px-5" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;