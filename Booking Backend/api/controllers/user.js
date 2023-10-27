import User from "../models/User.js";

export const GetUser = async (request, response, next) => {
    try{
        const user = await User.findById(request.params.id)
        response.status(200).json(user);
    }catch(error){
        next(error)
    }
}

export const UpdateUser = async (request, response, next) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(request.params.id, {$set: request.body}, {new: true})
        response.status(200).json(updatedUser);
    }catch(error){
        next(error)
    }
}

export const DeleteUser = async (request, response, next) => {
    try{
        await User.findByIdAndDelete(request.params.id)
        response.status(200).json("User deleted successfully!");
    }catch(error){
        next(error)
    }
}

export const GetUsers = async (request, response, next) => {
    try{
        const users = await User.find()
        response.status(200).json(users);
    }catch(error){
        next(error)
    }
}