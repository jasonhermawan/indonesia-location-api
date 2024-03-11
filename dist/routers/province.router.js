"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provinceRouter = void 0;
const express_1 = require("express");
const province_controller_1 = require("../controllers/province.controller");
const provinceRouter = (0, express_1.Router)();
exports.provinceRouter = provinceRouter;
provinceRouter.get('/', province_controller_1.getProvinceController);
//# sourceMappingURL=province.router.js.map