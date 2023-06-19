import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const NotFoundContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 2rem;
  h2 {
    font-size: 6rem;
  }
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    padding: 1rem;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <h2>404</h2>
      <h3>Page not found.</h3>
      <p onClick={() => navigate(-1)}>Take me back!</p>
    </NotFoundContainer>
  );
}
