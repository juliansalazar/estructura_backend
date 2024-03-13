import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.DB_URI);
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database connected');
    })

    connection.on('error', (err) => {
        console.error('Connection failed', err);
    })
}

export { connect }