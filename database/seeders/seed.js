"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert(
        "profiles",
        [
          {
            name: "Administrador",
            description: "Administrador del sistema",
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "users",
        [
          {
            user_name: "admin",
            name: "Administrador",
            password: "admin",
            profile_id: 1001,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "categories",
        [
          {
            name: "SIN CATEGORIA",
            description: "SIN CATEGORIA",
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "subcategories",
        [
          {
            name: "SIN SUBCATEGORIA",
            description: "SIN SUBCATEGORIA",
            category_id: 1001,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "providers",
        [
          {
            rut: "11.111.111-1",
            name: "SIN PROVEEDOR",
            address: "SIN DIRECCION",
            phone: "",
            mail: "",
          },
        ],
        {}
      );

      await queryInterface.bulkInsert(
        "customers",
        [
          {
            rut: "11.111.111-1",
            name: "SIN CLIENTE",
            activity: "SIN ACTIVIDAD",
            district: 0,
            city: 0,
            address: "SIN DIRECCION",
            phone: "",
            mail: "",
          },
        ],
        {}
      );

      //taxes

      await queryInterface.bulkInsert(
        "taxes",
        [
          {
            name: "IVA",
            description: "Impuesto al Valor Agregado",
            percentage: 19.0,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );

      // purchase_prices

      // iva_purchases

      // products

      // pices_lists

      //selling_prices

      // tax_selling_prices

      //storages

      await queryInterface.bulkInsert("storages", [
        {
          name: "SALA DE VENTAS",
          description: "Salón de ventas Principal",
          sales_room: true,
        },
      ]);

      //stocks

      //stock_movements

      await queryInterface.bulkInsert("payment_methods", [
        {
          name: "EFECTIVO",
          description: "Pago en Efectivo",
          credit: false,
        },
        {
          name: "CREDITO CLIENTE",
          description: "Pago con saldo en cuenta del cliente",
          credit: false,
        },
        {
          name: "DEBITO",
          description: "Pago con Tarjeta de Debito",
          credit: false,
        },
        {
          name: "CREDITO",
          description: "Pago con Tarjeta",
          credit: false,
        },
        {
          name: "TRANSFERENCIA",
          description: "Pago por Transferencia",
          credit: false,
        },
        {
          name: "CHEQUE",
          description: "Pago con Cheque",
          credit: true,
        },
      ]);

      await queryInterface.bulkInsert("sale_points", [
        {
          name: "PUNTO DE VENTA 01",
          description: "Punto de venta 01",
          address: "SIN DIRECCION",
          phone: "",
          commerce_name: "SIN NOMBRE",
          commerce_rut: "11.111.111-1",
          status: false,
          storage_id: 1001,
        },
        {
          name: "PUNTO DE VENTA 02",
          description: "Punto de venta 02",
          address: "SIN DIRECCION",
          commerce_name: "SIN NOMBRE",
          commerce_rut: "11.111.111-1",
          phone: "",
          status: false,
          storage_id: 1001,
        },
        {
          name: "PUNTO DE VENTA 03",
          description: "Punto de venta 03",
          address: "SIN DIRECCION",
          commerce_name: "SIN NOMBRE",
          commerce_rut: "11.111.111-1",
          phone: "",
          status: false,
          storage_id: 1001,
        },
      ]);
    } catch (error) {
      console.error("Error durante las operaciones de bulkInsert:", error);
    }
  },
};
