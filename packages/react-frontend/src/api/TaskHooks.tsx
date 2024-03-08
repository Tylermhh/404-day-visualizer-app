import dotenv from "dotenv";
import { ITask } from "../types/types";

dotenv.config();
const url: string = process.env.BACKEND_URL as string;

// hook to get Tasks
export function getTasks(userID: string, start: Date, end: Date) {
  const promise = fetch(`${url}/${userID}/?startDate=${start}&endDate=${end}`);
  return promise;
}

// hook to post Task
export function postTask(task: ITask) {
  const promise = fetch(`${url}/task/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: task.name,
      userID: task.userID,
      description: task.description,
      category: task.category,
      createdAt: task.createdAt,
      datesUpdated: task.datesUpdated,
    }),
  });

  return promise;
}

// hook to update Task list
export function updateTask(task: ITask) {
  const promise = fetch(`${url}/${task._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return promise;
}
