require('../connection')

const Product = require('../models/Product')

const deleteAllProductsBy = async () => {
    const result = await Product.deleteMany({name: 'keyboard'})
    console.log(result)
}

deleteAllProductsBy()