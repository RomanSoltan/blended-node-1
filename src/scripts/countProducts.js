import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const countProducts = async () => {
  const productsList = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(productsList).length;
};

console.log(await countProducts());
