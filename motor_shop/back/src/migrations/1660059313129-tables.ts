import { MigrationInterface, QueryRunner } from "typeorm";

export class tables1660059313129 implements MigrationInterface {
    name = 'tables1660059313129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "anuncio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "year" integer NOT NULL, "km" integer NOT NULL, "price" numeric(8,2) NOT NULL, "description" character varying NOT NULL, "veicle_type" character varying NOT NULL, "img_wlp" character varying NOT NULL, "img_galery" character varying NOT NULL, CONSTRAINT "PK_5541bfac946f277f59379e45014" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "anuncio"`);
    }

}
