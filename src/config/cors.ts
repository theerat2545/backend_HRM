import cors, { CorsOptions } from 'cors';

// กำหนด origin ที่อนุญาต
const whitelist = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.FRONTEND_URL // ใช้จาก .env เช่น http://yourdomain.com
];

// สร้างตัวเลือกสำหรับ CORS
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // ถ้าไม่มี origin (เช่น curl หรือ postman) หรืออยู่ใน whitelist -> อนุญาต
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // อนุญาตให้ส่ง cookie หรือ auth header
  optionsSuccessStatus: 200 // สำหรับ IE
};

export default cors(corsOptions);
