using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto.Entity
{
    public class CategoriaAuto
    {
        [Key]
        public int codigocatauto { get; set; }
        [Required]
        public string categoria { get; set; }
        [Required]
        public string descripcion { get; set; }
        [Required]
        public bool estado { get; set; }

        public List<Auto> auto { get; set; }
    }
}
