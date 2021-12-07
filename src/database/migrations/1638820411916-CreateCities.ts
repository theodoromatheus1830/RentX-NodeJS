import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCities1638820411916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "cities",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },
                        {
                            name: "abbreviation",
                            type: "varchar",
                        },
                        {
                            name: "firstColor",
                            type: "varchar",
                        },
                        {
                            name: "secondColor",
                            type: "varchar",
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cities");
    }

}
