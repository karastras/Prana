import React from 'react';
import Service from './Service';
import Home from './Home';
import { Route } from 'react-router-dom';
import Philosophy from './Philosophy';
import Offers from './Offers';
import Marks from './Marks';
import FindUS from './FindUs';
import AboutUs from './FooterView/AboutUs';
import Contact from './FooterView/Contact';
import LegalNotice from './FooterView/LegalNotice';
import './style.scss';

const View = () => {
    return (
        <div className="view">
            <Route exact path="/">
<<<<<<< HEAD
                <Home />
=======
<<<<<<< HEAD
                <Home />
=======
                <Welcome />
>>>>>>> 06588bbdbc966eea892368e4072a729a26c235e9
>>>>>>> d3c987d3e64c67dde0e1ef1b4d6090f3ccbe8eaf
            </Route>
            <Route path="/service">
                <Service />
            </Route>
            <Route path="/philosophy">
                <Philosophy />
            </Route>
            <Route path="/offers">
                <Offers />
            </Route>
            <Route path="/marks">
                <Marks />
            </Route>
            <Route path="/find-us">
                <FindUS />
            </Route>
            <Route path="/about-us">
                <AboutUs />
            </Route>
            <Route path="/contact-us">
                <Contact />
            </Route>
            <Route path="/legal-notice">
                <LegalNotice />
            </Route>

        </div>
    );
};

export default View;