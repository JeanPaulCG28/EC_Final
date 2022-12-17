export interface EmpleadoDTO{
    codigoempleado:integer;
    dni:string;
    nombre:string;
    apellido:string;
    estado:boolean;
}
export interface EmpleadoRegistrarDTO{
    dni:string;
    nombre:string;
    apellido:string;
    estado:boolean;
}