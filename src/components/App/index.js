import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Header from '../Header';
import Footer from '../Footer';
import View from '../View';
import ScrollTopButton from '../ScrollTopButton';

import './style.scss';


const App = () => {
  // function to automatically scroll-top after clicking on link-nav
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  }, [pathname]);

  // function to toggle between open/close the burger menu
  const [open, setOpen] = useState(false);
  const toggle = () => { setOpen(!open) };

  // function to close the burger menu when clicking on link-nav
  const closed = () => { setOpen(false); };

  // try to apply 'postion: fixed' on app but does some display issues with empty or 
  //  light component when i open/close the burger menu. Can't apply hoverflow style 
  // directly on app, so this solution works fine to apply it on body:
  // burger open = prevent scrolled background
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);  
  
  return (
    <HelmetProvider>
      <div className='app'>
        <div className="app-main">
            <Header open={open} toggle={toggle} closed={closed}/>
            <View />
            <Footer />
            <ScrollTopButton />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;