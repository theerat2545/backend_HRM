import { PrismaClient } from '../../generated/prisma'; 


// ประกาศตัวแปร global สำหรับ singleton Prisma instance
declare global {
  var __prisma: PrismaClient | undefined;
}

// ฟังก์ชันสำหรับสร้าง PrismaClient ใหม่
const createPrismaClient = (): PrismaClient => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' 
      ? ['query', 'info', 'warn', 'error'] 
      : ['error'],
    errorFormat: 'colorless',
  });
};

// ใช้ PrismaClient แบบ Singleton
const prisma: PrismaClient = globalThis.__prisma ?? createPrismaClient();

if (process.env.NODE_ENV === 'development') {
  globalThis.__prisma = prisma;
}


// 🔌 เชื่อมต่อฐานข้อมูล
export const connectDatabase = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log('✅ Connected to the database.');
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error);
    process.exit(1);
  }
};

// 🔌 ตัดการเชื่อมต่อฐานข้อมูล
export const disconnectDatabase = async (): Promise<void> => {
  try {
    await prisma.$disconnect();
    console.log('✅ Disconnected from the database.');
  } catch (error) {
    console.error('❌ Failed to disconnect from the database:', error);
  }
};


// ❤️ ตรวจสุขภาพของฐานข้อมูล
export const checkDatabaseHealth = async (): Promise<boolean> => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.error('❌ Database health check failed:', error);
    return false;
  }
};

// 🔄 ช่วยจัดการ transaction แบบปลอดภัยจาก Type Error
export const executeTransaction = async <T>(
  callback: (tx: Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>) => Promise<T>
): Promise<T> => {
  return prisma.$transaction(callback);
};

export default prisma;