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
    [Route("ec-proyecto/categoria")]
    public class CategoriaAutoController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public CategoriaAutoController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet("custom")]
        public async Task<ActionResult<List<CategoriaAuto>>> findAllCustom()
        {
            return await context.CategoriaAuto.Where(x => x.estado == true).ToListAsync();
        }

        [HttpGet]

        public async Task<ActionResult<List<CategoriaAuto>>> findAll()
        {
            return await context.CategoriaAuto.ToListAsync();
        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(CategoriaAuto a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        //cuando queremos buscar informacion
        [HttpGet("{id:int}")]
        public async Task<ActionResult<CategoriaAuto>> findById(int id)
        {
            var categoria = await context.CategoriaAuto
                .FirstOrDefaultAsync(x => x.codigocatauto == id);
            return categoria;

        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(CategoriaAuto a, int id)
        {
            if (a.codigocatauto != id)
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
            var existe = await context.CategoriaAuto.AnyAsync(x => x.codigocatauto == id);
            if (!existe)
            {
                return NotFound();
            }
            var categoria = await context.CategoriaAuto.FirstOrDefaultAsync(x => x.codigocatauto == id);
            categoria.estado = false;
            context.Update(categoria);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
