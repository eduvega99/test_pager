import { Request, Response } from "express";
import { Socket } from "net";

// const port = 8000;

export const sendMessage = async (req: Request, res: Response) => {
    
    const client = new Socket();

    const { ip, port, message, system, pager } = req.body;

    // const data1 = `<Login services=\"NetPage:2.1;Heartbeat\"/>\r\n`;
    // const data2 = `<PageRequest><Pager Type="Text" SystemID="${system}" ID="${pager}"/><Message>${message}\\fFVB</Message></PageRequest>\r\n`;


    const data1 = `<Login services="NetPage" />`;
    const data2 = `<PageRequest pager="2;1" message="Flash5Min" />`
    
    client.connect({ host: ip, port: Number(port) }, async () => {
        client.write(data1);
        await new Promise(resolve => {
            setTimeout(resolve, 2500)
        }); 
        client.write(data2);
        await new Promise(resolve => {
            setTimeout(resolve, 2500)
        }); 
    });
 
    res.json({ message: data2 });
}