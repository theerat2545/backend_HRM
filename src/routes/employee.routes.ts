import express from 'express';
import {
  getAllEmployees,
  createEmployee,
} from '../controllers/employee.controller';  // เปลี่ยนชื่อไฟล์ด้วย

const router = express.Router();

router.get('/', getAllEmployees);
router.post('/', createEmployee);

export default router;