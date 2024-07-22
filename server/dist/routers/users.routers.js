"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const rUser = (0, express_1.Router)();
rUser.get('/', users_controllers_1.getUsers);
rUser.post('/login', users_controllers_1.loginUser);
rUser.post('/signup', users_controllers_1.signupUser);
exports.default = rUser;
