"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostalCodeController = void 0;
const postal_code_service_1 = require("../services/postalCode/postal-code.service");
const getPostalCodeController = async (req, res, next) => {
    try {
        const result = await (0, postal_code_service_1.getPostalCodeService)(req.query);
        return res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getPostalCodeController = getPostalCodeController;
//# sourceMappingURL=postal-code.controller.js.map