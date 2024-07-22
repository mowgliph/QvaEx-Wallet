import { Request, Response } from "express"

export const getUsers = (req: Request, res:Response) => {

    const { body } = req;
    
    res.json({
        msg: "Obteniendo Users",
        body
    });
} 

export const loginUser = (req: Request, res: Response) => {

    const { body } = req;
    
    res.json({
        msg: "Loggin User",
        body
    });
} 

export const signupUser = (req: Request, res: Response) => {

    const { body } = req;
    
    res.json({
        msg: "Register New User",
        body
    });
} 