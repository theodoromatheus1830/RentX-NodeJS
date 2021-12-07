import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePromotions1638892294193 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "promotions",
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
                            name: "title",
                            type: "varchar",
                        },
                        {
                            name: "image",
                            type: "varchar",
                        },
                        {
                            name: "text",
                            type: "varchar",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        },
                    ],
                    foreignKeys: [
                        {
                            name: "FKCitiesPromotion",
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
        await queryRunner.dropTable("promotions");
    }

}