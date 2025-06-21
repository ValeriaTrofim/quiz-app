const tsEasyQuestions = [
  {
    text: "Which of the following is a feature of TypeScript?",
    options: [
      {
        text: "Inline CSS styling",
        isCorrect: false,
      },
      {
        text: "Static typing",
        isCorrect: true,
      },
      {
        text: "Built-in graphics rendering",
        isCorrect: false,
      },
      {
        text: "Automatic memory management",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the `tsconfig.json` file in a TypeScript project?",
    options: [
      {
        text: "To store all the TypeScript code",
        isCorrect: false,
      },
      {
        text: "To define the HTML structure of the application",
        isCorrect: false,
      },
      {
        text: "To configure the TypeScript compiler settings",
        isCorrect: true,
      },
      {
        text: "To list all the available libraries for JavaScript",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What keyword do you use in TypeScript to declare a variable with a specific type?",
    options: [
      {
        text: "The colon (:) followed by the type name",
        isCorrect: true,
      },
      {
        text: "The question mark (?) before the variable name",
        isCorrect: false,
      },
      {
        text: "The dollar sign ($) before the variable name",
        isCorrect: false,
      },
      {
        text: "The equal sign (=) followed by the type name",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is TypeScript primarily designed to improve compared to JavaScript?",
    options: [
      {
        text: "The speed of the code execution",
        isCorrect: false,
      },
      {
        text: "Code quality and error detection",
        isCorrect: true,
      },
      {
        text: "The visual appearance of the code",
        isCorrect: false,
      },

      {
        text: "The amount of code written",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What should TypeScript code be converted to in order to run in a browser?",
    options: [
      {
        text: "JSON",
        isCorrect: false,
      },
      {
        text: "HTML",
        isCorrect: false,
      },
      {
        text: "JavaScript",
        isCorrect: true,
      },
      {
        text: "XML",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of defining object shapes in TypeScript using type annotations?",
    options: [
      {
        text: "To allow any type of data to be assigned to an object without restriction",
        isCorrect: false,
      },
      {
        text: "To automatically generate the object at runtime without any code",
        isCorrect: false,
      },
      {
        text: "To specify the structure and types of properties an object can have",
        isCorrect: true,
      },
      {
        text: "To convert a TypeScript object into a JavaScript string representation",
        isCorrect: false,
      },
    ],
  },
  {
    text: "How can you define an empty array of strings in TypeScript?",
    options: [
      {
        text: "`let names: string = [];`",
        isCorrect: false,
      },
      {
        text: "`let names: [string] = [];`",
        isCorrect: false,
      },
      {
        text: "`let names: string[] = [];`",
        isCorrect: true,
      },
      {
        text: "`let names: empty<string> = [];`",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the correct way to define an array of numbers in TypeScript?",
    options: [
      {
        text: "`let numbers: [number] = [1, 2, 3];`",
        isCorrect: false,
      },
      {
        text: "`let numbers: number = [1, 2, 3];`",
        isCorrect: false,
      },
      {
        text: "`let numbers: array<number> = [1, 2, 3];`",
        isCorrect: false,
      },
      {
        text: "`let numbers: number[] = [1, 2, 3];`",
        isCorrect: true,
      },
    ],
  },
  {
    text: "When defining a function in TypeScript, what is the best practice for parameter annotations?",
    options: [
      {
        text: "It is better to use `any` for all parameters to avoid errors",
        isCorrect: false,
      },
      {
        text: "You don't need to specify types if the function has a return type",
        isCorrect: false,
      },
      {
        text: "Only use types for parameters that are optional",
        isCorrect: false,
      },
      {
        text: "Always specify the types of parameters explicitly",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Which of the following is a reason to avoid using the `any` type in TypeScript?",
    options: [
      {
        text: "It makes your code run faster than using specific types",
        isCorrect: false,
      },
      {
        text: "It removes type safety and can lead to unexpected errors",
        isCorrect: true,
      },
      {
        text: "It is the only way to define a variable in TypeScript",
        isCorrect: false,
      },
      {
        text: "It is required for all variables in TypeScript",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What happens if you try to push a string into a number array in TypeScript?",
    options: [
      {
        text: "The string will be added without any issues",
        isCorrect: false,
      },
      {
        text: "The array will become a mixed type array automatically",
        isCorrect: false,
      },
      {
        text: "You will get a compilation error",
        isCorrect: true,
      },
      {
        text: "TypeScript will automatically convert the string to a number",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of using type annotations in TypeScript functions?",
    options: [
      {
        text: "To enable flexibility by allowing any type of value to be passed to the function",
        isCorrect: false,
      },
      {
        text: "To make the code look more complex and confusing",
        isCorrect: false,
      },
      {
        text: "To automatically generate documentation for the function",
        isCorrect: false,
      },
      {
        text: "To clearly define what types of values the function expects and returns",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does the optional chaining operator (?.) do in TypeScript?",
    options: [
      {
        text: "Automatically logs every variable to the console",
        isCorrect: false,
      },
      {
        text: "Makes all properties of an object optional",
        isCorrect: false,
      },
      {
        text: "Prevents errors when accessing properties of possibly null or undefined values",
        isCorrect: true,
      },
      {
        text: "Ensures that all variables must be defined before they can be accessed or used in code",
        isCorrect: false,
      },
    ],
  },
  {
    text: "How can you create a type alias for a person's information in TypeScript?",
    options: [
      {
        text: "`type Person = { name: string; age: number; };`",
        isCorrect: true,
      },
      {
        text: "`type Person: { name: string, age: number; };`",
        isCorrect: false,
      },
      {
        text: "`alias Person = { name: string; age: number; };`",
        isCorrect: false,
      },
      {
        text: "`type Person = { string name; number age; };`",
        isCorrect: false,
      },
    ],
  },
];

module.exports = tsEasyQuestions;
