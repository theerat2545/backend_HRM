import dotenv from 'dotenv';
import Joi from 'joi';

// โหลดค่า .env เข้ามา
dotenv.config();

// สร้าง schema สำหรับตรวจสอบ .env
const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().default(5000),
  DATABASE_URL: Joi.string().uri().required(),
  JWT_SECRET: Joi.string().required(),
  FRONTEND_URL: Joi.string().uri().required()
}).unknown(); // อนุญาตให้มี key อื่นที่ไม่อยู่ใน schema ได้

// ตรวจสอบค่า .env
const { error, value: envVars } = envSchema.validate(process.env);

// if (error) {
//   throw new Error(`❌ Environment variable validation error: ${error.message}`);
// }

// export ค่าที่ validate แล้ว เพื่อใช้ในโปรเจกต์
export const env = {
  nodeEnv: envVars.NODE_ENV,
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
  jwtSecret: envVars.JWT_SECRET,
  frontendUrl: envVars.FRONTEND_URL
};
