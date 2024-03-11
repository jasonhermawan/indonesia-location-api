"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistrictService = void 0;
const models_1 = require("../../../models");
const getDistrictService = async (query) => {
    try {
        const result = await models_1.districts.findAll({
            where: query,
            attributes: {
                exclude: ['latitude', 'longitude', 'createdAt', 'updatedAt'],
            },
        });
        return result;
    }
    catch (error) {
        console.log(error);
    }
};
exports.getDistrictService = getDistrictService;
//# sourceMappingURL=district.service.js.map