import { readProducts } from '../utils/readProducts.js';

const countProducts = async () => {
  const productsList = await readProducts();
  return productsList.length;
};

console.log(await countProducts());
