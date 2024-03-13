import Car from "../models/Car.js";
/* 
plate: 'ABH6434',
brand: 'Nissan', 
model: 'Leaf',  
year: 2019, 
VIN: 'JH4DB7660JS001234',
carType: 'Sedan',
color: 'Blue', 
price: 3500,
*/

// Create a new car
const createCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        // res.status(200).json({message: error.message})
        res.status(500);
        res.json({
            message: error.message,
            error,
        })
        ;
    }
}

// Get a list of all cars
const getAllCars = async (req, res) => {
    const cars = await Car.find({isDeleted: false});
    // Send the data back as a response
    res.status(200).json(cars);
}

// Get info of an especific car by plate
const getCar = async (req, res) => {
    const car = await Car.findOne({plate: req.params.plate});
    res.json(car);
}
// Update info of an especific car

const updateCar = async (req, res) => {
    const car = await Car.findOneAndUpdate({plate: req.params.plate}, req.body, {new: true});
    res.json(car);
}

// Delete an especific car
const deleteCar = async (req, res) => {
//    const car = await Car.findOneAndDelete({plate: req.params.plate});
//    res.json(car);
// Vamos a actualizar el isDeleted a true para que no aparezca en la lista de cars
    const car = await Car.findOneAndUpdate({plate: req.params.plate}, {isDeleted: true}, {new: true});
    res.json(car);
}

export { createCar, getCar, getAllCars, updateCar, deleteCar };