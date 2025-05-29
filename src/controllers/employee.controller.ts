import { Request, Response, NextFunction } from 'express';
import { createEmployee, getAllEmployee } from '../services/employee.service';

export const createEmployeeHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employee = await createEmployee(req.body);
    res.status(201).json({ message: 'Employee created successfully', data: employee });
  } catch (error) {
    next(error);
  }
};

export const getAllEmployeeHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employees = await getAllEmployee();
    res.status(200).json({ data: employees });
  } catch (error) {
    next(error);
  }
};