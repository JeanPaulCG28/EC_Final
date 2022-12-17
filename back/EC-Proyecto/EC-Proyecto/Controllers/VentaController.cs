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
    [Route("ec-proyecto/venta")]
    public class VentaController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public VentaController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<Venta>>> findAll()
        {
            return await context.Venta.ToListAsync();
        }

        [HttpGet("custom")]
        public async Task<ActionResult<List<Venta>>> findAllCustom()
        {
            return await context.Venta.Where(x => x.estado == true).ToListAsync();
        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Venta a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        //cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Venta>> findById(int id)
        {
            var venta = await context.Venta
                .FirstOrDefaultAsync(x => x.codigoventa == id);
            return venta;

        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Venta a, int id)
        {
            if (a.codigoventa != id)
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
            var existe = await context.Venta.AnyAsync(x => x.codigoventa == id);
            if (!existe)
            {
                return NotFound();
            }
            var venta = await context.Venta.FirstOrDefaultAsync(x => x.codigoventa == id);
            venta.estado = false;
            context.Update(venta);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
