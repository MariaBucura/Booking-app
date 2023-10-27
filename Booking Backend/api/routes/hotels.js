import express from "express";
import Hotel from "../models/Hotel.js";
import { CreateHotel, DeleteHotel, GetHotel, GetHotels, UpdateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, CreateHotel)
//GET
router.get('/:id', GetHotel)
//UPDATE
router.put('/:id', verifyAdmin, UpdateHotel)
//DELETE
router.delete('/:id', verifyAdmin, DeleteHotel)
//GET ALL
router.get('/', GetHotels)

export default router;