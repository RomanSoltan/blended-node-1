import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const addOneProduct = async () => {
  const productsList = await readProducts();
  const updateProducts = [...productsList, createFakeProduct()];
  await writeProducts(updateProducts);
};

addOneProduct();

// another way

// const addOneProduct = async () => {
//   const productsList = await readProducts();
//   productsList.push(createFakeProduct());
//   await writeProducts(productsList);
// };

// addOneProduct();
