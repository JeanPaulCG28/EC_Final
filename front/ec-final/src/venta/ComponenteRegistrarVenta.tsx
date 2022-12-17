import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { Link } from "react-router-dom";
import { VentaRegistrarDTO } from "./venta.model";


export default function ComponenteRegistrarVenta() {
    const history = useNavigate();
    const url = "https://localhost:44353/ec-proyecto/venta";
    async function RegistrarVenta(empleado: VentaRegistrarDTO) { 
      try {
        await axios.post(url, empleado);
        history("/ventas"); 
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <div>
        <h1>Registro Ventas</h1>
        <Formik
          initialValues={{
            fecha: "",
            descventa: "",
            estado: false,
          }}
          onSubmit={async (valores) => {
            await new Promise((r) => setTimeout(r, 3000));
  
            await RegistrarVenta({
              fecha: valores.fecha,
              descventa: valores.descventa,
              estado: valores.estado,
            });
          }}
          validationSchema={Yup.object({
            fecha: Yup.string()
              .required("Este campo es requerido")
              .max(10, "La longitud máxima del categoria es 10 caracteres"),
            descventa: Yup.string()
              .required("Este campo es requerido")
              .max(100, "La longitud máxima del categoria es 100 caracteres"),
          })}
        >
          <Form>
          
            <ComponenteFormularioCajaTexto campo="fecha" label="Fecha:" />
            <ComponenteFormularioCajaTexto campo="descventa" label="Descripcion:" />
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
                <Link className="btn btn-secondary" to="/ventas">
                  Cancelar
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }