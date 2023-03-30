"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDateColumn1680118854841 = void 0;
const typeorm_1 = require("typeorm");
class deleteDateColumn1680118854841 {
    async up(queryRunner) {
        await queryRunner.dropColumn('feeds', 'published_date');
    }
    async down(queryRunner) {
        await queryRunner.addColumn('feeds', new typeorm_1.TableColumn({
            name: 'published_date',
            type: 'datetime',
            isNullable: false,
        }));
    }
}
exports.deleteDateColumn1680118854841 = deleteDateColumn1680118854841;
//# sourceMappingURL=1680118854841-delete-date-column.js.map