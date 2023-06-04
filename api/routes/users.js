import express from "express";
import { getUser ,deleteUser, updateUser, getAllUsers} from "../controllers/user.js";

const router = express.Router()

router.get("/", getAllUsers);
router.delete("/:userId", deleteUser);
// router.post("/", updateUser); 


export default router