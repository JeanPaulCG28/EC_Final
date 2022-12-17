using EC_Proyecto.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto.Controllers
{
    [ApiController]
    [Route("ec-proyecto/empleado")]
    public class EmpleadoController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public EmpleadoController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet("custom")]
        public async Task<ActionResult<List<Empleado>>> findAllCustom()
        {
            return await context.Empleado.Where(x => x.estado == true).ToListAsync();
        }

        [HttpGet]

        public async Task<ActionResult<List<Empleado>>> findAll()
        {
            return await context.Empleado.ToListAsync();
        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Empleado a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        //cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Empleado>> findById(int id)
        {
            var empleado = await context.Empleado
                .FirstOrDefaultAsync(x => x.codigoempleado == id);
            return empleado;

        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Empleado a, int id)
        {
            if (a.codigoempleado != id)
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
            var existe = await context.Empleado.AnyAsync(x => x.codigoempleado == id);
            if (!existe)
            {
                return NotFound();
            }
            var empleado = await context.Empleado.FirstOrDefaultAsync(x => x.codigoempleado == id);
            empleado.estado = false;
            context.Update(empleado);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
