const jsHardQuestions = [
  {
    text: "What will the following code output: `console.log([1, 2, 3] == [1, 2, 3]);`?",
    options: [
      {
        text: "undefined, because the comparison is invalid.",
        isCorrect: false,
      },
      {
        text: "TypeError, because you cannot compare arrays in JavaScript",
        isCorrect: false,
      },
      {
        text: "false, because arrays are reference types and compared by reference",
        isCorrect: true,
      },
      {
        text: "true, because the values in the arrays are the same",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which statement is true regarding the use of arrow functions in JavaScript?",
    options: [
      {
        text: "Arrow functions do not have their own 'this' context",
        isCorrect: true,
      },
      {
        text: "Arrow functions must always be named explicitly",
        isCorrect: false,
      },
      {
        text: "Arrow functions cannot be used as callback functions",
        isCorrect: false,
      },
      {
        text: "Arrow functions require the use of the 'new' keyword to be instantiated",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following correctly describes JavaScript's event loop?",
    options: [
      {
        text: "It allows asynchronous operations to be executed in a non-blocking manner",
        isCorrect: true,
      },
      {
        text: "It blocks execution until all tasks in the queue are completed",
        isCorrect: false,
      },
      {
        text: "It executes all tasks in the queue simultaneously, leading to faster performance",
        isCorrect: false,
      },
      {
        text: "It resets the state of the program after every event is processed",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following best describes the behavior of a promise in JavaScript?",
    options: [
      {
        text: "A promise can only be resolved after being fulfilled, and cannot transition states",
        isCorrect: false,
      },
      {
        text: "A promise is a data structure that can hold various types of values, including strings, objects, and functions",
        isCorrect: false,
      },
      {
        text: "A promise represents a value that may be resolved in the future, allowing for asynchronous operations",
        isCorrect: true,
      },
      {
        text: "A promise is a synchronous function that runs immediately and returns its result",
        isCorrect: false,
      },
    ],
  },
  {
    text: "In the context of promises, what does it mean if a promise is pending",
    options: [
      {
        text: "It indicates that the promise has not yet been fulfilled or rejected, and is still in the process of being resolved",
        isCorrect: true,
      },
      {
        text: "It means that the promise has been successfully resolved and is waiting for further actions",
        isCorrect: false,
      },
      {
        text: "It indicates that the promise has been rejected and cannot be fulfilled, meaning it will not provide a value in the future",
        isCorrect: false,
      },
      {
        text: "It signifies that the promise's value is immediately available for use",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following statements about closures in JavaScript is true?",
    options: [
      {
        text: "Closures are not supported in JavaScript",
        isCorrect: false,
      },
      {
        text: "A closure is a function that remembers its outer variables and can access them",
        isCorrect: true,
      },
      {
        text: "Closures can only access global variables",
        isCorrect: false,
      },
      {
        text: "A closure is a special function that cannot be invoked like a regular function or object",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following correctly describes a JavaScript promise?",
    options: [
      {
        text: "It is a data structure that securely holds information and can be accessed later",
        isCorrect: false,
      },
      {
        text: "It is a function that executes synchronously",
        isCorrect: false,
      },
      {
        text: "It is an object that can only contain strings",
        isCorrect: false,
      },
      {
        text: "It represents a value that may be available now, or in the future, or never",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does the 'splice()' method do when called on an array?",
    options: [
      {
        text: "It creates a new array containing a copy of the original array",
        isCorrect: false,
      },
      {
        text: "It checks if the array contains a specific value",
        isCorrect: false,
      },
      {
        text: "It sorts the elements of the array in ascending order",
        isCorrect: false,
      },
      {
        text: "It adds or removes elements from an array at a specified index",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What is the output of the following code: `console.log(1 == '1');`?",
    options: [
      {
        text: "TypeError",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "false",
        isCorrect: false,
      },
      {
        text: "true",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What is the purpose of the 'find()' method in JavaScript?",
    options: [
      {
        text: "To determine if an array includes a specific value and return true or false accordingly",
        isCorrect: false,
      },
      {
        text: "To return the first element that satisfies the provided testing function",
        isCorrect: true,
      },
      {
        text: "To create a new array containing all elements",
        isCorrect: false,
      },
      {
        text: "To sort the elements of the array in descending order",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What does the 'join()' method do when called on an array?",
    options: [
      {
        text: "It removes all duplicate elements from the array",
        isCorrect: false,
      },
      {
        text: "It separates the elements of the array into individual arrays",
        isCorrect: false,
      },
      {
        text: "It joins all elements of an array into a single string",
        isCorrect: true,
      },
      {
        text: "It creates a new array with the same elements in a different order",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following describes the 'filter()' method?",
    options: [
      {
        text: "It modifies the original array by removing elements",
        isCorrect: false,
      },
      {
        text: "It determines whether a specified element is present in the array, returning true if found, otherwise false",
        isCorrect: false,
      },
      {
        text: "It creates a new array with all elements that pass the test implemented by the provided function",
        isCorrect: true,
      },
      {
        text: "It returns the last element of the array",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the 'reduce()' method in JavaScript?",
    options: [
      {
        text: "To concatenate two arrays into one",
        isCorrect: false,
      },
      {
        text: "To create a new array containing only the elements that satisfy a specified condition",
        isCorrect: false,
      },
      {
        text: "To sort an array in ascending order",
        isCorrect: false,
      },
      {
        text: "To execute a reducer function on each element and return a single output value",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does the 'map()' method return when called on an array?",
    options: [
      {
        text: "The same array without any modifications",
        isCorrect: false,
      },
      {
        text: "An object containing the original array elements",
        isCorrect: false,
      },
      {
        text: "A new array with the results of calling a provided function on every element",
        isCorrect: true,
      },
      {
        text: "A string that represents the original array's elements in a comma-separated format",
        isCorrect: false,
      },
    ],
  },
];

module.exports = jsHardQuestions;
