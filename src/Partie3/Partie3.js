import React, { useState } from 'react';
import { FaUserCheck, FaTag, FaCog, FaLock, FaGlobe } from 'react-icons/fa';
import './Partie3.css';

const Partie3 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const optionsTop = [
    { id: 'presence', label: 'Présence', icon: <FaUserCheck />, description: 'Artisans disponibles dans tout le territoire , Large réseau d’artisans qualifiés , Présents dans toutes les régions du Maroc , Services disponibles dans les grandes villes et zones rurales , Artisans certifiés couvrant tout le Maroc  ' },
    { id: 'transparency', label: 'Transparence', icon: <FaTag />, description: 'Tarifs avantageux, Facturation mensuelle sans engagement , Devis rapides et gratuits , Pas de frais cachés ' },
    { id: 'service', label: 'Service', icon: <FaCog />, description: " Disponibilité 24/7 pour vos besoins en artisanat , Artisans bilingues pour mieux vous servir , Flexibilité et adaptabilité selon vos horaires , Prise de rendez-vous rapide et simplifiée , Services d’artisans disponibles dans toute la région , Accompagnement de A à Z pour votre projet " },
  ];

  const optionsBottom = [
    { id: 'security', label: 'Sécurité', icon: <FaLock />, description: "Intervention rapide et sécurisée , Suivi en temps réel de l'artisan , Localisation de l'artisan pour une meilleure communication , Partage de la position de l'artisan avec le client , Compétence et professionnalisme garantis , Équipe d’artisans de confiance spécialisés pour chaque besoin " },
    { id: 'national', label: 'national', icon: <FaGlobe />, description: " Partenaires d’artisanat de renommée mondiale , Artisans qualifiés pour des projets au Maroc , Savoir-faire artisanal exporté dans le monde entier  " },
  ];

  return (
    <div className="app">
      <h1 className="title">NOUS CHOISIR</h1>
      <div className="grid">
        {optionsTop.map((option) => (
          <div
            key={option.id}
            className={`card ${selectedOption === option.id ? 'active' : ''}`}
            onClick={() => setSelectedOption(option.id)}
          >
            <div className="icon">{option.icon}</div>
            <div className="label">{option.label}</div>
            {selectedOption === option.id && option.description && (
              <div className="details">
                {option.description.split(', ').map((item, index) => (
                  <div key={index} className="detail-item">✔ {item}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid centered">
        {optionsBottom.map((option) => (
          <div
            key={option.id}
            className={`card ${selectedOption === option.id ? 'active' : ''}`}
            onClick={() => setSelectedOption(option.id)}
          >
            <div className="icon">{option.icon}</div>
            <div className="label">{option.label}</div>
            {selectedOption === option.id && option.description && (
              <div className="details">
                {option.description.split(', ').map((item, index) => (
                  <div key={index} className="detail-item">✔ {item}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partie3;
