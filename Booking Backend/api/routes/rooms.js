import express from "express";
import { CreateRoom, GetRoom, GetRooms, UpdateRoom, DeleteRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/:hotelid', verifyAdmin, CreateRoom)
//GET
router.get('/:id', GetRoom)
//UPDATE
router.put('/:id', verifyAdmin, UpdateRoom)
//DELETE
router.delete('/:id/:hotelid', verifyAdmin, DeleteRoom)
//GET ALL
router.get('/', GetRooms)

export default router;