import express from "express";
import "./db/server.js";
import categoryRouter from "./routes/categoryRouter.js";
import ordersRouter from "./routes/ordersRouter.js";
import productsRouter from "./routes/productsRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(express.json());
app.use("/category", categoryRouter);
app.use("/products", productsRouter);
app.use("/order", ordersRouter);

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
