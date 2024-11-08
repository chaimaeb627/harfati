import React from 'react';
import { FaHandshake, FaUserTie, FaAward, FaThumbsUp } from 'react-icons/fa';
import './Partie2.css';

const Partie2 = () => {
  const services = [
    { title: "FIABILITÉ", icon: <FaHandshake /> },
    { title: "PROFESSIONNALISME", icon: <FaUserTie /> },
    { title: "EXCELLENCE", icon: <FaAward /> },
    { title: "SATISFACTION", icon: <FaThumbsUp /> },
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
