/*
  The purpose of using callback abstraction in this code is to separate the asynchronous operation from the main logic. By encapsulating the asynchronous task within doAsyncTask, the code becomes more modular and easier to understand. The callback function passed to doAsyncTask handles the result or error of the operation once it completes.
*/

// CALL BACK ABSTRACTION
function doAsyncTask(callback) {
    setTimeout(() => {
      const result = "Task completed";
      callback(null, result); // Pass the result to the callback
    }, 1000);
  }
  
  // Usage of the function with callback abstraction
  function main() {
    console.log("Starting the task...");
    doAsyncTask((error, result) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Result:", result);
      }
      console.log("Task finished.");
    });
  }
  
  main();
  


  /*
  o/p
  Starting the task...
Result: Task completed
Task finished.
*/