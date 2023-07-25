import { useState } from "react";

function StateChallenge() {
    const [animals, setAnimals] = useState([
        {
            name: 'Trolilo',
            type: 'troll'
        },
        {
            name: 'Sheep sheep',
            type: 'poisson'
        },
        {
            name: 'Donald Trump',
            type: 'orange',
            avatar: 'https://m.media-amazon.com/images/I/417PnbtqvgL._AC_UF894,1000_QL80_.jpg',
        }
    ]);
    const [newAnimalType, setNewAnimalType] = useState('');
    const [newAnimalName, setNewAnimalName] = useState('');

    const saveAnimal = () => {
        // event.preventDefault(); => Empêche un formulaire d'être envoyé
        let newAnimal = {name: newAnimalName, type: newAnimalType};

        setAnimals([...animals, newAnimal]);
        setNewAnimalType('');
        setNewAnimalName('');
    }

    return (
        <div>
            <ul>
                <ul>
                    Afficher la liste des animaux dans une boucle map. Pour chaque animal, afficher son nom et son type :
                </ul>
                {animals.map((animal, index) =>
                    <li key={index}> <b>Nom :</b> {animal.name}, <b>Type :</b> {animal.type}, {animal.avatar ? <img src={animal.avatar} className="Trump" alt="L'animal" /> : ''} </li>
                )}

                <ul>
                    Créer un input texte qui permet de saisir la valeur du state newAnimalType. Quand sa valeur change, la valeur de newAnimalType est mise à jour.
                </ul>
                <label htmlFor="">Nom</label>
                <input type="text" value={newAnimalType} onChange={(event) => setNewAnimalType(event.target.value)} />

                <ul>
                    Créer un autre input texte qui permet de saisir la valeur du state newAnimalName, avec le même fonctionnement.
                </ul>
                <label htmlFor="">Type</label>
                <input type="text" value={newAnimalName} onChange={(event) => setNewAnimalName(event.target.value)} />

                <ul>
                    Créer une fonction vide saveAnimal, et l'appeler depuis un bouton que vous créerez également.
                </ul>
                <button onClick={() => saveAnimal()}>Créer l'animal</button>

                <ul>
                    Remplir la fonction saveAnimal tel que les valeurs newAnimalType et newAnimalName sont sauvegardées dans un nouvel objet animal,
                    que la fonction mette le tableau des animaux à jour en ajoutant le nouvel objet animal à la fin et qu'une fois que l'animal a été créé,
                    la fonction vide les champs newAnimalType et newAnimalName.
                </ul>
                <li>Bon courage !</li>
            </ul>
        </div>
    )
}

export default StateChallenge;
