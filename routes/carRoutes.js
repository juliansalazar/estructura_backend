import express from "express";
import { createCar, getCar, getAllCars, updateCar, deleteCar  } from "../controllers/carController.js";
import { authValidator } from "../middlewares/authValidator.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const carRoutes = express.Router();
carRoutes.route("/").post(createCar).get(authValidator, isAdmin, getAllCars);
carRoutes.route("/:plate").get(getCar).put(updateCar).delete(deleteCar);

//carRoutes.post("/", createCar);
//carRoutes.get("/", getAllCars);
//carRoutes.put("/:plate", updateCar);
//carRoutes.delete("/:plate", deleteCar);

export default carRoutes;