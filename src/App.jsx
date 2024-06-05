import React from 'react';
import Wave from 'react-wavify';
import Navigation from './components/Nav/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '../src/assets/css/reset.css'
import './App.css';

import { Outlet } from 'react-router-dom';
import { PathnameProvider } from './components/PathnameContext/PathnameContext';

function App() {
  return (
    <PathnameProvider>
      <div className="header-wave-container">
        {/* Provides the wave animation in the header */}
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
        {/* Renders the first route and can also match the location of */}
        <Outlet />
      </div>
      <Footer />
    </PathnameProvider>
  );
}

export default App;