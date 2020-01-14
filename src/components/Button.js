import styled from "styled-components";

export const ButtonContainer = styled.button`
  color: var(--mainBlue) !important;
  text-transform: uppercase;
  background: var(--mainWhite);
  padding: 0.2rem 0.5rem;
  margin: 0.5rem;
  border: 4px solid var(--mainBlue) !important;

  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  &: hover {
    color: #494949 !important;
    border-radius: 50px;
    border-color: #494949 !important;
    transition: all 0.3s ease 0s;
  }
  &:focus {
    outline: none;
  }
`;