import mongoose from "mongoose";

// Esquema de autor
const authorSchema = new mongoose.Schema({
    name : {
        type: String, 
        required: true
    },
    nationality : {
        type: String,
        default: 'Mexico'
    },
    dateOfBirth : {
        type: Date,
        required: true
    },
    biography : {
        type: String
    }
})

export default mongoose.model('Author', authorSchema)