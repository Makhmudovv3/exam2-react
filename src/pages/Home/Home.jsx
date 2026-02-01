import React from 'react';
import './Home.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            
            <Section8 />
            <Section9 />
            <Section10 />
            <Footer />


        </div>
    );
};

export default Home;