import { Router } from 'express';
import { getAllUsers, getAUser } from '../infraestructure/controllers/users';

const router = Router();

router.get('/api/v1/users', getAllUsers);
router.get('/api/v1/users/:idUser', getAUser);

export default router;
