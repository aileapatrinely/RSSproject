"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropTitleAndDescriptionColumns1680120235381 = void 0;
const typeorm_1 = require("typeorm");
class dropTitleAndDescriptionColumns1680120235381 {
    async up(queryRunner) {
        await queryRunner.dropColumn('feeds', 'title');
        await queryRunner.dropColumn('feeds', 'description');
    }
    async down(queryRunner) {
        await queryRunner.addColumn('feeds', new typeorm_1.TableColumn({
            name: 'title',
            type: 'varchar(36)',
            isNullable: false,
        }));
        await queryRunner.addColumn('feeds', new typeorm_1.TableColumn({
            name: 'description',
            type: 'varchar(255)',
            isNullable: false,
        }));
    }
}
exports.dropTitleAndDescriptionColumns1680120235381 = dropTitleAndDescriptionColumns1680120235381;
//# sourceMappingURL=1680120235381-drop-title-and-description-columns.js.map