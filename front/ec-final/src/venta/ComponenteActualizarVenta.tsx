import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { VentaDTO } from "./venta.model";



export default function ComponenteActualizarVenta() {
    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44353/ec-proyecto/venta/";
  
    const [venta, setVenta] = useState<VentaDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
      await axios
        .get(url + id)
        .then((response) => {
          setVenta(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      peticionesGet();
    }, []);
  
    async function ActualizarVenta (venta: VentaDTO) {
      try {
        await axios.put(url + id, venta);
        history("/ventas");
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div>
        <h1>Actualizar Venta</h1>
        <Formik
          initialValues={{
            codigoventa: 0,
            fecha:"",
            descventa: "",
            estado: false,
          }}
          onSubmit={async (valores) => {
            await ActualizarVenta({
              codigoventa: valores.codigoventa,
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
            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo:</label>
                <Field
                  name="codigoventa"
                  type="text"
                  value={venta?.codigoventa}
                  className="form-control"
                  readonly
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Fecha:</label>
                <Field
                  name="fecha"
                  type="text"
                  value={venta?.fecha}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Descripcion:</label>
                <Field
                  name="descventa"
                  type="text"
                  value={venta?.descventa}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Estado:</label>
                <div className="col-6 form-check">
                  {venta?.estado ? (
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
                <Link className="btn btn-secondary" to="/ventas">
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