import { Router } from 'express';
import {
  addProduct,
  updateProduct,
  deleteAProduct,
  getAllProducts,
  getAProduct,
} from './../infraestructure/controllers/product';

const router = Router();

router.get('/api/v1/products', getAllProducts);
router.get('/api/v1/products/:idUser', getAProduct);
router.post('/api/v1/products', addProduct);
router.put('/api/v1/products/:idUser', updateProduct);
router.delete('/api/v1/products/:idUser', deleteAProduct);

export default router;
