const tsHardQuestions = [
  {
    text: "What is the purpose of using type aliases in TypeScript?",
    options: [
      {
        text: "To enforce that a variable can only hold one type",
        isCorrect: false,
      },
      {
        text: "To rename variables in your code for better performance",
        isCorrect: false,
      },
      {
        text: "To create a new primitive type in JavaScript",
        isCorrect: false,
      },
      {
        text: "To define custom, reusable types for better readability and consistency ",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does the never type represent in TypeScript?",
    options: [
      {
        text: "A type that indicates an object with no properties",
        isCorrect: false,
      },
      {
        text: "Values that never occur, often used for functions that never return",
        isCorrect: true,
      },
      {
        text: "Any type of value that can be present",
        isCorrect: false,
      },
      {
        text: "A type that can only be null, undefined, or both, but not other values",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which operator allows you to simplify code by accessing properties of an object that might be null or undefined?",
    options: [
      {
        text: "Type assertion (as)",
        isCorrect: false,
      },
      {
        text: "Union types (|)",
        isCorrect: false,
      },
      {
        text: "Nullish coalescing operator (??)",
        isCorrect: false,
      },
      {
        text: "Optional chaining (?.)",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What are generics in TypeScript used for?",
    options: [
      {
        text: "To enhance the performance of functions",
        isCorrect: false,
      },
      {
        text: "To define fixed types that cannot change",
        isCorrect: false,
      },
      {
        text: "To provide a single instance of a class member",
        isCorrect: false,
      },
      {
        text: "To create reusable classes, interfaces, and functions",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does the keyof operator do in TypeScript?",
    options: [
      {
        text: "Produces a union of the keys of a given object",
        isCorrect: true,
      },
      {
        text: "Creates a new type with all properties set to optional",
        isCorrect: false,
      },
      {
        text: "Creates a type alias for a specific property",
        isCorrect: false,
      },
      {
        text: "Combines multiple types into one",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the Nullish Coalescing Operator (??) in TypeScript?",
    options: [
      {
        text: "To create a new name for an existing type",
        isCorrect: false,
      },
      {
        text: "To unify different types into a single type for better type management",
        isCorrect: false,
      },
      {
        text: "To throw an error when a variable is null or undefined",
        isCorrect: false,
      },
      {
        text: "To provide a default value when dealing with null or undefined objects",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What type of value does the unknown type represent in TypeScript?",
    options: [
      {
        text: "It represents values that are guaranteed to never occur",
        isCorrect: false,
      },
      {
        text: "It allows any operations to be performed without type checking",
        isCorrect: false,
      },
      {
        text: "It represents any value but requires narrowing before operations can be performed",
        isCorrect: true,
      },
      {
        text: "It can only represent values that are either null or undefined, with no other types allowed",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the primary purpose of using interfaces in TypeScript?",
    options: [
      {
        text: "To allow classes to have multiple constructors with different parameters",
        isCorrect: false,
      },
      {
        text: "To specify access modifiers for class members, controlling their visibility and accessibility",
        isCorrect: false,
      },
      {
        text: "To define the structure and shape of objects, ensuring they adhere to a specific format",
        isCorrect: true,
      },
      {
        text: "To create instances of classes with their own unique properties",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What does type mapping allow you to do in TypeScript?",
    options: [
      {
        text: "To assert a specific type for a variable without performing type checks",
        isCorrect: false,
      },
      {
        text: "To create an instance of a class while customizing its constructor behavior and initialization logic",
        isCorrect: false,
      },
      {
        text: "To define a function that processes data of any type without restrictions",
        isCorrect: false,
      },
      {
        text: "To create new types based on existing types, modifying their properties (e.g., making them readonly)",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What is the function of a type assertion in TypeScript?",
    options: [
      {
        text: "To define a variable that can hold values of multiple specified types at once",
        isCorrect: false,
      },
      {
        text: "To automatically convert data types at runtime",
        isCorrect: false,
      },
      {
        text: "To specify a different type than the one inferred by the TypeScript compiler",
        isCorrect: true,
      },
      {
        text: "To restrict a variable to only accept string values",
        isCorrect: false,
      },
    ],
  },
  {
    text: "How can you create a type alias for a specific object structure in TypeScript?",
    options: [
      {
        text: "By using an interface declaration to define the structure of the object type",
        isCorrect: false,
      },
      {
        text: "By defining a class and then creating an instance of it",
        isCorrect: false,
      },
      {
        text: "By combining multiple existing types without any naming",
        isCorrect: false,
      },
      {
        text: "By using the `type` keyword followed by the name and structure of the object",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What is the benefit of using the unknown type in TypeScript?",
    options: [
      {
        text: "It enforces type safety by requiring narrowing before performing operations",
        isCorrect: true,
      },
      {
        text: "It allows any type of value without any restrictions",
        isCorrect: false,
      },
      {
        text: "It automatically converts unknown types into specific types at runtime",
        isCorrect: false,
      },
      {
        text: "It can only be used with primitive types like string and number",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the main purpose of using decorators in TypeScript?",
    options: [
      {
        text: "To enforce strict typing on all class members automatically",
        isCorrect: false,
      },
      {
        text: "To define static methods that can be accessed only from within the class itself",
        isCorrect: false,
      },
      {
        text: "To modify classes or class members at design time without modifying their code",
        isCorrect: true,
      },
      {
        text: "To create multiple instances of a class without any properties",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following accurately describes a class in TypeScript?",
    options: [
      {
        text: "A standalone function that cannot hold state or properties",
        isCorrect: false,
      },
      {
        text: "A blueprint for creating objects that encapsulates data and behavior",
        isCorrect: true,
      },
      {
        text: "A variable that holds a reference to a function",
        isCorrect: false,
      },
      {
        text: "A method that processes data and returns a value",
        isCorrect: false,
      },
    ],
  },
];

module.exports = tsHardQuestions;
