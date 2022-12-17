import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClienteDTO } from "./cliente.model";

export default function ComponenteListaCliente() {

  //definimos la direccion del END POINT
  const url = "https://localhost:44353/ec-proyecto/cliente";
  //creamos una variable y una funcion
  //variable --> categoria
  //funcion --> setCategoria
  const [cliente, setCliente] = useState<ClienteDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //se llama a la peticion
  useEffect(() => {
    peticionesGet();
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Telefono</th>
              <th scope="col">Estado</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {cliente?.map((cliente) => (
              <tr key={cliente.codigocli}>
                <th scope="row">{cliente.codigocli}</th>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.telefono}</td>
                {cliente.estado ? <td>Habilitado</td> : <td>Deshabilitado</td>}
                <td>
                  <Link
                    to={`/clientes/actualizar/${cliente.codigocli}`}
                    className="btn btn-success"
                  >
                    Actualizar
                  </Link>
                  
                </td>
                <td>
                  <a href="#" className="btn btn-danger">
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a href="clientes/registrar" className="btn btn-primary">
        Registrar Clientes
      </a>
    </div>
  );
}