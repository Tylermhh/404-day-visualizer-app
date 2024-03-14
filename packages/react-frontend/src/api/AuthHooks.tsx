const url: string = "https://404-taskcraft.azurewebsites.net/auth";

// Function to log in a user
export async function loginUser(username: string, password: string) {
    try {
        const response = await fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }), // Ensure these keys match backend expectations
        });

        if (!response.ok) {
            // If the server response is not ok, throw an error with the status
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Assuming the backend sends back a JSON response
        return data; // Return the response data for further processing
    } catch (error) {
        console.error("Login failed", error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

// Function to register a new user
export function registerUser(username: string, password: string) {
  const promise = fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return promise;
}

// Function to fetch the current user's profile
export function fetchUserProfile(token: string) {
  const promise = fetch(`${url}/user`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  return promise;
}
