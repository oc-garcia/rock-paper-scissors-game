import { styled } from "styled-components";

interface Props {
  border: string;
  winner: string;
}

export const GameChoiceContainer = styled.span<Props>`
  height: 18vh;
  width: 18vh;
  background-color: white;
  border: 12px solid ${(props) => props.border};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ winner }) =>
    winner === "true" &&
    `
    box-shadow: 0rem 0rem 1rem 1rem hsl(229, 64%, 46%);
    transition: 0.1s;
  `}
`;
