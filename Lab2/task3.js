const sleep = (delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, delay);
    });
  };
  const greeting = async () => {
    console.log("hello");
    await sleep(1000);
    console.log("bye");
  };
  greeting();