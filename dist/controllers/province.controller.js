"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvinceController = void 0;
const province_service_1 = require("../services/province/province.service");
const getProvinceController = async (req, res, next) => {
    try {
        const result = await (0, province_service_1.getProvinceService)(req.query);
        return res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getProvinceController = getProvinceController;
//# sourceMappingURL=province.controller.js.map