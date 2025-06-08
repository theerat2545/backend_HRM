 export interface CreateUserDto {
    startWork: any;
    elastName: any;
    efirstName: any;
    employeeCode: string;
    password: string;
    email: string;
    role: string; // e.g., 'admin', 'user'
 }

 export interface LoginUserDto {
    employeeCode: string;
    password: string;
 }

//  export interface User {
//     id: number;
//     username: string;
//     email: string;
//     role: string; // e.g., 'admin', 'user'
//     createdAt: Date;
//     updatedAt: Date;
//  }