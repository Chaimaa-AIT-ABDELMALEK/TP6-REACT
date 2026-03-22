import { useEffect, useRef } from 'react';

function CompteurRendu() {
  const nombreRendus = useRef(0);

  useEffect(() => {
    nombreRendus.current = nombreRendus.current + 1;
    console.log(`Chaimaa - rendu numéro : ${nombreRendus.current}`);
  });

  const afficherRendus = () => {
    console.log(`Le composant a été affiché ${nombreRendus.current} fois.`);
  };

  return (
    <div style={{ padding: '16px', border: '1px solid #bbb', borderRadius: '6px' }}>
      <p>Consultez la console pour voir le nombre de rendus du composant.</p>
      <button onClick={afficherRendus}>
        Voir le compteur de rendus
      </button>
    </div>
  );
}

export default CompteurRendu;