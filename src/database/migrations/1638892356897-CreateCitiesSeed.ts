import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { Cities } from "../../modules/difusora/entities/Cities";
import { CitiesSeed } from "../seed/cities";

export class CreateCitiesSeed1638892356897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository(Cities).save(
            CitiesSeed
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}   
