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

export const ModalContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    color: var(--Dark-Text);
  }

  & img {
    margin-top: 2rem;
    width: 100%;
  }

  & img:last-child {
    margin-top: 2rem;
    width: 10%;
  }

  @media only screen and (min-width: 1000px) {
    width: 10rem;
  }
`;
