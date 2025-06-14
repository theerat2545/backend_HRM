import express from 'express';
import { createDepartment} from '../schemas/department.schema';
import {
  createDepartmentHandler,
  getAllDepartmentsHandler,
//   getDepartmentByIdHandler,
  updateDepartmentHandler ,
  deleteDepartmentHandler,
  searchDepartmentsHandler
} from '../controllers/department.controller';
import { RequestHandler } from 'express';
import validate from '../middleware/validate.middleware';

const router = express.Router();
router.post('/', validate(createDepartment) ,createDepartmentHandler as RequestHandler);
router.get('/', getAllDepartmentsHandler as RequestHandler);
router.put('/:id', updateDepartmentHandler as RequestHandler);
router.delete('/:id', deleteDepartmentHandler as RequestHandler);
router.get('/search', searchDepartmentsHandler as RequestHandler);
  //  router.get('/:id', getDepartmentByIdHandler);

export default router;
