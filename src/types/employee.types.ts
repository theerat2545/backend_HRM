export interface CreateEmployeeDto {
  employeeCode: string;
  password: string;
  role: string;
  efirstName: string;
  elastName: string;
  mail: string;
  positionId: string;
  departmentId: string;
  startWork: Date;
  workAge: number;
  createdAt?: string;
  updatedAt?: string;
}
export interface UpdateEmployeeDto {
  employeeCode?: string;
  password?: string;
  role?: string;
  efirstName?: string;
  elastName?: string;
  mail?: string;
  citizenId?: string;
  birthDate?: Date;
  age?: number;
  gender?: "MALE" | "FEMALE" | "OTHER";
  phone?: string;
  emergencyContact?: string;
  address?: string;
  photo?: string;
  startWork?: Date;
  endWork?: Date;
  workAge?: number;
  level?: string;
  departmentId?: number;
  positionId?: number;
  salary?: number;
  bankName?: string;
  bankAccount?: string;
  contractFile?: string;
  personalFile?: string;
  resumeFile?: string;
  idCardFile?: string;
  houseRegFile?: string;
  updatedAt?: Date;
}
