import { Request, Response, NextFunction } from 'express';
import { loginUser, } from '../services/auth.service';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { accessToken, refreshToken } = await loginUser(req.body);
    res.status(200).json({ message: 'Login successful', accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

// export const logout = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { refreshToken } = req.body;
//         const result = await logoutUser(refreshToken);
//         res.status(200).json(result);
//     } catch (error) {
//         next(error);
//     }
// };

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { accessToken, refreshToken } = req.body;
    // Implement refresh token logic here
    res.status(200).json({ message: 'Token refreshed successfully', accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    // Implement forgot password logic here
    res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    // Implement reset password logic here
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    next(error);
  }
};