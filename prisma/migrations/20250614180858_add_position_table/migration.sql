/*
  Warnings:

  - You are about to drop the column `department` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.
  - Made the column `efirstName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `elastName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startWork` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "WorkType" AS ENUM ('FULLTIME', 'CONTRACT', 'FREELANCE');

-- CreateEnum
CREATE TYPE "WorkStatus" AS ENUM ('ACTIVE', 'RESIGNED', 'SUSPENDED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "department",
DROP COLUMN "position",
DROP COLUMN "status",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "age" INTEGER,
ADD COLUMN     "bankAccount" TEXT,
ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "birthDate" TIMESTAMP(3),
ADD COLUMN     "citizenId" TEXT,
ADD COLUMN     "contractFile" TEXT,
ADD COLUMN     "departmentId" INTEGER,
ADD COLUMN     "emergencyContact" TEXT,
ADD COLUMN     "endWork" TIMESTAMP(3),
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "houseRegFile" TEXT,
ADD COLUMN     "idCardFile" TEXT,
ADD COLUMN     "level" TEXT,
ADD COLUMN     "personalFile" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "photo" TEXT,
ADD COLUMN     "positionId" INTEGER,
ADD COLUMN     "resumeFile" TEXT,
ADD COLUMN     "salary" DOUBLE PRECISION,
ADD COLUMN     "workStatus" "WorkStatus" DEFAULT 'ACTIVE',
ADD COLUMN     "workType" "WorkType",
ALTER COLUMN "efirstName" SET NOT NULL,
ALTER COLUMN "elastName" SET NOT NULL,
ALTER COLUMN "mail" DROP NOT NULL,
ALTER COLUMN "startWork" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;
