import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import View from '../View';
import './style.scss';


const App = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div className="app">
            <div className="app-main">
                <Header />
                <View />
                <Footer />
            </div>
        </div>
    );
};

export default App;