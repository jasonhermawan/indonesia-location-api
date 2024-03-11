"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostalCodeService = void 0;
const models_1 = require("../../../models");
const getPostalCodeService = async (query) => {
    try {
        const result = await models_1.postal_codes.findAll({
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
exports.getPostalCodeService = getPostalCodeService;
//# sourceMappingURL=postal-code.service.js.map