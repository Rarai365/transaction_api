//create expres app
import express from "express";
import { connectToMongoDb } from "./config/dbConfig.js";
const app = express();
const PORT = 8000;

//middleware to parse request
app.use(express.json());

// connect with db
connectToMongoDb();

//create user route

//create user /create endpoint
import userRouter from "./router/userRouter.js";
app.use("/api/v1/users", userRouter);

//run the server
app.listen(PORT, (error) => {
  error
    ? console.log("error", error)
    : console.log("your server is running at http://localhost:" + PORT);
});
