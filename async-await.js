require("./connection");

const Product = require("./models/Product");

async function main() {
  const product = new Product({
    name: "keyboard",
    description: "Coursair k68 RGB Gaming Keyboard",
    price: 150,
  });

  const productSaved = await product.save();
  return productSaved;
}

main()
  .then(productSaved => console.log(productSaved))
  .catch(err => console.log(err));
