import styled from "styled-components";

const Container = styled.div`
  width: 58.82%;

  padding: 40px;

  background: #F3F2F2;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`

const Header = styled.div`
  display: flex;

  gap: 0.5rem;

  div:nth-child(2) {
    padding-top: 2px;

    p {
      font-weight: 400;
      font-size: 14px;

      color: #574F4D;
    }

    p:first-child {
      font-size: 16px;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
  }

  input {
    padding: 12px;

    background: #EEEDED;

    border: 1px solid #E6E5E5;
    border-radius: 4px;
  }
`

const InputError = styled.p`
  color: #DE3333;

  font-size: 14px;
  margin-left: 4px;
`

export {
  Container,
  Header,
  Content,
  InputError
}
