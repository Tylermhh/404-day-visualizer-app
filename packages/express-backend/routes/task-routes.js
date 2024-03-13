import express from "express"
import {
  createTask,
  getTasks,
  updateTaskById,
  deleteTaskById,
  findTaskById
} from "../Model/task-services.js"

const router = express.Router()

router.post("/", async (req, res) => {
  const task = req.body

  try {
    const savedTask = await createTask(task)

    if (savedTask) {
      res.status(201).send(savedTask)
    } else {
      res.status(500).send()
    }
  } catch (error) {
    console.log(error)
    res.status(400).send()
  }
})

router.get("/:userId", async (req, res) => {
  const id = req.params["userId"]

  const startDate = undefined
  const endDate = undefined
  let category = undefined

  if (req.query["startDate"] !== undefined) {
    startDate = new Date(req.query["startDate"])
  }
  if (req.query["endDate"] !== undefined) {
    endDate = new Date(req.query["endDate"])
  }
  if (req.query["category"]) {
    category = req.query["category"]
  }

  let doneResult, notDoneResult
  
  doneResult = await getTasks(id, startDate, endDate, category, true)
  notDoneResult = await getTasks(id, startDate, endDate, category, false)

  if (
    doneResult === undefined ||
    doneResult === null ||
    notDoneResult === undefined ||
    notDoneResult === null
  ) {
    res.status(404).send("Resource not found.")
  } else {
    res.send({
      done: doneResult,
      notDone: notDoneResult
    })
  }
})

router.put("/:taskId", async (req, res) => {
  const taskId = req.params["taskId"]
  const updatedTask = req.body

  const mongoUpdated = await updateTaskById(taskId, updatedTask)
  if (!mongoUpdated) {
    return res.status(400).send()
  }
  res.status(200).send(mongoUpdated)
})

router.delete("/:id", async (req, res) => {
  const id = req.params["id"]
  const task = await findTaskById(id)
  if (!task) {
    return res.status(404).send()
  }
  await deleteTaskById(id)
  res.status(204).send()
})

export default router
