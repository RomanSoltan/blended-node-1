import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const removeRandomProduct = async () => {
  const productsList = await readProducts();
  const randomIndex = Math.floor(Math.random() * productsList.length);
  productsList.splice(randomIndex, 1);
  await writeProducts(productsList);
};

removeRandomProduct();
