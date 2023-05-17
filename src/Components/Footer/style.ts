import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 90vw;

  & button {
    color: white;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    background: none;
    border: 3px var(--Header-Outline) solid;
    cursor: pointer;
  }
`;

export const triangleLayout = styled.div`

`
