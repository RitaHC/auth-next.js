import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB connected successfully : Rita!')
        })
        connection.on('error', () => {
            console.log("Hey Rita: There is a error", error)
        })
    } catch (error){
        console.log('Something went wrong')
        console.log(error)
    }
}