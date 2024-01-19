import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1705677180609 implements MigrationInterface {
    name = 'Migrations1705677180609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(100) NOT NULL, "permissions" character varying NOT NULL, CONSTRAINT "UQ_415c35b9b3b6fe45a3b065030f5" UNIQUE ("email"), CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "serie" character varying(50) NOT NULL, "status" character varying NOT NULL, "last_service" character varying(50) NOT NULL, "next_service" character varying(50) NOT NULL, "description" character varying(1000) NOT NULL, "timestamp" character varying(100) NOT NULL, CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
