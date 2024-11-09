import React from 'react' ;
import "./Partie4.css";

function Partie4() {
  return (
    <div className="services">
      <h2 className="services-title">MORE SERVICES</h2>
      <p className="services-subtitle">ALWAYS DEDICATED AND DEVOTED</p>
      <div className="underline"></div>

      <div className="services-container">
        <div className="service">
          <div className="icon">⚙️</div>
          <h3 className="service-title">WORK</h3>
          <p className="service-description">
            Temporibus autem quibusdam et aut officiis debitis is aut necessitatibus saepe eveniet ut et seo lage
            voluptates sint et molestiae non mes
          </p>
          <button className="learn-more-btn">En savoir Plus</button>
        </div>

        <div className="service">
          <div className="icon">📊</div>
          <h3 className="service-title">ADMINISTRATION</h3>
          <p className="service-description">
            Temporibus autem quibusdam et aut officiis debitis is aut necessitatibus saepe eveniet ut et seo lage
            voluptates sint et molestiae non mes
          </p>
          <button className="learn-more-btn">En savoir Plus</button>
        </div>

        <div className="service">
          <div className="icon">🔨</div>
          <h3 className="service-title">TOOLS</h3>
          <p className="service-description">
            Temporibus autem quibusdam et aut officiis debitis is aut necessitatibus saepe eveniet ut et seo lage
            voluptates sint et molestiae non mes
          </p>
          <button className="learn-more-btn">En savoir Plus</button>
        </div>

        <div className="service">
          <div className="icon">📈</div>
          <h3 className="service-title">CHARTS</h3>
          <p className="service-description">
            Temporibus autem quibusdam et aut officiis debitis is aut necessitatibus saepe eveniet ut et seo lage
            voluptates sint et molestiae non mes
          </p>
          <button className="learn-more-btn">En savoir Plus</button>
        </div>
      </div>
    </div>
  );
}

export default Partie4 ;
