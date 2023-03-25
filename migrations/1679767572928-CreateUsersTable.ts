import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1679767572928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'char(36)',
            isPrimary: true,
            comment: '(DC2Type:uuid)',
            isNullable: false,
          },
          {
            name: 'username',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar(255)',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
