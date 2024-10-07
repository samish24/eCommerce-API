import express from "express";
import "./db/server.js";
import userRouter from "./routes/UserRouter.js";

import categoryRouter from "./routes/categoryRouter.js";
import ordersRouter from "./routes/ordersRouter.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/User", userRouter);

app.use("/category", categoryRouter);
app.use("/order", ordersRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
