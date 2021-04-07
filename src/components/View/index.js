import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* import for navbar */
import Service from './Service';
import Home from './Home';
import Philosophy from './Philosophy';
import Offers from './Offers';
import Marks from './Marks';
import FindUs from './FindUs';

/* import from Service component */
import Epilation from './Service/Epilation';
import SkinCare from './Service/SkinCare';
import BodyCare from './Service/BodyCare';
import Massage from './Service/Massage';

/* import from Marks component */
import Mark from './Marks/Mark';

/* import for Footer */
import LegalNotice from './FooterView/LegalNotice';
import Sitemap from './FooterView/Sitemap';

/* View for Error404 */
import Error from './Error404';

/* data */
import dataService from '../../data/service';
import dataMarks from '../../data/marks';
import dataMark from '../../data/mark';
import dataMassage from '../../data/massage';
import dataOffers from '../../data/offers';

import './style.scss';

const View = () => {
    return (
        <div className="view">            
                <Switch>
                    {/* View from navbar */}
                    <Route exact path='/' component={Home} />
                    <Route exact path='/service' render={(props) => (
                        <Service {...props} data={dataService} />
                    )}/>
                    <Route exact path='/philosophy' component={Philosophy} />
                    <Route exact path='/offers' render={() => (
                        <Offers data={dataOffers} />
                        )}/>
                    <Route exact path='/marks' render={() => (
                        <Marks data={dataMarks} />
                    )}/>
                    <Route exact path='/find-us' component={FindUs} />

                    {/* View from Service component */}
                    <Route exact path='/epilation' component={Epilation} />
                    <Route exact path='/skinCare' component={SkinCare} />
                    <Route exact path='/bodyCare' component={BodyCare} />
                    <Route exact path='/massage' render={() => (
                        <Massage data={dataMassage} />
                        )}/>

                    {/* View from Marks component */}
                    {
                        dataMark.map((markObject)=>(
                          <Route key={markObject.id} exact path={markObject.path} render={() => (
                              <Mark {...markObject} />
                              )}/>
                        ))
                    }

                    {/* View from Footer component */}
                    <Route exact path='/contactez-nous' component={FindUs} />
                    <Route exact path='/legal-notice' component={LegalNotice} />
                    <Route exact path='/sitemap' component={Sitemap} />

                    {/* View for Error404 */}
                    <Route component={Error} />
                </Switch>            
        </div>
    );
};

export default View;