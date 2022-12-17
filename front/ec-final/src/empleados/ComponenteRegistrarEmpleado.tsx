import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { Link } from "react-router-dom";
import { EmpleadoRegistrarDTO } from "./empleado.model";


export default function ComponenteRegistrarEmpleado() {
    const history = useNavigate();
    const url = "https://localhost:44353/ec-proyecto/empleado";
    async function RegistrarEmpleado(empleado: EmpleadoRegistrarDTO) { 
      try {
        await axios.post(url, empleado);
        history("/empleados"); 
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <div>
        <h1>Registro Empleados</h1>
        <Formik
          initialValues={{
            dni: "",
            nombre: "",
            apellido: "",
            estado: false,
          }}
          onSubmit={async (valores) => {
            await new Promise((r) => setTimeout(r, 3000));
  
            await RegistrarEmpleado({
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
          
            <ComponenteFormularioCajaTexto campo="dni" label="DNI:" />
            <ComponenteFormularioCajaTexto campo="nombre" label="Nombre:" />
            <ComponenteFormularioCajaTexto campo="apellido" label="Apellido:" />
            <div className="row">
              <div className="col-6">
                <label className="form-label">Estado:</label>
                <div className="col-6 form-check">
                  <Field
                    className="form-check-input"
                    name="estado"
                    type="checkbox"
                  />
                  <label className="form-check-label">Habilitado</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
                <Link className="btn btn-secondary" to="/empleados">
                  Cancelar
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }