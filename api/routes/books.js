import express from "express";
import { addBook, deleteBook, getBooks, updateBook } from "../controllers/book.js";


const router = express.Router()

router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id",deleteBook);
router.post("/",addBook);

export default router