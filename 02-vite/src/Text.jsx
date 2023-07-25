import { useState } from "react";

function Text() {
    const [name, setName] = useState('');
    const toggleName = (newName) => {
        newName === name ? setName('') : setName(newName);
    };

    return (
        <>
            <button
                onClick={() => toggleName('Julien')}
                className={name === 'Julien' ? 'selected' : ''}
            >
                Julien
            </button>
            <button
                onClick={() => toggleName('Toto')}
                className={name === 'Toto' && 'selected'}
            >
                Toto
            </button>
            <input type="text" onChange={(event) => setName(event.target.value)} />
            <button onClick={() => setName('')} disabled={!name}>
                Supprimer
            </button>
            {name && <h1>Ton prénom est : {name}</h1>}
        </>
    );
}

export default Text;
