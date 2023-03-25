import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createFeedsTable1679594105794 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'feeds',
        columns: [
          {
            name: 'id',
            type: 'char(36)',
            isPrimary: true,
            comment: '(DC2Type:uuid)',
            isNullable: false,
          },
          {
            name: 'title',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'url',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'published_date',
            type: 'datetime',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('feed');
  }
}