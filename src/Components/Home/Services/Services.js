import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServicesDetails from './ServicesDetails';
import spin from '../../../images/icons/spin.gif';


const Services = () => {

    const [servicesData, setServicesData] = useState([]);

    // // ADD Data real Database
    // const handleAdd = () => {
    //     fetch('http://localhost:4000/addServicesData', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(fakedata)
    //     })
    // }

    useEffect(() => {
        fetch('http://localhost:4000/allServicesData')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])

    return (
        <div className="text-center">
            <h3 className="mb-5">Provide awesome <span style={{ color: '#7BB35A' }}>services</span></h3>
            <div className="row">
                <div style={{width: '100%'}} className="d-flex justify-content-center">
                    <div style={{width: '200px'}}>
                    {
                        servicesData.length === 0 && <img src={spin} alt="" />
                    }
                    </div>
                </div>
                {
                    servicesData.map(service => <ServicesDetails service={service}></ServicesDetails>)
                }
            </div>
        </div>
    );
};

export default Services;