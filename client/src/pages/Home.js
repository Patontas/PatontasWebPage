import React from 'react';
import { Helmet } from 'react-helmet-async';
import FeatureProducts from '../components/FeatureProducts';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <FeatureProducts />
        </div>
    );
};

export default Home;
