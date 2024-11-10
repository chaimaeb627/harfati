import React, { useEffect, useState } from 'react';
import './Partie5.css';

const counters = [
  { number: 56, label: 'Projets terminés' },
  { number: 146, label: 'Travailleurs employés' },
  { number: 89, label: 'Clients satisfaits' },
  { number: 42, label: 'Prix ​​gagnés' }
];

const Partie5 = () => {
  const [count, setCount] = useState(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) =>
        prevCount.map((c, index) => {
          const target = counters[index].number;
          if (c < target) return c + Math.ceil(target / 100);
          return c;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []); // Le tableau de dépendances est vide car `counters` est défini en dehors du composant

  return (
    <div className="counter-section">
      {counters.map((counter, index) => (
        <div className="counter" key={index}>
          <h2>{count[index]}</h2>
          <p>{counter.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Partie5;
