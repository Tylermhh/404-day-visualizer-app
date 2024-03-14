import express from "express";
import cors from 'cors'; // Change this line to use ES6 import
import taskRoutes from "./routes/task-routes.js";
import userRoutes from "./routes/user-routes.js";
import authRoutes from "./routes/auth-routes.js";
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const port = 8000;
const app = express();

// Enable All CORS Requests for development purposes
app.use(cors());

// For specific origin (e.g., your frontend in development)
// app.use(cors({ origin: 'http://localhost:3000' }));

app.get("/", (req, res) => {
  res.send("Todo: Project Name");
});

app.use(express.json());

// Define routes after cors middleware
app.use("/task", taskRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});
