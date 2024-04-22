"use strict";

//next

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //profiles
    await queryInterface.createTable(
      "profiles",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //users
    await queryInterface.createTable(
      "users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        profile_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "profiles",
            key: "id",
          },
        },
        user_name: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true,
        },
        name: { type: Sequelize.STRING(255), allowNull: false },
        password: { type: Sequelize.STRING(255), allowNull: false },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //records
    await queryInterface.createTable(
      "records",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "users",
            key: "id",
          },
        },
        action: { type: Sequelize.STRING(255), allowNull: false },
        table: { type: Sequelize.STRING(255), allowNull: false },
        description: { type: Sequelize.STRING(800), allowNull: true },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //categories
    await queryInterface.createTable(
      "categories",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //subcategories
    await queryInterface.createTable(
      "subcategories",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          unique: false,
          onDelete: "SET NULL",
          references: {
            model: "categories",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //providers
    await queryInterface.createTable(
      "providers",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        rut: { type: Sequelize.STRING(15), allowNull: false, unique: true },
        name: { type: Sequelize.STRING(255), allowNull: false },
        address: { type: Sequelize.STRING(255), allowNull: true },
        phone: { type: Sequelize.STRING(15), allowNull: true },
        mail: { type: Sequelize.STRING(255), allowNull: true },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //customers
    await queryInterface.createTable(
      "customers",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        rut: { type: Sequelize.STRING(15), allowNull: false, unique: true },
        name: { type: Sequelize.STRING(255), allowNull: false },
        activity: { type: Sequelize.STRING(255), allowNull: true },
        district: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        city: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        address: { type: Sequelize.STRING(255), allowNull: true },
        phone: { type: Sequelize.STRING(15), allowNull: true },
        mail: { type: Sequelize.STRING(255), allowNull: true },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //taxes
    await queryInterface.createTable(
      "taxes",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        percentage: { type: Sequelize.DECIMAL(5, 2), allowNull: false },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //purchase_prices
    await queryInterface.createTable(
      "purchase_prices",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        net: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        gross: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        provider_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "providers",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //tax_purchase_prices
    await queryInterface.createTable(
      "tax_purchase_prices",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        tax_id: {
          allowNull: false,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "taxes",
            key: "id",
          },
        },
        purchase_price_id: {
          allowNull: false,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "purchase_prices",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //storages
    await queryInterface.createTable(
      "storages",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        sales_room: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //products
    await queryInterface.createTable(
      "products",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        code: { type: Sequelize.STRING(255), allowNull: false, unique: false },
        description: { type: Sequelize.STRING(800), allowNull: true },
        stock_control: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        iva_subject: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        favorite: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },

        purchase_price_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "purchase_prices",
            key: "id",
          },
        },

        subcategory_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "subcategories",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //stocks
    await queryInterface.createTable(
      "stocks",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        total: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        available: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        reserve: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        critical: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        storage_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "storages",
            key: "id",
          },
        },
        product_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "products",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //payment_methods
    await queryInterface.createTable(
      "payment_methods",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        credit: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //stock_movements
    await queryInterface.createTable(
      "stock_movements",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        description: { type: Sequelize.STRING(255), allowNull: true },
        add: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        decrement: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        balance: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        type: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        reference: {
          type: sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        stock_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "stocks",
            key: "id",
          },
        },
        user_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "users",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //price_lists
    await queryInterface.createTable(
      "price_lists",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );
    //selling_prices
    await queryInterface.createTable(
      "selling_prices",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        net: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        gross: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        purchase_net: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        utility: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
        price_list_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "price_lists",
            key: "id",
          },
        },
        product_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "products",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    //tax_selling_prices
    await queryInterface.createTable(
      "tax_selling_prices",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        tax_id: {
          allowNull: false,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "taxes",
            key: "id",
          },
        },
        selling_price_id: {
          allowNull: false,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "selling_prices",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    //sale_points
    await queryInterface.createTable(
      "sale_points",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        address: { type: Sequelize.STRING(255), allowNull: true },
        phone: { type: Sequelize.STRING(15), allowNull: true },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        storage_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "storages",
            key: "id",
          },
        },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    //cash_registers
    await queryInterface.createTable('cash_registers',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: { type: Sequelize.STRING(500), allowNull: true, unique: false },
      status: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      open: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      balance: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      close: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      open_user_id: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        references: {
          model: "users",
          key: "id",
        },
      },
      close_user_id: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        references: {
          model: "users",
          key: "id",
        },
      },
      sale_point_id: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        references: {
          model: "sale_points",
          key: "id",
        },
      },
      created_at: { type: Sequelize.DATE },
      updated_at: { type: Sequelize.DATE },
    },
      {
        initialAutoIncrement: 1001,
      }
    );

    //cash_register_movements
    await queryInterface.createTable('cash_register_movements',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cash: { type: Sequelize.BOOLEAN, allowNull:true, defaultValue: false},
      description: { type: Sequelize.STRING(200), allowNull: false, unique: false},
      type: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      previous_balance: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      debit: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      credit: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      balance: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      reference_id: { type: Sequelize.INTEGER, allowNull: true, defaultValue: null },
      user_id: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        references: {
          model: "users",
          key: "id",
        },
      },
      cash_register_id: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        references: {
          model: "cash_registers",
          key: "id",
        },
      },
      payment_method_id: {
        allowNull: true,
        unique: false,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        references: {
          model: "payment_methods",
          key: "id",
        },
      },
      created_at: { type: Sequelize.DATE },
      updated_at: { type: Sequelize.DATE },
    },
      {
        initialAutoIncrement: 1001,
      }
    );
      

   

    // uno es a muchos con payment_methods no esta terminada
    // await queryInterface.createTable('sales', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER,
    //   },
    //   total: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    //   discount: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    //   net: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    //   tax: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    //   payment_method_id: {
    //     allowNull: true,
    //     unique: false,
    //     type: Sequelize.INTEGER,
    //     onDelete: "SET NULL",
    //     references: {
    //       model: "payment_methods",
    //       key: "id",
    //     },
    //   },
    //   customer_id: {
    //     allowNull: true,
    //     unique: false,
    //     type: Sequelize.INTEGER,
    //     onDelete: "SET NULL",
    //     references: {
    //       model: "customers",
    //       key: "id",
    //     },
    //   },
    //   created_at: { type: Sequelize.DATE },
    //   updated_at: { type: Sequelize.DATE },
    // },
    //   {
    //     initialAutoIncrement: 1001,
    //   }
    // );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables();
  },
};

// await queryInterface.sequelize.query('ALTER TABLE categories AUTO_INCREMENT = 1001;');

// await queryInterface.createTable('lists', {
//     id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },
//     name: { type: Sequelize.STRING, allowNull: false, unique: true },
//     description: { type: Sequelize.STRING, allowNull: true },
//     created_at: { type: Sequelize.DATE },
//     updated_at: { type: Sequelize.DATE }
// },
//     {
//         initialAutoIncrement: 1001,
//     }
// )

// await queryInterface.createTable('taxes', {
//     id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },
//     name: { type: Sequelize.STRING, allowNull: false, unique: true },
//     description: { type: Sequelize.STRING, allowNull: true },
//     percentage: { type: Sequelize.DECIMAL(5, 2), allowNull: false },
//     created_at: { type: Sequelize.DATE },
//     updated_at: { type: Sequelize.DATE }
// },
//     {
//         initialAutoIncrement: 1001,
//     }
// )

// await queryInterface.createTable('providers', {
//     id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },
//     name: { type: Sequelize.STRING, allowNull: false, unique: true },
//     address: { type: Sequelize.STRING, allowNull: true },
//     phone: { type: Sequelize.STRING, allowNull: true },
//     mail: { type: Sequelize.STRING, allowNull: true },
//     created_at: { type: Sequelize.DATE },
//     updated_at: { type: Sequelize.DATE }
// },
//     {
//         initialAutoIncrement: 1001,
//     }
// )

// await queryInterface.createTable('purchase_prices', {
//     id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },
//     net_price: { type: Sequelize.INTEGER, allowNull: false },

//     created_at: { type: Sequelize.DATE },
//     updated_at: { type: Sequelize.DATE }
// },
//     {
//         initialAutoIncrement: 1001,
//     }
// )

// await queryInterface.createTable('', {
//     id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//     },

//     created_at: { type: Sequelize.DATE },
//     updated_at: { type: Sequelize.DATE }
// },
//     {
//         initialAutoIncrement: 1001,
//     }
// )
