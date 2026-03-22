import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>TP Hooks Avancés de Chaimaa</h1>

      <section>
        <h2>1. Compteur avec useReducer</h2>
        <Compteur />
      </section>

      <section>
        <h2>2. Focus automatique avec useRef</h2>
        <FocusInput />
      </section>

      <section>
        <h2>3. Suivi du nombre de rendus</h2>
        <CompteurRendu />
      </section>

      <section>
        <h2>4. Liste des articles</h2>
        <ListeArticles />
      </section>

      <section>
        <h2>5. Timer avec nettoyage</h2>
        <Timer />
      </section>
    </main>
  );
}

export default App;