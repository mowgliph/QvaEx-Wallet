import { Router } from "express";
import { getHome } from "../controllers/home.controllers";

const rHome = Router();

rHome.get('/', getHome)

export default rHome;
