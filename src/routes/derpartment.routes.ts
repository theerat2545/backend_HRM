import express from 'express';
import {
  createDepartmentHandler,
  getAllDepartmentsHandler,
//   getDepartmentByIdHandler,
} from '../controllers/department.controller';

const router = express.Router();
router.post('/', createDepartmentHandler);
router.get('/', getAllDepartmentsHandler);
// router.get('/:id', getDepartmentByIdHandler);

export default router;
