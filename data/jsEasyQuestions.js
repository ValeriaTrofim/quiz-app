const jsEasyQuestions = [
  {
    text: "What is JavaScript primarily used for?",
    options: [
      {
        text: "Database management",
        isCorrect: false,
      },
      {
        text: "Graphic design",
        isCorrect: false,
      },
      {
        text: "Web development, allowing interactive web pages",
        isCorrect: true,
      },
      {
        text: "Creating and managing operating systems and software tools",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following correctly describes ECMAScript?",
    options: [
      {
        text: "It is a specification that JavaScript conforms to",
        isCorrect: true,
      },
      {
        text: "It is a framework used to build web applications",
        isCorrect: false,
      },
      {
        text: "It is a programming language that runs independently of JavaScript",
        isCorrect: false,
      },
      {
        text: "It is a software tool for code debugging",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the 'let' keyword in JavaScript?",
    options: [
      {
        text: "To create an object",
        isCorrect: false,
      },
      {
        text: "To define a function",
        isCorrect: false,
      },
      {
        text: "To declare a constant variable that cannot be changed",
        isCorrect: false,
      },
      {
        text: "To declare a variable that can be reassigned later",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does a function in JavaScript do?",
    options: [
      {
        text: "A set of statements that performs a task or calculates a value",
        isCorrect: true,
      },
      {
        text: "A collection of HTML elements",
        isCorrect: false,
      },
      {
        text: "A variable that stores a sequence of characters or text data",
        isCorrect: false,
      },
      {
        text: "A method for formatting CSS styles",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following is NOT a primitive type in JavaScript?",
    options: [
      {
        text: "Object",
        isCorrect: true,
      },
      {
        text: "Boolean",
        isCorrect: false,
      },
      {
        text: "String",
        isCorrect: false,
      },
      {
        text: "Number",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What type of error will occur if you try to reassign a constant variable?",
    options: [
      {
        text: "SyntaxError",
        isCorrect: false,
      },
      {
        text: "RangeError",
        isCorrect: false,
      },
      {
        text: "TypeError",
        isCorrect: true,
      },
      {
        text: "ReferenceError",
        isCorrect: false,
      },
    ],
  },
  {
    text: "In which environment can JavaScript code be executed?",
    options: [
      {
        text: "Browsers and Node.js",
        isCorrect: true,
      },
      {
        text: "Only in browsers",
        isCorrect: false,
      },
      {
        text: "Only in mobile applications",
        isCorrect: false,
      },
      {
        text: "Only in server environments",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What does the 'typeof' operator return in JavaScript?",
    options: [
      {
        text: "The status of a function call",
        isCorrect: false,
      },
      {
        text: "The length of a string variable",
        isCorrect: false,
      },
      {
        text: "The data type of a variable or expression",
        isCorrect: true,
      },
      {
        text: "The value of the variable without its type",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the result of attempting to access an array element with an out-of-bounds index?",
    options: [
      {
        text: "It returns 'null'",
        isCorrect: false,
      },
      {
        text: "It throws a runtime error",
        isCorrect: false,
      },
      {
        text: "It returns the last element of the array",
        isCorrect: false,
      },
      {
        text: "It returns 'undefined'",
        isCorrect: true,
      },
    ],
  },
  {
    text: "In JavaScript, what does 'this' refer to inside a function?",
    options: [
      {
        text: "A reference to the previous function in the call stack",
        isCorrect: false,
      },
      {
        text: "The global window object only",
        isCorrect: false,
      },
      {
        text: "The object that is calling the function",
        isCorrect: true,
      },
      {
        text: "The function itself",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Why is the 'const' keyword used when declaring a variable?",
    options: [
      {
        text: "To create a variable that cannot be reassigned a new value",
        isCorrect: true,
      },
      {
        text: "To declare a variable that can only be used within a function",
        isCorrect: false,
      },
      {
        text: "To create a constant that can be modified later",
        isCorrect: false,
      },
      {
        text: "To define a variable that is global in scope",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What does the term 'dynamic typing' mean in JavaScript?",
    options: [
      {
        text: "The variable type is fixed and cannot be changed",
        isCorrect: false,
      },
      {
        text: "Variables can only hold string values",
        isCorrect: false,
      },
      {
        text: "The type of a variable can change at runtime",
        isCorrect: true,
      },
      {
        text: "The type of a variable must be declared before it is used",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the correct way to declare a constant variable in JavaScript?",
    options: [
      {
        text: "let variableName = value;",
        isCorrect: false,
      },
      {
        text: "constant variableName = value;",
        isCorrect: false,
      },
      {
        text: "var variableName = value;",
        isCorrect: false,
      },
      {
        text: "const variableName = value;",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Which of the following statements correctly describes the 'push()' method for arrays?",
    options: [
      {
        text: "It removes the first element from an array",
        isCorrect: false,
      },
      {
        text: "It adds a new element to the end of an array",
        isCorrect: true,
      },
      {
        text: "It checks if an element exists in the array",
        isCorrect: false,
      },
      {
        text: "It returns the length of the array",
        isCorrect: false,
      },
    ],
  },
];

module.exports = jsEasyQuestions;
