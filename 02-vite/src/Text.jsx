import { useState } from "react";

function Text({firstbutton, secondbutton}) {
    let [name, setName] = useState('');

    return (
        <>
            <button onClick={() => setName('Julien')}>{firstbutton}</button>
            <button onClick={() => setName('Toto')}>{secondbutton}</button>
            {name && <h1>Ton prénom est : {name}</h1>}
            <button onClick={() => setName('')}>Supprimer</button>
        </>
    );
}

export default Text;
