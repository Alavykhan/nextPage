import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
    <Header></Header>
    <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
    <Footer></Footer>
    </div>
  );
};

export default App;