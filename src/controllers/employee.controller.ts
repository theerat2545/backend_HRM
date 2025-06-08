import { Request, Response, NextFunction } from 'express';
import { createEmployee, getAllEmployee, getEmployeeById } from '../services/employee.service';

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

export const getEmployeeByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const employee = await getEmployeeById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ data: employee });
  } catch (error) {
    next(error);
  }
};