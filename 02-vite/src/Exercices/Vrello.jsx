import { useState } from "react";

function Vrello() {
    const [taches, setTaches] = useState([]);
    const [finish, setFinish] = useState([
        { name: 'test' },
        { name: 'oui' },
    ]);
    const [newTask, setNewTask] = useState('');

    const addTache = () => {
        let newTache = { name: newTask };

        setTaches([...taches, newTache]);
        setNewTask('');
    }

    const endTache = (task) => {
        console.log(task);

    }

    return (
        <div className="center">
            <h2>Exercice Vrello</h2>
            <div className="vrello-body">
                <h3>Vrello - Gestion des tâches</h3>
                <p className="gestion">Gérer vos tâches avec React</p>
                <div>
                    <input className="taskInput" type="text" value={newTask} placeholder="Ajouter une tâche..." onChange={(event) => setNewTask(event.target.value)} />
                    <button onClick={() => addTache()}>Ajouter ➕</button>
                </div>
                <div className="vrello-flex">
                    <div>
                        <p>A faire ({taches.length})</p>
                        {taches.map(tache =>
                            <div className="task">
                                <p> {tache.name} </p>
                                {taches.length > 0 ? <input type="checkbox" /> : ''}
                            </div>
                        )}

                    </div>
                    <div>
                        <p>Terminées ({finish.length})</p>
                        {finish.map(finishedTache =>
                            <div className="task">
                                <p> {finishedTache.name} </p>
                                <div className="checkPlusButton">
                                    {finish.length > 0 ? <input type="checkbox" checked onChange={() => endTache()} /> : ''}
                                    <button onClick={() => endTache(finishedTache.name)}>🗑</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vrello;