import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClienteDTO } from "./cliente.model";



export default function ComponenteActualizarCliente() {
    const history = useNavigate();
    const { id }: any = useParams();
    const url = "https://localhost:44353/ec-proyecto/cliente/";
  
    const [cliente, setCliente] = useState<ClienteDTO>();
    //se realiza la peticion al API por medio del axios
    const peticionesGet = async () => {
      await axios
        .get(url + id)
        .then((response) => {
          setCliente(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      peticionesGet();
    }, []);
  
    async function ActualizarCliente (cliente: ClienteDTO) {
      try {
        await axios.put(url + id, cliente);
        history("/clientes");
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div>
        <h1>Actualizar Cliente</h1>
        <Formik
          initialValues={{
            codigocli: 0,
            nombre: "",
            apellido: "",
            telefono:"",
            estado: false,
          }}
          onSubmit={async (valores) => {
            await ActualizarCliente({
              codigocli: valores.codigocli,
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
            <div className="row">
              <div className="col-6">
                <label className="form-label">Codigo:</label>
                <Field
                  name="codigocliente"
                  type="text"
                  value={cliente?.codigocli}
                  className="form-control"
                  readonly
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Nombre:</label>
                <Field
                  name="nombre"
                  type="text"
                  value={cliente?.nombre}
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
                  value={cliente?.apellido}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="form-label">Telefono:</label>
                <Field
                  name="telefono"
                  type="text"
                  value={cliente?.telefono}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row">
              <div className="col-6">
                <label className="form-label">Estado:</label>
                <div className="col-6 form-check">
                  {cliente?.estado ? (
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
                <Link className="btn btn-secondary" to="/clientes">
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