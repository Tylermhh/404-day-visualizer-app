import express from "express";
import {
  addUser,
  getUsers,
  findUserById,
  updateUserById,
} from "../Model/user-services.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const savedUser = await addUser(user);

    if (savedUser) {
      res.status(201).send(savedUser);
    } else {
      res.status(500).send("Error saving the user.");
    }
  } catch (error) {
    console.error(error);
    res.status(400).send("Error processing request.");
  }
});

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    const users = await getUsers(name);
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching users.");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params["id"];

  try {
    const user = await findUserById(id);

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching user with id.");
  }
});

router.put("/:userId", async (req, res) => {
  const userId = req.params["userId"];
  const updatedUser = req.body;

  const mongoUpdated = await updateUserById(userId, updatedUser);
  if (!mongoUpdated) {
    return res.status(400).send();
  }
  res.status(200).send(mongoUpdated);
});

export default router;
