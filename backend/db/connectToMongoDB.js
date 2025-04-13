import mongoose from "mongoose";

const connectToMongoDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connection on mongo db ", error.message);
  }
};

export default connectToMongoDB;
