import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  const productList = await readProducts();
  const newProducts = Array(number).fill(0).map(createFakeProduct);
  const updateProductsArr = [...productList, ...newProducts];
  await writeProducts(updateProductsArr);
};

generateProducts(3);

// перевірити скрипти
