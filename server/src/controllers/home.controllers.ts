import { Request, Response } from "express"

export const getHome = (req: Request, res: Response) => {

    res.json({
        msg: "Stay on Home"
    })
} 