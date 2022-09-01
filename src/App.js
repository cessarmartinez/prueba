import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
function App() {
  const titulo = "Inicio"
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer  greeting="welcome" titulo={titulo} />
      <ItemCount/>

    </div>  
  );
}

export default App;
