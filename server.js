//create expres app
import express from "express";
import { connectToMongoDb } from "./config/dbConfig.js";
import cors from "cors";
import userRouter from "./router/userRouter.js";
import transactionRouter from "./router/transactionRouter.js";

const app = express();
const PORT = process.env.PORT || 8000;

//middleware to parse request
app.use(express.json());
app.use(cors());

// connect with db
connectToMongoDb();

//create user route

//create user /create endpoint

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transactions", transactionRouter);

//run the server
app.listen(PORT, (error) => {
  error
    ? console.log("error", error)
    : console.log("your server is running at http://localhost:" + PORT);
});
