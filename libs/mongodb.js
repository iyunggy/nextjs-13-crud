import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    await mongoose.connect('mongodb://khoirula964:E6ldeRghq7kckjZH@ac-9vajxyw-shard-00-00.qdazwxm.mongodb.net:27017,ac-9vajxyw-shard-00-01.qdazwxm.mongodb.net:27017,ac-9vajxyw-shard-00-02.qdazwxm.mongodb.net:27017/crud_db?ssl=true&replicaSet=atlas-1qnpxv-shard-0&authSource=admin&retryWrites=true&w=majority')
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error mongodb", error);
  }
};

export default connectMongoDB;
