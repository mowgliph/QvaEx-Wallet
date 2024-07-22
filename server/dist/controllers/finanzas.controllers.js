"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdraw = exports.topUp = exports.getSaldo = void 0;
const getSaldo = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Obteniendo Finanzas",
        body
    });
};
exports.getSaldo = getSaldo;
const topUp = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Depositar Balance",
        body
    });
};
exports.topUp = topUp;
const withdraw = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Extraccion de Balance",
        body
    });
};
exports.withdraw = withdraw;
