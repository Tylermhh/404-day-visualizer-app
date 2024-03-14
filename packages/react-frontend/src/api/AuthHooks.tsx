const url: string = "https://404-taskcraft.azurewebsites.net/auth";

// Function to log in a user
export const loginUser = async (username: string, pwd: string): Promise<{ok: boolean; data?: any; error?: string}> => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, pwd }), // Adjust if your backend expects different keys
    });

    // Attempt to read the response body as JSON if the content type is application/json
    let data;
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      // If the response is not JSON, read it as text
      const message = await response.text();
      throw new Error(message || `HTTP error! status: ${response.status}`);
    }

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return { ok: true, data };
  } catch (error) {
    console.error("Login failed", error);
    // Return an error object with a message for easier handling by the caller
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

// Function to register a new user
export async function registerUser(username: string, pwd: string) {
  try {
    const response = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, pwd }), // Adjust if your backend expects different keys
    });

    // Check response content type
    let data;
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      // If the response is not JSON, read it as text
      const message = await response.text();
      throw new Error(message || `HTTP error! status: ${response.status}`);
    }

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return { ok: true, data }; // Indicate success and include server response data
  } catch (error) {
    console.error("Registration failed", error);
    // Return an error object with a message for easier handling by the caller
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

// Function to fetch the current user's profile
export function fetchUserProfile(token: string) {
  const promise = fetch(`${url}/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return promise;
}
