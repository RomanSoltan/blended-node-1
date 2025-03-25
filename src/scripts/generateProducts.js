import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { PATH_DB } from '../constants/products.js';

export const generateProducts = async (number) => {
  const productList = await fs.readFile(PATH_DB, 'utf-8');
  const parsedProductList = JSON.parse(productList);
  const newProducts = Array(number).fill(0).map(createFakeProduct);
  const updateProductsArr = [...parsedProductList, ...newProducts];
  await fs.writeFile(
    PATH_DB,
    JSON.stringify(updateProductsArr, null, 2),
    'utf-8',
  );
};

generateProducts(3);
