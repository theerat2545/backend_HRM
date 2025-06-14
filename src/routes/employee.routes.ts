import express from 'express';
import {
  createEmployeeHandler,
  getAllEmployeeHandler,
  getEmployeeByIdHandler,
  updateEmployeeHandler
} from '../controllers/employee.controller';  // เปลี่ยนชื่อไฟล์ด้วย
import { RequestHandler } from 'express';
import validate from '../middleware/validate.middleware';
import { createEmployeeSchema } from '../schemas/employee.schema';  

const router = express.Router();

router.post('/', validate(createEmployeeSchema), createEmployeeHandler as RequestHandler);
router.get('/', getAllEmployeeHandler as RequestHandler);
router.get('/:id', getEmployeeByIdHandler as RequestHandler);
router.put('/:id', updateEmployeeHandler as RequestHandler); 
export default router;