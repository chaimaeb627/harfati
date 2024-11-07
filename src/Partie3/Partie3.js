import React from 'react';
import { FaUserCheck, FaTags, FaCog } from 'react-icons/fa';
import './Partie3.css';

const Partie3 = () => {
  const features = [
    { title: 'Présence', icon: <FaUserCheck />, description: 'Présence' },
    { title: 'Transparence', icon: <FaTags />, description: 'Transparence' },
    { title: 'Service', icon: <FaCog />, description: 'Service' },
  ];

  return (
    <div className="container">
      <h2 className="title">NOUS CHOISIR</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partie3;
