import List from './List';
import State1 from './State1';
import State2 from './State2';
import State3 from './State3';
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
    </div>
   );
}

export default App;
