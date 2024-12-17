import express from 'express';
import { syncInventoryToAmazon, fetchAmazonUpdates } from '../controllers/inventoryController.js';

const router = express.Router();

router.post('/sync-to-amazon', syncInventoryToAmazon);
router.get('/fetch-from-amazon', fetchAmazonUpdates);

export default router;
