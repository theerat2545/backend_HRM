import express, { Application } from 'express';
import cors from 'cors';
// Make sure the path below matches the actual location of employee_routes.ts
import { employeeRoutes } from '../routes/employee_routes';

const app: Application = express();

// Middleware
app.use(cors()); // เปิด CORS
app.use(express.json()); // แปลง body เป็น JSON อัตโนมัติ

// Routes
app.use('/api/employees', employeeRoutes); // กำหนดเส้นทาง API

export default app;
