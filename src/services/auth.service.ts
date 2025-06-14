 import { prisma } from "../utils/prisma";
import { LoginUserDto } from "../types/auth.types";
import { hashPassword, comparePassword } from "../utils/password.utils";
import { generateAccessToken, generateRefreshToken } from "../utils/token.utils";

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

export const logoutUser = async (_refreshToken: string) => {
    // Implement logic to invalidate the refresh token if you store them
    // For demonstration, just return a message
    return { message: "Logged out successfully" };
};

export const refreshTokenUser = async (refreshToken: string) => {
    
    const user = await prisma.user.findFirst({
        where: { employeeCode: refreshToken }, 
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