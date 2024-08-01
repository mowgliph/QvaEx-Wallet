"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateRoute = (req, res, next) => {
    const headToken = req.headers['authorization'];
    // Chequeando el Token
    if (headToken !== undefined && headToken.startsWith('Bearer ')) {
        // Verificar y Validar Token
        try {
            const bearerToken = headToken.slice(7);
            jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'default-secret-key');
            next();
        }
        catch (error) {
            res.status(401).json({
                msg: 'Token no válido'
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'Acceso denegado'
        });
    }
};
exports.default = validateRoute;
