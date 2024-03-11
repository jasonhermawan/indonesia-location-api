"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.villageRouter = void 0;
const express_1 = require("express");
const village_controller_1 = require("../controllers/village.controller");
const villageRouter = (0, express_1.Router)();
exports.villageRouter = villageRouter;
villageRouter.get('/', village_controller_1.getVillageController);
//# sourceMappingURL=village.router.js.map