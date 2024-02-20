import letters from "api/letters";

export const checkLetterList = async () => {
  try {
    const response = await letters.get("/letters");
    return response;
  } catch (error) {
    console.error(error);
    Promise.reject(error);
  }
};

export const addLetter = async (letter) => {
  try {
    const response = await letters.post("/letters", letter);
    return response;
  } catch (error) {
    console.error(error);
    Promise.reject(error);
  }
};

export const updateLetter = async (letter) => {
  try {
    const response = await letters.patch(`/letters/${letter.id}`, letter);
    return response;
  } catch (error) {
    console.error(error);
    Promise.reject(error);
  }
};

export const deleteLetters = async (id) => {
  try {
    const response = await letters.delete(`/letters/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    Promise.reject(error);
  }
};
