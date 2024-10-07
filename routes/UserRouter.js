import express from "express";
import {
  getAllUser,
  getUserById,
  addNewUser,
  deleteUser,
  updateUser,
} from "../controller/User.js";

const userRouter = express.Router();
userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserById);
userRouter.post("/", addNewUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
export default userRouter;
