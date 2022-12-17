import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoriaDTO } from "./categoria.model";

export default function ComponenteListaCatAuto() {

  //definimos la direccion del END POINT
  const url = "https://localhost:44353/ec-proyecto/categoria";
  //creamos una variable y una funcion
  //variable --> categoria
  //funcion --> setCategoria
  const [categoria, setCategoria] = useState<CategoriaDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setCategoria(response.data);
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
      <h1>Lista de Categoria</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Categoria</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Estado</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* se muestra los datos de la tabla */}
            {categoria?.map((categoria) => (
              <tr key={categoria.codigocatauto}>
                <th scope="row">{categoria.codigocatauto}</th>
                <td>{categoria.categoria}</td>
                <td>{categoria.descripcion}</td>
                {categoria.estado ? <td>Habilitado</td> : <td>Deshabilitado</td>}
                <td>
                  <Link
                    to={`/catAutos/actualizar/${categoria.codigocatauto}`}
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

      <a href="catAutos/registrar" className="btn btn-primary">
        Registrar Categoria
      </a>
    </div>
  );
}