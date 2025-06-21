const reactEasyQuestions = [
  {
    text: "What are props in React used for?",
    options: [
      { text: "To handle user events like clicks or inputs", isCorrect: false },
      { text: "To pass data from one component to another", isCorrect: true },
      { text: "To manage the internal state of a component", isCorrect: false },
      { text: "To manage the internal state of a component", isCorrect: false },
    ],
  },
  {
    text: "What is a React fragment used for?",
    options: [
      {
        text: "To group multiple elements without adding an extra node to the DOM",
        isCorrect: true,
      },
      {
        text: "To create a new component that can be used multiple times",
        isCorrect: false,
      },
      { text: "To handle errors in React applications", isCorrect: false },
      {
        text: "To style a component using CSS styles directly",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is JSX in React?",
    options: [
      {
        text: "A syntax extension that allows writing HTML-like code in JavaScript",
        isCorrect: true,
      },
      {
        text: "A JavaScript function that creates HTML elements directly",
        isCorrect: false,
      },
      {
        text: "A special type of variable used to store component data",
        isCorrect: false,
      },
      {
        text: "A method to handle events in React applications",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the useState hook in React?",
    options: [
      {
        text: "To manage state within a functional component",
        isCorrect: true,
      },
      { text: "To handle events like button clicks", isCorrect: false },
      { text: "To create new components dynamically", isCorrect: false },
      { text: "To render components on the screen", isCorrect: false },
    ],
  },
  {
    text: "What does the key prop do in a list of components?",
    options: [
      {
        text: "It is used to change the parent component's layout",
        isCorrect: false,
      },
      {
        text: "It sets the default value for a component's state",
        isCorrect: false,
      },
      {
        text: "It enables advanced features and optimizations for React components and their rendering.",
        isCorrect: false,
      },
      {
        text: "It helps React identify which items have changed, are added, or are removed",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What is the purpose of using refs in React?",
    options: [
      { text: "To create new components using JSX syntax", isCorrect: false },
      {
        text: "To directly access and interact with DOM elements",
        isCorrect: true,
      },
      {
        text: "To define the style of a component using CSS",
        isCorrect: false,
      },
      { text: "To manage the state of a component", isCorrect: false },
    ],
  },
  {
    text: "What is a controlled component in React?",
    options: [
      {
        text: "A component that does not render any value to the user interface",
        isCorrect: false,
      },
      {
        text: "A component that only works with class-based components",
        isCorrect: false,
      },
      {
        text: "A component that automatically updates its value without any user input",
        isCorrect: false,
      },
      {
        text: "A component where the value of the input is controlled by the React state",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Why do we use curly braces in JSX?",
    options: [
      {
        text: "Curly braces are used to create comments in JSX, similar to how they work in JavaScript.",
        isCorrect: false,
      },
      {
        text: "Curly braces are required to define the structure of a component and cannot be used for dynamic values.",
        isCorrect: false,
      },
      {
        text: "Curly braces allow us to insert dynamic JavaScript values, like variables or expressions, into our JSX code.",
        isCorrect: true,
      },
      {
        text: "Curly braces are used only for styling and have no effect on the data displayed in JSX.",
        isCorrect: false,
      },
    ],
  },
  {
    text: "How does using a pure component affect the performance of a React application?",
    options: [
      {
        text: "Pure components can only render once and cannot update, which limits their usability.",
        isCorrect: false,
      },
      {
        text: "Pure components automatically manage state, making them more efficient than regular components.",
        isCorrect: false,
      },
      {
        text: "Pure components slow down the application because they require more complex logic to manage changes.",
        isCorrect: false,
      },
      {
        text: "Pure components can improve performance by preventing unnecessary re-renders when the same input is provided.",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does it mean for a React component to be pure?",
    options: [
      {
        text: "A pure component always returns the same output when given the same input, without changing any outside variables.",
        isCorrect: true,
      },
      {
        text: "A pure component can change outside variables to update its output dynamically.",
        isCorrect: false,
      },
      {
        text: "A pure component only works with static data and does not allow for any changes during its lifetime.",
        isCorrect: false,
      },
      {
        text: "A pure component can have multiple return statements to manage different inputs while still maintaining its purity.",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What happens when an error boundary catches an error?",
    options: [
      { text: "It crashes the entire application", isCorrect: false },
      {
        text: "It displays a fallback component to inform the user",
        isCorrect: true,
      },
      {
        text: "It ignores the error and continues rendering",
        isCorrect: false,
      },
      {
        text: "It sends the error to a remote server automatically",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Why are error boundaries important in React applications?",
    options: [
      {
        text: "They automatically fix all bugs in the application",
        isCorrect: false,
      },
      {
        text: "They allow us to catch errors during rendering and display a fallback UI",
        isCorrect: true,
      },
      {
        text: "They improve the speed of component rendering",
        isCorrect: false,
      },
      {
        text: "They ensure that users do not see any error messages while using the application.",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the primary purpose of components in React?",
    options: [
      {
        text: "Components are a way to store data in a React app without displaying anything.",
        isCorrect: false,
      },
      {
        text: "Components must always be defined as classes and cannot be functions.",
        isCorrect: false,
      },
      {
        text: "Components are the building blocks of React applications that allow for the creation of reusable user interface elements.",
        isCorrect: true,
      },
      {
        text: "Components are solely for styling purposes and do not provide any interactive or functional capabilities in an application.",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following describes event handling in React?",
    options: [
      {
        text: "Event handling only works on forms and cannot be used with other elements.",
        isCorrect: false,
      },
      {
        text: "Event handling is not necessary in React applications as they work without user input.",
        isCorrect: false,
      },
      {
        text: "Event handling is a way to automatically refresh the page when a user interacts with it.",
        isCorrect: false,
      },
      {
        text: "Event handling allows developers to respond to user interactions like clicks and keyboard inputs.",
        isCorrect: true,
      },
    ],
  },
];

module.exports = reactEasyQuestions;
