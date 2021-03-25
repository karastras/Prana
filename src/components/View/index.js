import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* import for navbar */
import Service from './Service';
import Home from './Home';
import Philosophy from './Philosophy';
import Offers from './Offers';
import Marks from './Marks';

/* import from Service component */
import Epilation from './Service/Epilation';
import SkinCare from './Service/SkinCare';
import BodyCare from './Service/BodyCare';
import Massage from './Service/Massage';

/* import from Marks component */
import Caramel from './Marks/Caramel';
import Phyts from './Marks/Phyts';
import Vitacology from './Marks/Vitacology';
import Peggy from './Marks/Peggy';


/* import for Footer */
import FindUs from './FindUs';
import AboutUs from './FooterView/AboutUs';
import Contact from './FooterView/Contact';
import LegalNotice from './FooterView/LegalNotice';
import Sitemap from './FooterView/Sitemap';

/* View for Error404 */
import Error from './Error404';

import './style.scss';

const View = () => {
    return (
        <div className="view">            
                <Switch>
                    {/* View from navbar */}
                    <Route exact path='/' component={Home} />
                    <Route exact path='/service' component={Service} />
                    <Route exact path='/philosophy' component={Philosophy} />
                    <Route exact path='/offers' component={Offers} />
                    <Route exact path='/marks' component={Marks} />
                    <Route exact path='/find-us' component={FindUs} />

                    {/* View from Service component */}
                    <Route exact path='/epilation' component={Epilation} />
                    <Route exact path='/skinCare' component={SkinCare} />
                    <Route exact path='/bodyCare' component={BodyCare} />
                    <Route exact path='/massage' component={Massage} />

                    {/* View from Marks component */}
                    <Route exact path='/couleur-caramel' component={Caramel} />
                    <Route exact path='/phyts' component={Phyts} />
                    <Route exact path='/vitacology' component={Vitacology} />
                    <Route exact path='/peggy-sage' component={Peggy} />

                    {/* View from Footer component */}
                    <Route exact path='/about-us' component={AboutUs} />
                    <Route exact path='/contact-us' component={Contact} />
                    <Route exact path='/legal-notice' component={LegalNotice} />
                    <Route exact path='/sitemap' component={Sitemap} />

                    {/* View for Error404 */}
                    <Route component={Error} />
                </Switch>            
        </div>
    );
};

export default View;