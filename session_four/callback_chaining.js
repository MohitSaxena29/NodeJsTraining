/*
Callback chaining, also known as "callback hell," is a common issue in Node.js when dealing with multiple asynchronous operations that depend on each other. It arises due to the nested structure of callbacks, which can make the code difficult to read and maintain. However, there are techniques to mitigate callback chaining and improve code readability.
*/

// Example asynchronous functions
function asyncOperation1(callback) {
    setTimeout(() => {
      console.log("Async Operation 1 completed");
      callback(null, "Result 1");
    }, 1000);
  }
  
  function asyncOperation2(callback) {
    setTimeout(() => {
      console.log("Async Operation 2 completed");
      callback(null, "Result 2");
    }, 2000);
  }
  
  function asyncOperation3(callback) {
    setTimeout(() => {
      console.log("Async Operation 3 completed");
      callback(null, "Result 3");
    }, 1500);
  }
  
  // Named functions for callback chaining
  function handleResult1(error, result1) {
    if (error) {
      console.error("Error in Operation 1:", error);
    } else {
      asyncOperation2(handleResult2);
    }
  }
  
  function handleResult2(error, result2) {
    if (error) {
      console.error("Error in Operation 2:", error);
    } else {
      asyncOperation3(handleResult3);
    }
  }
  
  function handleResult3(error, result3) {
    if (error) {
      console.error("Error in Operation 3:", error);
    } else {
      console.log("Final result:", result3);
    }
  }
  
  // Start the callback chain
  asyncOperation1(handleResult1);
  


  // o/p

  /*
  Async Operation 1 completed
Async Operation 2 completed
Async Operation 3 completed
Final result: Result 3
*/