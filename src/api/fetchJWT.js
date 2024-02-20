import jwt from "api/jwt";

export const signup = async (data) => {
  try {
    const response = await jwt.post(`/register`, data);
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const login = async (data) => {
  try {
    const response = await jwt.post("/login", data);
    return response;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const checkUser = async (accessToken) => {
  try {
    const response = await jwt.get("/user", {
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
