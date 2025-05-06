import axios from "@/lib/axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post("/api/login", {
      email,
      password,
    });

    console.log("Logged in:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
