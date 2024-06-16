const productList = require('./productsTest.json');

console.log(productList);

const products = require('./database/controllers/products');
const sellingPrices = require('./database/controllers/sellingPrices');
const purchasePrices = require('./database/controllers/purchasePrices');
const taxes = require('./database/controllers/taxes');
const priceLists = require('./database/controllers/priceLists');
const categories = require('./database/controllers/categories');
const subcategories = require('./database/controllers/subcategories');
const stocks = require('./database/controllers/stocks');




const  newProduct = async (name, code, sale, purchase) => {

    const purchaseNet = Math.floor(purchase / 1.19);
    const purchaseGross = purchase;
    const saleNet = Math.floor(sale / 1.19);
    const saleGross = sale;
    const taxes = [{id:1001}]

    const newPurchase = await purchasePrices.create(
        purchaseNet,
        purchaseGross,
        1001,
        taxes
    );



    const newProduct = await products.create(
        name, 
        code, 
        '',
        false, 
        true,
        false,
        newPurchase.data.id,
        1001
    )


    const newSelling = await sellingPrices.create(
        saleGross,
        saleNet,
        (saleGross - purchaseNet),
        purchaseNet,
        1001,
        newProduct.data.id,
        taxes
    )


  
}
 
const createProducts = async () => {
    for (const product of productList) {
        console.log(product);
        await newProduct(product.name, product.code, product.sale, product.purchase);
    }
}

createProducts();
