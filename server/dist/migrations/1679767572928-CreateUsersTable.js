"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1679767572928 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1679767572928 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUsersTable1679767572928 = CreateUsersTable1679767572928;
//# sourceMappingURL=1679767572928-CreateUsersTable.js.map