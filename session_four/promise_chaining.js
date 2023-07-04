/*
Promise chaining, also known as "thenable chaining," is a technique used in Node.js to sequence multiple asynchronous operations using Promises. It allows you to perform a series of asynchronous tasks one after another in a more structured and readable manner.
*/


// Example asynchronous functions returning Promises
function asyncOperation1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Result 1");
      }, 1000);
    });
  }
  
  function asyncOperation2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Result 2");
      }, 2000);
    });
  }
  
  function asyncOperation3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Result 3");
      }, 1500);
    });
  }
  
  // Promise chaining
  asyncOperation1()
    .then((result1) => {
      console.log("Result 1:", result1);
      return asyncOperation2(); // Return a new Promise
    })
    .then((result2) => {
      console.log("Result 2:", result2);
      return asyncOperation3(); // Return a new Promise
    })
    .then((result3) => {
      console.log("Result 3:", result3);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
/*
o/p
Result 1: Result 1
Result 2: Result 2
Result 3: Result 3
*/