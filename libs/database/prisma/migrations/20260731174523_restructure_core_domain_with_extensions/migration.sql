/*
  Warnings:

  - You are about to drop the column `memo` on the `adoption_process` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `integrated_auth_account` table. All the data in the column will be lost.
  - You are about to drop the column `ci_update_time` on the `party_individual` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `party_individual` table. All the data in the column will be lost.
  - You are about to drop the column `found_location` on the `rescue_post` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `shelter` table. All the data in the column will be lost.
  - You are about to drop the column `address_detail` on the `shelter` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identity_id]` on the table `integrated_auth_account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identity_id` to the `integrated_auth_account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `party_individual` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_data` to the `rescue_post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_data` to the `shelter` table without a default value. This is not possible if the table is not empty.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateEnum
CREATE TYPE "AiMessageRole" AS ENUM ('USER', 'ASSISTANT', 'SYSTEM');

-- CreateEnum
CREATE TYPE "IdentityVerificationMethod" AS ENUM ('MOBILE_SMS', 'PASS_APP', 'FINANCIAL_CERT', 'JOINT_CERT', 'SIMPLE_AUTH');

-- AlterEnum
ALTER TYPE "TargetType" ADD VALUE 'BOOKMARK';

-- AlterTable
ALTER TABLE "adoption_detail" ADD COLUMN     "pii_dispose_time" TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "adoption_process" DROP COLUMN "memo",
ADD COLUMN     "internal_notes" JSONB;

-- AlterTable
ALTER TABLE "animal" ADD COLUMN     "convert_time" TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "integrated_auth_account" DROP COLUMN "password_hash",
ADD COLUMN     "identity_id" VARCHAR(128) NOT NULL,
ADD COLUMN     "is_email_verified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "party_individual" DROP COLUMN "ci_update_time",
DROP COLUMN "name",
ADD COLUMN     "is_identity_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nickname" VARCHAR(100) NOT NULL,
ADD COLUMN     "real_name" VARCHAR(50),
ADD COLUMN     "verification_method" "IdentityVerificationMethod",
ADD COLUMN     "verify_time" TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "rescue_post" DROP COLUMN "found_location",
ADD COLUMN     "geom" geometry(Point, 4326),
ADD COLUMN     "location_data" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "shelter" DROP COLUMN "address",
DROP COLUMN "address_detail",
ADD COLUMN     "geom" geometry(Point, 4326),
ADD COLUMN     "location_data" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "ai_chat_session" (
    "session_id" UUID NOT NULL,
    "party_id" UUID NOT NULL,
    "compliance_status" VARCHAR(20) NOT NULL DEFAULT 'SAFE',
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ai_chat_session_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "ai_chat_message" (
    "message_id" UUID NOT NULL,
    "session_id" UUID NOT NULL,
    "role" "AiMessageRole" NOT NULL,
    "content" TEXT NOT NULL,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_chat_message_pkey" PRIMARY KEY ("message_id")
);

-- CreateTable
CREATE TABLE "bookmark" (
    "bookmark_id" UUID NOT NULL,
    "party_id" UUID NOT NULL,
    "target_type" "TargetType" NOT NULL,
    "target_id" UUID NOT NULL,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookmark_pkey" PRIMARY KEY ("bookmark_id")
);

-- CreateIndex
CREATE INDEX "ai_chat_message_session_id_register_time_idx" ON "ai_chat_message"("session_id", "register_time");

-- CreateIndex
CREATE UNIQUE INDEX "bookmark_party_id_target_type_target_id_key" ON "bookmark"("party_id", "target_type", "target_id");

-- CreateIndex
CREATE UNIQUE INDEX "integrated_auth_account_identity_id_key" ON "integrated_auth_account"("identity_id");

-- CreateIndex
CREATE INDEX "rescue_geom_idx" ON "rescue_post" USING GIST ("geom");

-- CreateIndex
CREATE INDEX "shelter_geom_idx" ON "shelter" USING GIST ("geom");

-- AddForeignKey
ALTER TABLE "ai_chat_session" ADD CONSTRAINT "ai_chat_session_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_chat_message" ADD CONSTRAINT "ai_chat_message_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "ai_chat_session"("session_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;
