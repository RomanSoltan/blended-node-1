import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const clearProducts = async () =>
  fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');

clearProducts();
