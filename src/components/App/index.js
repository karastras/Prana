import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Header from '../Header';
import Footer from '../Footer';
import View from '../View';

import './style.scss';


const App = () => {
// function for automatically scroll-top 
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
// function for the buger menu
  const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    };

    
    return (
      <HelmetProvider>
        <div className={ open ? 'app--open ' : 'app' }>
            <div className="app-main">
                <Header open={open} toggle={toggle} />
                <View />
                <Footer />
            </div>
        </div>
      </HelmetProvider>
    );
};

export default App;