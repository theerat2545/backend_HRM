import { prisma } from '../utils/prisma';
import { CreatePositionDto, UpdatePositionDto } from '../types/position.type';
export const createPosition = async (data: CreatePositionDto) => {
    const newPosition = await prisma.position.create({
        data: {
            thainame: data.thainame,
            engname: data.engname,
            shortname: data.shortname,
            departmentId: Number(data.departmentId),
            createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
        },
        include: {
            department: true, 
        },
    });

    return newPosition;
};
export const getAllPositions = async () => {
    const positions = await prisma.position.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
            id: true,
            thainame: true,
            engname: true,
            shortname: true,
            departmentId: true,
            createdAt: true,
        }
    });
    return positions;
};
export const getPositionById = async (id: string) => {
    const position = await prisma.position.findUnique({
        where: { id: Number(id) },
        select: {
            id: true,
            thainame: true,
            engname: true,
            shortname: true,
            departmentId: true,
            createdAt: true,
        }
    });
    return position;
};
export const updatePosition = async (id: string, data: UpdatePositionDto) => {
    const updatedPosition = await prisma.position.update({
        where: { id: Number(id) },
        data: {
            thainame: data.thainame,
            engname: data.engname,
            shortname: data.shortname,
            departmentId:Number(data.departmentId),
            updatedAt: new Date(),
        },
    });
    return updatedPosition;
};
export const deletePosition = async (id: string) => {
    const deletedPosition = await prisma.position.delete({
        where: { id: Number(id) },
    });
    return deletedPosition;
};