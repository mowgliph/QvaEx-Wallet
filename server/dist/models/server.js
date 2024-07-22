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
/* Imports Globales */
const express_1 = __importDefault(require("express"));
/* Importaciones de Rutas */
const users_routers_1 = __importDefault(require("../routers/users.routers"));
const home_routers_1 = __importDefault(require("../routers/home.routers"));
const balance_routers_1 = __importDefault(require("../routers/balance.routers"));
const p2p_routers_1 = __importDefault(require("../routers/p2p.routers"));
/* Importaciones de BD */
const users_1 = require("./users");
const p2p_1 = require("./p2p");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8443';
        this.lisen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    lisen() {
        this.app.listen(this.port, () => {
            console.log('QvaEx running on ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/home', home_routers_1.default);
        this.app.use('/api/users', users_routers_1.default);
        this.app.use('/api/balance', balance_routers_1.default);
        this.app.use('/api/p2p', p2p_routers_1.default);
    }
    midlewares() {
        this.app.use(express_1.default.json());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield users_1.Users.sync({
                    alter: true
                });
                yield p2p_1.p2p.sync({
                    alter: true
                });
            }
            catch (error) {
                console.error('No se puede conectar con la base de datos:', error);
            }
        });
    }
}
exports.default = Server;
