import express from 'express';
import {
  createEmployeeHandler,
  getAllEmployeeHandler,
} from '../controllers/employee.controller';  // เปลี่ยนชื่อไฟล์ด้วย

const router = express.Router();

router.post('/', createEmployeeHandler);
router.get('/', getAllEmployeeHandler);

export default router;