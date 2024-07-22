import { Router } from "express";
import { getUsers, loginUser, signupUser,  } from "../controllers/users.controllers";


const rUser = Router();

rUser.get('/', getUsers)
rUser.post('/login', loginUser)
rUser.post('/signup', signupUser)

export default rUser;