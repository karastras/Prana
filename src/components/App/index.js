import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import View from '../View';
import './style.scss';


const App = () => {
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