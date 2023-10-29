import React from 'react';

const services = [
  "Service 1",
  "Service 2",
  "Service 3",
  "Service 4",
];

const Service = () => {
  return (
    <div className="service">
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Service;