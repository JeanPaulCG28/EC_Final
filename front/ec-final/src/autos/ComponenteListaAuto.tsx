import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AutoDTO } from "./auto.model";

export default function ComponenteListaAuto() {

  //definimos la direccion del END POINT
  const url = "https://localhost:44353/ec-proyecto/auto";
  //creamos una variable y una funcion
  //variable --> categoria
  //funcion --> setCategoria
  const [auto, setAuto] = useState<AutoDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setAuto(response.data);
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
      <h1>Lista de Autos</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Marca</th>
              <th scope="col">Precio</th>
              <th scope="col">Estado</th>
              <th scope="col">Codigo Categoria</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {auto?.map((auto) => (
              <tr key={auto.codigoauto}>
                <th scope="row">{auto.codigoauto}</th>
                <td>{auto.marca}</td>
                <td>{auto.precio}</td>
                {auto.estado ? <td>Habilitado</td> : <td>Deshabilitado</td>}
                <td>{auto.codigocatauto}</td>
                <td>
                  <Link
                    to={`/autos/actualizar/${auto.codigoauto}`}
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

      <a href="autos/registrar" className="btn btn-primary">
        Registrar Categoria
      </a>
    </div>
  );
}