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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const net_1 = require("net");
// const port = 8000;
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new net_1.Socket();
    const { ip, port, message, system, pager } = req.body;
    const data = `<PageRequest><Pager Type="Text" SystemID="${system}" ID="${pager}"/><Message>${message}\\fFVB</Message></PageRequest>\r\n`;
    yield client.connect({ host: ip, port: Number(port) }, () => __awaiter(void 0, void 0, void 0, function* () {
        yield client.write(data);
    }));
    res.json({ message: data });
});
exports.sendMessage = sendMessage;
//# sourceMappingURL=pager.controller.js.map