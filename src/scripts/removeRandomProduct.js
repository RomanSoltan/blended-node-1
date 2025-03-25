import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const removeRandomProduct = async () => {
  const productsList = await fs.readFile(PATH_DB, 'utf-8');
  const parsedProductsList = JSON.parse(productsList);
  const randomIndex = Math.floor(Math.random() * parsedProductsList.length);
  parsedProductsList.splice(randomIndex, 1);
  fs.writeFile(PATH_DB, JSON.stringify(parsedProductsList, null, 2), 'utf-8');
};

removeRandomProduct();
