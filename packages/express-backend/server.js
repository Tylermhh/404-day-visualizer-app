import express from "express";
import taskRoutes from "./routes/task-routes.js";
import userRoutes from "./routes/user-routes.js";
import authRoutes from "./routes/auth-routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: '../../.env' });


const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Todo: Project Name");
});

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || port, () => {
  if (process.env.PORT) {
    console.log("REST API is listening.");
  } else {
    console.log(`Example app listening at http://localhost:${port}`);
  }
});

app.use("/task", taskRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
