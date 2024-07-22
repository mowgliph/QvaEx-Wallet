import { Router } from "express";
import { getP2p } from "../controllers/p2p.controllers";


const rP2P = Router();

rP2P.get('/', getP2p)


export default rP2P;