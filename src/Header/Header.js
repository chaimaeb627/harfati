import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [artisanType, setArtisanType] = useState('');
  const [city, setCity] = useState('');

  const handleValidate = () => {
    console.log("Type d'artisan:", artisanType);
    console.log("Ville choisie:", city);
  };

  return (
    <div className="edir-prestige">
      <video autoPlay loop muted className="background-video">
        <source src="/my_video.mp4" type="video/mp4" />
      </video>

      <header className="header">
        <div className="logo">HIRAFI</div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#artisan">Artisan</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <select className="language-dropdown" defaultValue="EN">
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="AR">AR</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>

      <div className="filter-container">
        <div className="filter-item">
          <label>Type d'artisan:</label>
          <select 
            value={artisanType} 
            onChange={(e) => setArtisanType(e.target.value)}
            className="filter-select"
          >
            <option value="">Sélectionnez un type</option>
            <option value="mécanicien">Mécanicien</option>
            <option value="plombier">Plombier</option>
            <option value="peintre">Peintre</option>
            <option value="menuisier">Menuisier</option>
            {/* Autres options */}
          </select>
        </div>

        <div className="filter-item">
          <label>Choisissez votre ville:</label>
          <select 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            className="filter-select"
          >
            <option value="">Sélectionnez une ville</option>
            <option value="oujda">Oujda</option>
            <option value="rabat">Rabat</option>
            <option value="casablanca">Casablanca</option>
            <option value="marrakech">Marrakech</option>
            {/* Autres options */}
          </select>
        </div>

        <button onClick={handleValidate} className="filter-button">Valider</button>
      </div>
    </div>
  );
};

export default Header;
