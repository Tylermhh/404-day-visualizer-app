import express from "express"
import taskRoutes from "./routes/task-routes.js"
import userRoutes from "./routes/user-routes.js"
import authRoutes from "./routes/auth-routes.js"
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

app.use("/task", taskRoutes)
app.use("/users", userRoutes)
app.use("/auth", authRoutes)