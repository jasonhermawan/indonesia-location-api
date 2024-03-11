"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityService = void 0;
const models_1 = require("../../../models");
const getCityService = async (query) => {
    try {
        const result = await models_1.cities.findAll({
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
exports.getCityService = getCityService;
//# sourceMappingURL=city.service.js.map