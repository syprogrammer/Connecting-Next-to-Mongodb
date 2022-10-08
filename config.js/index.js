import mongoose from "mongoose";
const ConnectMongoDB = (handler) => (req, res) => {
  if (mongoose.connections[0].readyState) {
    console.log("mongoose ready state started");
    return handler(req, res);
  }
  mongoose.connect(process.env.DATABASE_URL);

  return handler(req, res);
};
export default ConnectMongoDB;
