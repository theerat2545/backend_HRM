import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

// import { env } from './config/env';
import { errorHandler } from './middleware/error.middleware';
import { loggerMiddleware } from './middleware/logger.middleware';
import routes from './routes'; 

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); // Logging ด้วย morgan (dev สำหรับ dev env)
app.use(loggerMiddleware); // Logging เพิ่มเติมแบบ custom

// Routes
app.use('/api', routes);

// Health check
app.get('/health', (_, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is healthy' });
});

// Global error handler
app.use(errorHandler);

export default app;
