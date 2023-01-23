import styled from "styled-components";

const Container = styled.div`
  height: fit-content;

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
  align-items: center;
  
  gap: 0.75rem;
`

export {
  Container,
  Header,
  Content
}
