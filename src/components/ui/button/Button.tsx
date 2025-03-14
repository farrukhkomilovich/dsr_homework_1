import styled from "styled-components";

export interface IButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  label?: string;
  variant?: "start" | "stop" | "reload" | "remove";
}

const ButtonStyled = styled.button.attrs<{ variant?: string }>(({ variant }) => ({
  className: `button ${variant ? `button--${variant}` : ""}`,
}
))`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: blue;

  &.button--start {
    background-color: green;
  }

  &.button--stop {
    background-color: yellow;
    color: black;
  }

  &.button--reload {
    background-color: blue;
  }

  &.button--remove {
    background-color: orange;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ onClick, children, label = "", variant }: IButtonProps) => {
  return (
    <ButtonStyled 
      onClick={onClick} 
      variant={variant}
    > 
      {label ?? children} 
    </ButtonStyled>
    )
};

export default Button;
