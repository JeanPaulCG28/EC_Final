﻿// <auto-generated />
using System;
using EC_Proyecto;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EC_Proyecto.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20221214145553_Inicial")]
    partial class Inicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EC_Proyecto.Entity.Auto", b =>
                {
                    b.Property<int>("codigoauto")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("categoriaAutocodigocatauto")
                        .HasColumnType("int");

                    b.Property<int>("codigocatauto")
                        .HasColumnType("int");

                    b.Property<bool>("estado")
                        .HasColumnType("bit");

                    b.Property<string>("marca")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("precio")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("codigoauto");

                    b.HasIndex("categoriaAutocodigocatauto");

                    b.ToTable("Auto");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.CategoriaAuto", b =>
                {
                    b.Property<int>("codigocatauto")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("categoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("estado")
                        .HasColumnType("bit");

                    b.HasKey("codigocatauto");

                    b.ToTable("CategoriaAuto");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.Cliente", b =>
                {
                    b.Property<int>("codigocli")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("estado")
                        .HasColumnType("bit");

                    b.Property<string>("nombre")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("telefono")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("codigocli");

                    b.ToTable("Cliente");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.DetalleVenta", b =>
                {
                    b.Property<int>("codigodetventa")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("codigoventa")
                        .HasColumnType("int");

                    b.Property<bool>("estado")
                        .HasColumnType("bit");

                    b.Property<string>("precio")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ventacodigoventa")
                        .HasColumnType("int");

                    b.HasKey("codigodetventa");

                    b.HasIndex("ventacodigoventa");

                    b.ToTable("DetalleVenta");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.Empleado", b =>
                {
                    b.Property<int>("codigoempleado")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("dni")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("estado")
                        .HasColumnType("bit");

                    b.Property<string>("nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("codigoempleado");

                    b.ToTable("Empleado");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.Venta", b =>
                {
                    b.Property<int>("codigoventa")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("descventa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("estado")
                        .HasColumnType("bit");

                    b.Property<string>("fecha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("codigoventa");

                    b.ToTable("Venta");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.Auto", b =>
                {
                    b.HasOne("EC_Proyecto.Entity.CategoriaAuto", "categoriaAuto")
                        .WithMany("auto")
                        .HasForeignKey("categoriaAutocodigocatauto");

                    b.Navigation("categoriaAuto");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.DetalleVenta", b =>
                {
                    b.HasOne("EC_Proyecto.Entity.Venta", "venta")
                        .WithMany("detalleVenta")
                        .HasForeignKey("ventacodigoventa");

                    b.Navigation("venta");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.CategoriaAuto", b =>
                {
                    b.Navigation("auto");
                });

            modelBuilder.Entity("EC_Proyecto.Entity.Venta", b =>
                {
                    b.Navigation("detalleVenta");
                });
#pragma warning restore 612, 618
        }
    }
}
