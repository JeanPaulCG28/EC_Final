using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto.Entity
{
    public class Venta
    {
        [Key]
        public int codigoventa { get; set; }
        [Required]
        public string fecha { get; set; }
        [Required]
        public string descventa { get; set; }
        [Required]
        public bool estado { get; set; }

        public List<DetalleVenta> detalleVenta { get; set; }
    }
}
