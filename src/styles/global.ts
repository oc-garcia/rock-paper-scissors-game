import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --Scissors: hsl(39, 89%, 49%);
  --Paper: hsl(230, 89%, 62%);
  --Rock: hsl(349, 71%, 52%);
  --Lizard: hsl(261, 73%, 60%);
  --Cyan: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));

  --Dark-Text: hsl(229, 25%, 31%);
  --Score-Text: hsl(229, 64%, 46%);
  --Header-Outline: hsl(217, 16%, 45%);

  --BG-Gradient: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
}

* {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--BG-Gradient);
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
}
    `;
