import { z } from 'zod';

export const registerSchema = z.object({
  employeeCode: z.string().nonempty("Employee code is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["user", "admin", "HR"]),
  efirstName: z.string().nonempty(),
  elastName: z.string().nonempty(),
  startWork: z.string()
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email format'),
});

export const resetPasswordSchema = z.object({
  email: z.string().email('Invalid email format'),
  newPassword: z.string().min(6, 'New password must be at least 6 characters'),
});
