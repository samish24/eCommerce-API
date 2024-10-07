import express from "express";
import "./db/server.js";
import categoryRouter from "./routes/categoryRouter.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/category", categoryRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
