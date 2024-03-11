"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistrictController = void 0;
const district_service_1 = require("../services/district/district.service");
const getDistrictController = async (req, res, next) => {
    try {
        const result = await (0, district_service_1.getDistrictService)(req.query);
        return res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getDistrictController = getDistrictController;
//# sourceMappingURL=district.controller.js.map