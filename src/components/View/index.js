import React from 'react';
import Service from './Service';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Philosophy from './Philosophy';
import Offers from './Offers';
import Marks from './Marks';
<<<<<<< HEAD

import Epilation from './Service/Epilation';
import SkinCare from './Service/SkinCare';
import BodyCare from './Service/BodyCare';
import Massage from './Service/Massage';

=======
>>>>>>> a59d359e6b5a75289b83602e90ecb1d58845e314
import FindUs from './FindUs';
import AboutUs from './FooterView/AboutUs';
import Contact from './FooterView/Contact';
import LegalNotice from './FooterView/LegalNotice';
import Error from './Error404';
import './style.scss';

const View = () => {
    return (
<<<<<<< HEAD
        <div className="view">            
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/service' component={Service} />
                    <Route exact path='/philosophy' component={Philosophy} />
                    <Route exact path='/offers' component={Offers} />
                    <Route exact path='/marks' component={Marks} />
                    <Route exact path='/find-us' component={FindUs} />

                    <Route exact path='/epilation' component={Epilation} />
                    <Route exact path='/skinCare' component={SkinCare} />
                    <Route exact path='/bodyCare' component={BodyCare} />
                    <Route exact path='/massage' component={Massage} />

=======
        <div className="view">  

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/service' component={Service} />
                    <Route exact path='/philosophy' component={Philosophy} />
                    <Route exact path='/offers' component={Offers} />
                    <Route exact path='/marks' component={Marks} />
                    <Route exact path='/find-us' component={FindUs} />
                    
>>>>>>> a59d359e6b5a75289b83602e90ecb1d58845e314
                    <Route exact path='/about-us' component={AboutUs} />
                    <Route exact path='/contact-us' component={Contact} />
                    <Route exact path='/legal-notice' component={LegalNotice} />
                    <Route component={Error} />
                </Switch>            
<<<<<<< HEAD
=======
        
>>>>>>> a59d359e6b5a75289b83602e90ecb1d58845e314
        </div>
    );
};

export default View;