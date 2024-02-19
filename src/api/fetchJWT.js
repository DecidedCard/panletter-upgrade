import api from "api/api";

export const signup = async (data) => {
  try {
    const response = await api.post(`/register`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response;
  } catch (error) {
    return error;
  }
};

export const checkUser = async (accessToken) => {
  const response = await api.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response);
  return response;
};
