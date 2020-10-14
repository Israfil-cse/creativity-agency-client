import React from 'react';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProviderCompany from '../ProviderCompany/ProviderCompany';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProviderCompany></ProviderCompany>
            <Services></Services>
            <Works></Works>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;