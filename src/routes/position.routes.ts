import express from 'express';
import { createPosition } from '../schemas/position.schema';
import {
  createPositionHandler,
  getAllPositionsHandler,
  getPositionByIdHandler,
  updatePositionHandler,
  deletePositionHandler
} from '../controllers/positions.controller';
import { RequestHandler } from 'express';
import validate from '../middleware/validate.middleware';


const router = express.Router();
router.post('/', validate(createPosition), createPositionHandler as RequestHandler);
router.get('/', getAllPositionsHandler as RequestHandler);
router.get('/:id', getPositionByIdHandler as RequestHandler);
router.put('/:id', updatePositionHandler as RequestHandler);
router.delete('/:id', deletePositionHandler as RequestHandler);
export default router;