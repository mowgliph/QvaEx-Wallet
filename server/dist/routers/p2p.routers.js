"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const p2p_controllers_1 = require("../controllers/p2p.controllers");
const rP2P = (0, express_1.Router)();
rP2P.get('/', p2p_controllers_1.getP2p);
exports.default = rP2P;
