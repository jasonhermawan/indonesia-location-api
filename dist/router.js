"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const province_router_1 = require("./routers/province.router");
const city_router_1 = require("./routers/city.router");
const district_router_1 = require("./routers/district.router");
const village_router_1 = require("./routers/village.router");
const postal_code_router_1 = require("./routers/postal-code.router");
const router = (0, express_1.Router)();
router.use('/province', province_router_1.provinceRouter);
router.use('/city', city_router_1.cityRouter);
router.use('/district', district_router_1.districtRouter);
router.use('/village', village_router_1.villageRouter);
router.use('/postal-code', postal_code_router_1.postalCodeRouter);
exports.default = router;
//# sourceMappingURL=router.js.map