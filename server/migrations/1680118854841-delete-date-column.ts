import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class deleteDateColumn1680118854841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('feeds', 'published_date');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'feeds',
      new TableColumn({
        name: 'published_date',
        type: 'datetime',
        isNullable: false,
      }),
    );
  }
}
