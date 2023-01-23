import styled, { css } from "styled-components"

interface ContainerProps {
  active: boolean;
}

const Container = styled.button<ContainerProps>`
  width: 33%;

  display: flex;
  align-items: center;

  padding: 16px;
  gap: 12px;

  border-radius: 6px;

  transition: .3s ease;

  ${({ active }) => css`
    background: ${active ? "#EBE5F9" : "#E6E5E5"};
    border: ${active ? "1px solid #8047F8" : "none"};
    cursor: ${active ? "not-allowed" : "pointer"};

    &:hover {
      filter: ${active ? "none" : "brightness(0.9)"};
    }
  `}

  p {
    font-weight: 400;
    font-size: 12px;

    color: #574F4D;
  }
`

export {
  Container
}
