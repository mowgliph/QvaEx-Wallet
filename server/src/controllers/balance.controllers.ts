import { Request, Response } from "express"

export const getSaldo = (req: Request, res:Response) => {

    const { body } = req;
    
    res.json({
        msg: "Obteniendo Finanzas",
        body
    });
} 

export const topUp = (req: Request, res: Response) => {

    const { body } = req;
    
    res.json({
        msg: "Depositar Balance",
        body
    });
} 

export const withdraw = (req: Request, res: Response) => {

    const { body } = req;
    
    res.json({
        msg: "Extraccion de Balance",
        body
    });
} 

export const transfer = (req: Request, res: Response) => {

    const { body } = req;
    
    res.json({
        msg: "Transferir Balance",
        body
    });
} 