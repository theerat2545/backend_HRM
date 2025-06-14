import { z } from 'zod';
export const createEmployeeSchema = z.object({
  employeeCode: z.string().nonempty("Employee code is required"),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
  role: z.enum(["employee", "HR"]),
  efirstName: z.string().min(3, "First name is required"),
  elastName: z.string().min(3, "Last name is required"),
  mail: z.string().email("Invalid email"),
  positionId: z.coerce.number({ required_error: "Position is required" }),
  departmentId: z.coerce.number({ required_error: "Department is required" }),
  startWork: z.coerce.date(),
  workAge: z.number(),
});



export const updateEmployeeSchema = z.object({
  efirstName: z.string().min(1, "กรุณากรอกชื่อจริง"),
  elastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  mail: z.string().email("อีเมลไม่ถูกต้อง").optional(),
  citizenId: z.string().length(13, "เลขบัตรประชาชนต้องมี 13 หลัก").optional(),

  birthDate: z.coerce.date().optional(),
  age: z.number().min(0).optional(),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(),

  phone: z.string().min(9, "เบอร์โทรไม่ถูกต้อง").optional(),
  emergencyContact: z.string().optional(),

  address: z.string().optional(),
  photo: z.string().url("รูปต้องเป็น URL").optional(),

  startWork: z.coerce.date(),
  endWork: z.coerce.date().optional(),
  workAge: z.number().optional(),
  level: z.string().optional(),

  departmentId: z.number().optional(),
  positionId: z.number().optional(),

  salary: z.number().min(0, "เงินเดือนต้องเป็นเลขบวก").optional(),
  bankName: z.string().optional(),
  bankAccount: z.string().optional(),

  contractFile: z.string().optional(),
  personalFile: z.string().optional(),
  resumeFile: z.string().optional(),
  idCardFile: z.string().optional(),
  houseRegFile: z.string().optional(),

  updatedAt: z.coerce.date().default(() => new Date()),
});