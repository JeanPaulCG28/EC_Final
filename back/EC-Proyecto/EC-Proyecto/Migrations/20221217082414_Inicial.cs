using Microsoft.EntityFrameworkCore.Migrations;

namespace EC_Proyecto.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CategoriaAuto",
                columns: table => new
                {
                    codigocatauto = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    categoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estado = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriaAuto", x => x.codigocatauto);
                });

            migrationBuilder.CreateTable(
                name: "Cliente",
                columns: table => new
                {
                    codigocli = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefono = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estado = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cliente", x => x.codigocli);
                });

            migrationBuilder.CreateTable(
                name: "Empleado",
                columns: table => new
                {
                    codigoempleado = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dni = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estado = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empleado", x => x.codigoempleado);
                });

            migrationBuilder.CreateTable(
                name: "Venta",
                columns: table => new
                {
                    codigoventa = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    fecha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    descventa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estado = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venta", x => x.codigoventa);
                });

            migrationBuilder.CreateTable(
                name: "Auto",
                columns: table => new
                {
                    codigoauto = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    marca = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    precio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    estado = table.Column<bool>(type: "bit", nullable: false),
                    codigocatauto = table.Column<int>(type: "int", nullable: false),
                    categoriaAutocodigocatauto = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Auto", x => x.codigoauto);
                    table.ForeignKey(
                        name: "FK_Auto_CategoriaAuto_categoriaAutocodigocatauto",
                        column: x => x.categoriaAutocodigocatauto,
                        principalTable: "CategoriaAuto",
                        principalColumn: "codigocatauto",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DetalleVenta",
                columns: table => new
                {
                    codigodetventa = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    estado = table.Column<bool>(type: "bit", nullable: false),
                    codigoventa = table.Column<int>(type: "int", nullable: false),
                    codigoempleado = table.Column<int>(type: "int", nullable: false),
                    codigocli = table.Column<int>(type: "int", nullable: false),
                    codigoauto = table.Column<int>(type: "int", nullable: false),
                    ventacodigoventa = table.Column<int>(type: "int", nullable: true),
                    empleadocodigoempleado = table.Column<int>(type: "int", nullable: true),
                    clientecodigocli = table.Column<int>(type: "int", nullable: true),
                    autocodigoauto = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetalleVenta", x => x.codigodetventa);
                    table.ForeignKey(
                        name: "FK_DetalleVenta_Auto_autocodigoauto",
                        column: x => x.autocodigoauto,
                        principalTable: "Auto",
                        principalColumn: "codigoauto",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DetalleVenta_Cliente_clientecodigocli",
                        column: x => x.clientecodigocli,
                        principalTable: "Cliente",
                        principalColumn: "codigocli",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DetalleVenta_Empleado_empleadocodigoempleado",
                        column: x => x.empleadocodigoempleado,
                        principalTable: "Empleado",
                        principalColumn: "codigoempleado",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DetalleVenta_Venta_ventacodigoventa",
                        column: x => x.ventacodigoventa,
                        principalTable: "Venta",
                        principalColumn: "codigoventa",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Auto_categoriaAutocodigocatauto",
                table: "Auto",
                column: "categoriaAutocodigocatauto");

            migrationBuilder.CreateIndex(
                name: "IX_DetalleVenta_autocodigoauto",
                table: "DetalleVenta",
                column: "autocodigoauto");

            migrationBuilder.CreateIndex(
                name: "IX_DetalleVenta_clientecodigocli",
                table: "DetalleVenta",
                column: "clientecodigocli");

            migrationBuilder.CreateIndex(
                name: "IX_DetalleVenta_empleadocodigoempleado",
                table: "DetalleVenta",
                column: "empleadocodigoempleado");

            migrationBuilder.CreateIndex(
                name: "IX_DetalleVenta_ventacodigoventa",
                table: "DetalleVenta",
                column: "ventacodigoventa");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DetalleVenta");

            migrationBuilder.DropTable(
                name: "Auto");

            migrationBuilder.DropTable(
                name: "Cliente");

            migrationBuilder.DropTable(
                name: "Empleado");

            migrationBuilder.DropTable(
                name: "Venta");

            migrationBuilder.DropTable(
                name: "CategoriaAuto");
        }
    }
}
