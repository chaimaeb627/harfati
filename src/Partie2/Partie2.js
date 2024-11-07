


import React from 'react';
import './Partie2.css';

const Partie2 = () => {
  const services = [
    { title: "FIABILITÉ", icon: "🤝" },
    { title: "PROFESSIONNALISME", icon: "🧑‍✈️" },
    { title: "EXCELLENCE", icon: "🏅" },
    { title: "SATISFACTION", icon: "👍" },
  ];

  return (
    <div className="service-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
        </div>
      ))}
    </div>
  );
};








export default Partie2;
