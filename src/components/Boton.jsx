import React from "react";
import "./Boton.css";

const Boton = ({onClick, nombreBoton="Borrar"}) => {

let clase = "buscar" 
if (nombreBoton === "Borrar" || nombreBoton === null) {
  clase = "eliminar"
}else{
  clase = "buscar";
}

  return (
    <>
      <button className={clase} onClick={() => onClick()}>
        {nombreBoton}
      </button>
    </>
  );
};

export default Boton;
