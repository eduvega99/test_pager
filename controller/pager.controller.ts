import { Request, Response } from "express";
import { Socket } from "net";

// const port = 8000;

export const sendMessage = async (req: Request, res: Response) => {
    
    const client = new Socket();

    const { ip, port, message, system, pager } = req.body;

    const data1 = `<Login services=\"NetPage:2.1;Heartbeat\"/>`;
    const data2 = `<PageRequest><Pager Type="Text" SystemID="${system}" ID="${pager}"/><Message>${message}\\fFVB</Message></PageRequest>`;
    

    console.log('Enviando mensaje');

    client.connect({ host: ip, port: Number(port) }, async () => {
        await client.write(data1);
        await client.write(data2);
    });
    
    res.json({ message: data2 });
}