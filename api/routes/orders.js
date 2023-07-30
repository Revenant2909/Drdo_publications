import express from "express";
import { createOrder, deleteOrder, getOrder, getOrders } from "../controllers/order.js";


const router = express.Router()

router.get("/", getOrders);
router.get("/find/:id", getOrder);
router.delete("/:id",deleteOrder);
router.post("/",createOrder);

export default router