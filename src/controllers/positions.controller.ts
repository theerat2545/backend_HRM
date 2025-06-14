import { Request, Response, NextFunction } from 'express';
import { createPosition, getAllPositions, getPositionById, updatePosition, deletePosition } from '../services/position.service';
export const createPositionHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const position = await createPosition(req.body);
    res.status(201).json({ message: 'Position created successfully', data: position });
  } catch (error) {
    next(error);
  }
};
export const getAllPositionsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const positions = await getAllPositions();
    res.status(200).json({ data: positions });
  } catch (error) {
    next(error);
  }
};
export const getPositionByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const position = await getPositionById(id);
    if (!position) {
      return res.status(404).json({ message: 'Position not found' });
    }
    res.status(200).json({ data: position });
  } catch (error) {
    next(error);
  }
};
export const updatePositionHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedPosition = await updatePosition(id, req.body);
    res.status(200).json({ message: 'Position updated successfully', data: updatedPosition });
  } catch (error) {
    next(error);
  }
};
export const deletePositionHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await deletePosition(id);
    res.status(200).json({ message: 'Position deleted successfully' });
  } catch (error) {
    next(error);
  }
};