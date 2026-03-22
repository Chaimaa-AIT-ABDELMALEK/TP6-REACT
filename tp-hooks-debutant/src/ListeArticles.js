import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (chargement) {
    return <p>Chargement des articles...</p>;
  }

  if (erreur) {
    return <p>Une erreur est survenue : {erreur.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>Aucun article trouvé.</p>;
  }

  return (
    <div>
      <ul>
        {data.slice(0, 10).map((element) => (
          <li key={element.id}>{element.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeArticles;