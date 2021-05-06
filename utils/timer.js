export function debounce(func, duration) {
  let timeoutID = null;
  return (...args) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func(...args);
    }, duration);
  };
}
