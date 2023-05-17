import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --Scissors-Gradient: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
  --Paper-Gradient: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
  --Rock-Gradient: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
  --Lizard-Gradient: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
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
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
    `;
