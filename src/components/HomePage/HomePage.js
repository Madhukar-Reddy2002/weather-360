import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../svgs/MSLogo.jpg'; // Replace 'path-to-your-logo' with the actual path
import './Homepage.css'
import Arrow from '../../svgs/icons8-arrow-right.gif';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">Welcome to the Weather App!</h1>
      <p className="intro">Get accurate weather information for any location.</p>
      <button className="get-started-btn" onClick={() => navigate('/app')}>
        Get Started
        <img src={Arrow} alt='->'/>
      </button>
    </div>
  );
}

export default HomePage;