import { useEffect, useState } from "react";

function Primeur() {
    const fruits = [
        { name: 'Banane', price: 0.7, quantity: 10 },
        { name: 'Kiwi', price: 2.5, quantity: 0 },
        { name: 'Fraise', price: 3, quantity: 10 },
        { name: 'Citron', price: 0.5, quantity: 0 },
        { name: 'Framboise', price: 1.6, quantity: 0 },
    ];

    return (
        <div className="primeur center">
            <h2>Exercice Primeur</h2>
            <div>
                {fruits.map((fruit, index) =>
                    <div className="flex">
                        <ul key={index}> {fruit.name} au prix de {fruit.price} €</ul>

                        {fruit.quantity > 0 ? <span className="stock">En stock</span> : <span className="rupture">Rupture</span>}                    </div>
                )}
            </div>
        </div>
    );
}

export default Primeur;