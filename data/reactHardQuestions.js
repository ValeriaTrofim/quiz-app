const reactHardQuestions = [
  {
    text: "How does the children prop enhance component composition in React?",
    options: [
      {
        text: "It allows components to receive nested elements, making it easier to create reusable and flexible layouts.",
        isCorrect: true,
      },
      {
        text: "It prevents child components from re-rendering unless the parent component updates.",
        isCorrect: false,
      },
      {
        text: "It automatically manages the lifecycle of each child component, simplifying complex state management.",
        isCorrect: false,
      },
      {
        text: "It ensures that all child elements are rendered in a single parent div, promoting better performance.",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the function of curly braces in JSX?",
    options: [
      {
        text: "Curly braces are used to define the structure of components and enforce strict syntax rules in JSX.",
        isCorrect: false,
      },
      {
        text: "Curly braces prevent React from accessing JavaScript variables and ensure that only static values are rendered.",
        isCorrect: false,
      },
      {
        text: "Curly braces allow you to embed dynamic JavaScript expressions and values within JSX markup.",
        isCorrect: true,
      },
      {
        text: "Curly braces are required for defining the properties of components directly within JSX tags.",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the primary purpose of event handling in React, and which of the following is a common event type that can be managed within a React component?",
    options: [
      {
        text: "Event handling only allows for tracking state changes, and a common event type is `onChangeState`",
        isCorrect: false,
      },
      {
        text: "Event handling is limited to form submissions, and a common event type is `onMouseOut`.",
        isCorrect: false,
      },
      {
        text: "Event handling is used to directly manipulate the DOM, and a common event type is `onSubmitField`.",
        isCorrect: false,
      },
      {
        text: "Event handling allows React to respond to user interactions, and a common event type is `onClick`.",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Which statement best describes the relationship between state and re-rendering in React?",
    options: [
      {
        text: "State changes do not affect the rendering process of components",
        isCorrect: false,
      },
      {
        text: "Changing the state triggers a re-render of the component where the state is managed",
        isCorrect: true,
      },
      {
        text: "Re-rendering occurs only when the props of a component change",
        isCorrect: false,
      },
      {
        text: "State can only be managed in class components, not functional components",
        isCorrect: false,
      },
    ],
  },
  {
    text: "In the React rendering process, what does the virtual DOM do?",
    options: [
      {
        text: "It updates the real DOM immediately when a component's state changes, ensuring the UI reflects the latest data.",
        isCorrect: false,
      },
      {
        text: "It stores all the component states in one place to reduce memory usage during rendering.",
        isCorrect: false,
      },
      {
        text: "It allows React to quickly determine which parts of the actual DOM need to be updated by comparing changes.",
        isCorrect: true,
      },
      {
        text: "It serves as a backup for the actual DOM, ensuring that elements are never lost during rendering.",
        isCorrect: false,
      },
    ],
  },
  {
    text: "In what scenario would you typically choose to use the useReducer hook over the useState hook?",
    options: [
      {
        text: "When you need to manage a single boolean state value",
        isCorrect: false,
      },
      {
        text: "When managing complex state logic involving multiple related values",
        isCorrect: true,
      },
      {
        text: "When you want to directly manipulate DOM elements",
        isCorrect: false,
      },
      {
        text: "When you need to load data from an API when the component first renders",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the useMemo hook in React?",
    options: [
      {
        text: "To memoize the result of a computation and optimize performance",
        isCorrect: true,
      },
      {
        text: "To create a mutable reference that persists across re-renders in React",
        isCorrect: false,
      },
      {
        text: "To handle side effects that occur during render phases",
        isCorrect: false,
      },
      {
        text: "To trigger a re-render when a specific state changes",
        isCorrect: false,
      },
    ],
  },
  {
    text: "In which scenario would you prefer using `useReducer` over `useState`?",
    options: [
      {
        text: "When managing complex state logic that involves multiple related state values",
        isCorrect: true,
      },
      {
        text: "When you only need to manage a single piece of state, such as a boolean flag",
        isCorrect: false,
      },
      {
        text: "When you want to avoid all re-renders of a component on state change",
        isCorrect: false,
      },
      {
        text: "When the state updates are based solely on user input from form fields",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the significance of the dependencies array in `useEffect`?",
    options: [
      {
        text: "It allows the effect to run only once when the component mounts, regardless of state changes",
        isCorrect: false,
      },
      {
        text: "It stores the previous state values for comparison during rendering",
        isCorrect: false,
      },
      {
        text: "It prevents the effect from running altogether if it contains more than one item",
        isCorrect: false,
      },
      {
        text: "It determines when the effect should re-run based on the values inside it",
        isCorrect: true,
      },
    ],
  },
  {
    text: "How does the `useRef` hook function in React, and what are its common applications?",
    options: [
      {
        text: "It is a state management hook that triggers a re-render when the referenced value changes",
        isCorrect: false,
      },
      {
        text: "It creates a mutable reference that persists across re-renders, allowing access to DOM elements or holding any mutable value without causing re-renders",
        isCorrect: true,
      },
      {
        text: "It serves as a lifecycle method to clean up resources after a component unmounts, similar to `componentWillUnmount`",
        isCorrect: false,
      },
      {
        text: "It is primarily designed for managing local state values that require reactivity, ensuring that changes to these values trigger component re-renders as needed",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What can happen if you do not follow the principles of purity in your React components?",
    options: [
      {
        text: "Your application will run faster due to fewer re-renders",
        isCorrect: false,
      },
      {
        text: "Components will be able to reuse their internal state without issues",
        isCorrect: false,
      },
      {
        text: "You may encounter bugs due to components producing unexpected outputs",
        isCorrect: true,
      },
      {
        text: "Your code will be more modular and easier to maintain",
        isCorrect: false,
      },
    ],
  },
  {
    text: "How can `useEffect` be utilized to control when a side effect runs?",
    options: [
      {
        text: "By placing it at the top level of the component so it executes on every render without any conditions",
        isCorrect: false,
      },
      {
        text: "By providing a dependencies array that specifies when the effect should re-run based on state or props changes",
        isCorrect: true,
      },
      {
        text: "By using it inside conditional statements to determine if the effect should run",
        isCorrect: false,
      },
      {
        text: "By calling it inside an event handler to trigger the side effect only when the event occurs",
        isCorrect: false,
      },
    ],
  },
  {
    text: "When using the `useRef` hook to access a DOM element, what must you do to bind the ref to an element?",
    options: [
      {
        text: "Create a new ref for each render to update the element dynamically",
        isCorrect: false,
      },
      {
        text: "Call the ref function inside the render method to get the current value",
        isCorrect: false,
      },
      {
        text: "Assign the ref to the `ref` attribute of the DOM element in JSX.",
        isCorrect: true,
      },
      {
        text: "Use the `setRef` method to store the element's reference manually",
        isCorrect: false,
      },
    ],
  },
  {
    text: "How does the `useMemo` hook contribute to performance optimization in React applications?",
    options: [
      {
        text: "It enables direct DOM manipulation, which can enhance rendering speed in specific scenarios",
        isCorrect: false,
      },
      {
        text: "It synchronizes state updates to prevent UI lag during heavy processing",
        isCorrect: false,
      },
      {
        text: "It caches the result of expensive computations and only recalculates when dependencies change",
        isCorrect: true,
      },
      {
        text: "It prevents any re-renders of components by memoizing the entire component tree",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following categories of React hooks is primarily used to manage component state?",
    options: [
      { text: "State Management hooks", isCorrect: true },
      { text: "Performance optimization hooks", isCorrect: false },
      { text: "Transition hooks", isCorrect: false },
      { text: "Effect hooks", isCorrect: false },
    ],
  },
];

module.exports = reactHardQuestions;
