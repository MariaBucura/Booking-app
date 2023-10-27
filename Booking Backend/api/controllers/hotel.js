import Hotel from "../models/Hotel.js";

export const CreateHotel = async (request, response, next) => {
    const newHotel = new Hotel(request.body)

    try{
        const savedHotel = await newHotel.save();
        response.status(200).json(savedHotel);
    }catch(error){
        next(error)
    }
}

export const GetHotel = async (request, response, next) => {
    try{
        const hotel = await Hotel.findById(request.params.id)
        response.status(200).json(hotel);
    }catch(error){
        next(error)
    }
}

export const UpdateHotel = async (request, response, next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(request.params.id, {$set: request.body}, {new: true})
        response.status(200).json(updatedHotel);
    }catch(error){
        next(error)
    }
}

export const DeleteHotel = async (request, response, next) => {
    try{
        await Hotel.findByIdAndDelete(request.params.id)
        response.status(200).json("Hotel deleted successfully!");
    }catch(error){
        next(error)
    }
}

export const GetHotels = async (request, response, next) => {
    try{
        const hotels = await Hotel.find()
        response.status(200).json(hotels);
    }catch(error){
        next(error)
    }
}