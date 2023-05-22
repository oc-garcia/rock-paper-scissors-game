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
