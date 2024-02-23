import express from "express";
import type { Express, Request, Response } from "express";

import taskRoutes from "./routes/task.js";

const port: number = 8000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Todo: Project Name");
})

app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

app.use('/task', taskRoutes);
