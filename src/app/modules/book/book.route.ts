import express from "express";
import { addBook } from "./book.controller";

const router = express.Router();
const BookRoutes = router;

router.post("/create-book", addBook);

export default BookRoutes;
