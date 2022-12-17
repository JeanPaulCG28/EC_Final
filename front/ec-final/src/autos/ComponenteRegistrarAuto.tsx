import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { Link } from "react-router-dom";
import { AutoDTO, AutoRegistrarDTO } from "./auto.model";

export default function ComponenteResgistrarAuto() {
    const history = useNavigate();
    const url = "https://localhost:44353/ec-proyecto/auto";
    async function RegistrarAuto(auto: AutoRegistrarDTO) { 
      try {
        await axios.post(url, auto);
        history("/autos"); 
      } catch (error) {
        console.log(error);
      }
    }


  
    return (
      <div>
        <h1>Registro Auto</h1>
        <Formik
          initialValues={{
            marca: "",
            precio: "",
            estado: false,
            codigocatauto: Int32Array,
          }}
          onSubmit={async (valores) => {
            await new Promise((r) => setTimeout(r, 3000));
  
            await RegistrarAuto({
              marca: valores.marca,
              precio: valores.precio,
              estado: valores.estado,
              codigocatauto: valores.codigocatauto,
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
              .required("Este campo es requerido")
          })}
        >
          <Form>
          
            <ComponenteFormularioCajaTexto campo="marca" label="Marca:" />
            <ComponenteFormularioCajaTexto campo="precio" label="Precio:" />
            <ComponenteFormularioCajaTexto campo="codigocatauto" label="Categoria:" />

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