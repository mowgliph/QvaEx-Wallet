"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupUser = exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/* Login Usuario */
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validar Usuario en BD
    const user = yield users_1.Users.findOne({ where: { username: username } });
    if (!user) {
        return res.status(404).json({
            msg: `No existe usuario ${username} en la Base de Datos`
        });
    }
    // Validar Password
    const valpass = yield bcrypt_1.default.compare(password, user.password);
    if (!valpass) {
        return res.status(401).json({
            msg: "Contraseña incorrecta"
        });
    }
    // Generar Token
    const token = jsonwebtoken_1.default.sign({ username: username }, process.env.SECRET_KEY || 'default-secret-key', { expiresIn: '1h' });
    res.json({
        msg: "Loggin User",
        token
    });
});
exports.loginUser = loginUser;
/* Registrar Usuario */
const signupUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, name, lastname, email, numTele, biografia } = req.body;
    // Validar Usuario
    const findUser = yield users_1.Users.findOne({ where: { username: username } });
    if (findUser) {
        return res.status(400).json({
            msg: `El usuario ${username} ya existe`
        });
    }
    // Crear nuevo usuario con hash del password
    const hPass = yield bcrypt_1.default.hash(password, 10);
    try {
        yield users_1.Users.create({
            username: username,
            password: hPass,
            name: name,
            lastname: lastname,
            email: email,
            numTele: numTele,
            biografia: biografia
        });
        res.json({
            msg: `Usuario ${username} creado exitosamente`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ups!! Ocurrió un ERROR!",
            error
        });
    }
});
exports.signupUser = signupUser;
