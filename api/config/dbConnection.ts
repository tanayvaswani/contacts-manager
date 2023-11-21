import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL!);
    console.log(`Connection to the database is established!`);
    console.log(` - Check Host: ${connect.connection.host}`);
    console.log(` - Check Name: ${connect.connection.name}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

