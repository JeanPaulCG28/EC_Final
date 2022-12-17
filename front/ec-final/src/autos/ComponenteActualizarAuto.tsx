import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AutoDTO } from "./auto.model";



export default function ComponenteActualizarAuto() {
    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44353/ec-proyecto/auto/";
  
    const [auto, setAuto] = useState<AutoDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
      await axios
        .get(url + id)
        .then((response) => {
          setAuto(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      peticionesGet();
    }, []);
  
    async function ActualizarAuto (auto: AutoDTO) {
      try {
        await axios.put(url + id, auto);
        history("/autos");
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div>
        <h1>Actualizar Auto</h1>
        <Formik
          initialValues={{
            codigoauto: 0,
            marca: "",
            precio: "",
            estado: false,
            codigocatauto: 0,
          }}
          onSubmit={async (valores) => {
            await ActualizarAuto({
              codigoauto: valores.codigoauto,
              marca: valores.marca,
              precio: valores.precio,
              estado: valores.estado,
              codigocatauto: valores.codigocatauto
            });
          }}
          validationSchema={Yup.object({
            marca: Yup.string()
              .required("Este campo es requerido")
              .max(100, "La longitud máxima del categoria es 100 caracteres"),
            precio: Yup.string()
              .required("Este campo es requerido")
              .max(11, "La longitud máxima de la descripcion es 11 caracteres"),
            codigocatauto: Yup.string()
              .required("Este campo es requerido"),
          })}
        >
          <Form>
            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo:</label>
                <Field
                  name="codigoauto"
                  type="text"
                  value={auto?.codigoauto}
                  className="form-control"
                  readonly
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Marca:</label>
                <Field
                  name="marca"
                  type="text"
                  value={auto?.marca}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Precio:</label>
                <Field
                  name="precio"
                  type="text"
                  value={auto?.precio}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Categoria:</label>
                <Field
                  name="precio"
                  type="text"
                  value={auto?.codigocatauto}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Estado:</label>
                <div className="col-6 form-check">
                  {auto?.estado ? (
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
                <Link className="btn btn-secondary" to="/autos">
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