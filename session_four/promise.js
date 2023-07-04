/*
Promises are a powerful concept in JavaScript and can be used effectively in Node.js for managing asynchronous operations. Promises provide a more elegant and structured way to handle asynchronous code compared to traditional callback-based approaches. They allow you to write code that is easier to read, understand, and maintain.

In Node.js, the Promise class is available out of the box and can be used for creating and handling promises. A promise represents the eventual completion (or failure) of an asynchronous operation and can be in one of three states: pending, fulfilled, or rejected.
*/

// Example asynchronous function
function asyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve("Operation succeeded");
        } else {
          reject(new Error("Operation failed"));
        }
      }, 1000);
    });
  }
  
  // Using the promise
  asyncOperation()
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  

    // o/p Result: Operation succeeded