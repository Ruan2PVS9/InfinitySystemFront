import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: none;
  box-sizing: border-box;
}

*:focus {
  outline-style: none;
}

html {
  --pink-hover: #FFA7A7;
  --pink-bg: #FFE5E2;
  --pink: #DDB6B3;

  --black: #313035;

  --white: #FAF6F5;
  --whitest: #FAFAFA;

  --red: #FF3F3F;
  --pink-red:#FF2957;

  --img-bg: #E7DDDD;

  font-size: 62.5%;
}

body {
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--pink-bg);
  background-image: url(/bg.svg);
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

.sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

input::placeholder{
  font-size: 14px;
  color: var(--black);
}

/* width */
::-webkit-scrollbar {
  width: 0.8rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--pink-bg);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--pink);
  border-radius: 1rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--pink-hover);
}
`;
