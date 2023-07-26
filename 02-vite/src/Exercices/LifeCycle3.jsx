import { useEffect, useState } from "react";
let count = 0;

const ERROR_TOO_SHORT = 'Mot de passe trop court, Il faut au moins 8 caractères, et vous en avez mis ' + count;
const ERROR_NO_CAP = 'Le mot de passe doit contenir au moins une majuscule';
const ERROR_NO_MIN = 'Le mot de passe doit contenir au moins une minuscule';

function LifeCycle3() {
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  /**
   * Cette fonction est appelée dès qu'une mise à jour du DOM est effectuée.
   * Elle est aussi appelée au chargement du composant.
   * La fonction retournée contient l'ancien state avant la mise à jour
   */
  useEffect(() => {
    password.length <= 8 ? setErrorMessages(ERROR_TOO_SHORT) : setErrorMessages('');
    return () => {
      
    };
  });

  /**
   * Met à jour le state du password
   */
  const updatePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <h2>Exercice 3</h2>
      <a href="https://react.dev/reference/react/useEffect">Documentation sur les cycles de vie</a>
      <div>
        <div>
          <p>Voici un input qui va mettre à jour le champ password</p>
          <p>Mot de passe : {password}</p>
          <label>
            Password
            <input type="password" onChange={updatePassword} />
          </label>
          <p> {errorMessages} </p>
        </div>
        <Instructions />
      </div>
    </div>
  )
}

function Instructions() {
  return (
    <div>
      <p>Le but est d'afficher plusieurs messages d'erreurs quand l'utilisateur écrit un mot de passe pour qu'il respecte les termes ci-dessous.</p>
      <p>Remplir la fonction useEffect de manière à ce que :</p>
      <p>
        Si le mot de passe est inférieur à 8 caractères de long, mettre dans le tableau d'erreurs :
        "Mot de passe trop court, Il faut au moins 8 caractères, et vous en avez mis X"
        X désigne le nombre de caractères contenus dans l'état de password
      </p>
      <p>
        Si le mot de passe ne contient pas une majuscule, mettre dans le tableau d'erreurs
        "Le mot de passe doit contenir au moins une majuscule"
      </p>
      <p>
        Si le mot de passe ne contient pas de minuscule, mettre dans le tableau d'erreurs
        "Le mot de passe doit contenir au moins une minuscule"
      </p>
      <h4>Attention, si une erreur est résolue, il faut la retirer du tableau !</h4>
      <p>
        Pour vérifier qu'une chaîne contienne au moins une majuscule ou bien une minuscule,
        on pourrait simplement comparer chacune des lettres à elle-même en majuscule ou minuscule.
      </p>
    </div>
  )
}

export default LifeCycle3;
