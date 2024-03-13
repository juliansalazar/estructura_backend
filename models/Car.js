import mongoose from 'mongoose';
const carSchema = new mongoose.Schema({
    plate : {
        type: String, 
        required: true
    },
    brand :{
        type:String,
        require:true
    },
    model:{
        type:String,
        require:true
    },
    year:{
        type:Number,
        min:1950,
        max:2025
    },
    VIN:{
        type:String
    },
    carType:{
        type:String
    },
    color:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
})

// Sobre el nombre del modelo: La primera letra en mayuscula y en singular!!!!

export default mongoose.model('Car', carSchema)