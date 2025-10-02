# Frontend Mentor - Newsletter Sign-up Form with Success Message

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

---

## Overview

### The Challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successful submission
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on device screen size
- See hover and focus states for all interactive elements

### Screenshot

![Screenshot](./screenshot.jpg)

### Links

-Solution UR:- [https://news-letter01.netlify.app/]
-live site:- [https://github.com/vikashyadav22313-cell/news-letter-page.git]

---

## My Process

### Built With

- Semantic HTML5
- CSS custom properties
- Flexbox
- Responsive design (mobile-first)
- JavaScript (vanilla)

### What I Learned

During this challenge, I improved my skills in:

- Creating accessible and responsive forms
- Handling form validation using JavaScript
- Implementing success messages and dynamic DOM updates
- Optimizing layout to reduce CLS (Cumulative Layout Shift)

```js
// Example: Simple form validation
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // validate and show success message
});
```
