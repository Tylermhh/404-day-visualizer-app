import express from "express"
import { registerUser, loginUser } from "../Model/auth.js"

const router = express.Router()

router.post("/auth/registerUser", registerUser)
router.post("/auth/loginUser", loginUser)

export default router
