import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EmpleadoDTO } from "./empleado.model";



export default function ComponenteActualizarEmpleado() {
    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44353/ec-proyecto/empleado/";
  
    const [empleado, setEmpleado] = useState<EmpleadoDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
      await axios
        .get(url + id)
        .then((response) => {
          setEmpleado(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      peticionesGet();
    }, []);
  
    async function ActualizarEmpleado (empleado: EmpleadoDTO) {
      try {
        await axios.put(url + id, empleado);
        history("/empleados");
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div>
        <h1>Actualizar Empleado</h1>
        <Formik
          initialValues={{
            codigoempleado: 0,
            dni:"",
            nombre: "",
            apellido: "",
            estado: false,
          }}
          onSubmit={async (valores) => {
            await ActualizarEmpleado({
              codigoempleado: valores.codigoempleado,
              dni: valores.dni,
              nombre: valores.nombre,
              apellido: valores.apellido,
              estado: valores.estado,
            });
          }}
          validationSchema={Yup.object({
            dni: Yup.string()
              .required("Este campo es requerido")
              .max(8, "La longitud máxima del categoria es 8 caracteres"),
            nombre: Yup.string()
              .required("Este campo es requerido")
              .max(100, "La longitud máxima del categoria es 100 caracteres"),
            apellido: Yup.string()
              .required("Este campo es requerido")
              .max(100, "La longitud máxima de la descripcion es 100 caracteres"),
          })}
        >
          <Form>
            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo:</label>
                <Field
                  name="codigoempleado"
                  type="text"
                  value={empleado?.codigoempleado}
                  className="form-control"
                  readonly
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">DNI:</label>
                <Field
                  name="dni"
                  type="text"
                  value={empleado?.dni}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Nombre:</label>
                <Field
                  name="nombre"
                  type="text"
                  value={empleado?.nombre}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Apellido:</label>
                <Field
                  name="apellido"
                  type="text"
                  value={empleado?.apellido}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Estado:</label>
                <div className="col-6 form-check">
                  {empleado?.estado ? (
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
                <Link className="btn btn-secondary" to="/empleados">
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