# Frontend Mentor - Chat app CSS illustration solution

This is a solution to the [Chat app CSS illustration challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Chat app CSS illustration solution](#frontend-mentor---chat-app-css-illustration-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
      - [Mobile view](#mobile-view)
      - [Desktop view](#desktop-view)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- **Bonus**: See the chat interface animate on the initial load

### Screenshot

#### Mobile view

![](./src/assets/screenshots/Mobile%20view.png)

#### Desktop view

![](./src/assets/screenshots/Desktop%20view.png)

### Links

- Solution URL: [Chat app CSS illustration with React and Sass](https://www.frontendmentor.io/solutions/chat-app-css-illustration-with-react-and-sass-o8dRc3eBpR)
- Live Site URL: [Frontend Mentor | Chat App CSS Illustration](https://vangmanawkairung.github.io/Frontend-Mentor_chat-app-css-illustration/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass/Scss
- Typography (Google Font)
- Gradient
- [React](https://reactjs.org/) - JS library

### What I learned

When working with elements that use ::before and ::after pseudo-elements, it’s important to set the position of the parent element to `relative` while applying `absolute` positioning to the pseudo-elements. This ensures that the pseudo-elements are positioned relative to their parent rather than the entire document, giving better control over their placement. Additionally, you can use the `float` property to align objects within a container, which is particularly useful for creating layouts where elements need to flow or align horizontally. However, it’s essential to remember to clear floats properly to avoid layout issues.

### Continued development

I plan to focus on mastering CSS positioning and layout techniques to create more efficient and visually appealing designs. I aim to deepen my understanding of how properties like relative, absolute, and fixed interact, especially in combination with ::before and ::after pseudo-elements, to improve precision in element placement. Additionally, I want to explore alternative methods, such as using the float property and modern CSS tools like Flexbox and Grid, to enhance layout responsiveness and alignment. By refining these skills, I can streamline my coding process and create cleaner, more dynamic components in future projects.

### Useful resources

- [How to Right Align Div Elements in CSS](https://www.squash.io/how-to-right-align-div-elements-in-css/#:~:text=Using%20the%20“float”%20property%3A,-One%20way%20to&text=The%20“right%2Daligned”%20class,right%20side%20of%20the%20container.) - This website helps me to handle with element alignments
- [linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient/) - This website clearifies how to create the gradient for background.
- [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) - This website clarifies position of border.

## Author

- Frontend Mentor - [@VangmanawKairung](https://www.frontendmentor.io/profile/VangmanawKairung)
- GitHub - [@VangmanawKairung](https://github.com/VangmanawKairung)

## Acknowledgments

I deeply appreciate the Frontend Mentor Team for dedicating their time and effort to create such a thoughtful and engaging challenge. It provided me with an excellent opportunity to grow and enhance my skills. I’m also grateful for the tools that supported me throughout the process, including VSCode for its powerful code editing capabilities, Chrome for its developer tools and browser testing, and the Preview app for quick visual checks. Additionally, I want to acknowledge the countless other resources and tools I may not have mentioned but that played a significant role in helping me bring this project to life efficiently and effectively.
