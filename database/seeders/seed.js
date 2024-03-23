'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('profiles', [
        {
          name: 'Administrador',
          description: 'Administrador del sistema',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ], {})

      await queryInterface.bulkInsert('users', [
        {
          user_name: 'admin',
          name: 'Administrador',
          password: 'admin',
          profile_id: 1001,
          created_at: new Date(),
          updated_at: new Date(),
        }
      ], {})

      await queryInterface.bulkInsert('categories', [
        {
          name: 'SIN CATEGORIA',
          description: 'SIN CATEGORIA',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});

      await queryInterface.bulkInsert('subcategories', [
        {
          name: 'SIN SUBCATEGORIA',
          description: 'SIN SUBCATEGORIA',
          category_id: 1001,
          created_at: new Date(),
          updated_at: new Date(),
        },
        
      ], {});

      // await queryInterface.bulkInsert('providers', [
      //   {
      //     rut: '12.345.678-9',
      //     name: 'Soprole',
      //     address: 'Av. Providencia 1234',
      //     phone: '+56987654321',
      //     mail: ''},
      //     {
      //       rut: '98.765.432-1',
      //       name: 'Nestle',
      //       address: 'Av. Las Condes 4321',
      //       phone: '+56912345678',
      //       mail: 'nestle@nestle'
      //     }
      // ], {})

      // await queryInterface.bulkInsert('customers', [
      //   {
      //     rut: '12.345.678-9',
      //     name: 'Juan Perez',
      //     address: 'Av. Providencia 1234',
      //     phone: '+56987654321',
      //     mail: 'juan@perez'
      //   },
      //   {
      //     rut: '98.765.432-1',
      //     name: 'Maria Perez',
      //     address: 'Av. Las Condes 4321',
      //     phone: '+56912345678',
      //     mail: 'maria@perez'
      //   }
      // ], {})

      await queryInterface.bulkInsert('taxes', [
        {
          name: 'IVA',
          description: 'Impuesto al Valor Agregado',
          percentage: 19.00,
          created_at: new Date(),
          updated_at: new Date(),
        },

      ], {});

      // await queryInterface.bulkInsert('purchase_prices', [
      //   {
      //     net: 1000,
      //     gross: 1190,
      //     provider_id: 1,
      //     created_at: new Date(),
      //     updated_at: new Date(),
      //   },
      //   {
      //     net: 2000,
      //     gross: 2380,
      //     provider_id: 2,
      //     created_at: new Date(),
      //     updated_at: new Date(),
      //   },
        
      // ], {});

      // await queryInterface.bulkInsert('tax_purchase_prices', [
      //   {
      //     tax_id: 1,
      //     purchase_price_id: 1,
      //     created_at: new Date(),
      //     updated_at: new Date(),
      //   },
      //   {
      //     tax_id: 2,
      //     purchase_price_id: 1,
      //     created_at: new Date(),
      //     updated_at: new Date(),
      //   },
        
      // ], {});

      // await queryInterface.bulkInsert('price_lists', [
      //   {
      //     name: 'Minorista',
      //     description: 'lista al por menor',
      //   }
      // ])

    } catch (error) {
      console.error('Error durante las operaciones de bulkInsert:', error);
    }

   
  },
};
