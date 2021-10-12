function loadLocalStorage(key, defaultValue) {
  const data = localStorage.getItem(key);

  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
}

export default loadLocalStorage;
