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
  const id: string = req.params["userId"];
  const startDate: Date = new Date(req.query["startDate"] as string);
  const endDate: Date = new Date(req.query["endDate"] as string);
  let category: string | undefined = undefined;

  if (req.query["category"]) {
    category = req.query["category"] as string;
  }

  const doneResult = await getTasks(id, startDate, endDate, category, true);
  const notDoneResult = await getTasks(id, startDate, endDate, category, false);

  if (doneResult === undefined || doneResult === null 
      || notDoneResult === undefined || notDoneResult === null) {
    res.status(404).send("Resource not found.");
  } else {
    res.send({ 
      done: doneResult,
      notDone: notDoneResult
    });
  }
});

router.put("/:taskId", async (req: Request, res: Response) => {
  const taskId: string = req.params["taskId"];
  const updatedTask = req.body;

  const mongoUpdated = await updateTaskById(taskId, updatedTask);
  if (!mongoUpdated) {
    return res.status(400).send();
  }
  res.status(200).send(mongoUpdated);
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
