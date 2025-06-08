export interface CreateEmployeeDto {
  employeeCode: string;
  password: string;
  role: string;
  efirstName: string;
  elastName: string;
  mail: string;
  position: string;
  department: string;
  startWork: Date; 
  workAge: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}
