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
        orderBy: { createdAt: 'desc' }, // เรียงลำดับตามวันที่สร้างล่าสุดก่อน
    });

    return employees;
};
