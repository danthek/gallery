import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // renombramos con "as" a el enrutador a "Router" para utilizar un nombre mas sencillo.
// los siguientes se importan automaticamente al nombrar el componente dentro de las rutar del Router
import Awakening from './components/Awakening';
import Bow from './components/Bow';
import LinkToThePast from './components/LinkToThePast';
import Ocarina from './components/Ocarina';
import Skyward from './components/Skyward';
import Twilight from './components/Twilight';
import Navegacion from './components/Navegacion'; /* "importamos los componentes a usar aqui */

function App() {
  
  return (
    // ahora usamos la libreria con los modulos que importamos  y usamos el enrutador "router" y dentro creamos las rutas con el modulo "Route"
    //dentro de la ruta "Route" tiene que haber propiedades, estas son las que nos van a permitir> 1. darle nombre a la URL que veremos en la interfaz , 2. a traves de esta URL nos permita enlazar un componente, es decir como en HTML lo que hacen los <a> ANCLAS </a>
    // la ruta enlaza a nuestro compentente dentro de nuestro enrutador
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3">GALERIA ZELDA</h1>
      </div>
      <Route path="/Awakening" component={Awakening}/>  
      <Route path="/Bow" component={Bow}/> 
      <Route path="/LinkToThePast" component={LinkToThePast}/> 
      <Route path="/Ocarina" component={Ocarina}/> 
      <Route path="/Skyward" component={Skyward}/> 
      <Route path="/Twilight" component={Twilight} /> 
      
      <Navegacion/> {/* "mandamos llamar al componente navegacion */} 
    </Router>
   
  
  );
}

export default App;
