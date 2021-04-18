import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Header from '../Header';
import Footer from '../Footer';
import View from '../View';

import './style.scss';


const App = () => {
// function to automatically scroll-top 
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

// function to toggle between open/close the burger menu
  const [open, setOpen] = useState(false);
  const toggle = () => {
        setOpen(!open)
  };

// function to close the burger menu when click on link
  const closed = () => {
      setOpen(false);
  };  
    return (
      <HelmetProvider>
              {/* burger open = stop scrolled background */}
        <div className={ open ? 'app--open ' : 'app' }>
            <div className="app-main">
                <Header open={open} toggle={toggle} closed={closed}/>
                <View />
                <Footer />
            </div>
        </div>
      </HelmetProvider>
    );
};

export default App;