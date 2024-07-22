"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controllers_1 = require("../controllers/home.controllers");
const rHome = (0, express_1.Router)();
rHome.get('/', home_controllers_1.getHome);
exports.default = rHome;
