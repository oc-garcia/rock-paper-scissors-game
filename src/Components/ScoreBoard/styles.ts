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

  @media only screen and (min-width: 1000px) {
    width: 50vw;

    & img {
      height: 90%;
    }

    & div {
      height: 95%;
      width: 15%;

      & h1 {
        font-size: 1.2rem;
      }

      & p {
        font-size: 4rem;
        color: var(--Dark-Text);
      }
    }
  }
`;
