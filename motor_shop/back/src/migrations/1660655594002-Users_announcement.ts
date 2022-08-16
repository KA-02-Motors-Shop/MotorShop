import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersAnnouncement1660655594002 implements MigrationInterface {
    name = 'UsersAnnouncement1660655594002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "year" integer NOT NULL, "km" integer NOT NULL, "price" numeric(8,2) NOT NULL, "description" character varying NOT NULL, "veicle_type" character varying NOT NULL, "img_wlp" character varying NOT NULL, "img_galery" character varying NOT NULL, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "announcement"`);
    }

}
