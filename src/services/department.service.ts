import { prisma } from '../utils/prisma';
import { CreateDepartmentDto } from '../types/department.types';
export const createDepartment = async (data: CreateDepartmentDto) => {
    const newDepartment = await prisma.department.create({
        data: {
            thainame: data.thainame,
            engname: data.engname,
            shortname: data.shortname,
            description: data.description,
            createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
        },
    });

    return newDepartment;
};
export const getAllDepartments = async () => {
    const departments = await prisma.department.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
            id: true,
           thainame: true,
            engname: true,
            shortname: true,
            description: true,
            createdAt: true,
        }
    });
    return departments;
};
export const getDepartmentById = async (id: string) => {
    const department = await prisma.department.findUnique({
        where: { id: Number(id) },
        select: {
            id: true,
            thainame: true,
            engname: true,
            shortname: true,
            description: true,
            createdAt: true,
        }
    });
    return department;
};
// export const updateDepartment = async (id: string, data: Partial<CreateDepartmentDto>) => {
//     const updatedDepartment = await prisma.department.update({
//         where: { id: Number(id) },
//         data: {
//             name: data.name,
//             description: data.description,
//             updatedAt: new Date(),
//         },
//     });
//     return updatedDepartment;
// };