"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pager_controller_1 = require("../controller/pager.controller");
const router = (0, express_1.Router)();
router.post('/', pager_controller_1.sendMessage);
exports.default = router;
//# sourceMappingURL=pagers.routes.js.map