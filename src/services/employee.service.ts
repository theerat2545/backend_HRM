import { prisma } from '../utils/prisma';
import { CreateEmployeeDto } from '../types/employee.types';

export const createEmployee = async (data: CreateEmployeeDto) => {
    const newEmployee = await prisma.user.create({
        data: {
            employeeCode: data.employeeCode,
            password: data.password, // Make sure to include password if required
            role: data.role,         // Make sure to include role if required
            efirstName: data.efirstName,
            elastName: data.elastName,
            mail: data.mail,
            position: data.position,
            department: data.department,
            startWork: new Date(data.startWork),
            workAge: data.workAge,
            status: data.status || 'Active',
            createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
        },
    });

    return newEmployee;
};

export const getAllEmployee = async () => {
    const employees = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' }, 
        take: 10, 
        select: {
            employeeCode: true,
            efirstName: true,
            elastName: true,
            mail: true,
            department: true,
            position: true,
            startWork: true,
            workAge: true,
            status: true,
        }
    });
    return employees;
};

export const getEmployeeById = async (id: string) => {
    const employee = await prisma.user.findUnique({
        where: { id: Number(id) },
        select: {
            employeeCode: true,
            efirstName: true,
            elastName: true,
            mail: true,
            department: true,
            position: true,
            startWork: true,
            workAge: true,
            status: true,
        }
    });
    return employee;
};
