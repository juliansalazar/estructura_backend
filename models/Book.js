import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    authors: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    } ],
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
