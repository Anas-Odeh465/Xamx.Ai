/*
  Warnings:

  - Added the required column `sessionExpiresAt` to the `EmailVerification` table without a default value. This is not possible if the table is not empty.
  - Made the column `lastEmailSentAt` on table `EmailVerification` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "EmailVerification" ADD COLUMN     "sessionExpiresAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "lastEmailSentAt" SET NOT NULL;
