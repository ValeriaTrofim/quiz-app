const cssEasyQuestions = [
  {
    text: "What does CSS stand for?",
    options: [
      {
        text: "Creative Style Syntax",
        isCorrect: false,
      },
      {
        text: "Cascading Style Syntax",
        isCorrect: false,
      },
      {
        text: "Cascading Style Sheets",
        isCorrect: true,
      },
      {
        text: "Computer Style Sheets",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the main purpose of CSS in web development?",
    options: [
      {
        text: "To style and layout web pages",
        isCorrect: true,
      },
      {
        text: "To create the structure of the HTML document",
        isCorrect: false,
      },
      {
        text: "To enhance the functionality of a website with backend scripts",
        isCorrect: false,
      },
      {
        text: "To manage the server-side logic of a website",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: [
      { text: "At the end of the document", isCorrect: false },
      { text: "In the <body> section", isCorrect: false },
      { text: "Inside the <footer>", isCorrect: false },
      { text: "In the <head> section", isCorrect: true },
    ],
  },
  {
    text: "How do you change the text color in CSS?",
    options: [
      { text: "font-color: red;", isCorrect: false },
      { text: "text-color: red;", isCorrect: false },
      { text: "color: red;", isCorrect: true },
      { text: "text: red;", isCorrect: false },
    ],
  },
  {
    text: "Which property is used to change the background color?",
    options: [
      { text: "color", isCorrect: false },
      { text: "bgcolor", isCorrect: false },
      { text: "background", isCorrect: false },
      { text: "background-color", isCorrect: true },
    ],
  },
  {
    text: "What does the font-size property do?",
    options: [
      { text: "Changes the font family", isCorrect: false },
      { text: "Changes the size of text", isCorrect: true },
      { text: "Makes the text bold", isCorrect: false },
      { text: "Sets the spacing between letters", isCorrect: false },
    ],
  },
  {
    text: "Which CSS property is used to make text bold?",
    options: [
      { text: "font-weight: bold;", isCorrect: true },
      { text: "bold: true;", isCorrect: false },
      { text: "font-style: bold;", isCorrect: false },
      { text: "weight: bold;", isCorrect: false },
    ],
  },
  {
    text: "How do you add a comment in CSS?",
    options: [
      { text: "// comment", isCorrect: false },
      { text: "<!-- comment -->", isCorrect: false },
      { text: "/* comment */", isCorrect: true },
      { text: "# comment", isCorrect: false },
    ],
  },
  {
    text: "How do you select an element with the ID 'header'?",
    options: [
      { text: "#header", isCorrect: true },
      { text: ".header", isCorrect: false },
      { text: "header", isCorrect: false },
      { text: "*header", isCorrect: false },
    ],
  },
  {
    text: "How do you select all <p> elements on a page?",
    options: [
      { text: "#p", isCorrect: false },
      { text: ".p", isCorrect: false },
      { text: "p", isCorrect: true },
      { text: "*p", isCorrect: false },
    ],
  },
  {
    text: "Which property controls the size of an element’s border?",
    options: [
      { text: "border-width", isCorrect: true },
      { text: "border-style", isCorrect: false },
      { text: "border-color", isCorrect: false },
      { text: "border-type", isCorrect: false },
    ],
  },
  {
    text: "What is the default position value of an HTML element in CSS?",
    options: [
      { text: "fixed", isCorrect: false },
      { text: "relative", isCorrect: false },
      { text: "absolute", isCorrect: false },
      { text: "static", isCorrect: true },
    ],
  },
  {
    text: "Which property is used to align text to the center?",
    options: [
      { text: "text-align: middle;", isCorrect: false },
      { text: "align: center;", isCorrect: false },
      { text: "text-align: center;", isCorrect: true },
      { text: "horizontal-align: center;", isCorrect: false },
    ],
  },
  {
    text: "Which unit is relative in CSS?",
    options: [
      { text: "px", isCorrect: false },
      { text: "em", isCorrect: true },
      { text: "cm", isCorrect: false },
      { text: "mm", isCorrect: false },
    ],
  },
];

module.exports = cssEasyQuestions;
