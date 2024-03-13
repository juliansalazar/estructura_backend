import express from "express";
import { createBook, getBook, getAllBooks } from "../controllers/bookController.js";

const bookRoutes = express.Router();

bookRoutes.route("/").post(createBook).get(getAllBooks);
bookRoutes.route("/:id").get(getBook);


export default bookRoutes;