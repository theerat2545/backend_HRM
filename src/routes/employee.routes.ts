import express from 'express';
import {
  createEmployeeHandler,
  getAllEmployeeHandler,
  getEmployeeByIdHandler,
} from '../controllers/employee.controller';  // เปลี่ยนชื่อไฟล์ด้วย
import { RequestHandler } from 'express';

const router = express.Router();
router.post('/', createEmployeeHandler as RequestHandler);
router.get('/', getAllEmployeeHandler as RequestHandler);
router.get('/:id', getEmployeeByIdHandler as RequestHandler);
export default router;