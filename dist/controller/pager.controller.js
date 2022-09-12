"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const net_1 = require("net");
// const port = 8000;
const client = new net_1.Socket;
const sendMessage = (req, res) => {
    const { ip, port, message } = req.body;
    const data = `<Login services="NetPage"/><PageRequest pager="AlphaCoaster;&&&&&pagerCode" message="${message}" />`;
    const data2 = `<PageRequest><Pager Type="Text" SystemID="" ID=""/><Message>${message}\\fFVB</Message></PageRequest>\r\n`;
    client.connect(port, ip, () => {
        client.write(data);
    });
    res.json({ ok: true });
};
exports.sendMessage = sendMessage;
//# sourceMappingURL=pager.controller.js.map