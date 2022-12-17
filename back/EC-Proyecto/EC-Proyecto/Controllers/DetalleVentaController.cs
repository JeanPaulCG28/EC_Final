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
    [Route("ec-proyecto/detventa")]
    public class DetalleVentaController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public DetalleVentaController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet("custom")]
        public async Task<ActionResult<List<DetalleVenta>>> findAllCustom()
        {
            return await context.DetalleVenta.Where(x => x.estado == true).ToListAsync();
        }

        [HttpGet]

        public async Task<ActionResult<List<DetalleVenta>>> findAll()
        {
            return await context.DetalleVenta.ToListAsync();
        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(DetalleVenta a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        //cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<DetalleVenta>> findById(int id)
        {
            var detalle = await context.DetalleVenta
                .FirstOrDefaultAsync(x => x.codigodetventa == id);
            return detalle;

        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(DetalleVenta a, int id)
        {
            if (a.codigodetventa != id)
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
            var existe = await context.DetalleVenta.AnyAsync(x => x.codigodetventa == id);
            if (!existe)
            {
                return NotFound();
            }
            var detalle = await context.DetalleVenta.FirstOrDefaultAsync(x => x.codigodetventa == id);
            detalle.estado = false;
            context.Update(detalle);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
