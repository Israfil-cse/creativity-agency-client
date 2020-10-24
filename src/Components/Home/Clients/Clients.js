import React, { useEffect, useState } from 'react';
import ClientsDetails from './ClientsDetails';
import spin from '../../../images/icons/spin.gif';

const Clients = () => {


    // // ADD fakeData to real Database
    // const handlAddData = () => {
    //         fetch('https://frozen-beyond-82990.herokuapp.com/addClicntData', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(fakedata)
    //         })

    // }

    
    // review data approve
    const [clientReview, setClientReview] = useState([]);
    useEffect(() => {
        fetch('https://frozen-beyond-82990.herokuapp.com/reviewApprove')
            .then(res => res.json())
            .then(data => setClientReview(data))
    }, []);


    return (
        <div className="mt-5 pt-5">
            <h2 className="text-center">Clients <span style={{ color: '#7BB35A' }}>Feedback</span></h2>
            <div className="container">
                <div className="row">
                <div style={{width: '100%'}} className="d-flex justify-content-center">
                    <div style={{width: '200px'}}>
                    {
                        clientReview.length === 0 && <img src={spin} alt="" />
                    }
                    </div>
                </div>
                    {
                        clientReview.map(review => <ClientsDetails review={review} key={review._id}></ClientsDetails>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Clients;