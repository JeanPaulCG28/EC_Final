using EC_Proyecto.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }

        //configurando las tablas de la base datos
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Auto> Auto { get; set; }
        public DbSet<Empleado> Empleado { get; set; }
        public DbSet<CategoriaAuto> CategoriaAuto { get; set; }
        public DbSet<Venta> Venta { get; set; }
        public DbSet<DetalleVenta> DetalleVenta { get; set; }
    }
}
