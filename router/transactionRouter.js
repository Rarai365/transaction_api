import express from "express";
import { findUserById } from "../model/userModel.js";
import {
  buildErrorResponse,
  buildSuccessResponse,
} from "../utility/responseHelper.js";
import {
  createTransaction,
  getUserTransactions,
} from "../model/transactionModel.js";

const transactionRouter = express.Router();

// GET | Get all transactions for a user
transactionRouter.get("/", async (req, res) => {
  try {
    // check if the user is authorized
    const { authorization } = req.headers;
    console.log("Authorization Header:", authorization);

    const user = await findUserById(authorization);
    console.log("User Found:", user);

    if (!user || !user._id) {
      buildErrorResponse(res, "You are not authorized user!!");
      return;
    }

    const transactions = await getUserTransactions(user._id);

    transactions.length
      ? buildSuccessResponse(res, transactions)
      : buildErrorResponse(res, "No transactions found");
  } catch (error) {
    buildErrorResponse(res, " lol No transactions found");
  }
});

// POST | Create a transaction
transactionRouter.post("/", async (req, res) => {
  try {
    const transaction = await createTransaction(req.body);

    transaction?._id
      ? buildSuccessResponse(
          res,
          transaction,
          "Created Transaction Successfully"
        )
      : buildErrorResponse(res, "Cannot create transaction!");
  } catch (error) {
    buildErrorResponse(res, "Cannot create transaction!");
  }
});
export default transactionRouter;
