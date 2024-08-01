import { Router } from "express";
import { loginUser, signupUser,  } from "../controllers/users.controllers";
import validateRoute from "./validate.routers";


const rUser = Router();

rUser.post('/login', loginUser)
rUser.post('/signup', signupUser)

export default rUser;