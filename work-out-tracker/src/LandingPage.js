import React from 'react';

const LandingPage = ({ onGetStarted }) => {
  const landingStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'E9A6A6', // Primary color
    color: '#3F3351', // Accent color
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#3F3351', // Secondary color
    color: '#ffffff', // Text color for the button
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={landingStyles}>
      <h1>Welcome to the Workout Tracker</h1>
      <p>Keep track of your workouts with ease!</p>
      <button style={buttonStyles} onClick={onGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
