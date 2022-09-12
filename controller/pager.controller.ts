import { Request, Response } from "express";
import { Socket } from "net";

// const port = 8000;
const client = new Socket;

export const sendMessage = async (req: Request, res: Response) => {
    const { ip, port, message, system, pager } = req.body;

    const data = `<PageRequest><Pager Type="Text" SystemID="${system}" ID="${pager}"/><Message>${message}\\fFVB</Message></PageRequest>\r\n`;

    client.connect(port, ip, async () => {
        await client.write(data);
    });
    
    res.json({ok: data});
}