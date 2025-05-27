import { Request, Response, NextFunction } from 'express';
import winston from 'winston';

// สร้าง Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // แสดงบน console
    new winston.transports.File({ filename: 'logs/combined.log' }), // log ปกติ
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }) // log เฉพาะ error
  ]
});

// Middleware สำหรับ log request ทุกครั้ง
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { method, url } = req;
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const message = `${method} ${url} ${res.statusCode} - ${duration}ms`;
    logger.info(message);
  });

  next();
};

// export logger instance เพื่อใช้ที่อื่น
export { logger };
