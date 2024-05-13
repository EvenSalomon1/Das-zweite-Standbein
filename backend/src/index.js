import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDatabase } from "./models/indexConnect.js";

// * App
const app = express();

// * Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //json body parser

// * Test if server is running
app.get("/", (req, res) => {
  res.json("Server running");
});

// * Server Listener
try {
  await connectToDatabase();
  const PORT = 3010;
  app.listen(PORT, () => console.log("Server ready at port", PORT));
} catch (err) {
  console.log(err);
  process.exit(1); // 1 exit status
}
