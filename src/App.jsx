import './App.css';
import './index';
import ListadoNombres from "./components/ListadoNombres";
import Formiktest from "./components/Formiktest";
import BornDate from "./components/BornDate";
import Contador from './components/Contador.';

function App() {

  return (
    <div className="App container">
      <ListadoNombres/>
      <Formiktest/> <hr></hr>
      <BornDate name="Maya" age={36}/>
      <Contador/>
    </div>
  );
}

export default App;
