import express from "express";
import {addNewUser,deleteUser,getAllUser,getUserById,updateUser}  from "../controller/User"

const userRouter=express.Router();
userRouter.get("/",getAllUser);
userRouter.get("/:id",getUserById);
userRouter.post("/",addNewUser);
userRouter.delete("/:id",deleteUser);
userRouter.put("/:id",updateUser);
export default userRouter;  