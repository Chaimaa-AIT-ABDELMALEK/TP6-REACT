import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [secondes, setSecondes] = useState(0);
  const [enMarche, setEnMarche] = useState(true);
  const referenceInterval = useRef(null);

  useEffect(() => {
    if (enMarche) {
      referenceInterval.current = setInterval(() => {
        setSecondes((ancienneValeur) => ancienneValeur + 1);
      }, 1000);
    }

    return () => {
      clearInterval(referenceInterval.current);
    };
  }, [enMarche]);

  const demarrer = () => setEnMarche(true);
  const arreter = () => setEnMarche(false);

  const reinitialiser = () => {
    setEnMarche(false);
    setSecondes(0);
  };

  const formaterTemps = () => {
    const minutes = Math.floor(secondes / 60);
    const reste = secondes % 60;

    return `${String(minutes).padStart(2, '0')}:${String(reste).padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>{formaterTemps()}</h3>

      <button onClick={demarrer} disabled={enMarche}>
        Démarrer
      </button>
      <button onClick={arreter} disabled={!enMarche} style={{ margin: '0 10px' }}>
        Pause
      </button>
      <button onClick={reinitialiser}>
        Réinitialiser
      </button>

      <p>{enMarche ? 'Le timer fonctionne.' : 'Le timer est arrêté.'}</p>
    </div>
  );
}

export default Timer;