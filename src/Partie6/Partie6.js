import React, { useState } from 'react';
import './Partie6.css'; // Assurez-vous d'ajouter du style CSS pour la mise en page.

const projects = [
  { id: 1, title: 'Ahmed Naji', category: 'plombier et Chauffagiste', image: './2500.png' },
  { id: 2, title: 'Mostafa Ngadi', category: 'Menuisier', image: './videos/2535.png' },
  { id: 3, title: 'Mohammed moussaoui', category: 'Jardinier', image: './1235.png' },
  { id: 4, title: 'Abdelbasset Amar', category: 'Installateur et Réparateur des climatiseurs', image: './3456.png' },
  { id: 5, title: 'Ibrahim lahrach', category: 'Peintre', image: './videos/5678.png' },
  { id: 6, title: 'Bachir Ghazwani', category: 'Mécanicien', image: './videos/6789.png' },
  { id: 7, title: 'Said Lakhdar', category: 'Artisan de Zelig Marocain', image: './videos/1245.png' },
  { id: 8, title: 'Karim Baghdad', category: 'électricien du batiment', image: './videos/1789.png' },
  { id: 9, title: 'Souliman Achour', category: "Technicien d'Internet et des médias ", image: './videos/7890.png' },
  // Ajoutez plus de projets jusqu'à 9
];

function Partie6() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-gallery">
      <h2 className="gallery-title">PROJETS DES DIFFERENTS ARTISANS </h2>
      <div className="gallery-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Partie6 ;
