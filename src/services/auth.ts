import api from "@/lib/axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/api/login", { email, password });
    const token = response.data.token;

    if (!token) throw new Error("No token received");

    return response.data;
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

export const storeToken = (token: string) => {
  document.cookie = `token=${token}; path=/;`;
}

export const getToken = () => {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];
}
