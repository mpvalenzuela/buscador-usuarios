import React from "react";
import "./Boton.css";

const Boton = ({onClick, nombreBoton="Borrar"}) => {

const clase = nombreBoton === "Borrar" ? "eliminar" : "buscar" 


  return (
    <>
      <button className={clase} onClick={() => onClick()}>
        {nombreBoton}
      </button>
    </>
  );
};

export default Boton;
