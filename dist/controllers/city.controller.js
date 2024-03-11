"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityController = void 0;
const city_service_1 = require("../services/city/city.service");
const getCityController = async (req, res, next) => {
    try {
        const result = await (0, city_service_1.getCityService)(req.query);
        return res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getCityController = getCityController;
//# sourceMappingURL=city.controller.js.map