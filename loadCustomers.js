const customerLst = require('./customers.json');

console.log(customerLst);

const customers = require('./database/controllers/customers');




customerLst.forEach(async (customer) => {
    const { rut, name, activity, district, city, address } = customer;
    //console.log(rut, name, activity, district, city, address);
    const customer_ = await customers.create(rut, name, activity, district, city, address);
    console.log(customer_);

})

