// Create a Promise that resolves after 10 seconds


const delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("✅ Promise resolved after 10 seconds");
  }, 10000); // 10,000 ms = 10 seconds
});

// Consume the Promise
delayPromise.then((message) => {
  console.log(message);
});