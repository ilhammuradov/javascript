function promisify(func) {
    return function (...params) {
      return new Promise((resolve, reject) => {
        func(...params, (err, val) => {
          if (err) {
            reject(err);
          } else {
            resolve(val);
          }
        });
      });
    };
  }