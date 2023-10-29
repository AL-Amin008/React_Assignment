import React, { useState } from 'react';

const Hero = () => {
  // Example: Condition to check if the user is an admin
  const isAdmin = true;

  return (
    <div className="hero">
      <h2>Welcome to Our Website</h2>
      {isAdmin ? (
        <p>Welcome, Admin! You have access to admin features.</p>
      ) : (
        <p>Welcome, User! You have standard access.</p>
      )}
    </div>
  );
};

export default Hero;