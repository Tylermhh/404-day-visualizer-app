import * as express from "express";
import type { Express, Request, Response } from "express";
import { getTasks } from "./Model/task-services";

const app: Express = express();
const port: number = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

app.get("/task/:userId", async (req, res) => {
  const userId = req.query["userId"];
  try {
    const result = await getTasks(userId, undefined);
    res.send({ todo_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/users/:id/:date", async (req, res) => {
  const id = req.params["userId"];
  const date = req.params["date"];
  const result = await getTasks(id, date);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ todo: result });
  }
});
