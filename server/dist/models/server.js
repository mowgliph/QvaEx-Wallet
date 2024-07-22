"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routers_1 = __importDefault(require("../routers/users.routers"));
const home_routers_1 = __importDefault(require("../routers/home.routers"));
const balance_routers_1 = __importDefault(require("../routers/balance.routers"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8443';
        this.lisen();
        this.midlewares();
        this.routes();
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
    }
    midlewares() {
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
