import { styled } from "styled-components";
import classicBg from "./bg-triangle.svg";

export const Phase1Container = styled.section`
  margin: 15vh 0;
  height: 40vh;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url(${classicBg}) no-repeat center;
  background-size: 80%;
  flex-wrap: wrap;
`;

export const Phase2Container = styled.section`
  margin: 15vh 0;
  height: 40vh;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & div {
    display: flex;
    align-items: center;
    gap: 1rem 2rem;
    justify-content: space-between;

    & p {
      color: white;
    }

    & h2 {
      margin-top: 3rem;
      font-size: 3.5rem;
      color: white;
    }

    & button {
      color: hsl(229, 25%, 31%);
      padding: 1rem 5rem;
      border-radius: 10px;
      border: none;
    }

    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  & div:last-child {
    flex-direction: column;
  }

  span:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem 2rem;

    & h2 {
      margin-top: 3rem;
      font-size: 3.5rem;
      opacity: 0;
    }

    & button {
      padding: 1rem 5rem;
      border-radius: 10px;
      border: none;
      opacity: 0;
    }
  }
`;
