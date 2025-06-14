export interface CreateDepartmentDto {
    thainame: string;
    engname: string;
    shortname: string;
    description?: string;
    createdAt?: string; 
}
export interface UpdateDepartmentDto {
    thainame?: string;
    engname?: string;
    shortname?: string;
    description?: string;
    updatedAt?: Date;
}

