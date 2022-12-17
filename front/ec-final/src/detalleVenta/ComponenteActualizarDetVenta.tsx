import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DetalleVentaDTO } from "./detalleVenta.model";



export default function ComponenteActualizarDetVenta() {
    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44353/ec-proyecto/detventa/";
  
    const [detVenta, setDetVenta] = useState<DetalleVentaDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
      await axios
        .get(url + id)
        .then((response) => {
          setDetVenta(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      peticionesGet();
    }, []);
  
    async function ActualizarDetVenta (detVenta: DetalleVentaDTO) {
      try {
        await axios.put(url + id, detVenta);
        history("/detalleVentas");
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div>
        <h1>Actualizar Detalle Ventas</h1>
        <Formik
          initialValues={{
            codigodetventa: 0,
            estado: false,
            codigoventa: 0,
            codigoempleado:0,
            codigocli: 0,
            codigoauto:0
          }}
          onSubmit={async (valores) => {
            await ActualizarDetVenta({
              codigodetventa: valores.codigodetventa,
              estado: valores.estado,
              codigoventa: valores.codigoventa,
              codigoempleado: valores.codigoempleado,
              codigocli: valores.codigocli,
              codigoauto:valores.codigoauto
            });
          }}
          validationSchema={Yup.object({
            codigoventa: Yup.string()
              .required("Este campo es requerido")
          })}
        >
          <Form>
            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo:</label>
                <Field
                  name="codigodetventa"
                  type="text"
                  value={detVenta?.codigodetventa}
                  className="form-control"
                  readonly
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo Venta:</label>
                <Field
                  name="codigoventa"
                  type="text"
                  value={detVenta?.codigoventa}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo Empleado:</label>
                <Field
                  name="codigoempleado"
                  type="text"
                  value={detVenta?.codigoempleado}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo Cliente:</label>
                <Field
                  name="codigocli"
                  type="text"
                  value={detVenta?.codigocli}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo Auto:</label>
                <Field
                  name="codigoauto"
                  type="text"
                  value={detVenta?.codigoauto}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Estado:</label>
                <div className="col-6 form-check">
                  {detVenta?.estado ? (
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
                <Link className="btn btn-secondary" to="/detalleVentas">
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