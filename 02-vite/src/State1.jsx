import { useState } from "react";

function State1() {
    const [name] = useState('Matthieu');
    const [cat] = useState({
        name: 'Bianca',
        age: 6,
        song: 'Miaouw',
        bananaNumber: 18,
    });

    return (
        <div>
            <p>Afficher la propriété name du state</p>
            <p> {cat.name} </p>

            <p>Afficher la propriété cat du state avec ses attributs</p>
            <p> {cat.age} </p>

            <div>
                <h2>Le cat est là</h2>
            </div>

            <p>Créer une propriété song dans le state, donnez-lui la valeur de votre choix, et affichez-là ici.</p>
            <p> {cat.song} </p>

            <p>Créer une propriété bananaNumber dans le state, donnez-lui la valeur de votre choix, et affichez-la ici.</p>
            <p> {cat.bananaNumber} </p>

        </div>
    );
}

export default State1;
