import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DetalleVentaDTO } from "./detalleVenta.model";

export default function ComponenteListaDetVenta() {

  //definimos la direccion del END POINT
  const url = "https://localhost:44353/ec-proyecto/detventa";
  //creamos una variable y una funcion
  //variable --> categoria
  //funcion --> setCategoria
  const [detVenta, setDetVenta] = useState<DetalleVentaDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setDetVenta(response.data);
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
      <h1>Lista de Detalle Ventas</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Precio</th>
              <th scope="col">estado</th>
              <th scope="col">Codigo Venta</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {detVenta?.map((detVenta) => (
              <tr key={detVenta.codigodetventa}>
                <th scope="row">{detVenta.codigodetventa}</th>
                <td>{detVenta.precio}</td>
                {detVenta.estado ? <td>Habilitado</td> : <td>Deshabilitado</td>}
                <td>{detVenta.codigoventa}</td>
                <td>
                  <Link
                    to={`/detalleVentas/actualizar/${detVenta.codigodetventa}`}
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

      <a href="detalleVentas/registrar" className="btn btn-primary">
        Registrar Categoria
      </a>
    </div>
  );
}