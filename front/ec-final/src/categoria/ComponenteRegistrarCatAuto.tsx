import { useNavigate } from "react-router-dom";
import { CategoriaRegistrarDTO } from "./categoria.model";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { Link } from "react-router-dom";

export default function ComponenteRegistrarCatAuto() {
    const history = useNavigate();
    const url = "https://localhost:44353/ec-proyecto/categoria";
    async function RegistrarCategoria(categoria: CategoriaRegistrarDTO) { 
      try {
        await axios.post(url, categoria);
        history("/catAutos"); 
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <div>
        <h1>Registro Categoria</h1>
        <Formik
          initialValues={{
            categoria: "",
            descripcion: "",
            estado: false,
          }}
          onSubmit={async (valores) => {
            await new Promise((r) => setTimeout(r, 3000));
  
            await RegistrarCategoria({
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
          
            <ComponenteFormularioCajaTexto campo="categoria" label="Categoria:" />
            <ComponenteFormularioCajaTexto campo="descripcion" label="Descripcion:" />
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
                <Link className="btn btn-secondary" to="/catAutos">
                  Cancelar
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }