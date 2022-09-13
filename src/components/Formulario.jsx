import React, { useState, useEffect } from "react";
import "./Formulario.css";
import axios from "axios";
import Boton from "./Boton";
import Input from "./Input";

const Formulario = () => {
  const [userList, setUserList] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    getUsuarios();
  }, []);

  const deletePost = () => {
    setUserList(null);
  };
  const handleClickBuscar = () => {
    if (id === null || id === "") {
      getUsuarios();
    } else {
      getUsuario();
    }
  };
  const handleChange = (e) => {
    setId(e.target.value);
  };

  const getUsuarios = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsuario = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUserList([response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="fondo">
        <h1>Listado de Usuarios</h1>
        <ul>
          {userList &&
            userList.map((listado) => (
              <li key={listado.id} className="linea">
                {" "}
                Nombre: {listado.name} <br /> Email: {listado.email} <br />{" "}
                Direccion: {listado.address.street}{" "}
              </li>
            ))}
        </ul>
        <div>
          <Input 
          handleChange={handleChange}
          value={id}
          />
           <Boton 
          onClick={deletePost}
          disabled={!userList ? true : false}
          />
          <Boton 
          onClick={handleClickBuscar}
          nombreBoton="Buscar"
          />
        </div>
      </div>
    </>
  );
};

export default Formulario;
