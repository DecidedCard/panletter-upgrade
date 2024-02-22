import { useState } from "react";

const useInput = (check) => {
  // state
  const [value, setValue] = useState(check);

  // handler
  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
};

export default useInput;
