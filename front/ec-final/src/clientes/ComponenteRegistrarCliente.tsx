import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { Link } from "react-router-dom";
import { ClienteDTO, ClienteRegistrarDTO } from "./cliente.model";

export default function ComponeneteRegistrarCliente() {
    const history = useNavigate();
    const url = "https://localhost:44353/ec-proyecto/cliente";
    async function RegistrarCliente(cliente: ClienteRegistrarDTO) { 
      try {
        await axios.post(url, cliente);
        history("/clientes"); 
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <div>
        <h1>Registro Clientes</h1>
        <Formik
          initialValues={{
            nombre: "",
            apellido: "",
            telefono: "",
            estado: false,
          }}
          onSubmit={async (valores) => {
            await new Promise((r) => setTimeout(r, 3000));
  
            await RegistrarCliente({
              nombre: valores.nombre,
              apellido: valores.apellido,
              telefono: valores.telefono,
              estado: valores.estado,
            });
          }}
          validationSchema={Yup.object({
            nombre: Yup.string()
              .required("Este campo es requerido")
              .max(100, "La longitud máxima del categoria es 100 caracteres"),
            apellido: Yup.string()
              .required("Este campo es requerido")
              .max(100, "La longitud máxima de la descripcion es 100 caracteres"),
            telefono: Yup.string()
              .required("Este campo es requerido")
              .max(9, "La longitud máxima del categoria es 9 caracteres"),
          })}
        >
          <Form>
          
            <ComponenteFormularioCajaTexto campo="nombre" label="Nombre:" />
            <ComponenteFormularioCajaTexto campo="apellido" label="Apellido:" />
            <ComponenteFormularioCajaTexto campo="telefono" label="Telefono:" />
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
                <Link className="btn btn-secondary" to="/clientes">
                  Cancelar
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }