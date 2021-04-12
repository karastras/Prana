import React, { useState }  from 'react';
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
import dataMark from '../../data/mark';
import dataMassage from '../../data/massage';
import dataOffers from '../../data/offers';
import dataHome from '../../data/carousel';
import dataBody from '../../data/bodyCarePrice';
import dataSkin from '../../data/skinCarePrice';
import listWo from '../../data/epilationPriceWo';
import listMen from '../../data/epilationPriceMen';

import './style.scss';

const View = () => {
    const [opened, setOpened] = useState (false);
    const isOpen = () => { setOpened(!opened)};
    const [openedWo, setOpenedWo] = useState (false);
    const isOpenWo = () => { setOpenedWo(!opened)};
    const [openedMen, setOpenedMen] = useState (false);
    const isOpenMen = () => { setOpenedMen(!opened)};

    return (
        <div className="view">            
                <Switch>
                    {/* Navbar */}
                    <Route exact path='/' component={() => (
                        <Home data={dataHome} />
                        )}/>
                    <Route exact path='/service' render={(props) => (
                        <Service {...props} data={dataService} />
                    )}/>
                    <Route exact path='/philosophy' component={Philosophy} />
                    <Route exact path='/offers' render={() => (
                        <Offers data={dataOffers} />
                        )}/>
                    <Route exact path='/marks' render={() => (
                        <Marks data={dataMark} />
                    )}/>
                    <Route exact path='/find-us' component={FindUs} />

                    {/* Service components */}
                    <Route exact path='/epilation' render={() => (
                        <Epilation openedWo={ openedWo } isOpenWo={ isOpenWo } openedMen={ openedMen } isOpenMen={ isOpenMen }
                        listWo={ listWo } listMen={ listMen } />
                        )}/>
                    <Route exact path='/skinCare' render={() => (
                        <SkinCare data= {dataSkin} opened={opened} isOpen={isOpen} />
                        )}/>
                    <Route exact path='/bodyCare' render={() => (
                        <BodyCare data= {dataBody} opened={opened} isOpen={isOpen} />
                        )}/>
                    <Route exact path='/massage' render={() => (
                        <Massage data={dataMassage} />
                        )}/>

                    {/* Marks components */}
                    {
                        dataMark.map((markObject)=>(
                          <Route key={markObject.id} exact path={markObject.path} render={() => (
                              <Mark {...markObject} />
                              )}/>
                        ))
                    }

                    {/* Footer components */}
                    <Route exact path='/contactez-nous' component={FindUs} />
                    <Route exact path='/legal-notice' component={LegalNotice} />
                    <Route exact path='/sitemap' component={Sitemap} />

                    {/* Error404 */}
                    <Route component={Error} />
                </Switch>            
        </div>
    );
};

export default View;