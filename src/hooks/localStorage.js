import { useEffect } from "react";

function toLocalStorage(data, key) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);
}

export default toLocalStorage;
