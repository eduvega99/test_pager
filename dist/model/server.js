"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pagers_routes_1 = __importDefault(require("../routes/pagers.routes"));
class Server {
    constructor() {
        this.paths = {
            pagers: '/api/pagers'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.pagers, pagers_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server started at port:', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map