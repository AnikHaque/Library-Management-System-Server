import express from "express";
import { bookController } from "./book.controller";

const router = express.Router();
const BookRoutes = router;

router.post("/", bookController.addBook);
router.get("/", bookController.getAllBooksController);
router.get("/:bookId", bookController.getBookById);
router.put("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);

export default BookRoutes;
