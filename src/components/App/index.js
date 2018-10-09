import React from 'react';
import About from '../About';
import BottomArrow from '../BottomArrow';
import Footer from '../Footer';
import Header from '../Header';
import Navigation from '../Navigation';
import Products from '../Products';
import Services from '../Services';
import './index.css';

const App = () => (
  <div className="App">
    <Navigation />
    <Header />
    <Services />
    <Products />
    <About />
    <Footer />
  </div>
);

export default App;
