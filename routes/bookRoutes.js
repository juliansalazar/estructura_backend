import express from "express";
import { createBook, getAllBooks, getBook } from "../controllers/bookController.js";

const bookRoutes = express.Router();

bookRoutes.route("/").post(createBook).get(getAllBooks);
bookRoutes.route("/:bookId").get(getBook);


export default bookRoutes;