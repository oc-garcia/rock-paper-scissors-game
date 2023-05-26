import styled from "styled-components";

export const GameChoiceShadowContainer = styled.span`
  min-height: 18vh;
  min-width: 18vh;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  opacity: 0.5;

  & span {
    opacity: 0;
  }
`;
