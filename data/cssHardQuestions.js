const cssHardQuestions = [
  {
    text: "In which scenario is the `<meta name='viewport'>` tag essential for web development?",
    options: [
      {
        text: "It links JavaScript files necessary for interactive elements on the page",
        isCorrect: false,
      },
      {
        text: "It defines the character set for the entire HTML document",
        isCorrect: false,
      },
      {
        text: "It is used to specify the author of the document for search engines",
        isCorrect: false,
      },
      {
        text: "It is crucial for controlling the layout and scaling on mobile devices",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does the `<meta charset='UTF-8'>` tag ensure for a webpage?",
    options: [
      {
        text: "It defines the character encoding used for the document, allowing proper text display",
        isCorrect: true,
      },
      {
        text: "It provides a title that appears in the browser's title bar",
        isCorrect: false,
      },
      {
        text: "It establishes responsive design rules to ensure the webpage displays correctly on various devices",
        isCorrect: false,
      },
      {
        text: "It serves as a link to external JavaScript files required for functionality",
        isCorrect: false,
      },
    ],
  },
  {
    text: "How should external CSS stylesheets be linked in an HTML document to ensure they are applied correctly?",
    options: [
      {
        text: "By using non-standard tags that do not conform to HTML specifications",
        isCorrect: false,
      },
      {
        text: "By embedding the CSS directly within `<style>` tags without linking",
        isCorrect: false,
      },
      {
        text: "By placing the CSS in a separate document without any HTML link",
        isCorrect: false,
      },
      {
        text: "By using the `<link>` element with the `rel` attribute set to 'stylesheet'",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What does the 'z-index' property control?",
    options: [
      { text: "The transparency of an element", isCorrect: false },
      { text: "The stacking order of elements", isCorrect: true },
      { text: "The zoom level of text", isCorrect: false },
      { text: "The size of an element", isCorrect: false },
    ],
  },
  {
    text: "What value of the 'position' property allows an element to stay fixed while scrolling?",
    options: [
      { text: "relative", isCorrect: false },
      { text: "absolute", isCorrect: false },
      { text: "sticky", isCorrect: false },
      { text: "fixed", isCorrect: true },
    ],
  },
  {
    text: "Which CSS function is used to apply custom properties (variables)?",
    options: [
      { text: "custom(var)", isCorrect: false },
      { text: "prop()", isCorrect: false },
      { text: "use()", isCorrect: false },
      { text: "var()", isCorrect: true },
    ],
  },
  {
    text: "Which of the following pseudo-classes targets the first element of its type within a parent?",
    options: [
      { text: ":first", isCorrect: false },
      { text: ":first-child", isCorrect: false },
      { text: ":first-type", isCorrect: false },
      { text: ":first-of-type", isCorrect: true },
    ],
  },
  {
    text: "What does the 'calc()' function do in CSS?",
    options: [
      { text: "Performs animations", isCorrect: false },
      { text: "Calculates numeric values dynamically", isCorrect: true },
      { text: "Renders CSS conditions", isCorrect: false },
      { text: "Applies transitions", isCorrect: false },
    ],
  },
  {
    text: "What is the default display value of a <span> element?",
    options: [
      { text: "inline", isCorrect: true },
      { text: "block", isCorrect: false },
      { text: "inline-block", isCorrect: false },
      { text: "none", isCorrect: false },
    ],
  },
  {
    text: "Which property controls the space between lines of text?",
    options: [
      { text: "letter-spacing", isCorrect: false },
      { text: "line-spacing", isCorrect: false },
      { text: "line-height", isCorrect: true },
      { text: "spacing", isCorrect: false },
    ],
  },
  {
    text: "What does the 'will-change' property hint to the browser?",
    options: [
      { text: "To resize the element", isCorrect: false },
      { text: "To ignore the element", isCorrect: false },
      { text: "To prepare for performance-heavy changes", isCorrect: true },
      { text: "To stop rendering animations", isCorrect: false },
    ],
  },
  {
    text: "Which of these units is not relative?",
    options: [
      { text: "em", isCorrect: false },
      { text: "vw", isCorrect: false },
      { text: "%", isCorrect: false },
      { text: "cm", isCorrect: true },
    ],
  },
  {
    text: "What does the 'backface-visibility' property control?",
    options: [
      {
        text: "Whether an element’s backside is visible when rotated",
        isCorrect: true,
      },
      { text: "The element’s background image position", isCorrect: false },
      { text: "The element’s display mode", isCorrect: false },
      { text: "The element’s reflection effect", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the ':not()' pseudo-class in CSS?",
    options: [
      { text: "To hide elements from screen readers", isCorrect: false },
      { text: "To select elements except those specified", isCorrect: true },
      { text: "To apply styles on hover only", isCorrect: false },
      { text: "To disable specific tags", isCorrect: false },
    ],
  },
  {
    text: "What happens if you set 'overflow: hidden;' on a container?",
    options: [
      { text: "It scrolls the content automatically", isCorrect: false },
      { text: "Content that overflows will be invisible", isCorrect: true },
      { text: "It allows resizing", isCorrect: false },
      { text: "It hides the container", isCorrect: false },
    ],
  },
  {
    text: "Which property is used to apply a shadow to text?",
    options: [
      { text: "box-shadow", isCorrect: false },
      { text: "shadow-text", isCorrect: false },
      { text: "text-shadow", isCorrect: true },
      { text: "font-shadow", isCorrect: false },
    ],
  },
  {
    text: "What does the 'object-fit' property do?",
    options: [
      { text: "Resizes containers to match image size", isCorrect: false },
      {
        text: "Defines how an image or video should be resized to fit its container",
        isCorrect: true,
      },
      { text: "Controls opacity of objects", isCorrect: false },
      { text: "Aligns objects within a flexbox", isCorrect: false },
    ],
  },
];

module.exports = cssHardQuestions;
