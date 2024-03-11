"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVillageController = void 0;
const village_service_1 = require("../services/village/village.service");
const getVillageController = async (req, res, next) => {
    try {
        const result = await (0, village_service_1.getVillageService)(req.query);
        return res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getVillageController = getVillageController;
//# sourceMappingURL=village.controller.js.map