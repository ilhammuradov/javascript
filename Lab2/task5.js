let i = 0;
function increment() {
  i++;
}
const throttle = (callback, delay) => {
  let timeout_id;
  return function () {
    if (!timeout_id) {
      callback();
      timeout_id = setTimeout(() => {
        timeout_id = null;
      }, delay);
    } else {
      return;
    }
  };
};
const throttledIncrement = throttle(increment, 100);
setTimeout(() => {
  throttledIncrement();
  console.log(i);
}, 0);
setTimeout(() => {
  throttledIncrement();
  console.log(i);
}, 50);
setTimeout(() => {
  throttledIncrement();
  console.log(i);
}, 200);