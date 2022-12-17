using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto.Entity
{
    public class DetalleVenta
    {
        [Key]
        public int codigodetventa { get; set; }
        [Required]
        public string precio { get; set; }
        [Required]
        public bool estado { get; set; }
        [Required]
        public int codigoventa { get; set; }
        public Venta venta { get; set; }
    }
}
