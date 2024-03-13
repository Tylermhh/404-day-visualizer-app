import { ITask } from "../types/types";

// const url: string = "https://404-taskcraft.azurewebsites.net/";
const url: string = "http://localhost:8000";

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
  let startStr = convertDateStringToHyphen(formatter.format(start));
  let endStr = convertDateStringToHyphen(formatter.format(end));
  // if (startStr === endStr) {
  //   let nextDayNum: number = Number(endStr[endStr.length - 2]) + 1;
  //   let nextDayStr = nextDayNum.toString();
  //   if (nextDayNum < 10) {
  //     nextDayStr = "".concat(nextDayNum.toString(), "0");
  //   }
  //   endStr = "".concat(endStr.substring(0, endStr.length - 2), nextDayStr);
  //   console.log(endStr);
  // }
  console.log(endStr);
  const promise = fetch(
    `${url}/task/${userID}/?startDate=${startStr}&endDate=${endStr}`,
  );
  return promise;
}

export function getAllTasks(userID: string) {
  console.log(`${url}/${userID}`);
  const promise = fetch(`${url}/${userID}`);
  return promise;
}

// hook to post Task
export function postTask(task: ITask) {
  const promise = fetch(`${url}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // deparameterize to ignore _id
      name: task.name,
      userID: task.userID,
      description: task.description,
      category: task.category,
      createdAt: task.createdAt,
      datesUpdated: task.datesUpdated,
      done: false,
      deadline: task.deadline,
      priority: task.priority,
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
