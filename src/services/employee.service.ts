import { prisma } from '../utils/prisma';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../types/employee.types';

export const createEmployee = async (data: CreateEmployeeDto) => {
    const newEmployee = await prisma.user.create({
        data: {
            employeeCode: data.employeeCode,
            password: data.password,
            role: data.role,
            efirstName: data.efirstName,
            elastName: data.elastName,
            mail: data.mail,
            startWork: new Date(data.startWork),
            workAge: data.workAge,
            createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
            position: { connect: { id: Number(data.positionId) } },
            department: { connect: { id: Number(data.departmentId) } },
        },
        include: {
            department: true,
            position: true,
        },
    });

    return newEmployee;
};

export const getAllEmployees = async () => {
  const employees = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: {
      department: true,
      position: true,
    },
  });

  // จัดกลุ่มข้อมูล
  const groupedEmployees = employees.map(emp => ({
    id: emp.id,
    employeeCode: emp.employeeCode,
    role: emp.role,
    personalInfo: {
      firstName: emp.efirstName,
      lastName: emp.elastName,
      gender: emp.gender,
      birthDate: emp.birthDate,
      age: emp.age,
      photo: emp.photo,
      address: emp.address,
      citizenId: emp.citizenId,
    },
    contactInfo: {
      mail: emp.mail,
      phone: emp.phone,
      emergencyContact: emp.emergencyContact,
    },
    workInfo: {
      startWork: emp.startWork,
      endWork: emp.endWork,
      workAge: emp.workAge,
      workType: emp.workType,
      workStatus: emp.workStatus,
      level: emp.level,
      position: emp.position ? {
        id: emp.position.id,
        name: emp.position.engname, // or use emp.position.thainame if you want the Thai name
      } : null,
      department: emp.department ? {
        id: emp.department.id,
        name: emp.department.thainame,
      } : null,
    },
    salaryInfo: {
      salary: emp.salary,
      bankName: emp.bankName,
      bankAccount: emp.bankAccount,
    },
    documentFiles: {
      contractFile: emp.contractFile,
      personalFile: emp.personalFile,
      resumeFile: emp.resumeFile,
      idCardFile: emp.idCardFile,
      houseRegFile: emp.houseRegFile,
    },
    timestamps: {
      createdAt: emp.createdAt,
      updatedAt: emp.updatedAt,
    }
  }));

  return groupedEmployees;
};


export const getEmployeeById = async (id: string) => {
  const employee = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: {
      department: true,
      position: true,
    },
  });

  if (!employee) return null;

  return {
    id: employee.id,
    employeeCode: employee.employeeCode,
    role: employee.role,
    personalInfo: {
      firstName: employee.efirstName,
      lastName: employee.elastName,
      gender: employee.gender,
      birthDate: employee.birthDate,
      age: employee.age,
      photo: employee.photo,
      address: employee.address,
      citizenId: employee.citizenId,
    },
    contactInfo: {
      mail: employee.mail,
      phone: employee.phone,
      emergencyContact: employee.emergencyContact,
    },
    workInfo: {
      startWork: employee.startWork,
      endWork: employee.endWork,
      workAge: employee.workAge,
      workType: employee.workType,
      workStatus: employee.workStatus,
      level: employee.level,
      position: employee.position
        ? { id: employee.position.id, name: employee.position.engname } // or use thainame if you want the Thai name
        : null,
      department: employee.department
        ? { id: employee.department.id, name: employee.department.thainame }
        : null,
    },
    salaryInfo: {
      salary: employee.salary,
      bankName: employee.bankName,
      bankAccount: employee.bankAccount,
    },
    documentFiles: {
      contractFile: employee.contractFile,
      personalFile: employee.personalFile,
      resumeFile: employee.resumeFile,
      idCardFile: employee.idCardFile,
      houseRegFile: employee.houseRegFile,
    },
    timestamps: {
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt,
    },
  };
};


export const updateEmployee = async (id: string, data: Partial<UpdateEmployeeDto>) => {
    const updatedEmployee = await prisma.user.update({
        where: { id: Number(id) },
        data: {
            efirstName: data.efirstName,
            elastName: data.elastName,
            mail: data.mail,
            citizenId: data.citizenId,
            birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
            age: data.age,
            gender: data.gender,
            phone: data.phone,
            emergencyContact: data.emergencyContact,
            address: data.address,
            photo: data.photo,
            startWork: data.startWork ? new Date(data.startWork) : undefined,
            endWork: data.endWork ? new Date(data.endWork) : undefined,
            workAge: data.workAge,
            level: data.level,
            department: data.departmentId ? { connect: { id: Number(data.departmentId) } } : undefined,
            position: data.positionId ? { connect: { id: Number(data.positionId) } } : undefined,
            salary: data.salary,
            bankName: data.bankName,
            bankAccount: data.bankAccount,
            contractFile: data.contractFile,
            personalFile: data.personalFile,
            resumeFile: data.resumeFile,
            idCardFile: data.idCardFile,
            houseRegFile: data.houseRegFile,
            updatedAt: data.updatedAt ? new Date(data.updatedAt) : new Date(),
        },
    });
    return updatedEmployee;
}