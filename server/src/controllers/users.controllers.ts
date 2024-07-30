import { Request, Response } from "express"
import bcrypt from "bcrypt";
import { Users } from "../models/users";

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

export const signupUser = async (req: Request, res: Response) => {

    const { username, password, name, lastname, email, numTele, biografia } = req.body;
    
    const hPass = await bcrypt.hash(password, 10);

    await Users.create({
        username: username,
        password: hPass,
        name: name,
        lastname: lastname,
        email: email,
        numTele: numTele,
        biografia: biografia
    })

    res.json({
        msg: `Usuario ${username} creado exitosamente`
    });
} 