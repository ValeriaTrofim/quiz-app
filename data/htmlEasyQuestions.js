const htmlEasyQuestions = [
  {
    text: "What does HTML stand for?",
    options: [
      {
        text: "Hyperlink and Text Markup Language",
        isCorrect: false,
      },
      {
        text: "Hypertext Multilayer Language",
        isCorrect: false,
      },
      {
        text: "Hypertext Markup Language",
        isCorrect: true,
      },
      {
        text: "High-level Text Markup Language",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which element is used to define the main structure of an HTML document?",
    options: [
      {
        text: "<html>",
        isCorrect: true,
      },
      {
        text: "<head>",
        isCorrect: false,
      },
      {
        text: "<div>",
        isCorrect: false,
      },
      {
        text: "<body>",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the alt attribute in an image element?",
    options: [
      {
        text: "To create a hyperlink that directs users to another webpage when the image is clicked on",
        isCorrect: false,
      },
      {
        text: "To define the image format (e.g., JPEG or PNG)",
        isCorrect: false,
      },
      {
        text: "To specify the image size in pixels",
        isCorrect: false,
      },
      {
        text: "To provide alternative text for screen readers and when the image cannot be displayed",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Which of the following is a valid way to create a hyperlink in HTML?",
    options: [
      {
        text: "<hyperlink href='https://www.example.com'>Click Here</hyperlink>",
        isCorrect: false,
      },
      {
        text: "<a href='https://www.example.com'>Click Here</a>",
        isCorrect: true,
      },
      {
        text: "<link href='https://www.example.com'>Click Here</link>",
        isCorrect: false,
      },
      {
        text: "<a url='https://www.example.com'>Click Here</a>",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which element is typically used to define the title of a webpage that appears in the browser tab?",
    options: [
      {
        text: "<head>",
        isCorrect: false,
      },
      {
        text: "<header>",
        isCorrect: false,
      },
      {
        text: "<meta>",
        isCorrect: false,
      },
      {
        text: "<title>",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What is the purpose of the <meta> tag in the head section of an HTML document?",
    options: [
      {
        text: "To create links to other CSS files",
        isCorrect: false,
      },
      {
        text: "To provide metadata about the webpage, such as character set and description",
        isCorrect: true,
      },
      {
        text: "To define the main content of the webpage",
        isCorrect: false,
      },
      {
        text: "To embed images into the webpage, allowing for visual content to enhance user experience",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What does the acronym URL stand for?",
    options: [
      {
        text: "Universal Resource Link",
        isCorrect: false,
      },
      {
        text: "Uniform Resource Language",
        isCorrect: false,
      },
      {
        text: "Uniform Reference Language",
        isCorrect: false,
      },
      {
        text: "Uniform Resource Locator",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Which of the following elements is used to create an unordered list in HTML?",
    options: [
      {
        text: "<list>",
        isCorrect: false,
      },
      {
        text: "<ul>",
        isCorrect: true,
      },
      {
        text: "<li>",
        isCorrect: false,
      },
      {
        text: "<ol>",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the purpose of the <head> section in an HTML document?",
    options: [
      {
        text: "To define the main content of the webpage",
        isCorrect: false,
      },
      {
        text: "To create interactive elements like buttons and forms",
        isCorrect: false,
      },
      {
        text: "To contain metadata and links to stylesheets or scripts",
        isCorrect: true,
      },
      {
        text: "To display images and videos",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which attribute is used to specify the destination URL for an anchor (<a>) tag?",
    options: [
      {
        text: "link",
        isCorrect: false,
      },
      {
        text: "target",
        isCorrect: false,
      },
      {
        text: "src",
        isCorrect: false,
      },
      {
        text: "href",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Which HTML element is used to define a line break?",
    options: [
      {
        text: "<br>",
        isCorrect: true,
      },
      {
        text: "<lb>",
        isCorrect: false,
      },
      {
        text: "<break>",
        isCorrect: false,
      },
      {
        text: "<line>",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following is a self-closing tag in HTML?",
    options: [
      {
        text: "<div>",
        isCorrect: false,
      },
      {
        text: "<img>",
        isCorrect: true,
      },
      {
        text: "<span>",
        isCorrect: false,
      },
      {
        text: "<p>",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which HTML tag is used to display a video on a web page?",
    options: [
      {
        text: "<video>`",
        isCorrect: true,
      },
      {
        text: "<media>",
        isCorrect: false,
      },
      {
        text: "<source>",
        isCorrect: false,
      },
      {
        text: "<movie>",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which tag is used to embed an audio file in HTML?",
    options: [
      {
        text: "<music>",
        isCorrect: false,
      },
      {
        text: "<sound>",
        isCorrect: false,
      },
      {
        text: "<file>",
        isCorrect: false,
      },
      {
        text: "<audio>",
        isCorrect: true,
      },
    ],
  },
];

module.exports = htmlEasyQuestions;
