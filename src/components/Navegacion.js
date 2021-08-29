import React from 'react'
import { Link } from "react-router-dom";
// la propiedad link hará las funciones de un ancla <a> </a> como en html
//ahora debemos importar nuevamente las imagenes para este componente:
import Awakening3 from "../images/awakening.jpeg";
import Bow3 from "../images/bow.jpg";
import LinkToThePast3 from "../images/linktothepast.jpg";
import Ocarina3 from "../images/ocarina.jpg";
import Skyward3 from "../images/skyward.jpg";
import Twilight3 from "../images/twilight.jpg";

// ahora ligamos los links con los paths, es decir tenemos los links con la ruta a la que se va a dirigir y definimos dentro de cada ruta del enrutador en app.js y dentro de cada link invocamos las comopnentes que importamos con las imagenes
const Navegacion = () => {
    return (
        <div className="container mt-3 padre">   {/* "container" es una clase de boostrap mt= margin top */} 
            <Link to ="/Awakening" className="links"> 
                <figure>
                    <img src={Awakening3} alt="" className="tamaño-img"/> 
                    <figcaption>Awakening</figcaption>
                </figure>
            </Link>
            <Link to="/Bow"  className="links"> {/* "es el link al path del router */} 
                <figure>
                    <img src={Bow3} alt="" className="tamaño-img"/> 
                    <figcaption>Bow</figcaption>
                </figure>
            </Link>
            <Link to="/LinkToThePast"  className="links"> 
                <figure>
                    <img src={LinkToThePast3} alt="" className="tamaño-img"/> 
                    <figcaption>LinkToThePast</figcaption>
                </figure>
            </Link>
            <Link to= "/Ocarina"  className="links"> 
                <figure>
                    <img src={Ocarina3} alt="" className="tamaño-img"/> 
                    <figcaption>Ocarina</figcaption>
                </figure>
            </Link>
            <Link to="/Skyward"  className="links"> 
                <figure>
                    <img src={Skyward3} alt="" className="tamaño-img"/> 
                    <figcaption>Skyward</figcaption>
                </figure>
            </Link>
            <Link to= "/Twilight"  className="links"> 
                <figure>
                    <img src={Twilight3  } alt="" className="tamaño-img"/> 
                    <figcaption>Twilight</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
