"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.districtRouter = void 0;
const express_1 = require("express");
const district_controller_1 = require("../controllers/district.controller");
const districtRouter = (0, express_1.Router)();
exports.districtRouter = districtRouter;
districtRouter.get('/', district_controller_1.getDistrictController);
//# sourceMappingURL=district.router.js.map