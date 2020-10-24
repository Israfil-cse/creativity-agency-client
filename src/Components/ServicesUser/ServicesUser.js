import React, { useEffect, useState } from 'react';
import './ServicesUser.css';
import spin from '../../images/icons/spin.gif';


const ServicesUser = () => {

    const [ServicesUserList, setServicesUserList] = useState([]);
    useEffect(() => {
        fetch('https://frozen-beyond-82990.herokuapp.com/servicesUserList')
            .then(res => res.json())
            .then(data => setServicesUserList(data))
    }, [])
    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project details</th>
                    </tr>
                </thead>
                <tbody>
                    <div style={{ width: '100%' }} className="d-flex justify-content-center">
                        <div style={{ width: '50px' }}>
                            {
                                ServicesUserList.length === 0 && <img src={spin} alt="" />
                            }
                        </div>
                    </div>
                    {
                        ServicesUserList.map((service, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{service.data.name}</td>
                                <td>{service.email}</td>
                                <td>{service.matchCategory.name}</td>
                                <td>{service.data.projectDetails}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServicesUser;