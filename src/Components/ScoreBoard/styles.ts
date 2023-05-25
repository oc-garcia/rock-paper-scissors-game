import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 90vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border: 5px solid var(--Header-Outline);
  border-radius: 10px;

  & img {
    height: 50%;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: white;
    padding: 0.5rem;
    height: 80%;
    width: 40%;
    border-radius: 10px;

    & h1 {
      color: var(--Score-Text);
      letter-spacing: 1px;
    }

    & p {
      font-size: 3rem;
      color: var(--Dark-Text);
    }
  }
`;
