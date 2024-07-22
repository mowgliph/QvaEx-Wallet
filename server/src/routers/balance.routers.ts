import { Router } from "express";
import { getSaldo, topUp, transfer, withdraw } from "../controllers/balance.controllers";

const rBalance = Router();

rBalance.get('/', getSaldo)
rBalance.post('/topup', topUp)
rBalance.post('/withdraw', withdraw)
rBalance.post('/withdraw', transfer)

export default rBalance;