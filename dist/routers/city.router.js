"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const express_1 = require("express");
const city_controller_1 = require("../controllers/city.controller");
const cityRouter = (0, express_1.Router)();
exports.cityRouter = cityRouter;
cityRouter.get('/', city_controller_1.getCityController);
//# sourceMappingURL=city.router.js.map