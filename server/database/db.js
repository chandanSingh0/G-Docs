import mongoose from "mongoose";

const Connection = async (username = "user", password = "chandan") => {
  const URL = `mongodb://${username}:${password}@ac-fxhyn22-shard-00-00.vlwe8gm.mongodb.net:27017,ac-fxhyn22-shard-00-01.vlwe8gm.mongodb.net:27017,ac-fxhyn22-shard-00-02.vlwe8gm.mongodb.net:27017/?ssl=true&replicaSet=atlas-k1sss7-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(" Successfully connected with the database");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
