import express from "express"
import {
  createTask,
  getTasks,
  deleteTaskById,
  findTaskById
} from "./Model/task-services.js"
import { addUser, getUsers, findUserById } from "./Model/user-services.js"
import { registerUser, loginUser } from "./Model/auth.js";
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const port = 8000
const app = express()

app.get("/", (req, res) => {
  res.send("Todo: Project Name")
})

app.use(express.json())

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// })

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.")
})

app.post("/task", async (req, res) => {
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

app.get("/task/:userId", async (req, res) => {
  const userId = req.params["userId"]
  try {
    const result = await getTasks(userId, undefined)
    res.send({ tasks: result })
  } catch (error) {
    console.log(error)
    res.status(500).send("An error ocurred in the server.")
  }
})

app.get("/task/:id/:date", async (req, res) => {
  const id = req.params["userId"]
  const date = new Date(req.params["date"])
  const result = await getTasks(id, date)
  if (result === undefined || result === null)
    res.status(404).send("Resource not found.")
  else {
    res.send({ tasks: result })
  }
})

app.delete("/task/:id", async (req, res) => {
  const id = req.params["id"]
  const task = await findTaskById(id)
  if (!task) {
    return res.status(404).send()
  }
  await deleteTaskById(id)
  res.status(204).send()
})

app.post("/user", async (req, res) => {
  try {
    const user = req.body
    const savedUser = await addUser(user)

    if (savedUser) {
      res.status(201).send(savedUser)
    } else {
      res.status(500).send("Error saving the user.")
    }
  } catch (error) {
    console.error(error)
    res.status(400).send("Error processing request.")
  }
})

app.get("/users", async (req, res) => {
  const { name, job } = req.query

  try {
    const users = await getUsers(name, job)
    res.status(200).send(users)
  } catch (error) {
    console.error(error)
    res.status(500).send("Error fetching users.")
  }
})

app.get("/user/:id", async (req, res) => {
  const id = req.params["id"]

  try {
    const user = await findUserById(id)

    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send("User not found.")
    }
  } catch (error) {
    console.error(error)
    res.status(500).send("Error fetching user.")
  }
})

app.post("/users/register", registerUser)
app.post("/users/login", loginUser)
