import mongoose from "mongoose";

const DATABASE_NAME = "Transaction_history_db";

const CONNECTION_URI = "mongodb://localhost:27017/" + DATABASE_NAME;

export const connectToMongoDb = () => {
  try {
    const connect = mongoose.connect(CONNECTION_URI);

    if (connect) {
      console.log("Database connected at", CONNECTION_URI);
    }
  } catch (error) {
    console.log("Db connection Error", Error);
  }
};
