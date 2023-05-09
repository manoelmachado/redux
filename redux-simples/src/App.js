import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className='linha'>
        <Card title="Card 1" red> X </Card>
        <Card title="Card 1" green> X </Card>
      </div>
      <div className='linha'>
        <Card title="Card 2" blue> Y </Card>
        <Card title="Card 2" purple> Y </Card>
      </div>
  
    </div>
  );
}

export default App;
