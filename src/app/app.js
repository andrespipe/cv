import React from 'react';

import Header from '../components/app/header';
import Main from '../components/app/main';
import Footer from '../components/app/footer';

const App = () => (
    <div>
        <Header />
        <div className="container content">
            <Main />
        </div>
        <Footer />
    </div>
);

export default App;