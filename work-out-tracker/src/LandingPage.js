import React from 'react';

const LandingPage = ({ onGetStarted }) => {
  const landingStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#CBE4DE', // Set your desired background color for the landing page
    color: '#2C3333', // Set your desired text color for the landing page
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#2E4F4F', // Set your desired button color
    color: '#ffffff', // Set your desired button text color
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={landingStyles}>
      <h1>Welcome to the Workout Tracker </h1>
      <p>Keep track of your workouts with ease!</p>
      <button style={buttonStyles} onClick={onGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
