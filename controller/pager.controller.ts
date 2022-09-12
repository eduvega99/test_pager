import { Request, Response } from "express";
import { Socket } from "net";

// const port = 8000;
const client = new Socket;

export const sendMessage = (req: Request, res: Response) => {
    const { ip, port, message } = req.body;

    const data = `<Login services="NetPage"/><PageRequest pager="AlphaCoaster;&&&&&pagerCode" message="${message}" />`;
    const data2 = `<PageRequest><Pager Type="Text" SystemID="" ID=""/><Message>${message}\\fFVB</Message></PageRequest>\r\n`;

    client.connect(port, ip, () => {
        client.write(data);
    });
    
    res.json({ok: true});
}