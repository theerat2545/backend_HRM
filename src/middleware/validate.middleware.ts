import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

const validate = (schema: ZodSchema<any>) => (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    console.log("Incoming body:", req.body);
    schema.parse(req.body);
    next();
  } catch (error: any) {
      console.error("Zod validation error:", error);

    res.status(400).json({
      message: 'Validation failed',
      errors: error.errors.map((e: any) => e.message),
    });
  }
};


export default validate;
