"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postalCodeRouter = void 0;
const express_1 = require("express");
const postal_code_controller_1 = require("../controllers/postal-code.controller");
const postalCodeRouter = (0, express_1.Router)();
exports.postalCodeRouter = postalCodeRouter;
postalCodeRouter.get('/', postal_code_controller_1.getPostalCodeController);
//# sourceMappingURL=postal-code.router.js.map