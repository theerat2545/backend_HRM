import app from './app';
import { connectDatabase, disconnectDatabase } from './config/database';
import dotenv from 'dotenv';

// Load environment variables first
dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    const server = app.listen(PORT, () => {
       console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });

  process.on('SIGTERM', async () => {
    console.log('🛑 SIGTERM received. Shutting down...');
    await disconnectDatabase();
    server.close(() => process.exit(0));
  });

} catch (error) {
    console.error('❌ Failed to start server::', error);
    await disconnectDatabase(); 
    process.exit(1);
  }
};

startServer();