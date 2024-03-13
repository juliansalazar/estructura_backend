import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    authors: [ authorSchema ],
    title : {
        type: String, 
        required: true
    },
    year:{
        type:Number,
        min:1950,
        max:2025
    },
    ISBN:{
        type:String
    },
    genre:{
        type:String,
    }
});

export default mongoose.model('Book', bookSchema) // Name con mayuscula y singular
