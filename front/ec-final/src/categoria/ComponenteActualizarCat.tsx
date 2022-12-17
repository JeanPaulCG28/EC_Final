import { useEffect, useState } from "react";
import { CategoriaDTO } from "./categoria.model";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";



export default function ComponenteActualizarCat() {
    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44353/ec-proyecto/categoria/";
  
    const [categoria, setCategoria] = useState<CategoriaDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
      await axios
        .get(url + id)
        .then((response) => {
          setCategoria(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      peticionesGet();
    }, []);
  
    async function ActualizarCategoria (categoria: CategoriaDTO) {
      try {
        await axios.put(url + id, categoria);
        history("/catAutos");
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div>
        <h1>Actualizar Categoria</h1>
        <Formik
          initialValues={{
            codigocatauto: 0,
            categoria: "",
            descripcion: "",
            estado: false,
          }}
          onSubmit={async (valores) => {
            await ActualizarCategoria({
              codigocatauto: valores.codigocatauto,
              categoria: valores.categoria,
              descripcion: valores.descripcion,
              estado: valores.estado,
            });
          }}
          validationSchema={Yup.object({
            categoria: Yup.string()
              .required("Este campo es requerido")
              .max(100, "La longitud máxima del categoria es 100 caracteres"),
            descripcion: Yup.string()
              .required("Este campo es requerido")
              .max(300, "La longitud máxima de la descripcion es 300 caracteres"),
          })}
        >
          <Form>
            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo:</label>
                <Field
                  name="codigocatauto"
                  type="text"
                  value={categoria?.codigocatauto}
                  className="form-control"
                  readonly
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Categoria:</label>
                <Field
                  name="categoria"
                  type="text"
                  value={categoria?.categoria}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Descripcion:</label>
                <Field
                  name="descripcion"
                  type="text"
                  value={categoria?.descripcion}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Estado:</label>
                <div className="col-6 form-check">
                  {categoria?.estado ? (
                    <div>
                      <Field
                        className="form-check-input"
                        name="estado"
                        type="checkbox"
                        checked="true"
                      />
                      <label className="form-check-label">Habilitado</label>
                    </div>
                  ) : (
                    <div>
                      <Field
                        className="form-check-input"
                        name="estado"
                        type="checkbox"
                      />
                      <label className="form-check-label">Deshabilitado</label>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <button type="submit" className="btn btn-success">
                  Actualizar
                </button>
                <Link className="btn btn-secondary" to="/catAutos">
                  Cancelar
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
  
        <hr />
      </div>
    );
  }