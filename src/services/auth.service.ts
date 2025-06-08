 import { prisma } from "../utils/prisma";
import { CreateUserDto, LoginUserDto } from "../types/auth.types";
import { hashPassword, comparePassword } from "../utils/password.utils";
import { generateAccessToken, generateRefreshToken } from "../utils/token.utils";

export const registerUser = async (a: CreateUserDto) => {
    // const hashedPassword = await hashPassword(data.password);
    const hashed = await hashPassword('pass12'); // Use a default password for demonstration purposes
    const newUser = await prisma.user.create({
      data: {
        employeeCode: a.employeeCode,
        password: hashed,
        mail: a.email,
        role: a.role,
        efirstName: a.efirstName, // Add this field
        elastName: a.elastName,   // Add this field
        startWork: new Date(a.startWork),   // Add this field (should be a Date or ISO string)
        // Optional fields:
        // position: a.position,
        // department: a.department,
        // workAge: a.workAge,
        // status: a.status,
        // createdAt: new Date(),
        // updatedAt: new Date(),
},
    });
    return newUser;
};

export const loginUser = async (data: LoginUserDto) => {
   const user = await prisma.user.findFirst({
  where: {
    OR: [
    //   { email: data.email },
      { employeeCode: data.employeeCode }, // ต้องมี field นี้ใน model
    ],
  },
});

    if (!user || !(await comparePassword(data.password, user.password))) {
        throw new Error("Invalid email or password");
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return { accessToken, refreshToken };
};

export const logoutUser = async (refreshToken: string) => {
    // Implement logic to invalidate the refresh token, e.g., remove it from the database or cache
    // This is a placeholder as the actual implementation depends on your token storage strategy
    return { message: "Logout successful" };
};

export const refreshTokenUser = async (refreshToken: string) => {
    // Implement logic to verify and refresh the token
    // This is a placeholder as the actual implementation depends on your token storage strategy
    // Replace 'employeeCode' with the correct unique identifier if needed
    // For demonstration, using employeeCode as an example
    const user = await prisma.user.findFirst({
        where: { employeeCode: refreshToken }, // Replace with actual logic to map refreshToken to a user
    });

    if (!user) {
        throw new Error("Invalid refresh token");
    }

    const accessToken = generateAccessToken(user);
    return { accessToken };
};

export const forgotPasswordUser = async (email: string) => {
    // Implement logic to send a password reset link to the user's email
    // This is a placeholder as the actual implementation depends on your email service
    return { message: "Password reset link sent to your email" };
};

export const resetPasswordUser = async (employeeCode: string, newPassword: string) => {
    const hashedPassword = await hashPassword(newPassword);
    const user = await prisma.user.update({
        where: { employeeCode:  employeeCode}, 
        data: { password: hashedPassword },
    });

    return { message: "Password reset successfully", user };
};