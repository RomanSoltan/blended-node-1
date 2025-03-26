import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (updateProducts) =>
  await fs.writeFile(PATH_DB, JSON.stringify(updateProducts, null, 2), 'utf-8');
