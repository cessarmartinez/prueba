import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';
function App() {
  const titulo = "Inicio"
  return (
    <div classname="App">
      <Navbar/>
      <ItemListContainer  greeting="welcome" titulo={titulo} />

    </div>
  );
}

export default App;
