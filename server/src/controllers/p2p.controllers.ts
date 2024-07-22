import { Request, Response } from "express"
import { p2p } from "../models/p2p";

export const getP2p = async (req: Request, res:Response) => {

    const listP2P = await p2p.findAll();

    res.json(listP2P);
} 