// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
box-sizing: border-box;
margin: 0;
padding: 0;
}

/* Remove default list styles */
ul, ol {
list-style: none;
}

/* Remove default link styling */
a {
text-decoration: none;
color: inherit;
}

/* Reset table styles */
table {
border-collapse: collapse;
border-spacing: 0;
}

/* Reset default font styles */
body,
h1, h2, h3, h4, h5, h6,
p,
a,
ul,
ol,
li,
button {
font-family: 'Arial', sans-serif;
font-size: 100%;
font-weight: normal;
line-height: 1.5;
}

/* Set a background color for the body */
body {
background-color: #fff;
color: #333;
}

/* Reset form elements */
input,
textarea,
select,
button {
background: none;
border: none;
font-family: inherit;
font-size: inherit;
line-height: inherit;
color: inherit;
outline: none;
}

/* Reset default fieldset styling */
fieldset {
border: none;
padding: 0;
}

/* Normalize focus outline for accessibility */
:focus {
outline: none;
}

/* Set full height and width for html and body */
html, body {
height: 100%;
width: 100%;
}

/* Make images responsive */
img {
max-width: 100%;
height: auto;
}

/* Reset blockquote styles */
blockquote {
quotes: none;
}

blockquote::before, blockquote::after {
content: '';
}
`;

export default GlobalStyles;
