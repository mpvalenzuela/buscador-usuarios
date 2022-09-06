import React, { useState, useEffect } from "react";
import "./Boton1.css";
import axios from "axios";

const Formulario = () => {
  const [userList, setUserList] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    getUsuarios();
  }, []);

  const handleChange = (e) => {
    setId(e.target.value);
    const hola = e.target.value;
    console.log({ hola });
  };

  const handleClickBuscar = () => {
    if (id === null || id === "") {
      getUsuarios();
    } else {
      getUsuario();
    }
  };

  const deletePost = () => {
    setUserList(null);
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
          <p> ID Usuario </p>
          <input type="number" name="id" value={id} onChange={handleChange} />
          <button
            className="eliminar"
            onClick={deletePost}
            disabled={!userList ? true : false}
          >
            Borrar
          </button>
          <button className="buscar" onClick={() => handleClickBuscar()}>
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};

export default Formulario;
