import express from 'express'
import { getWatches, createWatch } from '../controllers/watches.js';

const router = express.Router();

router.get('/', getWatches);
router.post('/', createWatch);

export default router;