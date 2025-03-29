import express from 'express';
import { createProduct, getProducts, deleteProduct } from '../controllers/productController';

const router = express.Router();
router.post('/', createProduct);
router.get('/', getProducts);
router.delete('/:id', deleteProduct);

export default router;
