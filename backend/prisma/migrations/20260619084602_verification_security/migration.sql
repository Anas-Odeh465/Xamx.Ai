-- AlterTable
ALTER TABLE "EmailVerification" ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastEmailSentAt" TIMESTAMP(3);
