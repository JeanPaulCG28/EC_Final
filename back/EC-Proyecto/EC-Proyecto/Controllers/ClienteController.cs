using EC_Proyecto.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto.Controllers
{
    //indicamos que es un controlador
    [ApiController]
    //definir la ruta de acceso al controlador
    [Route("ec-proyecto/cliente")]
    //"ControllerBase" es una herencia para que sea un controlador
    public class ClienteController : ControllerBase
    {
        private readonly ApplicationDBContext context;
        //creamos el metodo constructor
        public ClienteController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet("custom")]
        public async Task<ActionResult<List<Cliente>>> findAllCustom()
        {
            return await context.Cliente.Where(x => x.estado == true).ToListAsync();
        }

        //cuando queremos obtener informacion
        [HttpGet]

       public async Task<ActionResult<List<Cliente>>> findAll()
       {
            return await context.Cliente.ToListAsync();
       }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Cliente a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        //cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Cliente>> findById(int id)
        {
            var cliente = await context.Cliente
                .FirstOrDefaultAsync(x => x.codigocli == id);
            return cliente;

        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Cliente a, int id)
        {
            if (a.codigocli != id)
            {
                return BadRequest("No se encuentro el codigo correspondiente");
            }

            context.Update(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {

            var existe = await context.Cliente.AnyAsync(x => x.codigocli == id);
            if (!existe)
            {
                return NotFound();
            }
            var cliente = await context.Cliente.FirstOrDefaultAsync(x => x.codigocli== id);
            cliente.estado = false;
            context.Update(cliente);
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}