import { useState } from "react";

function List() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Toto',
            avatar: `https://i.pravatar.cc/150?u=toto`,
        },
        {
            id: 2,
            name: 'Titi',
            avatar: `https://i.pravatar.cc/150?u=titi`,
        },
        {
            id: 3,
            name: 'Tata',
            avatar: `https://i.pravatar.cc/150?u=tata`,
        },
    ]);

    const [newName, setNewName] = useState('');

    const addItem = () => {
        let id = items[items.length - 1].id + 1;
        let newItem = { id, name: newName, avatar: `https://i.pravatar.cc/150?u=${newName}` };

        // On doit envoyer une "copier", un "clone" du tableau pour le mettre à jour
        setItems([...items, newItem]);
        setNewName(''); // Vide le champ
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <>
            <h2>Liste</h2>
            <ul>
                {items.map(item =>
                    <li key={item.id}>
                        {item.name}
                        <img className="round" src={item.avatar} alt={item.name} />
                        {items.length > 1 && <button onClick={() => deleteItem(item.id)}>❌</button>}
                    </li>
                )}
            </ul>

            <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} />
            <button onClick={() => addItem()}>Ajouter</button>
        </>
    );
}

export default List;