import express from "express";
import { getUsers, updateUser, createUser, deleteUser } from "../controllers/UsersController.js";
const router = express.Router();

router.get('/', getUsers)

//router.post('/:id', getUser);

router.post('/create', createUser)

router.put('/update/:id', updateUser)

router.delete('/delete/:id', deleteUser);


export default router;