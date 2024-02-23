import express from "express";
import type { Express, Request, Response, Router } from "express";
import { createTask, getTasks, updateTaskById, deleteTaskById, findTaskById } from "../Model/task-services.js";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const task = req.body;

  try {
    const savedTask = await createTask(task);

    if (savedTask) {
      res.status(201).send(savedTask);
    } else {
      res.status(500).send();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

router.get("/:userId", async (req: Request, res: Response) => {
  const userId: string = req.params["userId"];
  try {
    const result = await getTasks(userId, undefined);
    res.send({ tasks: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server.");
  }
});

router.get("/:id/:date", async (req: Request, res: Response) => {
  const id: string = req.params["userId"];
  const date: Date = new Date(req.params["date"]);
  const result = await getTasks(id, date);
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.");
  else {
    res.send({ tasks: result });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params["id"];
  const task = await findTaskById(id);
  if (!task) {
    return res.status(404).send();
  }
  await deleteTaskById(id);
  res.status(204).send();
});

export default router;
