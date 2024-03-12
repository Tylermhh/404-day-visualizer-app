import { ITask } from "../types/types";

// const url: string = "https://404-taskcraft.azurewebsites.net/";
const url: string = "http://localhost:8000/task";

function convertDateStringToHyphen(date: string) {
  let newDate: string = "";
  let sections = date.split("/");
  newDate = newDate.concat(sections[2], "-");
  for (let i = 0; i < sections.length - 1; i++) {
    newDate = newDate.concat(sections[i], "-");
  }
  newDate = newDate.substring(0, newDate.length - 1);
  return newDate;
}

// hook to get Tasks
export function getTasks(userID: string, start: Date, end: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const startStr = convertDateStringToHyphen(formatter.format(start));
  const endStr = convertDateStringToHyphen(formatter.format(end));
  const promise = fetch(
    `${url}/${userID}/?startDate=${startStr}&endDate=${endStr}`,
  );
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
