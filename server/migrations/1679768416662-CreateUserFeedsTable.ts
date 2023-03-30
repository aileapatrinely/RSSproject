import { query } from 'express';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateUserFeedsTable1679768416662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_feeds',
        columns: [
          {
            name: 'user_id',
            type: 'char(36)',
            isPrimary: true,
            comment: '(DCType:uuid)',
            isNullable: false,
          },
          {
            name: 'feed_id',
            type: 'char(36)',
            isPrimary: true,
            comment: '(DCType:uuid)',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'users_feeds',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'RESTRICT',
      }),
    );
    await queryRunner.createForeignKey(
      'users_feeds',
      new TableForeignKey({
        columnNames: ['feed_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'feeds',
        onDelete: 'RESTRICT',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const userTable = await queryRunner.getTable('users');
    const userForeignKey = userTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1,
    );
    const feedTable = await queryRunner.getTable('feeds');
    const feedForeginKey = feedTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('feed_id') !== -1,
    );

    await queryRunner.dropForeignKey('users', userForeignKey);
    await queryRunner.dropForeignKey('feeds', feedForeginKey);

    await queryRunner.dropTable('userfeeds');
  }
}
