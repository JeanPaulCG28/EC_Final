import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VentaDTO } from "./venta.model";

export default function ComponenteListaVenta() {

  //definimos la direccion del END POINT
  const url = "https://localhost:44353/ec-proyecto/venta";
  //creamos una variable y una funcion
  //variable --> categoria
  //funcion --> setCategoria
  const [venta, setVenta] = useState<VentaDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setVenta(response.data);
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
      <h1>Lista de Ventas</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Fecha</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Estado</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {venta?.map((venta) => (
              <tr key={venta.codigoventa}>
                <th scope="row">{venta.codigoventa}</th>
                <td>{venta.fecha}</td>
                <td>{venta.descventa}</td>
                {venta.estado ? <td>Habilitado</td> : <td>Deshabilitado</td>}
                <td>
                  <Link
                    to={`/ventas/actualizar/${venta.codigoventa}`}
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

      <a href="ventas/registrar" className="btn btn-primary">
        Registrar Ventas
      </a>
    </div>
  );
}