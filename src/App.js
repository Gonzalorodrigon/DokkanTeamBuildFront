import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import CardContainer from './components/containers/CardContainer';
import CategoryContainer from './components/containers/CategoryContainer';

function App() {
  return (
    <div style={{margin:'20px', background: '#2E3B55'}}>
    <Header />
    <CardContainer />
    </div>
  );
}

export default App;
