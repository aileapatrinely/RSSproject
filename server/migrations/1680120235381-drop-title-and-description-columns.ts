import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class dropTitleAndDescriptionColumns1680120235381
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('feeds', 'title');
    await queryRunner.dropColumn('feeds', 'description');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'feeds',
      new TableColumn({
        name: 'title',
        type: 'varchar(36)',
        isNullable: false,
      }),
    );
    await queryRunner.addColumn(
      'feeds',
      new TableColumn({
        name: 'description',
        type: 'varchar(255)',
        isNullable: false,
      }),
    );
  }
}
