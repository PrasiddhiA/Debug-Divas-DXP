import express from 'express';
import { createBusiness, getBusinesses, deleteBusiness } from '../controllers/businessController';

const router = express.Router();
router.post('/', createBusiness);
router.get('/', getBusinesses);
router.delete('/:id', deleteBusiness);

export default router;
