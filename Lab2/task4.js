let i = 0;
function increment() {
  i++;
}
const debounce = (callback, delay) => {
  let timeout_id;
  return function () {
    if (timeout_id) {
      clearTimeout(timeout_id);
    }
    timeout_id = setTimeout(callback, delay);
  };
};
const debouncedIncrement = debounce(increment, 100);
setTimeout(() => {
  debouncedIncrement();
  console.log(i);
}, 0);
setTimeout(() => {
  debouncedIncrement();
  console.log(i);
}, 50);
setTimeout(() => {
  debouncedIncrement();
  console.log(i);
}, 160);