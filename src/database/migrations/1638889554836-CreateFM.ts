import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFM1638889554836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "fm",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "citiesId",
                            type: "uuid",
                            isNullable: true
                        },
                        {
                            name: "label",
                            type: "varchar",
                        },
                        {
                            name: "image",
                            type: "varchar",
                        },
                        {
                            name: "url",
                            type: "varchar",
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKCitiesFM",
                            referencedTableName: "cities",
                            referencedColumnNames: ['id'],
                            columnNames: ["citiesId"],
                            onDelete: "SET NULL",
                            onUpdate: "NO ACTION"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("fm");
    }

}
