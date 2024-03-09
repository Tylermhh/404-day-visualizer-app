import express from 'express';
import { addUser, getUsers, findUserById } from "../Model/user-services.js"

const router = express.Router();
const app = express();

router.post("/user", async (req, res) => {
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
  
  router.get("/user/:id", async (req, res) => {
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

  export default router;