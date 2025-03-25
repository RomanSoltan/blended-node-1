import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getAllProducts = async () => {
  const allProducts = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(allProducts);
};

console.log(await getAllProducts());
