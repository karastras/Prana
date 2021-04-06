import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Header from '../Header';
import Footer from '../Footer';
import View from '../View';

import './style.scss';


const App = () => {
  /* function for automatically scroll-top */
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
      <HelmetProvider>
        <div className="app">
            <div className="app-main">
                <Header />
                <View />
                <Footer />
            </div>
        </div>
      </HelmetProvider>
    );
};

export default App;