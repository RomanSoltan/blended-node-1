import { writeProducts } from '../utils/writeProducts.js';

const clearProducts = async () => await writeProducts([]);

clearProducts();
