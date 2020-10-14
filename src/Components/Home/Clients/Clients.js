import React, { useEffect, useState } from 'react';
import ClientsDetails from './ClientsDetails';

const Clients = () => {


    // // ADD fakeData to real Database
    // const handlAddData = () => {
    //         fetch('http://localhost:4000/addClicntData', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(fakedata)
    //         })

    // }

    
    // review data approve
    const [clientReview, setClientReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/reviewApprove')
            .then(res => res.json())
            .then(data => setClientReview(data))
    }, []);


    return (
        <div className="mt-5 pt-5">
            <h2 className="text-center">Clients <span style={{ color: '#7BB35A' }}>Feedback</span></h2>
            <div className="container">
                <div className="row">
                    {
                        clientReview.map(review => <ClientsDetails review={review}></ClientsDetails>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Clients;