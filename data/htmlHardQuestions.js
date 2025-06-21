const htmlHardQuestions = [
  {
    text: "Which of the following are valid HTML elements used to display text? Select all that apply.",
    options: [
      {
        text: "<figcaption> - Provides a caption for a figure or image",
        isCorrect: false,
      },
      {
        text: "<h1> - Represents the main heading of a page",
        isCorrect: true,
      },
      {
        text: "<blockquote> - Used for quoting sections of text",
        isCorrect: true,
      },
      {
        text: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following statements are true about the <link> element in HTML? Select all that apply.",
    options: [
      {
        text: "It can be used to include JavaScript files in the document",
        isCorrect: false,
      },
      {
        text: "It is used to link external stylesheets to an HTML document",
        isCorrect: true,
      },
      {
        text: "It is placed within the <head> section of an HTML document",
        isCorrect: true,
      },
      {
        text: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following attributes can be used with the <img> tag? Select all that apply.",
    options: [
      {
        text: "src - Specifies the path to the image file",
        isCorrect: true,
      },
      {
        text: "alt - Provides alternative text for the image",
        isCorrect: true,
      },
      {
        text: "href - Defines the URL of the linked resource",
        isCorrect: false,
      },
      {
        text: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following elements are used to structure content in an HTML document? Select all that apply.",
    options: [
      {
        text: "The `<figure>` element for displaying images and their captions",
        isCorrect: true,
      },
      {
        text: "The `<aside>` element for secondary content or sidebars",
        isCorrect: true,
      },
      {
        text: "The `<dialog>` element for creating interactive dialogues",
        isCorrect: false,
      },
      {
        text: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the function of the `<title>` tag in an HTML document?",
    options: [
      {
        text: "To define the title of the webpage that appears in the browser tab",
        isCorrect: true,
      },
      {
        text: "To create a visible heading that appears prominently on the webpage's content",
        isCorrect: false,
      },
      {
        text: "To specify the language of the document",
        isCorrect: false,
      },
      {
        text: "To link external CSS stylesheets to the document",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following attributes is used to make a link open in a new tab?",
    options: [
      {
        text: "newtab='yes'",
        isCorrect: false,
      },
      {
        text: "open='true'",
        isCorrect: false,
      },
      {
        text: "target='blank'",
        isCorrect: true,
      },
      {
        text: "tab='new'",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What does the `<footer>` element typically contain in an HTML document?",
    options: [
      {
        text: "The primary content and articles of the webpage",
        isCorrect: false,
      },
      {
        text: "The main navigation menu for the website",
        isCorrect: false,
      },
      {
        text: "A header banner with the website's title and logo",
        isCorrect: false,
      },
      {
        text: "Footer information such as copyright notices and links",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Which attribute is used with the `<img>` tag to specify the image's alternate text?",
    options: [
      {
        text: "alt",
        isCorrect: true,
      },
      {
        text: "desc",
        isCorrect: false,
      },
      {
        text: "label",
        isCorrect: false,
      },
      {
        text: "title",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What does the `<blockquote>` element represent in HTML?",
    options: [
      {
        text: "A section of quoted text from another source",
        isCorrect: true,
      },
      {
        text: "A general block of content with no specific meaning",
        isCorrect: false,
      },
      {
        text: "A container for images and multimedia content",
        isCorrect: false,
      },
      {
        text: "A reference to footnotes or citations within the document",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which of the following tags is used to group related content together in an HTML document?",
    options: [
      {
        text: "<container>",
        isCorrect: false,
      },
      {
        text: "<divgroup>",
        isCorrect: false,
      },
      {
        text: "<group>",
        isCorrect: false,
      },
      {
        text: "<section>",
        isCorrect: true,
      },
    ],
  },
  {
    text: "What happens when a user clicks a link with the `target='blank'` attribute in an anchor tag?",
    options: [
      {
        text: "The link simply highlights without opening a new page",
        isCorrect: false,
      },
      {
        text: "The link opens in the same tab, replacing the current page with the new content",
        isCorrect: false,
      },
      {
        text: "The link opens in a new tab or window, leaving the current page unchanged",
        isCorrect: true,
      },
      {
        text: "The link automatically downloads the content without displaying it",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the primary purpose of the `<link>` element in the `<head>` section of an HTML document?",
    options: [
      {
        text: "To link external stylesheets that apply CSS rules to the HTML content",
        isCorrect: true,
      },
      {
        text: "To define the title that appears in the browser tab for the page",
        isCorrect: false,
      },
      {
        text: "To create hyperlinks that navigate to other webpages",
        isCorrect: false,
      },
      {
        text: "To specify the character encoding used within the document",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Which element is specifically used to create a drop-down list in an HTML form?",
    options: [
      {
        text: "`<input type='dropdown'>`",
        isCorrect: false,
      },
      {
        text: "`<select>`",
        isCorrect: true,
      },
      {
        text: "`<option>`",
        isCorrect: false,
      },
      {
        text: "`<listbox>`",
        isCorrect: false,
      },
    ],
  },
  {
    text: "What is the primary purpose of the `<header>` element in HTML?",
    options: [
      {
        text: "To provide a footer for the webpage with copyright information",
        isCorrect: false,
      },
      {
        text: "To contain introductory content or navigational links for a webpage",
        isCorrect: true,
      },
      {
        text: "To create an interactive form for user input",
        isCorrect: false,
      },
      {
        text: "To define the main content area of a webpage",
        isCorrect: false,
      },
    ],
  },
];

module.exports = htmlHardQuestions;
