import styled from "styled-components";
import { IButtonProps } from "../../../types/types";


const ButtonStyled = styled.button<{ variant?: string }>`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: ${({ variant }) => (variant === "stop" ? "black" : "white")};
  background-color: ${({ variant }) =>
    variant === "start" ? "green" :
      variant === "stop" ? "yellow" :
        variant === "reload" ? "blue" :
          variant === "remove" ? "orange" :
            "blue"};
  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ onClick, children, label = "", variant }: IButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} variant={variant}>
      {label ?? children}
    </ButtonStyled>
  );
};

export default Button;
