import List from './List';
import State1 from './Exercices/State1';
import State2 from './Exercices/State2';
import State3 from './Exercices/State3';
import StateChallenge from './Exercices/StateChallenge';
import Text from './Text';
import Button from './button';

function App() {
  return ( 
    <div>
      <h1>Vite + React</h1>
      <Button title="Valider" />
      <Button title="Ajouter" />

      <Text />

      <List />

      <State1 />
      <State2 />
      <State3 />
      <StateChallenge />
    </div>
   );
}

export default App;
