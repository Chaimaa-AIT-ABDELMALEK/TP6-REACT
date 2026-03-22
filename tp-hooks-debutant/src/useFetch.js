import { useEffect, useState } from 'react';

function useFetch(adresse) {
  const [data, setData] = useState(null);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    let composantActif = true;

    const chargerDonnees = async () => {
      try {
        setChargement(true);
        setErreur(null);

        const reponse = await fetch(adresse);

        if (!reponse.ok) {
          throw new Error('Impossible de récupérer les données');
        }

        const resultat = await reponse.json();

        if (composantActif) {
          setData(resultat);
        }
      } catch (e) {
        if (composantActif) {
          setErreur(e);
        }
      } finally {
        if (composantActif) {
          setChargement(false);
        }
      }
    };

    chargerDonnees();

    return () => {
      composantActif = false;
    };
  }, [adresse]);

  return { data, chargement, erreur };
}

export default useFetch;