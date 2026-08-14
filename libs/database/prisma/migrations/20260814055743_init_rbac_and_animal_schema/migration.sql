/*
  Warnings:

  - The primary key for the `animal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `role` on the `party_membership` table. All the data in the column will be lost.
  - Changed the type of `animal_id` on the `adoption_process` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `animal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `role_id` to the `party_membership` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `animal_id` on the `rescue_post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "adoption_process" DROP CONSTRAINT "adoption_process_animal_id_fkey";

-- DropForeignKey
ALTER TABLE "rescue_post" DROP CONSTRAINT "rescue_post_animal_id_fkey";

-- AlterTable
ALTER TABLE "adoption_process" DROP COLUMN "animal_id",
ADD COLUMN     "animal_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "animal" DROP CONSTRAINT "animal_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "animal_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "party_membership" DROP COLUMN "role",
ADD COLUMN     "role_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "rescue_post" DROP COLUMN "animal_id",
ADD COLUMN     "animal_id" UUID NOT NULL;

-- DropEnum
DROP TYPE "MembershipRole";

-- CreateTable
CREATE TABLE "group_role" (
    "role_id" UUID NOT NULL,
    "group_id" UUID NOT NULL,
    "role_name" VARCHAR(50) NOT NULL,
    "can_read" BOOLEAN NOT NULL DEFAULT true,
    "can_write" BOOLEAN NOT NULL DEFAULT false,
    "can_manage_roles" BOOLEAN NOT NULL DEFAULT false,
    "is_owner" BOOLEAN NOT NULL DEFAULT false,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "group_role_pkey" PRIMARY KEY ("role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "group_role_group_id_role_name_key" ON "group_role"("group_id", "role_name");

-- CreateIndex
CREATE INDEX "adoption_process_animal_id_status_delete_time_idx" ON "adoption_process"("animal_id", "status", "delete_time");

-- CreateIndex
CREATE INDEX "rescue_post_animal_id_delete_time_idx" ON "rescue_post"("animal_id", "delete_time");

-- AddForeignKey
ALTER TABLE "party_membership" ADD CONSTRAINT "party_membership_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "group_role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_role" ADD CONSTRAINT "group_role_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rescue_post" ADD CONSTRAINT "rescue_post_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoption_process" ADD CONSTRAINT "adoption_process_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
