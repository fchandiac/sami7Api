// const sale = {
//   id: null,
//   description: "",
//   type: 0,
//   discount: 0,
//   utility: 0,
//   net: 0,
//   tax: 0,
//   total: 0,
//   balance: 0,
//   pay_date: new Date(),
//   user_id: null,
//   customer_id: null,
//   document_type: null,
//   document_id: null,
// };

const { Sales, Users, Customers } = require("../db");
const sales = {};
const { Op } = require("sequelize");
const sequelize = require("sequelize");

async function create(
  description,
  type,
  discount,
  utility,
  net,
  tax,
  total,
  user_id,
  customer_id,
  document_type,
  document_id
) {
  try {
    const sale = await Sales.create({
      description: description,
      type: type,
      discount: discount,
      utility: utility,
      net: net,
      tax: tax,
      total: total,

      user_id: user_id,
      customer_id: customer_id,
      document_type: document_type,
      document_id: document_id,
    });
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAll() {
  try {
    const sales = await Sales.findAll();
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findOneById(id) {
  try {
    const sale = await Sales.findOne({ where: { id: id }, include: [Users, Customers]});
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAllByCustomer(customer_id) {
  try {
    const sales = await Sales.findAll({ where: { customer_id: customer_id } });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findOneByDocument(document_type, document_id) {
  try {
    const sale = await Sales.findOne({
      where: { document_type: document_type, document_id: document_id },
    });
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAllByDocumentType(document_type) {
  try {
    const sales = await Sales.findAll({
      where: { document_type: document_type },
    });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAllByDocumentId(document_id) {
  try {
    const sales = await Sales.findAll({ where: { document_id: document_id } });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAllByType(type) {
  try {
    const sales = await Sales.findAll({ where: { type: type } });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAllBetweenDates(start_date, end_date) {
  try {
    const sales = await Sales.findAll({
      where: { createdAt: { [Op.between]: [start_date, end_date] } },
      order: [["created_at", "DESC"]],
      include: [Users, Customers],
    });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAllBetweenDatesByCustomer(
  start_date,
  end_date,
  customer_id
) {
  console.log(start_date, end_date, customer_id);
  try {
    const sales = await Sales.findAll({
      where: {
        createdAt: { [Op.between]: [start_date, end_date] },
        customer_id: customer_id,
      },
      include: [Users, Customers],
      order: [["created_at", "DESC"]],
    });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAllBetweenDatesByUser(start_date, end_date, user_id) {
  try {
    const sales = await Sales.findAll({
      where: {
        createdAt: { [Op.between]: [start_date, end_date] },
        user_id: user_id,
      },
      include: [Users, Customers],
    });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}



async function voidById(id) {
  try {
    const sale = await Sales.update(
      {
        nulled: true,
      },
      {
        where: { id: id },
      }
    );
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function updatedocumentId(id, document_id) {
  try {
    const sale = await Sales.update(
      {
        document_id: document_id,
      },
      {
        where: { id: id },
      }
    );
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function updateutility(id, utility) {
  try {
    const sale = await Sales.update(
      {
        utility: utility,
      },
      {
        where: { id: id },
      }
    );
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}


async function totalSalesBetweenDates(start_date, end_date) {
  try {
    const sales = await Sales.findAll({
      attributes: [
        [sequelize.fn("sum", sequelize.col("total")), "total"],
      ],
      where: { createdAt: { [Op.between]: [start_date, end_date] } },
    });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}


async function updateSaleTax(id, tax) {
  try {
    const sale = await Sales.update(
      {
        tax: tax,
      },
      {
        where: { id: id },
      }
    );
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function updateSaleNet(id, net) {
  try {
    const sale = await Sales.update(
      {
        net: net,
      },
      {
        where: { id: id },
      }
    );
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function updateSaleDocumentType(id, document_type) {
  try {
    const sale = await Sales.update(
      {
        document_type: document_type,
      },
      {
        where: { id: id },
      }
    );
    return { code: 1, data: sale };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAllNulledBetweenDates(start_date, end_date){
  try {
    const sales = await Sales.findAll({
      where: {
        nulled: true,
        createdAt: {
          [Op.between]: [start_date, end_date]
        }
      },
      order: [["created_at", "DESC"]],
    });
    return { code: 1, data: sales };
  } catch (err) {
    return { code: 0, data: err };
  }
}


sales.create = create;
sales.findAll = findAll;
sales.findOneById = findOneById;
sales.findAllByCustomer = findAllByCustomer;
sales.findOneByDocument = findOneByDocument;
sales.findAllByDocumentType = findAllByDocumentType;
sales.findAllByDocumentId = findAllByDocumentId;
sales.findAllByType = findAllByType;
sales.findAllBetweenDates = findAllBetweenDates;
sales.findAllBetweenDatesByCustomer = findAllBetweenDatesByCustomer;
sales.findAllBetweenDatesByUser = findAllBetweenDatesByUser;
sales.voidById = voidById;
sales.updatedocumentId = updatedocumentId;
sales.updateutility = updateutility;
sales.totalSalesBetweenDates = totalSalesBetweenDates;
sales.updateSaleTax = updateSaleTax;
sales.updateSaleNet = updateSaleNet;
sales.updateSaleDocumentType = updateSaleDocumentType;
sales.findAllNulledBetweenDates = findAllNulledBetweenDates;

module.exports = sales;


