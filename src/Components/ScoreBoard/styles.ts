import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 70vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  border: 5px solid var(--Header-Outline);
  border-radius: 10px;

  & img {
    height: 100%;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    height: 100%;
    width: 30%;
    border-radius: 10px;

    & p {
      font-size: 4rem;
    }
  }
`;
