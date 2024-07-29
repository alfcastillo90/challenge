/*
  Warnings:

  - You are about to drop the column `clientname` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `initialdate` on the `Contract` table. All the data in the column will be lost.
  - Added the required column `clientName` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initialDate` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "clientname",
DROP COLUMN "initialdate",
ADD COLUMN     "clientName" TEXT NOT NULL,
ADD COLUMN     "initialDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "accountNumber" SET DATA TYPE TEXT,
ALTER COLUMN "currency" SET DATA TYPE TEXT;
