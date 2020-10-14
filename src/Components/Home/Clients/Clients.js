import React from 'react';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';
import ClientsDetails from './ClientsDetails';

const clientsData = [
    {
        name: 'Nash Partik',
        surName: 'CEO,Manpol',
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt aut ullam perferendis. Perspiciatis labore dignissimos! .",
        image: client1
    },
    {
        name: 'Miriam Barron',
        surName: 'CEO,Manpol',
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt aut ullam perferendis. Perspiciatis labore dignissimos! .",
        image: client2
    },
    {
        name: 'Bria Malone',
        surName: 'CEO,Manpol',
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt aut ullam perferendis. Perspiciatis labore dignissimos! .",
        image: client3
    }

]

const Clients = () => {
    return (
        <div className="mt-5 pt-5">
            <h2 className="text-center">Clients <span style={{ color: '#7BB35A' }}>Feedback</span></h2>

            <div className="container">
                <div className="row">
                    {
                        clientsData.map(client => <ClientsDetails client={client}></ClientsDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Clients;