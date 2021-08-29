import React from 'react'
import Awakening2 from '../images/awakening.jpeg' // aqui importamos las imagenes como si fueran un modulo para ser usadas en el componente

const Awakening = () => {
    return (
        <div className="container">
           <img src={Awakening2} alt="" className="imagen_contenedor"/>  
           
        </div>
    )
}

export default Awakening
