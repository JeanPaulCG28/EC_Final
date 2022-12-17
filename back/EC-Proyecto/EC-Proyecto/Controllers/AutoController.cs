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
    [Route("ec-proyecto/auto")]
    public class AutoController : ControllerBase
    {
        private readonly ApplicationDBContext context;
        public AutoController(ApplicationDBContext context)
        {
            this.context = context;
        }

        [HttpGet("custom")]
        public async Task<ActionResult<List<Auto>>> findAllCustom()
        {
            return await context.Auto.Where(x => x.estado == true).ToListAsync();
        }

        [HttpGet]
        public async Task<ActionResult<List<Auto>>> findAll()
        {
            return await context.Auto.ToListAsync();
        }
        [HttpPost]
        public async Task<ActionResult> add(Auto a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Auto>> findById(int id)
        {
            var auto = await context.Auto
                .FirstOrDefaultAsync(x => x.codigoauto == id);
            return auto;

        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Auto a, int id)
        {
            if (a.codigoauto != id)
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

            var existe = await context.Auto.AnyAsync(x => x.codigoauto == id);
            if (!existe)
            {
                return NotFound();
            }
            var auto = await context.Auto.FirstOrDefaultAsync(x => x.codigoauto == id);
            auto.estado = false;
            context.Update(auto);
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}
