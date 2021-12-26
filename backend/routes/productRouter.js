import express from 'express';
import {
  createSampleProducts,
  listProducts,
  detailsProduct,
} from '../controllers/productController.js';

const productRouter = express.Router();

// Create sample products
productRouter.get('/seed', createSampleProducts);

// Get list product
productRouter.get('/', listProducts);

// Get product detail
productRouter.get('/:slug', detailsProduct);

export default productRouter;
