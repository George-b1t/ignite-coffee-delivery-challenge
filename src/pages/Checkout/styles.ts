import styled from "styled-components";

const Container = styled.form`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 2rem;
`

const LeftCheckout = styled.div`
  width: 58.82%;

  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`

const RightCheckout = styled.div`
  width: 41.18%;

  display: flex;
`

export {
  Container,
  LeftCheckout,
  RightCheckout
}
