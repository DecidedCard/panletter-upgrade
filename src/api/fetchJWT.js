import api from "api/api";

export const signup = async (data) => {
  try {
    const response = await api.post(`/register`, data);
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const checkUser = async (accessToken) => {
  try {
    const response = await api.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
