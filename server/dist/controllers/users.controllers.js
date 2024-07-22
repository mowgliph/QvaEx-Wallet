"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupUser = exports.loginUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Obteniendo Users",
        body
    });
};
exports.getUsers = getUsers;
const loginUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Loggin User",
        body
    });
};
exports.loginUser = loginUser;
const signupUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Register New User",
        body
    });
};
exports.signupUser = signupUser;
