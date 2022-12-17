using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto.Entity
{
    public class Auto
    {
        [Key]
        public int codigoauto { get; set; }
        [Required]
        public string marca { get; set; }
        [Required]
        public string precio { get; set; }
        [Required]
        public bool estado { get; set; }
        [Required]
        public int codigocatauto { get; set; }
        public CategoriaAuto categoriaAuto { get; set; }

        public List<DetalleVenta> detalleVenta { get; set; }
    }
}
