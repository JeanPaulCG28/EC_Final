using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto.Entity
{
    public class Empleado
    {
        [Key]
        public int codigoempleado { get; set; }
        [Required]
        public string dni { get; set; }
        [Required]
        public string nombre { get; set; }
        [Required]
        public string apellido { get; set; }
        [Required]
        public bool estado { get; set; }
    }
}
