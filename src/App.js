import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import CardContainer from './components/containers/CardContainer';
import CategoryContainer from './components/containers/CategoryContainer';
import Board from './components/Board';

function App() {
  return (
    <div style={{margin:'20px', background: '#2E3B55'}}>
    <Header />
    <CardContainer />
    <Board />
    </div>
  );
}

export default App;
