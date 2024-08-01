"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controllers_1 = require("../controllers/home.controllers");
const validate_routers_1 = __importDefault(require("./validate.routers"));
const rHome = (0, express_1.Router)();
rHome.get('/', validate_routers_1.default, home_controllers_1.getHome);
exports.default = rHome;
