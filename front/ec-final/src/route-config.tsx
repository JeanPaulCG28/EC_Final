import ComponenteListaClientes from "./clientes/ComponenteListaCliente";
import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteRegistrarAuto from "./autos/ComponenteRegistrarAuto";
import ComponenteListaAuto from "./autos/ComponenteListaAuto";
import ComponenteListaCatAuto from "./categoria/ComponenteListaCatAuto";

const rutas = [
    {path:'/',componente:ComponentePrincipal},
    //---------------------------------------------------------
    {path:'/clientes',componente:ComponenteListaClientes},
    //---------------------------------------------------------
    {path:'/autos',componente:ComponenteListaAuto},
    {path:'/autos/registrar',componente:ComponenteRegistrarAuto},
    {path:'/catAutos',componente:ComponenteListaCatAuto}
    
    //--------------------------------------------------------
];

export default rutas;