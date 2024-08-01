import { Request, Response } from "express"
import bcrypt from "bcrypt";
import { Users } from "../models/users";
import jwt from "jsonwebtoken";

/* Login Usuario */ 
export const loginUser = async(req: Request, res: Response) => {

    const { username, password } = req.body;
    
    // Validar Usuario en BD
    const user: any = await Users.findOne({ where: { username: username } });
    if (!user) {
        return res.status(404).json({
            msg: `No existe usuario ${username} en la Base de Datos`
        });
    }  

    // Validar Password
    const valpass = await bcrypt.compare(password, user.password)
    if (!valpass) {
        return res.status(401).json({
            msg: "Contraseña incorrecta"
        });
    }

    // Generar Token
    const token = jwt.sign(
        { username: username }, 
        process.env.SECRET_KEY || 'default-secret-key', 
        { expiresIn: '1h' }
    );

    res.json({
        msg: "Loggin User",
        token
    });
} 

/* Registrar Usuario */ 
export const signupUser = async (req: Request, res: Response) => {

    const { username, password, name, lastname, email, numTele, biografia } = req.body;
    
    // Validar Usuario
    const findUser = await Users.findOne({ where: { username: username } });
    if (findUser) {
        return res.status(400).json({
            msg: `El usuario ${username} ya existe`
        });
    }
    
    // Crear nuevo usuario con hash del password
    const hPass = await bcrypt.hash(password, 10);
    try {
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
        
    } catch (error) {
        res.status(400).json({
            msg: "Ups!! Ocurrió un ERROR!",
            error
        });        
    }
} 