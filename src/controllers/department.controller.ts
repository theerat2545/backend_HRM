import { Request, Response, NextFunction } from 'express';
import { createDepartment, getAllDepartments, getDepartmentById, updateDepartment, deleteDepartment, searchDepartments } from '../services/department.service';
export const createDepartmentHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const department = await createDepartment(req.body);
    res.status(201).json({ message: 'Department created successfully', data: department });
  } catch (error) {
    next(error);
  }
};
export const getAllDepartmentsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const departments = await getAllDepartments();
    res.status(200).json({ data: departments });
  } catch (error) {
    next(error);
  }
};
export const getDepartmentByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const department = await getDepartmentById(id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json({ data: department });
  } catch (error) {
    next(error);
  }
};
export const updateDepartmentHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedDepartment = await updateDepartment(id, req.body);
    res.status(200).json({ message: 'Department updated successfully', data: updatedDepartment });
  } catch (error) {
    next(error);
  }
};
export const deleteDepartmentHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await deleteDepartment(id);
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (error) {
    next(error);
  }
};
export const searchDepartmentsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { keyword } = req.query;
    const departments = await searchDepartments(keyword as string);
    res.status(200).json({ data: departments });
  } catch (error) {
    next(error);
  }
};

