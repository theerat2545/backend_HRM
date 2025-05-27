import { Request, Response } from 'express';

export const getAllEmployees = (req: Request, res: Response): void => {
  res.json([{ id: 1, name: 'Teerat' }]);
};

export const createEmployee = (req: Request, res: Response): void => {
  const employee = req.body;
  res.status(201).json({ message: 'Employee created', employee });
};