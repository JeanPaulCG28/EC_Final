import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { Link } from "react-router-dom";
import { DetVentaRegistrarDTO } from "./detalleVenta.model";

export default function ComponenteRegistrarDetVenta() {
    const history = useNavigate();
    const url = "https://localhost:44353/ec-proyecto/detventa";
    async function RegistrarDetVenta(detVenta: DetVentaRegistrarDTO) { 
      try {
        await axios.post(url, detVenta);
        history("/detalleVentas"); 
      } catch (error) {
        console.log(error);
      }
    }


  
    return (
      <div>
        <h1>Registro Detalle Ventas</h1>
        <Formik
          initialValues={{
            estado: false,
            codigoventa: Int32Array,
            codigoempleado:Int32Array,
            codigocli:Int32Array,
            codigoauto:Int32Array,
          }}
          onSubmit={async (valores) => {
            await new Promise((r) => setTimeout(r, 3000));
  
            await RegistrarDetVenta({
              estado: valores.estado,
              codigoventa: valores.codigoventa,
              codigoempleado:valores.codigoempleado,
              codigocli: valores.codigocli,
              codigoauto:valores.codigoauto
            });
          }}
          validationSchema={Yup.object({
            codigoventa: Yup.string()
              .required("Este campo es requerido"),
            codigoempleado: Yup.string()
              .required("Este campo es requerido"),
            codigocli: Yup.string()
              .required("Este campo es requerido"),
            codigoauto: Yup.string()
              .required("Este campo es requerido")
          })}
        >
          <Form>
          
            <ComponenteFormularioCajaTexto campo="codigoventa" label="Codigo Venta:" />
            <ComponenteFormularioCajaTexto campo="codigoempleado" label="Codigo Empleado:" />
            <ComponenteFormularioCajaTexto campo="codigocli" label="Codigo Cliente:" />
            <ComponenteFormularioCajaTexto campo="codigoauto" label="Codigo Auto:" />

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
                <Link className="btn btn-secondary" to="/detalleVentas">
                  Cancelar
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }