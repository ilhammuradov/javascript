function setCancellableTimeout(callback, delay, ...params) {
    const cancelFunction = (timeout_id) => clearTimeout(timeout_id);
    const timeout = setTimeout(() => callback(...params), delay);
    return () => cancelFunction(timeout);
  }
  let i = 0;
  const cancel = setCancellableTimeout(
    (a) => {
      i += 1;
      console.log(a);
    },
    2000,
    "param"
  );
  setTimeout(() => {
    cancel();
    console.log(i);
  }, 4100);