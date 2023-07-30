import express from "express";
import { addBook, deleteBook, getBooks,getBook, updateBook } from "../controllers/book.js";


const router = express.Router()

router.get("/", getBooks);
router.get("/find/:id", getBook);
router.put("/:id", updateBook);
router.delete("/:id",deleteBook);
router.post("/",addBook);

export default router