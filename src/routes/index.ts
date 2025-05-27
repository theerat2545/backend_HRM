import { Router } from 'express';
import employeeRoutes from './employee.routes';
// import departmentRoutes from './department.routes';
// import authRoutes from './auth.routes';

const router = Router();

router.use('/employees', employeeRoutes);
// router.use('/departments', departmentRoutes);
// router.use('/auth', authRoutes);

export default router;
