import letters from "api/letters";

export const addLetter = async (letter) => {
  try {
    const response = await letters.post("/letters", letter);
    return response;
  } catch (error) {
    console.error(error);
    Promise.reject(error);
  }
};
