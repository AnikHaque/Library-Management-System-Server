import express from "express";
import { borrowController } from "./borrow.controller";

const router = express.Router();
const BorrowRoutes = router;

router.post("/", borrowController.borrowBook);
router.get("/", borrowController.getBorrowSummary);

export default BorrowRoutes;
