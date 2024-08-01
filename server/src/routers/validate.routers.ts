import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateRoute = (req: Request, res: Response, next: NextFunction) => {
    
    const headToken = req.headers['authorization'];
    
    // Chequeando el Token
    if (headToken !== undefined && headToken.startsWith('Bearer ')) {

        // Verificar y Validar Token
        try {
            const bearerToken = headToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'default-secret-key');
            next()           
        } catch (error) {
            res.status(401).json({
                msg: 'Token no válido'
            })
        }

    }else {
        res.status(401).json({
            msg: 'Acceso denegado'
        })
    } 
};

export default validateRoute;