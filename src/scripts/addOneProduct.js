import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const addOneProduct = async () => {
  const productsList = await fs.readFile(PATH_DB, 'utf-8');
  const parsedProductsList = JSON.parse(productsList);
  const updateProducts = [...parsedProductsList, createFakeProduct()];
  await fs.writeFile(PATH_DB, JSON.stringify(updateProducts, null, 2), 'utf-8');
};

addOneProduct();

// another way

// const addOneProduct = async () => {
//   const productsList = await fs.readFile(PATH_DB, 'utf-8');
//   const parsedProductsList = JSON.parse(productsList);
//   parsedProductsList.push(createFakeProduct());
//   await fs.writeFile(
//     PATH_DB,
//     JSON.stringify(parsedProductsList, null, 2),
//     'utf-8',
//   );
// };

// addOneProduct();
