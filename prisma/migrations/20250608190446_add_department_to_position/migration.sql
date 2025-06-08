-- AlterTable
ALTER TABLE "User" ALTER COLUMN "efirstName" DROP NOT NULL,
ALTER COLUMN "elastName" DROP NOT NULL,
ALTER COLUMN "startWork" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "thainame" TEXT NOT NULL,
    "engname" TEXT NOT NULL,
    "shortname" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "thainame" TEXT NOT NULL,
    "engname" TEXT NOT NULL,
    "shortname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentId" INTEGER,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_thainame_key" ON "Department"("thainame");

-- CreateIndex
CREATE UNIQUE INDEX "Department_engname_key" ON "Department"("engname");

-- CreateIndex
CREATE UNIQUE INDEX "Department_shortname_key" ON "Department"("shortname");

-- CreateIndex
CREATE UNIQUE INDEX "Position_thainame_key" ON "Position"("thainame");

-- CreateIndex
CREATE UNIQUE INDEX "Position_engname_key" ON "Position"("engname");

-- CreateIndex
CREATE UNIQUE INDEX "Position_shortname_key" ON "Position"("shortname");

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
