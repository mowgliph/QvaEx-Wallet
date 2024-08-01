import { Router } from "express";
import { getHome } from "../controllers/home.controllers";
import validateRoute from "./validate.routers";

const rHome = Router();

rHome.get('/', validateRoute ,getHome)

export default rHome;
