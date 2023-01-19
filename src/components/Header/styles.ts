import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 104px;
`

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PurchaseInformation = styled.div`  
  display: flex;
  align-items: center;
  gap: 1rem;
`

const LocaleInformation = styled.div`
  display: flex;
  align-items: center;

  height: 34px;

  gap: 4px;

  padding: 0 10px;
  border-radius: 6px;
  
  background: #EBE5F9;

  p {
    font-size: 14px;
    color: #4B2995;
  }
`

const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 34px;

  padding: 0 10px;
  border-radius: 6px;

  background: #F1E9C9;
`

export {
  Container,
  Content,
  PurchaseInformation,
  LocaleInformation,
  Cart
}
