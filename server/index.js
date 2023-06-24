import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config(); //To pull our env_variables from our .env_file

const app = express();

//Middlewares
app.use(cors()); //To access api/storage outside the server(domain)
app.use(express.json({ limit: "50mb" })); //To accept post request in json format(upto 50mb)

app.use("/api/v1/post", postRoutes); //To access routes and providing prefix for routes as "api/v1/..."
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from AI!");
});

//Async function to initialise the server
const startServer = async () => {
  try {
    connectDB("mongodb://127.0.0.1:27017/"); //MongoDB url is stored for deployment in process.env.MONGODB_URL
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
