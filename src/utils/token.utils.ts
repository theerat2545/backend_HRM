import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();


// Define a User type matching your application's user model
type User = {
  id: number;
  role: string;
  employeeCode: string;
};

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'your-access-token-secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your-refresh-token-secret';

const ACCESS_TOKEN_EXPIRES_IN = '15m'; // ปรับตามความเหมาะสม
const REFRESH_TOKEN_EXPIRES_IN = '7d'; // ปรับตามความเหมาะสม

// Payload ที่จะฝังใน token
interface TokenPayload {
  userId: number;
  role: string;
  employeeCode: string;
}

// 🔐 สร้าง Access Token
export const generateAccessToken = (user: User) => {
  const payload: TokenPayload = {
    userId: user.id,
    role: user.role,
    employeeCode: user.employeeCode,
  };

  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_IN });
};

// 🔐 สร้าง Refresh Token
export const generateRefreshToken = (user: User) => {
  const payload: TokenPayload = {
    userId: user.id,
    role: user.role,
    employeeCode: user.employeeCode,
  };

  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRES_IN });
};

// ✅ ตรวจสอบและถอดรหัส Access Token
export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET) as TokenPayload;
};

// ✅ ตรวจสอบและถอดรหัส Refresh Token
export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET) as TokenPayload;
};

export {};
