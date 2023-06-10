import express from 'express';
import { createPrice, getPrice, updatePrice } from '../controllers/price.js';

const router = express.Router();

router.post('/', createPrice);
router.put('/:id', updatePrice);
router.get('/', getPrice);

export default router;
