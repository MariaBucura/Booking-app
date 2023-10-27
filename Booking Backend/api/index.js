import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("App is connected to MongoDB!")
    }catch(error){
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected")
})


app.get('/', (request, response) => {
    response.send("helo brother")
})

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((error, request, response, next) => {
    const errorStatus = error.status || 500
    const errorMessage = error.message || "Something went wrong! "
    return response.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    });
    
})

app.listen(8800, () =>{
    connect();
    console.log("App is listening to port: 8800")
})