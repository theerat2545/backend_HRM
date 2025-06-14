import { z } from 'zod';

export const createPosition = z.object({
  thainame: z.string().min(5, "Thai name is required"),
  engname: z.string().min(5, "English name is required"),
  shortname: z.string().min(1, "Short name is required"),
  departmentId: z.string().optional(),
  createdAt: z.string().optional(),
});