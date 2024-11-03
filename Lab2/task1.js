function setCancellableInterval(callback, delay, ...params) {
    const cancelFunction = (interval_id) => clearInterval(interval_id);
    const interval = setInterval(() => callback(...params), delay);
    return () => cancelFunction(interval);
  }
  var i = 0;
  const cancel = setCancellableInterval(
    (a, b) => {
      console.log(a);
      console.log(b);
    },
    1000,
    3,
    5
  );
  setTimeout(cancel, 5000);