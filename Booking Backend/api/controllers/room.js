import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const CreateRoom = async (request, response, next) => {

    const hotelId = request.params.hotelid

    const newRoom = new Room(request.body)

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id}
            })
        }catch(error){
            next(error)
        }
        response.status(200).json(savedRoom);
    }catch(error){
        next(error)
    }
}

export const GetRoom = async (request, response, next) => {
    try{
        const room = await Room.findById(request.params.id)
        response.status(200).json(room);
    }catch(error){
        next(error)
    }
}

export const UpdateRoom = async (request, response, next) => {
    try{
        const updatedRoom = await Room.findByIdAndUpdate(request.params.id, {$set: request.body}, {new: true})
        response.status(200).json(updatedRoom);
    }catch(error){
        next(error)
    }
}

export const DeleteRoom = async (request, response, next) => {
    const hotelId = request.params.hotelid
    try{
        await Room.findByIdAndDelete(request.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: request.params.id}
            })
        }catch(error){
            next(error)
        }
        response.status(200).json("Room deleted successfully!");
    }catch(error){
        next(error)
    }
}

export const GetRooms = async (request, response, next) => {
    try{
        const rooms = await Room.find()
        response.status(200).json(rooms);
    }catch(error){
        next(error)
    }
}