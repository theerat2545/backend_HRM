import { Router } from 'express';
import authRoutes from './auth.routes';
import employeeRoutes from './employee.routes';
// import departmentRoutes from './department.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/employees', employeeRoutes);
// router.use('/departments', departmentRoutes);

export default router;
