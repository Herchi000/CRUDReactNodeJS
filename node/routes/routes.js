import express from "express";
import { getUsers, updateUser, createUser, deleteUser } from "../controllers/UsersController.js";
const router = express.Router();

router.get('/all', getUsers)

router.post('/create', createUser)

router.put('/update/:id', updateUser)

router.delete('/delete/:id', deleteUser);


export default router;