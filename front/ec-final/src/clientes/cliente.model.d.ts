export interface ClienteDTO{
    codigocli:integer;
    nombre:string;
    apellido:string;
    telefono:string;
    estado:boolean;
}
export interface ClienteRegistrarDTO{
    nombre:string;
    apellido:string;
    telefono:string;
    estado:boolean;
}