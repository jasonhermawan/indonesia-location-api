"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVillageService = void 0;
const models_1 = require("../../../models");
const getVillageService = async (query) => {
    try {
        const villagesData = await models_1.villages.findAll({
            where: query,
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
        const postalCodeMap = new Map();
        const postalCodeData = await models_1.postal_codes.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
        });
        postalCodeData.forEach((postalCode) => {
            const villageName = postalCode.village.replace(/\s+/g, '').toLowerCase();
            const postalCodes = postalCodeMap.get(villageName) || [];
            postalCodes.push(postalCode.postalCode);
            postalCodeMap.set(villageName, postalCodes);
            const villageNameWithoutSpaces = postalCode.village
                .replace(/\s+/g, '')
                .toLowerCase();
            postalCodeMap.set(villageNameWithoutSpaces, postalCodes);
        });
        const result = villagesData.map((village) => {
            const villageNameWithoutSpaces = village.name
                .replace(/\s+/g, '')
                .toLowerCase();
            const postalCodes = postalCodeMap.get(villageNameWithoutSpaces) || [];
            return {
                id: village.id,
                districtId: village.districtId,
                name: village.name,
                postalCodes: postalCodes,
            };
        });
        return result;
    }
    catch (error) {
        console.log(error);
    }
};
exports.getVillageService = getVillageService;
//# sourceMappingURL=village.service.js.map