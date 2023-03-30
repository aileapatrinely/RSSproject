"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserFeedsTable1679768416662 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserFeedsTable1679768416662 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createForeignKey('users_feeds', new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'RESTRICT',
        }));
        await queryRunner.createForeignKey('users_feeds', new typeorm_1.TableForeignKey({
            columnNames: ['feed_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'feeds',
            onDelete: 'RESTRICT',
        }));
    }
    async down(queryRunner) {
        const userTable = await queryRunner.getTable('users');
        const userForeignKey = userTable.foreignKeys.find((fk) => fk.columnNames.indexOf('user_id') !== -1);
        const feedTable = await queryRunner.getTable('feeds');
        const feedForeginKey = feedTable.foreignKeys.find((fk) => fk.columnNames.indexOf('feed_id') !== -1);
        await queryRunner.dropForeignKey('users', userForeignKey);
        await queryRunner.dropForeignKey('feeds', feedForeginKey);
        await queryRunner.dropTable('userfeeds');
    }
}
exports.CreateUserFeedsTable1679768416662 = CreateUserFeedsTable1679768416662;
//# sourceMappingURL=1679768416662-CreateUserFeedsTable.js.map