import ComponenteListaClientes from "./clientes/ComponenteListaCliente";
import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteRegistrarAuto from "./autos/ComponenteRegistrarAuto";
import ComponenteListaAuto from "./autos/ComponenteListaAuto";
import ComponenteListaCatAuto from "./categoria/ComponenteListaCatAuto";
import ComponenteRegistrarCatAuto from "./categoria/ComponenteRegistrarCatAuto";
import ComponenteActualizarCat from "./categoria/ComponenteActualizarCat";
import ComponenteActualizarAuto from "./autos/ComponenteActualizarAuto";
import ComponeneteRegistrarCliente from "./clientes/ComponenteRegistrarCliente";
import ComponenteActualizarCliente from "./clientes/ComponenteActualizarCliente";
import ComponenteListaEmpleado from "./empleados/ComponenteListaEmpleado";
import ComponenteRegistrarEmpleado from "./empleados/ComponenteRegistrarEmpleado";
import ComponenteActualizarEmpleado from "./empleados/ComponenteActualizarEmpleado";
import ComponenteListaVenta from "./venta/ComponenteListaVenta";
import ComponenteRegistrarVenta from "./venta/ComponenteRegistrarVenta";
import ComponenteActualizarVenta from "./venta/ComponenteActualizarVenta";
import ComponenteListaDetVenta from "./detalleVenta/ComponenteListaDetVenta";
import ComponenteRegistrarDetVenta from "./detalleVenta/ComponenteRegistrarDetVenta";
import ComponenteActualizarDetVenta from "./detalleVenta/ComponenteActualizarDetVenta";

const rutas = [
    {path:'/',componente:ComponentePrincipal},
    //----------------------------------------------------------------------------------
    {path:'/clientes',componente:ComponenteListaClientes},
    {path:'/clientes/registrar',componente:ComponeneteRegistrarCliente},
    {path:'/clientes/actualizar/:id',componente:ComponenteActualizarCliente},
    //----------------------------------------------------------------------------------
    {path:'/autos',componente:ComponenteListaAuto},
    {path:'/autos/registrar',componente:ComponenteRegistrarAuto},
    {path:'/autos/actualizar/:id',componente:ComponenteActualizarAuto},
    //----------------------------------------------------------------------------------
    {path:'/catAutos',componente:ComponenteListaCatAuto},
    {path:'/catAutos/registrar',componente:ComponenteRegistrarCatAuto},
    {path:'/catAutos/actualizar/:id',componente:ComponenteActualizarCat},
    //----------------------------------------------------------------------------------
    {path:'/empleados',componente:ComponenteListaEmpleado},
    {path:'/empleados/registrar',componente:ComponenteRegistrarEmpleado},
    {path:'/empleados/actualizar/:id',componente:ComponenteActualizarEmpleado},
    //----------------------------------------------------------------------------------
    {path:'/ventas',componente:ComponenteListaVenta},
    {path:'/ventas/registrar',componente:ComponenteRegistrarVenta},
    {path:'/ventas/actualizar/:id',componente:ComponenteActualizarVenta},
    //----------------------------------------------------------------------------------
    {path:'/detalleVentas',componente:ComponenteListaDetVenta},
    {path:'/detalleVentas/registrar',componente:ComponenteRegistrarDetVenta},
    {path:'/detalleVentas/actualizar/:id',componente:ComponenteActualizarDetVenta}
];

export default rutas;