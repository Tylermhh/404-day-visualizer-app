import * as express from "express";
import type { Express, Request, Response } from "express";
import { createTask, getTasks, updateTaskById, deleteTaskById, findTaskById } from "./Model/task-services";

const app: Express = express();
const port: number = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

app.post("/task", async (req: Request, res: Response) => {
  const task = req.body;
  const savedTask = await createTask(task);
  if (savedTask) {
    res.status(201).send(savedTask);
  } else {
    res.status(500).send();
  }
});

app.get("/task/:userId", async (req: Request, res: Response) => {
  const userId: string = req.params["userId"];
  try {
    const result = await getTasks(userId, undefined);
    res.send({ todo_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

app.get("/task/:id/:date", async (req, res) => {
  const id: string = req.params["userId"];
  const date: Date = new Date(req.params["date"]);
  const result = await getTasks(id, date);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ todo: result });
  }
});

app.delete("/task/:id", async (req: Request, res: Response) => {
  const id = req.params["id"];
  const task = await findTaskById(id);
  if (!task) {
    return res.status(404).send();
  }
  await deleteTaskById(id);
  res.status(204).send();
});
