import { useRef } from 'react';

function FocusInput() {
  const champTexte = useRef(null);

  const activerFocus = () => {
    champTexte.current?.focus();
  };

  return (
    <div style={{ padding: '16px' }}>
      <label htmlFor="champ-chaimaa">Texte : </label>
      <input
        id="champ-chaimaa"
        type="text"
        ref={champTexte}
        placeholder="Écrivez ici..."
      />
      <button onClick={activerFocus} style={{ marginLeft: '10px' }}>
        Mettre le focus
      </button>
    </div>
  );
}

export default FocusInput;