import { styled } from "styled-components";

interface Props {
  border: string;
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
`;
