import { IUser } from "../types/types";

const url: string = "https://404-taskcraft.azurewebsites.net/users";

// get user object by ID
export function getUser(userID: string) {
  const promise = fetch(`${url}/${userID}/`);
  return promise;
}

// update user object by ID
export function updateUser(user: IUser) {
  const promise = fetch(`${url}/${user._id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return promise;
}