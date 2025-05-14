import React from 'react';
import './Welcome.css';
import '../Welcome/Welcome.css'

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-text">
        <h2>Welcome to Beauty of Beaches</h2>
        <p>
          Discover the most breathtaking coastlines from around the world. 
          Whether you're looking for a peaceful retreat or an adventurous escape, 
          our guide takes you to the most beautiful beaches by region.
        </p>
      </div>
      <div className="welcome-image">
        <img src="beachWelcome.png" alt="Welcome Beach" />
      </div>
    </div>
  );
};

export default Welcome;
