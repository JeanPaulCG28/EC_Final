using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EC_Proyecto.Entity
{
    public class Cliente
    {
        //definimos la clave primaria
        [Key]
        public int codigocli { get; set; }
        //definimos valores no nulos
        [Required]
        //definimos el tamaño del campo
        [StringLength(maximumLength: 100,ErrorMessage = "Se tiene que ingresar un nombre")]
        public string nombre { get; set; }
        [Required]
        public string apellido { get; set; }
        [Required]
        public string telefono { get; set; }
        [Required]
        public bool estado { get; set; }

        public List<DetalleVenta> detalleVenta { get; set; }
    }
}
