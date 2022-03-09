import express from "express";
import { getUsers, getUser, updateUser, createUser, deleteUser } from "../controllers/UsersController.js";
const router = express.Router();

router.get('/', getUsers)

router.post('/create', createUser)

router.post('/:id', getUser);

router.put('/update/:id', updateUser)

router.delete('/delete/:id', deleteUser);


export default router;