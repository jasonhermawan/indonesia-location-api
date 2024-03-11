"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinceService = void 0;
const models_1 = require("../../../models");
const getProvinceService = async (query) => {
    try {
        const result = await models_1.provinces.findAll({
            where: query,
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
        return result;
    }
    catch (error) {
        console.log(error);
    }
};
exports.getProvinceService = getProvinceService;
//# sourceMappingURL=province.service.js.map