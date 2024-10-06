import express from "express";
import "./db/server.js";
import userRouter from "./routes/index.js";


const app=express();
const PORT=8000;

app.use(express.json())
app.use('/user',userRouter)




app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
