import express from "express";
import "./db/server.js";


const app=express();
const PORT=8000;

app.use(express.json())




app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
