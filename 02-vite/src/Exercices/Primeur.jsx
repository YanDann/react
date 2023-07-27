import { useEffect, useState } from "react";

function Primeur() {
    const fruits = [
        { name: 'Banane', price: 0.7, quantity: 10 },
        { name: 'Kiwi', prpice: 2.5, quantity: 0 },
        { name: 'Fraise', prpice: 3, quantity: 10 },
        { name: 'Citron', prpice: 0.5, quantity: 0 },
        { name: 'Framboise', prpice: 1.6, quantity: 0 },
    ];

    return (
        <div className="primeur">
            <h2>Exercice Primeur</h2>
            <div>
                {fruits.map((fruit, index) =>
                    <div className="flex">
                        <ul key={index}> {fruit.name} au prix de {fruit.price} €</ul>

                        <span>
                            {fruit.quantity > 0 ? 'En stock' : 'Rupture'}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Primeur;