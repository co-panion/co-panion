-- CreateEnum
CREATE TYPE "SocialProvider" AS ENUM ('KAKAO', 'NAVER', 'GOOGLE', 'APPLE');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ACTIVE', 'LOCKED', 'DORMANT');

-- CreateEnum
CREATE TYPE "PartyType" AS ENUM ('INDIVIDUAL', 'BUSINESS', 'TEAM');

-- CreateEnum
CREATE TYPE "PartyStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'WITHDRAWN');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateEnum
CREATE TYPE "MembershipRole" AS ENUM ('OWNER', 'ADMIN', 'MANAGER', 'MEMBER', 'GUEST');

-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('PENDING', 'ACTIVE', 'SUSPENDED', 'REJECTED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "AnimalStatus" AS ENUM ('RESCUED', 'REUNITED', 'PROTECTED', 'AVAILABLE', 'COUNSELING', 'ADOPTED', 'DECEASED', 'EUTHANIZED');

-- CreateEnum
CREATE TYPE "AdoptionApplicationStatus" AS ENUM ('PENDING', 'COUNSELING', 'INTERVIEW', 'ADDITIONAL_INTERVIEW', 'FOSTERING', 'FINAL_REVIEW', 'APPROVED', 'REJECTED', 'CANCELED');

-- CreateEnum
CREATE TYPE "TargetType" AS ENUM ('PARTY_PROFILE', 'SHELTER_BANNER', 'ANIMAL', 'RESCUE_POST', 'ADOPTION_PROCESS', 'POST', 'MEDIA');

-- CreateEnum
CREATE TYPE "PetExperience" AS ENUM ('NONE', 'PAST', 'CURRENT');

-- CreateEnum
CREATE TYPE "ResidenceType" AS ENUM ('APARTMENT', 'VILLA', 'DETACHED_HOUSE', 'OFFICETEL', 'DORMITORY');

-- CreateEnum
CREATE TYPE "PetPolicy" AS ENUM ('ALLOWED', 'NOT_ALLOWED', 'NEED_CONFIRMATION');

-- CreateTable
CREATE TABLE "integrated_auth_account" (
    "account_id" UUID NOT NULL,
    "party_id" UUID NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password_hash" VARCHAR(255),
    "account_status" "AccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "last_login_time" TIMESTAMPTZ,
    "register_time" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "integrated_auth_account_pkey" PRIMARY KEY ("account_id")
);

-- CreateTable
CREATE TABLE "social_auth_detail" (
    "social_id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
    "provider" "SocialProvider" NOT NULL,
    "provider_id" VARCHAR(255) NOT NULL,
    "register_time" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ,

    CONSTRAINT "social_auth_detail_pkey" PRIMARY KEY ("social_id")
);

-- CreateTable
CREATE TABLE "party_base" (
    "party_id" UUID NOT NULL,
    "party_type" "PartyType" NOT NULL,
    "status_code" "PartyStatus" NOT NULL DEFAULT 'ACTIVE',
    "register_time" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "party_base_pkey" PRIMARY KEY ("party_id")
);

-- CreateTable
CREATE TABLE "party_contact_info" (
    "contact_id" UUID NOT NULL,
    "party_id" UUID NOT NULL,
    "email" VARCHAR(255),
    "phone_number" VARCHAR(50),
    "extra_contacts" JSONB,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "party_contact_info_pkey" PRIMARY KEY ("contact_id")
);

-- CreateTable
CREATE TABLE "party_individual" (
    "party_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "di" VARCHAR(64) NOT NULL,
    "ci_update_time" TIMESTAMPTZ NOT NULL,
    "birth_date" CHAR(8) NOT NULL,
    "gender" CHAR(1) NOT NULL,

    CONSTRAINT "party_individual_pkey" PRIMARY KEY ("party_id")
);

-- CreateTable
CREATE TABLE "party_business" (
    "party_id" UUID NOT NULL,
    "business_name" VARCHAR(150) NOT NULL,
    "country_code" CHAR(2) NOT NULL DEFAULT 'KR',
    "registration_number" VARCHAR(50) NOT NULL,
    "verification_status" "VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "bcode" CHAR(10),

    CONSTRAINT "party_business_pkey" PRIMARY KEY ("party_id")
);

-- CreateTable
CREATE TABLE "party_team" (
    "party_id" UUID NOT NULL,
    "team_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "party_team_pkey" PRIMARY KEY ("party_id")
);

-- CreateTable
CREATE TABLE "business_korea_detail" (
    "party_id" UUID NOT NULL,
    "nts_status_code" VARCHAR(20),
    "fsc_industry_code" VARCHAR(20),
    "last_verified_time" TIMESTAMPTZ,

    CONSTRAINT "business_korea_detail_pkey" PRIMARY KEY ("party_id")
);

-- CreateTable
CREATE TABLE "party_profile" (
    "profile_id" UUID NOT NULL,
    "party_id" UUID NOT NULL,
    "profile_data" JSONB,
    "register_time" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "party_profile_pkey" PRIMARY KEY ("profile_id")
);

-- CreateTable
CREATE TABLE "party_membership" (
    "membership_id" UUID NOT NULL,
    "member_id" UUID NOT NULL,
    "group_id" UUID NOT NULL,
    "role" "MembershipRole" NOT NULL DEFAULT 'MEMBER',
    "status" "MembershipStatus" NOT NULL DEFAULT 'ACTIVE',
    "joined_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "party_membership_pkey" PRIMARY KEY ("membership_id")
);

-- CreateTable
CREATE TABLE "user_event_log" (
    "event_id" UUID NOT NULL,
    "party_id" UUID NOT NULL,
    "event_category" VARCHAR(50) NOT NULL,
    "event_name" VARCHAR(50) NOT NULL,
    "event_properties" JSONB NOT NULL,
    "event_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_event_log_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "user_analytics_trait" (
    "party_id" UUID NOT NULL,
    "calculated_traits" JSONB NOT NULL,
    "last_calculated_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_analytics_trait_pkey" PRIMARY KEY ("party_id")
);

-- CreateTable
CREATE TABLE "account_audit_log" (
    "log_id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
    "encrypted_email" VARCHAR(255) NOT NULL,
    "reason_code" CHAR(2) NOT NULL,
    "reason_metadata" JSONB,
    "client_ip" VARCHAR(50),
    "withdrawn_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expire_time" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "account_audit_log_pkey" PRIMARY KEY ("log_id")
);

-- CreateTable
CREATE TABLE "external_api_call_log" (
    "log_id" UUID NOT NULL,
    "api_category" CHAR(4) NOT NULL,
    "api_provider" CHAR(4) NOT NULL,
    "endpoint_url" VARCHAR(255) NOT NULL,
    "reference_id" UUID,
    "reference_type" VARCHAR(50),
    "request_payload" JSONB,
    "response_payload" JSONB,
    "http_status_code" INTEGER,
    "duration_ms" INTEGER,
    "is_success" BOOLEAN NOT NULL,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "external_api_call_log_pkey" PRIMARY KEY ("log_id")
);

-- CreateTable
CREATE TABLE "shelter" (
    "id" UUID NOT NULL,
    "business_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "address_detail" VARCHAR(255),
    "phone" VARCHAR(20) NOT NULL,
    "operating_hours" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "shelter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animal" (
    "id" SERIAL NOT NULL,
    "manager_party_id" UUID NOT NULL,
    "shelter_id" UUID,
    "species_id" SMALLINT NOT NULL,
    "breed_id" SMALLINT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "gender" "Gender" NOT NULL,
    "is_neutered" BOOLEAN NOT NULL,
    "age" SMALLINT,
    "is_estimated_age" BOOLEAN NOT NULL,
    "weight" DECIMAL(5,2) NOT NULL,
    "animal_status" "AnimalStatus" NOT NULL DEFAULT 'RESCUED',
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animal_species" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "animal_species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animal_breed" (
    "id" SMALLSERIAL NOT NULL,
    "species_id" SMALLINT NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "animal_breed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rescue_post" (
    "id" UUID NOT NULL,
    "animal_id" INTEGER NOT NULL,
    "author_party_id" UUID NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "found_location" VARCHAR(255) NOT NULL,
    "found_time" TIMESTAMPTZ NOT NULL,
    "description" TEXT NOT NULL,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "rescue_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adoption_process" (
    "id" UUID NOT NULL,
    "animal_id" INTEGER NOT NULL,
    "applicant_party_id" UUID NOT NULL,
    "status" "AdoptionApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "memo" TEXT,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "adoption_process_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adoption_detail" (
    "id" UUID NOT NULL,
    "adoption_process_id" UUID NOT NULL,
    "applicant_name" VARCHAR(30) NOT NULL,
    "family_size" SMALLINT NOT NULL,
    "youngest_child_age" SMALLINT,
    "pet_experience" "PetExperience" NOT NULL,
    "pet_experience_months" SMALLINT,
    "residence_type" "ResidenceType" NOT NULL,
    "pet_policy" "PetPolicy" NOT NULL,
    "is_family_consented" BOOLEAN NOT NULL DEFAULT false,
    "update_time" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "adoption_detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" UUID NOT NULL,
    "target_type" "TargetType" NOT NULL,
    "target_id" UUID NOT NULL,
    "media_url" TEXT NOT NULL,
    "order_seq" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" UUID NOT NULL,
    "author_id" UUID NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "content" TEXT NOT NULL,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "id" UUID NOT NULL,
    "author_id" UUID NOT NULL,
    "target_type" "TargetType" NOT NULL,
    "target_id" UUID NOT NULL,
    "root_id" UUID,
    "parent_id" UUID,
    "content" TEXT NOT NULL,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMPTZ NOT NULL,
    "delete_time" TIMESTAMPTZ,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hashtag" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "hashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hashtag_mapping" (
    "id" UUID NOT NULL,
    "hashtag_id" UUID NOT NULL,
    "target_type" "TargetType" NOT NULL,
    "target_id" UUID NOT NULL,
    "register_time" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hashtag_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "integrated_auth_account_username_key" ON "integrated_auth_account"("username");

-- CreateIndex
CREATE INDEX "integrated_auth_account_delete_time_idx" ON "integrated_auth_account"("delete_time");

-- CreateIndex
CREATE UNIQUE INDEX "social_auth_detail_account_id_key" ON "social_auth_detail"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "social_auth_detail_provider_provider_id_key" ON "social_auth_detail"("provider", "provider_id");

-- CreateIndex
CREATE INDEX "party_base_delete_time_idx" ON "party_base"("delete_time");

-- CreateIndex
CREATE INDEX "party_contact_info_email_idx" ON "party_contact_info"("email");

-- CreateIndex
CREATE INDEX "party_contact_info_phone_number_idx" ON "party_contact_info"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "party_individual_di_key" ON "party_individual"("di");

-- CreateIndex
CREATE UNIQUE INDEX "party_business_registration_number_key" ON "party_business"("registration_number");

-- CreateIndex
CREATE INDEX "party_business_bcode_idx" ON "party_business"("bcode");

-- CreateIndex
CREATE UNIQUE INDEX "party_profile_party_id_key" ON "party_profile"("party_id");

-- CreateIndex
CREATE INDEX "party_membership_group_id_idx" ON "party_membership"("group_id");

-- CreateIndex
CREATE UNIQUE INDEX "party_membership_member_id_group_id_key" ON "party_membership"("member_id", "group_id");

-- CreateIndex
CREATE INDEX "user_event_log_party_id_event_time_idx" ON "user_event_log"("party_id", "event_time");

-- CreateIndex
CREATE INDEX "user_event_log_event_category_event_name_idx" ON "user_event_log"("event_category", "event_name");

-- CreateIndex
CREATE INDEX "account_audit_log_account_id_idx" ON "account_audit_log"("account_id");

-- CreateIndex
CREATE INDEX "account_audit_log_expire_time_idx" ON "account_audit_log"("expire_time");

-- CreateIndex
CREATE INDEX "external_api_call_log_api_category_api_provider_idx" ON "external_api_call_log"("api_category", "api_provider");

-- CreateIndex
CREATE INDEX "external_api_call_log_reference_id_reference_type_idx" ON "external_api_call_log"("reference_id", "reference_type");

-- CreateIndex
CREATE INDEX "shelter_business_id_delete_time_idx" ON "shelter"("business_id", "delete_time");

-- CreateIndex
CREATE INDEX "animal_animal_status_delete_time_idx" ON "animal"("animal_status", "delete_time");

-- CreateIndex
CREATE INDEX "animal_manager_party_id_idx" ON "animal"("manager_party_id");

-- CreateIndex
CREATE INDEX "animal_breed_species_id_idx" ON "animal_breed"("species_id");

-- CreateIndex
CREATE INDEX "rescue_post_animal_id_delete_time_idx" ON "rescue_post"("animal_id", "delete_time");

-- CreateIndex
CREATE INDEX "adoption_process_animal_id_status_delete_time_idx" ON "adoption_process"("animal_id", "status", "delete_time");

-- CreateIndex
CREATE UNIQUE INDEX "adoption_detail_adoption_process_id_key" ON "adoption_detail"("adoption_process_id");

-- CreateIndex
CREATE INDEX "media_target_type_target_id_delete_time_idx" ON "media"("target_type", "target_id", "delete_time");

-- CreateIndex
CREATE INDEX "post_author_id_delete_time_idx" ON "post"("author_id", "delete_time");

-- CreateIndex
CREATE INDEX "comment_target_type_target_id_root_id_delete_time_idx" ON "comment"("target_type", "target_id", "root_id", "delete_time");

-- CreateIndex
CREATE UNIQUE INDEX "hashtag_name_key" ON "hashtag"("name");

-- CreateIndex
CREATE INDEX "hashtag_mapping_target_type_target_id_idx" ON "hashtag_mapping"("target_type", "target_id");

-- CreateIndex
CREATE UNIQUE INDEX "hashtag_mapping_hashtag_id_target_type_target_id_key" ON "hashtag_mapping"("hashtag_id", "target_type", "target_id");

-- AddForeignKey
ALTER TABLE "integrated_auth_account" ADD CONSTRAINT "integrated_auth_account_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_auth_detail" ADD CONSTRAINT "social_auth_detail_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "integrated_auth_account"("account_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_contact_info" ADD CONSTRAINT "party_contact_info_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_individual" ADD CONSTRAINT "party_individual_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_business" ADD CONSTRAINT "party_business_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_team" ADD CONSTRAINT "party_team_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_korea_detail" ADD CONSTRAINT "business_korea_detail_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_business"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_profile" ADD CONSTRAINT "party_profile_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_membership" ADD CONSTRAINT "party_membership_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party_membership" ADD CONSTRAINT "party_membership_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_event_log" ADD CONSTRAINT "user_event_log_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_analytics_trait" ADD CONSTRAINT "user_analytics_trait_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shelter" ADD CONSTRAINT "shelter_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_manager_party_id_fkey" FOREIGN KEY ("manager_party_id") REFERENCES "party_base"("party_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_shelter_id_fkey" FOREIGN KEY ("shelter_id") REFERENCES "shelter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "animal_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_breed_id_fkey" FOREIGN KEY ("breed_id") REFERENCES "animal_breed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal_breed" ADD CONSTRAINT "animal_breed_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "animal_species"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rescue_post" ADD CONSTRAINT "rescue_post_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rescue_post" ADD CONSTRAINT "rescue_post_author_party_id_fkey" FOREIGN KEY ("author_party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoption_process" ADD CONSTRAINT "adoption_process_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoption_process" ADD CONSTRAINT "adoption_process_applicant_party_id_fkey" FOREIGN KEY ("applicant_party_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoption_detail" ADD CONSTRAINT "adoption_detail_adoption_process_id_fkey" FOREIGN KEY ("adoption_process_id") REFERENCES "adoption_process"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "party_base"("party_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_root_id_fkey" FOREIGN KEY ("root_id") REFERENCES "comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hashtag_mapping" ADD CONSTRAINT "hashtag_mapping_hashtag_id_fkey" FOREIGN KEY ("hashtag_id") REFERENCES "hashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
