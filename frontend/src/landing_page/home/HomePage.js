import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Prizing from './Prizing';

function HomePage() {
    return (
        <>

            <Hero />
            <Awards />
            <Stats />
            <Prizing />
            <Education />
            <OpenAccount />

        </>
    );
}

export default HomePage;