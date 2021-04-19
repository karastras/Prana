import React, { useState}  from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// Page transitions
import { AnimatePresence } from "framer-motion";


// import for navbar 
import Service from './Service';
import Home from './Home';
import Philosophy from './Philosophy';
import Offers from './Offers';
import Marks from './Marks';
import FindUs from './FindUs';

// import from Service component
import Epilation from './Service/Epilation';
import SkinCare from './Service/SkinCare';
import BodyCare from './Service/BodyCare';
import Massage from './Service/Massage';

// import from Marks component
import Mark from './Marks/Mark';

/* import for Footer */
import LegalNotice from './FooterView/LegalNotice';
import Sitemap from './FooterView/Sitemap';

/* View for Error404 */
import Error from './Error404';

// data
import dataService from '../../data/service';
import dataMark from '../../data/mark';
import dataOffer from '../../data/offers';
import dataHome from '../../data/carousel';
import dataPrice from '../../data/servicePrices';

import './style.scss';

const View = () => {
    // Display price array
    const [opened, setOpened] = useState (false);
    const isOpen = () => { setOpened(!opened)};
    const [openedWo, setOpenedWo] = useState (false);
    const isOpenWo = () => { setOpenedWo(!openedWo)};
    const [openedMen, setOpenedMen] = useState (false);
    const isOpenMen = () => { setOpenedMen(!openedMen)};

    // Page transition
    const location = useLocation();
    const pageVariants = {
        initial: { opacity: 0, x: "-100vw"},
        in: { opacity: 1, x: 0, 
            // scale: 1 
        },
        out: { opacity: 0, x: "100vw", 
        // scale: 0
        }
      };
    const pageTransition = {
        transition: "linear",
        // type: "spring",
        // stiffness: 80,
        // type: "tween",
        // ease: "anticipate",
        duration: 0.5,
    }

    return (
        <div className="view">
            {/* Delete "exitBeforeEnter" to fix issue a blank space but need use postion: "relative" on View css and postion: "absolute" 
            on all other component but causes issues with some layont in this project, so for now i don't use this */}
            <AnimatePresence exitBeforeEnter >         
                <Switch location={location} key={location.pathname}>
                    {/* Navbar */}
                    <Route exact path='/' component={() => (
                        <Home data={dataHome} pageVariants={pageVariants} pageTransition={pageTransition} />
                        )}/>
                    <Route exact path='/service' render={(props) => (
                        <Service {...props} data={dataService} pageVariants={pageVariants} pageTransition={pageTransition} />
                    )}/>
                    <Route exact path='/philosophy' render={() => (
                        <Philosophy pageVariants={pageVariants} pageTransition={pageTransition} />
                    )}/>
                    <Route exact path='/offers' render={() => (
                        <Offers data={dataOffer} pageVariants={pageVariants} pageTransition={pageTransition} />
                        )}/>
                    <Route exact path='/marks' render={() => (
                        <Marks data={dataMark} pageVariants={pageVariants} pageTransition={pageTransition} />
                    )}/>
                    <Route exact path='/find-us' render={() => (
                        <FindUs pageVariants={pageVariants} pageTransition={pageTransition} />
                    )}/>

                    {/* Service components */}
                    <Route exact path='/epilation' render={() => (
                        <Epilation openedWo={ openedWo } isOpenWo={ isOpenWo } openedMen={ openedMen } isOpenMen={ isOpenMen }
                        list={ dataPrice } pageVariants={pageVariants} pageTransition={pageTransition} />
                        )}/>
                    <Route exact path='/skinCare' render={() => (
                        <SkinCare data={dataPrice} opened={opened} isOpen={isOpen} pageVariants={pageVariants} pageTransition={pageTransition} />
                        )}/>
                    <Route exact path='/bodyCare' render={() => (
                        <BodyCare data= {dataPrice} opened={opened} isOpen={isOpen} pageVariants={pageVariants} pageTransition={pageTransition} />
                        )}/>
                    <Route exact path='/massage' render={() => (
                        <Massage data={dataService} pageVariants={pageVariants} pageTransition={pageTransition} />
                        )}/>

                    {/* Marks components */}
                    {
                        dataMark.map((markObject)=>(
                          <Route key={markObject.id} exact path={markObject.path} render={() => (
                              <Mark {...markObject} pageVariants={pageVariants} pageTransition={pageTransition} />
                              )}/>
                        ))
                    }

                    {/* Footer components */}
                    <Route exact path='/contact-us' render={() => (
                        <FindUs pageVariants={pageVariants} pageTransition={pageTransition} />
                    )}/>
                    <Route exact path='/legal-notice' render={() => (
                        <LegalNotice pageVariants={pageVariants} pageTransition={pageTransition} />
                    )}/>
                    <Route exact path='/sitemap' render={() => (
                        <Sitemap pageVariants={pageVariants} pageTransition={pageTransition} />
                    )}/>

                    {/* Error404 */}
                    <Route render={() => (
                        <Error pageVariants={pageVariants} pageTransition={pageTransition} />
                    )}/>
                </Switch>
            </AnimatePresence>           
        </div>
    );
};

export default View;