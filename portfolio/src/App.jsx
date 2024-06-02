import React from 'react';
import Wave from 'react-wavify';
import Navigation from './components/Nav/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'

function App() {
  return (
    <>
      <div className="header-wave-container">
        <Wave
          fill='#1277b0'
          paused={false}
          options={{
            height: 80,
            amplitude: 60,
            speed: 0.4,
            points: 4,
          }}
        />
        <div className="header-navigation-wrapper">
          <Header />
          <Navigation />
        </div>
      </div>
      <div className="app-content">
        <About />
        <Portfolio />
        <Contact />
        <Resume /> 
        
      </div>
      <Footer />
    </>
  );
}

export default App;