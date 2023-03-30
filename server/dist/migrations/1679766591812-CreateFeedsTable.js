"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedsTable1679594105794 = void 0;
const typeorm_1 = require("typeorm");
class createFeedsTable1679594105794 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('feed');
    }
}
exports.createFeedsTable1679594105794 = createFeedsTable1679594105794;
//# sourceMappingURL=1679766591812-CreateFeedsTable.js.map