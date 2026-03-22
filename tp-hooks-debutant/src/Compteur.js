import { useReducer } from 'react';

const etatInitial = {
  valeur: 0
};

function gestionCompteur(etat, action) {
  if (action.type === 'ajouter') {
    return { valeur: etat.valeur + 1 };
  }

  if (action.type === 'retirer') {
    return { valeur: etat.valeur - 1 };
  }

  return etat;
}

function Compteur() {
  const [etat, envoyer] = useReducer(gestionCompteur, etatInitial);

  return (
    <div>
      <p>Valeur actuelle : {etat.valeur}</p>
      <button onClick={() => envoyer({ type: 'ajouter' })}>
        Augmenter
      </button>
      <button onClick={() => envoyer({ type: 'retirer' })} style={{ marginLeft: '10px' }}>
        Diminuer
      </button>
    </div>
  );
}

export default Compteur;