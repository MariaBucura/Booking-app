import express from "express";
import { GetUsers, GetUser, UpdateUser, DeleteUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//router.get('/checkauthentication', verifyToken, (request, response, next) => {
//    response.send("helo user you are authenticated!")
//})

//router.get('/checkuser/:id',verifyUser, (request, response, next) => {
//    response.send("helo user you are authenticated and you can delete your account!")
//})

//router.get('/checkadmin/:id',verifyAdmin, (request, response, next) => {
//    response.send("helo admin you are authenticated and you can delete all accounts!")
//})

//GET
router.get('/:id', verifyUser, GetUser)
//UPDATE
router.put('/:id', verifyUser, UpdateUser)
//DELETE
router.delete('/:id', verifyUser, DeleteUser)
//GET ALL
router.get('/', verifyAdmin, GetUsers)

export default router;