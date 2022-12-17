import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EmpleadoDTO } from "./empleado.model";

export default function ComponenteListaEmpleado() {

  //definimos la direccion del END POINT
  const url = "https://localhost:44353/ec-proyecto/empleado";
  //creamos una variable y una funcion
  //variable --> categoria
  //funcion --> setCategoria
  const [empleado, setEmpleado] = useState<EmpleadoDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setEmpleado(response.data);
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
      <h1>Lista de Empleados</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">DNI</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Telefono</th>
              <th scope="col">Estado</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {empleado?.map((empleado) => (
              <tr key={empleado.codigoempleado}>
                <th scope="row">{empleado.codigoempleado}</th>
                <td>{empleado.dni}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                {empleado.estado ? <td>Habilitado</td> : <td>Deshabilitado</td>}
                <td>
                  <Link
                    to={`/empleados/actualizar/${empleado.codigoempleado}`}
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

      <a href="empleados/registrar" className="btn btn-primary">
        Registrar Clientes
      </a>
    </div>
  );
}