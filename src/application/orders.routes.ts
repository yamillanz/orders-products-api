import { Router } from 'express';
import {
  addOrder,
  updateOrder,
  deleteAOrder,
  getAllOrders,
  getAOrder,
} from './../infraestructure/controllers/orders';

const router = Router();

router.get('/api/v1/orders', getAllOrders);
router.get('/api/v1/orders/:idOrder', getAOrder);
router.post('/api/v1/orders', addOrder);
router.put('/api/v1/orders/:idOrder', updateOrder);
router.delete('/api/v1/orders/:idOrder', deleteAOrder);

export default router;
