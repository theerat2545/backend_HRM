export interface CreatePositionDto {
    thainame: string;
    engname: string;
    shortname: string;
    departmentId: string;
    createdAt?: Date; // Use Date type for createdAt
}
export interface UpdatePositionDto {
    thainame?: string;
    engname?: string;
    shortname?: string;
    departmentId?: string;
    updatedAt?: Date; // Use Date type for updatedAt
}
